interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  run(): Promise<unknown>;
  all(): Promise<{ results?: unknown[] }>;
}

interface D1Database {
  prepare(query: string): D1PreparedStatement;
  batch(statements: D1PreparedStatement[]): Promise<unknown[]>;
}

type Env = {
  ASSETS: { fetch(request: Request): Promise<Response> };
  DB?: D1Database;
};

const DEFAULT_SLUG = 'en';
const COOKIE_NAME = 'wow_qol_locale';
const SLUGS = new Set(['en', 'zh-cn', 'zh-tw', 'ko', 'de', 'ru', 'fr', 'es', 'pt']);

function normalizeToSlug(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const cleaned = String(raw).trim().toLowerCase().replace(/_/g, '-');
  if (!cleaned) return null;
  if (SLUGS.has(cleaned)) return cleaned;
  if (
    cleaned === 'zh-tw' ||
    cleaned === 'zh-hk' ||
    cleaned === 'zh-mo' ||
    cleaned.startsWith('zh-hant')
  ) {
    return 'zh-tw';
  }
  if (
    cleaned === 'zh' ||
    cleaned === 'zh-cn' ||
    cleaned === 'zh-sg' ||
    cleaned.startsWith('zh-hans')
  ) {
    return 'zh-cn';
  }
  const primary = cleaned.split('-')[0];
  if (SLUGS.has(primary)) return primary;
  return null;
}

function getCookieSlug(cookieHeader: string | null): string | null {
  if (!cookieHeader) return null;
  const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]+)`));
  return match ? normalizeToSlug(decodeURIComponent(match[1])) : null;
}

function getAcceptLanguageSlug(header: string | null): string {
  if (!header) return DEFAULT_SLUG;
  const parsed = header
    .split(',')
    .map((part, idx) => {
      const [tagPart, ...params] = part.trim().split(';');
      let q = 1;
      for (const p of params) {
        const m = p.trim().match(/^q=([0-9.]+)$/);
        if (m) q = Number(m[1]);
      }
      return { tag: tagPart.trim(), q: Number.isFinite(q) ? q : 0, idx };
    })
    .filter((item) => item.tag && item.q > 0)
    .sort((a, b) => (b.q !== a.q ? b.q - a.q : a.idx - b.idx));

  for (const item of parsed) {
    const slug = normalizeToSlug(item.tag);
    if (slug) return slug;
  }
  return DEFAULT_SLUG;
}

const MAX_BODY_BYTES = 16384;
const MAX_MODULE_IDS = 1000;

let tableReady = false;
let cachedValidIds: Set<string> | null = null;

function jsonResponse(status: number, payload: unknown): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

async function ensureTable(db: D1Database): Promise<void> {
  if (tableReady) return;
  await db
    .prepare(
      'CREATE TABLE IF NOT EXISTS downloads (id TEXT PRIMARY KEY, count INTEGER NOT NULL DEFAULT 0)'
    )
    .run();
  tableReady = true;
}

async function getValidModuleIds(env: Env, requestUrl: string): Promise<Set<string>> {
  if (cachedValidIds) return cachedValidIds;
  const assetUrl = new URL('/modules.json', requestUrl);
  const res = await env.ASSETS.fetch(new Request(assetUrl.toString()));
  if (!res.ok) {
    throw new Error(`Failed to load modules.json: ${res.status}`);
  }
  const ids = (await res.json()) as unknown;
  if (!Array.isArray(ids)) {
    throw new Error('Invalid modules.json payload');
  }
  cachedValidIds = new Set(ids.filter((id): id is string => typeof id === 'string'));
  return cachedValidIds;
}

async function readCounts(db: D1Database, validIds: Set<string>): Promise<Record<string, number>> {
  const { results } = await db.prepare('SELECT id, count FROM downloads').all();
  const counts: Record<string, number> = {};
  for (const row of (results || []) as Array<{ id?: unknown; count?: unknown }>) {
    if (typeof row.id === 'string' && validIds.has(row.id) && typeof row.count === 'number') {
      counts[row.id] = row.count;
    }
  }
  return counts;
}

async function handleDownloads(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'GET' && request.method !== 'POST') {
    return jsonResponse(405, { error: 'Method not allowed' });
  }

  if (!env.DB) {
    return jsonResponse(503, { error: 'Download counts database not configured' });
  }

  try {
    await ensureTable(env.DB);
    const validIds = await getValidModuleIds(env, request.url);

    if (request.method === 'GET') {
      return jsonResponse(200, await readCounts(env.DB, validIds));
    }

    const contentLength = Number(request.headers.get('content-length') || 0);
    if (contentLength > MAX_BODY_BYTES) {
      return jsonResponse(413, { error: 'Payload too large' });
    }

    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).length > MAX_BODY_BYTES) {
      return jsonResponse(413, { error: 'Payload too large' });
    }

    let payload: { moduleIds?: unknown } | null = null;
    try {
      payload = JSON.parse(rawBody);
    } catch {
      return jsonResponse(400, { error: 'Unable to record download' });
    }

    const ids = payload?.moduleIds;
    if (
      !Array.isArray(ids) ||
      ids.length === 0 ||
      ids.length > MAX_MODULE_IDS ||
      ids.some((id) => typeof id !== 'string' || !validIds.has(id))
    ) {
      return jsonResponse(400, { error: 'Unable to record download' });
    }

    const stmt = env.DB.prepare(
      'INSERT INTO downloads (id, count) VALUES (?1, 1) ON CONFLICT(id) DO UPDATE SET count = count + 1'
    );
    const uniqueIds = [...new Set(ids as string[])];
    await env.DB.batch(uniqueIds.map((id) => stmt.bind(id)));

    return jsonResponse(200, await readCounts(env.DB, validIds));
  } catch {
    return jsonResponse(500, { error: 'Unable to access download counts' });
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // API: /api/downloads
    if (url.pathname === '/api/downloads') {
      return handleDownloads(request, env);
    }

    // Root language detection and redirect
    if (url.pathname === '/' || url.pathname === '/index.html') {
      const slug =
        getCookieSlug(request.headers.get('cookie')) ??
        getAcceptLanguageSlug(request.headers.get('accept-language')) ??
        DEFAULT_SLUG;

      const target = new URL(`/${slug}/`, url.origin);
      target.search = url.search;
      return new Response(null, {
        status: 302,
        headers: {
          Location: target.toString(),
          Vary: 'Accept-Language, Cookie',
          'Cache-Control': 'private, no-store',
        },
      });
    }

    // Fallback to static assets
    return env.ASSETS.fetch(request);
  },
};
