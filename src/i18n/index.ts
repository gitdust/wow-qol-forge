import { CategoryInfo, QoLModule } from '../types';
import { luaString } from '../data/modules/luaUtil';
import { DEFAULT_LOCALE, Locale } from './locales';
import { LocaleBundle, LuaLocaleContext, ModuleTranslation, UiDictionary } from './types';

export * from './locales';
export * from './types';

const bundleCache = new Map<Locale, LocaleBundle>();
const inflightLoads = new Map<Locale, Promise<LocaleBundle>>();

function importBundle(locale: Locale): Promise<{ default: LocaleBundle }> {
  switch (locale) {
    case 'en':
      return import('./bundles/en');
    case 'zh-CN':
      return import('./bundles/zh-CN');
    case 'zh-TW':
      return import('./bundles/zh-TW');
    case 'ko':
      return import('./bundles/ko');
    case 'de':
      return import('./bundles/de');
    case 'ru':
      return import('./bundles/ru');
    case 'fr':
      return import('./bundles/fr');
    case 'es':
      return import('./bundles/es');
    case 'pt':
      return import('./bundles/pt');
  }
}

async function loadSingleBundle(locale: Locale): Promise<LocaleBundle> {
  const cached = bundleCache.get(locale);
  if (cached) return cached;

  const inflight = inflightLoads.get(locale);
  if (inflight) return inflight;

  const promise = importBundle(locale).then((mod) => {
    bundleCache.set(locale, mod.default);
    inflightLoads.delete(locale);
    return mod.default;
  });
  inflightLoads.set(locale, promise);
  return promise;
}

/**
 * 预加载目标语言包与默认兜底语言（en），确保后续渲染、代码预览与生成均为同步无延迟。
 */
export async function loadLocaleBundle(locale: Locale): Promise<LocaleBundle> {
  if (locale === DEFAULT_LOCALE) {
    return loadSingleBundle(locale);
  }
  const [target] = await Promise.all([
    loadSingleBundle(locale),
    loadSingleBundle(DEFAULT_LOCALE),
  ]);
  return target;
}

export function getLoadedBundle(locale: Locale): LocaleBundle {
  const target = bundleCache.get(locale) ?? bundleCache.get(DEFAULT_LOCALE);
  if (!target) {
    throw new Error(`Locale bundle "${locale}" has not been loaded yet.`);
  }
  return target;
}

export function getUi(locale: Locale): UiDictionary {
  return getLoadedBundle(locale).ui;
}

export function formatMsg(
  template: string,
  vars: Record<string, string | number>
): string {
  return template.replace(/\{(\w+)\}/g, (match, key) =>
    Object.prototype.hasOwnProperty.call(vars, key) ? String(vars[key]) : match
  );
}

export function getModuleTranslation(
  moduleId: string,
  locale: Locale
): ModuleTranslation | undefined {
  return (
    bundleCache.get(locale)?.modules[moduleId] ??
    bundleCache.get(DEFAULT_LOCALE)?.modules[moduleId]
  );
}

export function localizeCategory(cat: CategoryInfo, locale: Locale): CategoryInfo {
  const ui = getUi(locale);
  const tr = ui.categories[cat.id];
  if (!tr) return cat;
  return {
    ...cat,
    label: tr.label,
    description: tr.description,
  };
}

export function localizeModule(mod: QoLModule, locale: Locale): QoLModule {
  const tr = getModuleTranslation(mod.id, locale);
  if (!tr) return mod;

  return {
    ...mod,
    title: tr.title || mod.title,
    description: tr.description || mod.description,
    details: tr.details ?? mod.details,
    tag: tr.tag ?? mod.tag,
    options: mod.options?.map((opt) => {
      const optTr = tr.options?.[opt.id];
      if (!optTr) return opt;
      return {
        ...opt,
        label: optTr.label || opt.label,
        description: optTr.description ?? opt.description,
        default: optTr.default ?? opt.default,
        choices: opt.choices?.map((choice) => ({
          ...choice,
          label: optTr.choices?.[String(choice.value)] ?? choice.label,
        })),
      };
    }),
  };
}

export function createLuaLocaleContext(
  moduleId: string,
  locale: Locale
): LuaLocaleContext {
  const primary = bundleCache.get(locale)?.modules[moduleId];
  const fallback = bundleCache.get(DEFAULT_LOCALE)?.modules[moduleId];

  const getRawComment = (key: string): string =>
    primary?.comments?.[key] ?? fallback?.comments?.[key] ?? key;

  const getRawString = (key: string): string =>
    primary?.strings?.[key] ?? fallback?.strings?.[key] ?? key;

  return {
    c: (key: string) => `-- ${getRawComment(key)}`,
    s: (key: string) => luaString(getRawString(key)),
    t: (key: string) => getRawString(key),
  };
}
