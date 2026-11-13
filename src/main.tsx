import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import {
  DEFAULT_LOCALE,
  getStoredLocale,
  loadLocaleBundle,
  Locale,
  LOCALE_CONFIGS,
  localeFromNavigator,
  localeFromPathname,
  localePath,
  normalizeLocale,
} from './i18n';
import './index.css';

async function bootstrap() {
  const container = document.getElementById('root')!;
  const isPrerendered = container.hasChildNodes();

  let locale: Locale;
  if (isPrerendered) {
    // 生产构建时 HTML 已由 scripts/prerender.mjs 按语言预渲染，必须严格匹配其语言以避免水合失配
    locale =
      normalizeLocale(document.documentElement.lang) ??
      localeFromPathname(window.location.pathname) ??
      DEFAULT_LOCALE;
  } else {
    // 本地开发模式：优先读取 URL 子路径，访问根路径 / 时按本地偏好与浏览器语言自动识别
    const fromPath = localeFromPathname(window.location.pathname);
    if (fromPath) {
      locale = fromPath;
    } else {
      locale = getStoredLocale() ?? localeFromNavigator(navigator.languages);
      const targetUrl = `${localePath(locale, import.meta.env.BASE_URL)}${window.location.search}${window.location.hash}`;
      window.history.replaceState(null, '', targetUrl);
    }
    document.documentElement.lang = LOCALE_CONFIGS[locale].htmlLang;
  }

  await loadLocaleBundle(locale);
  document.documentElement.lang = LOCALE_CONFIGS[locale].htmlLang;

  const tree = (
    <React.StrictMode>
      <App locale={locale} />
    </React.StrictMode>
  );

  if (isPrerendered) {
    ReactDOM.hydrateRoot(container, tree);
  } else {
    ReactDOM.createRoot(container).render(tree);
  }
}

void bootstrap();
