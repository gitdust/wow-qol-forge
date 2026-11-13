import React, { createContext, useContext } from 'react';
import { formatMsg, getUi } from './index';
import { DEFAULT_LOCALE, Locale } from './locales';
import { UiDictionary } from './types';

interface I18nContextValue {
  locale: Locale;
  ui: UiDictionary;
  f: (template: string, vars: Record<string, string | number>) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

interface I18nProviderProps {
  locale?: Locale;
  children: React.ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({
  locale = DEFAULT_LOCALE,
  children,
}) => {
  const ui = getUi(locale);
  return (
    <I18nContext.Provider value={{ locale, ui, f: formatMsg }}>
      {children}
    </I18nContext.Provider>
  );
};

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return ctx;
}
