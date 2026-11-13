import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Globe, History } from 'lucide-react';
import { WOW_VERSION_CONFIG } from '../config/version';
import { LOCALE_CONFIGS, LOCALE_LIST, localePath, setStoredLocale } from '../i18n';
import { useI18n } from '../i18n/react';
import { Logo } from './Logo';

const GITHUB_URL = 'https://github.com/gitdust/wow-qol-forge';

export type SiteView = 'modules' | 'changelog';

interface NavbarProps {
  view: SiteView;
  onNavigate: (view: SiteView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ view, onNavigate }) => {
  const { locale, ui } = useI18n();
  const [langOpen, setLangOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!langOpen) return;
    const onDocClick = (e: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLangOpen(false);
    };
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [langOpen]);

  const currentLocaleInfo = LOCALE_CONFIGS[locale];
  const hashSuffix = view === 'changelog' ? '#changelog' : '';

  return (
    <header className="sticky top-0 z-30 bg-[#0c1017]/95 backdrop-blur-md border-b border-slate-800 px-4 sm:px-8 py-3 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Brand (点击返回功能列表) */}
        <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
          <button
            type="button"
            onClick={() => onNavigate('modules')}
            className="flex items-center gap-2 sm:gap-2.5 cursor-pointer"
            title={ui.nav.backToModules}
          >
            <Logo className="w-6 h-6 flex-shrink-0 drop-shadow-[0_0_8px_rgba(245,158,11,0.45)]" />
            <span className="font-bold text-base text-white tracking-tight whitespace-nowrap m-0 inline-flex items-center">
              <span className="text-amber-400">WoW</span>&nbsp;QoL Forge
            </span>
          </button>
          <span className="text-xs text-slate-400 hidden md:inline truncate">
            {ui.seo.siteSubtitle}
          </span>
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/25 ml-1 whitespace-nowrap">
            {ui.seo.gameType}
          </span>
          {/* Patch / TOC Interface Badge */}
          <span className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 font-mono whitespace-nowrap">
            <span className="hidden lg:inline text-slate-500">Interface:</span>
            <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
              {WOW_VERSION_CONFIG.interfaceVersion}
            </span>
          </span>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Language Switcher with crawlable <a> links */}
          <div ref={langMenuRef} className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((prev) => !prev)}
              aria-expanded={langOpen}
              aria-haspopup="menu"
              aria-label={ui.nav.languageAria}
              className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800 hover:text-amber-300 hover:border-amber-500/40 transition-colors cursor-pointer"
            >
              <Globe size={13} className="flex-shrink-0 text-amber-400" />
              <span className="hidden sm:inline">{currentLocaleInfo.nativeName}</span>
              <span className="sm:hidden uppercase font-mono">{currentLocaleInfo.slug}</span>
              <ChevronDown size={12} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>

            {langOpen && (
              <nav
                aria-label={ui.nav.languageAria}
                className="absolute right-0 mt-2 w-44 py-1.5 rounded-xl bg-[#121722] border border-slate-700/80 shadow-2xl shadow-black/70 z-50"
              >
                {LOCALE_LIST.map((item) => {
                  const isCurrent = item.code === locale;
                  const href = `${localePath(item.code, import.meta.env.BASE_URL)}${hashSuffix}`;
                  return (
                    <a
                      key={item.code}
                      href={href}
                      hrefLang={item.hreflang}
                      onClick={() => {
                        setStoredLocale(item.code);
                        setLangOpen(false);
                      }}
                      className={`flex items-center justify-between px-3.5 py-1.5 text-xs transition-colors ${
                        isCurrent
                          ? 'text-amber-400 bg-amber-500/10 font-semibold'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                      }`}
                    >
                      <span>{item.nativeName}</span>
                      <span className="text-[10px] font-mono text-slate-500 uppercase">
                        {item.wowLocale}
                      </span>
                    </a>
                  );
                })}
              </nav>
            )}
          </div>

          {/* Changelog Entry */}
          <button
            type="button"
            onClick={() => onNavigate('changelog')}
            aria-current={view === 'changelog' ? 'page' : undefined}
            className={`relative flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border transition-colors cursor-pointer ${
              view === 'changelog'
                ? 'bg-amber-500/10 text-amber-400 border-amber-500/40'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:text-amber-300 hover:border-amber-500/40'
            }`}
          >
            <History size={14} className="flex-shrink-0" />
            <span className="hidden sm:inline">{ui.nav.changelog}</span>
          </button>

          {/* GitHub Repository Link */}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ui.nav.githubRepo}
            title="GitHub"
            className="flex items-center justify-center p-1.5 rounded-full bg-slate-900 text-slate-300 border border-slate-800 hover:text-amber-300 hover:border-amber-500/40 transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="currentColor"
              aria-hidden="true"
              className="flex-shrink-0"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};
