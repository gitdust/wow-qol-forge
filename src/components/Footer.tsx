import React from 'react';
import { ShieldCheck, Cpu, FolderArchive, ExternalLink, Link2 } from 'lucide-react';
import { LOCALE_LIST, localePath, setStoredLocale } from '../i18n';
import { useI18n } from '../i18n/react';

const DISASSEMBLED_ADDONS = [
  'BlizzMove',
  'TrueStatValues',
  'DialogKey',
  'SafeQueue',
  'FlashTaskBar',
  'Paste',
  'Can I Mog It',
  'Leatrix Plus',
  'Postal',
  'BasicChatMods',
  'SpeedyAutoLoot',
  'BuyEmAll',
  'AlreadyKnown',
  'idTip',
];

export const Footer: React.FC = () => {
  const { locale, ui } = useI18n();

  return (
    <footer className="mt-16 border-t border-slate-800/80 bg-[#090c12] py-12 px-4 sm:px-8 text-slate-400">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section 1: Disassembled Addons Header & Tag List */}
        <div className="pb-6 border-b border-slate-800/70 space-y-3">
          <span className="inline-block text-xs px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/25 font-mono">
            {ui.footer.sourcesLabel}
          </span>

          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            {DISASSEMBLED_ADDONS.map((name) => (
              <span
                key={name}
                className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[11px] select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Section 2: Core Engineering Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/30">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-2.5">
              <ShieldCheck size={18} />
            </div>
            <h4 className="font-semibold text-slate-200 text-xs mb-1">{ui.footer.taintTitle}</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              {ui.footer.taintDesc}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/30">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-2.5">
              <Cpu size={18} />
            </div>
            <h4 className="font-semibold text-slate-200 text-xs mb-1">{ui.footer.kernelTitle}</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              {ui.footer.kernelDesc}
            </p>
          </div>
        </div>

        {/* Section 3: Installation Guide */}
        <div className="p-5 rounded-xl border border-amber-500/20 bg-gradient-to-r from-amber-500/5 via-transparent to-transparent">
          <div className="flex items-center gap-2 mb-3">
            <FolderArchive size={16} className="text-amber-400" />
            <h4 className="font-semibold text-xs text-white">{ui.footer.installTitle}</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="space-y-1">
              <div className="font-medium text-amber-300 text-[11px]">{ui.footer.step1Title}</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {ui.footer.step1Desc}
              </p>
            </div>
            <div className="space-y-1">
              <div className="font-medium text-amber-300 text-[11px]">{ui.footer.step2Title}</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {ui.footer.step2Desc}
                <code className="block mt-1 font-mono text-[10px] bg-slate-950 p-1 rounded border border-slate-800 text-slate-300">
                  _retail_\Interface\AddOns\
                </code>
              </p>
            </div>
            <div className="space-y-1">
              <div className="font-medium text-amber-300 text-[11px]">{ui.footer.step3Title}</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {ui.footer.step3DescPrefix}
                <strong className="text-amber-300 font-semibold">{ui.footer.step3DescCmd}</strong>
                {ui.footer.step3DescSuffix}
              </p>
            </div>
          </div>
        </div>

        <nav aria-label={ui.nav.languageAria} className="flex flex-wrap gap-x-4 gap-y-2 text-xs">
          {LOCALE_LIST.map((item) => (
            <a
              key={item.code}
              href={localePath(item.code, import.meta.env.BASE_URL)}
              hrefLang={item.hreflang}
              lang={item.htmlLang}
              aria-current={item.code === locale ? 'page' : undefined}
              onClick={() => setStoredLocale(item.code)}
              className="hover:text-amber-300 aria-[current=page]:text-amber-400"
            >
              {item.nativeName}
            </a>
          ))}
        </nav>

        {/* Section 4: Copyright, Author & Friendly Links Footer Note */}
        <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span suppressHydrationWarning>WoW QoL Forge © {new Date().getFullYear()}</span>
          </div>
          <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-xs">
            <span className="text-slate-500 flex items-center gap-1.5">
              <Link2 size={13} className="text-slate-400" />
              <span>{ui.footer.friendlyLinks}</span>
            </span>
            {[
              { href: 'https://warcraft.wiki.gg/wiki/World_of_Warcraft_API', label: ui.footer.wowApiLabel },
              { href: 'https://github.com/Gethe/wow-ui-source', label: ui.footer.wowUiSourceLabel },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors group"
              >
                <span className="group-hover:underline underline-offset-2">{link.label}</span>
                <ExternalLink size={12} className="text-slate-500 group-hover:text-amber-400" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
