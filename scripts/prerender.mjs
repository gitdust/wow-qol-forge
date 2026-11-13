/**
 * 构建期多语言预渲染：在 Node 中把 9 种语言的首页 React 树分别渲染成真实 HTML，
 * 注入 dist/<lang>/index.html（以及默认兜底的 dist/index.html），并生成多语言 sitemap.xml。
 *
 * 前置条件：客户端构建与 SSR 打包都已完成（见 package.json 的 build 脚本）。
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const SITE_ORIGIN = 'https://wow-qol-forge.com';
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

// 允许用 --dist / --ssr 覆盖目录，便于对临时产物做验证而不覆盖正式构建
const args = process.argv.slice(2);
const argValue = (flag, fallback) => {
  const i = args.indexOf(flag);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};

const DIST_DIR = resolve(ROOT, argValue('--dist', 'dist'));
const SSR_ENTRY = resolve(ROOT, argValue('--ssr', 'dist-ssr'), 'entry-server.js');
const INDEX_HTML = resolve(DIST_DIR, 'index.html');
const MOUNT_POINT = '<div id="root"></div>';

const {
  render,
  allModules,
  DEFAULT_LOCALE,
  LOCALE_LIST,
  localePath,
  formatMsg,
  getUi,
  loadLocaleBundle,
} = await import(pathToFileURL(SSR_ENTRY).href);

const template = readFileSync(INDEX_HTML, 'utf8');
if (!template.includes(MOUNT_POINT)) {
  console.error(
    '[prerender] 在 dist/index.html 中找不到挂载点 %s，HTML 结构可能已变更。',
    MOUNT_POINT
  );
  process.exit(1);
}

const escapeAttr = (str) =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const escapeText = (str) =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const alternates = [
  ...LOCALE_LIST.map((item) => [item.hreflang, localePath(item.code, SITE_ORIGIN)]),
  ['x-default', localePath(DEFAULT_LOCALE, SITE_ORIGIN)],
];

function alternateLinks(tag) {
  return alternates
    .map(([language, url]) => `    <${tag} rel="alternate" hreflang="${language}" href="${url}" />`)
    .join('\n');
}

const hreflangBlock = alternateLinks('link');
const sitemapAlternates = alternateLinks('xhtml:link');

function buildLocalizedHtml(baseTemplate, localeInfo, appHtml) {
  const ui = getUi(localeInfo.code);
  const count = allModules.length;
  const pageUrl = localePath(localeInfo.code, SITE_ORIGIN);
  const title = `${ui.seo.heading} | WoW QoL Forge`;
  const desc = formatMsg(ui.seo.description, { count });
  const ogAlternates = LOCALE_LIST
    .filter((item) => item.code !== localeInfo.code)
    .map((item) => `    <meta property="og:locale:alternate" content="${item.ogLocale}" />`)
    .join('\n');

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'WoW QoL Forge',
    url: pageUrl,
    inLanguage: localeInfo.htmlLang,
    description: desc,
    applicationCategory: 'GameApplication',
    image: `${SITE_ORIGIN}/logo-256.png`,
    browserRequirements: 'Requires JavaScript',
    operatingSystem: 'Windows, macOS',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  }).replace(/</g, '\\u003c');

  let html = baseTemplate
    .replace(/<html lang="[^"]*"/, `<html lang="${localeInfo.htmlLang}"`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeText(title)}</title>`)
    .replace(
      /<meta name="description" content="[^"]*"\s*\/>/,
      `<meta name="description" content="${escapeAttr(desc)}" />`
    )
    .replace(
      /<link rel="canonical" href="[^"]*"\s*\/>/,
      `<link rel="canonical" href="${pageUrl}" />\n${hreflangBlock}`
    )
    .replace(
      /<meta property="og:locale" content="[^"]*"\s*\/>/,
      `<meta property="og:locale" content="${localeInfo.ogLocale}" />\n${ogAlternates}`
    )
    .replace(
      /<meta property="og:title" content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${escapeAttr(title)}" />`
    )
    .replace(
      /<meta property="og:description" content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${escapeAttr(desc)}" />`
    )
    .replace(
      /<meta property="og:url" content="[^"]*"\s*\/>/,
      `<meta property="og:url" content="${pageUrl}" />`
    )
    .replace(
      /<meta property="og:image:alt" content="[^"]*"\s*\/>/,
      `<meta property="og:image:alt" content="${escapeAttr(ui.seo.ogImageAlt)}" />`
    )
    .replace(
      /<meta name="twitter:image:alt" content="[^"]*"\s*\/>/,
      `<meta name="twitter:image:alt" content="${escapeAttr(ui.seo.ogImageAlt)}" />`
    )
    .replace(
      /<meta name="twitter:title" content="[^"]*"\s*\/>/,
      `<meta name="twitter:title" content="${escapeAttr(title)}" />`
    )
    .replace(
      /<meta name="twitter:description" content="[^"]*"\s*\/>/,
      `<meta name="twitter:description" content="${escapeAttr(desc)}" />`
    )
    .replace(
      '</head>',
      `    <script type="application/ld+json">${jsonLd}</script>\n  </head>`
    )
    .replace(MOUNT_POINT, () => `<div id="root">${appHtml}</div>`);

  return html;
}

for (const localeInfo of LOCALE_LIST) {
  await loadLocaleBundle(localeInfo.code);
  let appHtml;
  try {
    appHtml = await render(localeInfo.code);
  } catch (err) {
    console.error(`[prerender] 渲染 ${localeInfo.code} 失败：`, err);
    process.exit(1);
  }

  const localizedHtml = buildLocalizedHtml(template, localeInfo, appHtml);
  const outDir = resolve(DIST_DIR, localeInfo.slug);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, 'index.html'), localizedHtml);

  // 根路径 dist/index.html 使用默认兜底语言（en），供未经过 Functions 的纯静态访问兜底
  if (localeInfo.code === DEFAULT_LOCALE) {
    writeFileSync(INDEX_HTML, localizedHtml);
  }

  const kb = (Buffer.byteLength(localizedHtml) / 1024).toFixed(1);
  console.log(`[prerender] 已生成 ${localeInfo.slug}/index.html (${kb} KB)`);
}

// 生成多语言 sitemap.xml
const sitemapUrls = LOCALE_LIST.map((item) =>
  `  <url>\n    <loc>${localePath(item.code, SITE_ORIGIN)}</loc>\n${sitemapAlternates}\n  </url>`
).join('\n');

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapUrls}
</urlset>
`;
writeFileSync(resolve(DIST_DIR, 'sitemap.xml'), sitemapXml);
console.log(`[prerender] 已生成多语言 dist/sitemap.xml (${LOCALE_LIST.length} 个语种页面)`);

writeFileSync(
  resolve(DIST_DIR, 'modules.json'),
  JSON.stringify(allModules.map((m) => m.id))
);
