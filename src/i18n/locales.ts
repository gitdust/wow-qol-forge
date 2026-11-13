export type Locale =
  | 'en'
  | 'zh-CN'
  | 'zh-TW'
  | 'ko'
  | 'de'
  | 'ru'
  | 'fr'
  | 'es'
  | 'pt';

export interface LocaleConfig {
  code: Locale;
  slug: string;
  nativeName: string;
  htmlLang: string;
  hreflang: string;
  ogLocale: string;
  wowLocale: string;
}

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_COOKIE_NAME = 'wow_qol_locale';
export const LOCALE_STORAGE_KEY = 'wow_qol_locale';

export const LOCALE_CONFIGS: Record<Locale, LocaleConfig> = {
  en: {
    code: 'en',
    slug: 'en',
    nativeName: 'English',
    htmlLang: 'en',
    hreflang: 'en',
    ogLocale: 'en_US',
    wowLocale: 'enUS',
  },
  'zh-CN': {
    code: 'zh-CN',
    slug: 'zh-cn',
    nativeName: '简体中文',
    htmlLang: 'zh-CN',
    hreflang: 'zh-Hans',
    ogLocale: 'zh_CN',
    wowLocale: 'zhCN',
  },
  'zh-TW': {
    code: 'zh-TW',
    slug: 'zh-tw',
    nativeName: '繁體中文',
    htmlLang: 'zh-TW',
    hreflang: 'zh-Hant',
    ogLocale: 'zh_TW',
    wowLocale: 'zhTW',
  },
  ko: {
    code: 'ko',
    slug: 'ko',
    nativeName: '한국어',
    htmlLang: 'ko',
    hreflang: 'ko',
    ogLocale: 'ko_KR',
    wowLocale: 'koKR',
  },
  de: {
    code: 'de',
    slug: 'de',
    nativeName: 'Deutsch',
    htmlLang: 'de',
    hreflang: 'de',
    ogLocale: 'de_DE',
    wowLocale: 'deDE',
  },
  ru: {
    code: 'ru',
    slug: 'ru',
    nativeName: 'Русский',
    htmlLang: 'ru',
    hreflang: 'ru',
    ogLocale: 'ru_RU',
    wowLocale: 'ruRU',
  },
  fr: {
    code: 'fr',
    slug: 'fr',
    nativeName: 'Français',
    htmlLang: 'fr',
    hreflang: 'fr',
    ogLocale: 'fr_FR',
    wowLocale: 'frFR',
  },
  es: {
    code: 'es',
    slug: 'es',
    nativeName: 'Español',
    htmlLang: 'es',
    hreflang: 'es',
    ogLocale: 'es_ES',
    wowLocale: 'esES',
  },
  pt: {
    code: 'pt',
    slug: 'pt',
    nativeName: 'Português',
    htmlLang: 'pt',
    hreflang: 'pt',
    ogLocale: 'pt_BR',
    wowLocale: 'ptBR',
  },
};

export const LOCALE_LIST: LocaleConfig[] = [
  LOCALE_CONFIGS.en,
  LOCALE_CONFIGS['zh-CN'],
  LOCALE_CONFIGS['zh-TW'],
  LOCALE_CONFIGS.ko,
  LOCALE_CONFIGS.de,
  LOCALE_CONFIGS.ru,
  LOCALE_CONFIGS.fr,
  LOCALE_CONFIGS.es,
  LOCALE_CONFIGS.pt,
];

const SLUG_TO_LOCALE = new Map<string, Locale>(
  LOCALE_LIST.map((item) => [item.slug, item.code])
);

const CODE_LOWER_TO_LOCALE = new Map<string, Locale>(
  LOCALE_LIST.map((item) => [item.code.toLowerCase(), item.code])
);

export function normalizeLocale(raw: string | null | undefined): Locale | null {
  if (!raw) return null;
  const cleaned = raw.trim().toLowerCase().replace(/_/g, '-');
  if (!cleaned) return null;

  const exactSlug = SLUG_TO_LOCALE.get(cleaned);
  if (exactSlug) return exactSlug;

  const exactCode = CODE_LOWER_TO_LOCALE.get(cleaned);
  if (exactCode) return exactCode;

  if (
    cleaned === 'zh-tw' ||
    cleaned === 'zh-hk' ||
    cleaned === 'zh-mo' ||
    cleaned.startsWith('zh-hant')
  ) {
    return 'zh-TW';
  }
  if (
    cleaned === 'zh' ||
    cleaned === 'zh-cn' ||
    cleaned === 'zh-sg' ||
    cleaned.startsWith('zh-hans')
  ) {
    return 'zh-CN';
  }

  const primary = cleaned.split('-')[0];
  if (primary === 'en') return 'en';
  if (primary === 'ko') return 'ko';
  if (primary === 'de') return 'de';
  if (primary === 'ru') return 'ru';
  if (primary === 'fr') return 'fr';
  if (primary === 'es') return 'es';
  if (primary === 'pt') return 'pt';
  if (primary === 'zh') return 'zh-CN';

  return null;
}

export function localeFromPathname(pathname: string): Locale | null {
  const seg = pathname.replace(/^\/+|\/+$/g, '').split('/')[0]?.toLowerCase();
  if (!seg) return null;
  return SLUG_TO_LOCALE.get(seg) ?? null;
}

export function localePath(locale: Locale, base = '/'): string {
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${LOCALE_CONFIGS[locale].slug}/`;
}

export function localeFromNavigator(languages: readonly string[] | undefined): Locale {
  if (!languages || languages.length === 0) return DEFAULT_LOCALE;
  for (const tag of languages) {
    const matched = normalizeLocale(tag);
    if (matched) return matched;
  }
  return DEFAULT_LOCALE;
}

export function localeFromAcceptLanguage(header: string | null | undefined): Locale {
  if (!header) return DEFAULT_LOCALE;
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
    const matched = normalizeLocale(item.tag);
    if (matched) return matched;
  }
  return DEFAULT_LOCALE;
}

export function getStoredLocale(): Locale | null {
  if (typeof document === 'undefined') return null;
  try {
    const ls = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    const fromLs = normalizeLocale(ls);
    if (fromLs) return fromLs;
  } catch {
    // ignore storage errors
  }
  const cookieMatch = document.cookie.match(
    new RegExp(`(?:^|;\\s*)${LOCALE_COOKIE_NAME}=([^;]+)`)
  );
  return cookieMatch ? normalizeLocale(decodeURIComponent(cookieMatch[1])) : null;
}

export function setStoredLocale(locale: Locale): void {
  if (typeof document === 'undefined') return;
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // ignore storage errors
  }
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `${LOCALE_COOKIE_NAME}=${encodeURIComponent(locale)}; path=/; max-age=${maxAge}; SameSite=Lax`;
}
