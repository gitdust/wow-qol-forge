import { renderToString } from 'react-dom/server';
import { App } from './App';
import {
  DEFAULT_LOCALE,
  formatMsg,
  getLoadedBundle,
  getUi,
  loadLocaleBundle,
  Locale,
  LOCALE_CONFIGS,
  LOCALE_LIST,
  localePath,
} from './i18n';

/**
 * 构建期预渲染入口：在 Node 中把首页渲染成真实 HTML 字符串，
 * 由 scripts/prerender.mjs 注入各语言的 index.html，供搜索引擎抓取。
 *
 * 关键约束：
 * 1. 渲染过程中不得访问 window / document / localStorage（App 已做水合安全处理）
 * 2. 首屏 markup 必须与客户端首次渲染一致，否则 React 水合会失配
 */
export async function render(locale: Locale = DEFAULT_LOCALE): Promise<string> {
  await loadLocaleBundle(locale);
  return renderToString(<App locale={locale} />);
}

export { allModules } from './data/modules';
export { generateAddonCode } from './utils/addonGenerator';
export {
  DEFAULT_LOCALE,
  LOCALE_CONFIGS,
  LOCALE_LIST,
  formatMsg,
  getLoadedBundle,
  getUi,
  loadLocaleBundle,
  localePath,
};
