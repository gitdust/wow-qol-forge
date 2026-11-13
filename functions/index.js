const DEFAULT_SLUG = 'en';
const COOKIE_NAME = 'wow_qol_locale';

const SLUGS = new Set(['en', 'zh-cn', 'zh-tw', 'ko', 'de', 'ru', 'fr', 'es', 'pt']);

function normalizeToSlug(raw) {
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

function getCookieSlug(cookieHeader) {
  if (!cookieHeader) return null;
  const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]+)`));
  return match ? normalizeToSlug(decodeURIComponent(match[1])) : null;
}

function getAcceptLanguageSlug(header) {
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

/**
 * 根路径 `/` 多语言分发（仅处理 `/` 请求；各 `/<lang>/` 子路径由静态资源直接返回 200）：
 * 1. 优先读取用户手动切换语言时写入的 Cookie
 * 2. 其次解析请求头 Accept-Language
 * 3. 无匹配或无头信息时默认兜底 `/en/`
 */
export async function onRequestGet(context) {
  const { request } = context;
  const url = new URL(request.url);
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
