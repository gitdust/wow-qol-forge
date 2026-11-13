const MAX_BODY_BYTES = 16384;
const MAX_MODULE_IDS = 1000;

let tableReady = false;
let cachedValidIds = null;

function jsonResponse(status, payload) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

async function ensureTable(db) {
  if (tableReady) return;
  await db
    .prepare('CREATE TABLE IF NOT EXISTS downloads (id TEXT PRIMARY KEY, count INTEGER NOT NULL DEFAULT 0)')
    .run();
  tableReady = true;
}

async function getValidModuleIds(env, requestUrl) {
  if (cachedValidIds) return cachedValidIds;
  const assetUrl = new URL('/modules.json', requestUrl);
  const res = await env.ASSETS.fetch(new Request(assetUrl));
  if (!res.ok) {
    throw new Error(`Failed to load modules.json: ${res.status}`);
  }
  const ids = await res.json();
  if (!Array.isArray(ids)) {
    throw new Error('Invalid modules.json payload');
  }
  cachedValidIds = new Set(ids.filter((id) => typeof id === 'string'));
  return cachedValidIds;
}

async function readCounts(db, validIds) {
  const { results } = await db.prepare('SELECT id, count FROM downloads').all();
  const counts = {};
  for (const row of results || []) {
    if (typeof row.id === 'string' && validIds.has(row.id) && typeof row.count === 'number') {
      counts[row.id] = row.count;
    }
  }
  return counts;
}

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method !== 'GET' && request.method !== 'POST') {
    return jsonResponse(405, { error: 'Method not allowed' });
  }

  if (!env?.DB) {
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

    let payload;
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
    const uniqueIds = [...new Set(ids)];
    await env.DB.batch(uniqueIds.map((id) => stmt.bind(id)));

    return jsonResponse(200, await readCounts(env.DB, validIds));
  } catch {
    return jsonResponse(500, { error: 'Unable to access download counts' });
  }
}
