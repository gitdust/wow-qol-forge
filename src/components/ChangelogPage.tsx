import React from 'react';
import { ArrowLeft, History } from 'lucide-react';
import { version as currentVersion } from '../../package.json';
import { changelog, ChangeType } from '../data/changelog';
import { useI18n } from '../i18n/react';

const TYPE_STYLES: Record<ChangeType, string> = {
  added: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
  improved: 'bg-amber-500/10 text-amber-400 border-amber-500/25',
  fixed: 'bg-sky-500/10 text-sky-400 border-sky-500/25',
  removed: 'bg-red-500/10 text-red-400 border-red-500/25',
};

interface ChangelogPageProps {
  onBack: () => void;
}

export const ChangelogPage: React.FC<ChangelogPageProps> = ({ onBack }) => {
  const { ui } = useI18n();

  return (
    <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-8 py-6 space-y-5">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
            <History size={18} />
          </div>
          <div>
            <h1 className="text-base font-bold text-white">{ui.changelog.title}</h1>
            <p className="text-xs text-slate-400">
              {ui.changelog.currentVersion}{' '}
              <span className="font-mono text-amber-400">v{currentVersion}</span>
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={onBack}
          className="self-start sm:self-auto flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 hover:text-amber-300 hover:border-amber-500/40 transition-colors cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>{ui.changelog.backToModules}</span>
        </button>
      </div>

      {/* Version Entries */}
      {changelog.map((entry) => {
        const isCurrent = entry.version === currentVersion;
        const localizedEntry = ui.changelog.entries[entry.version];
        const groups = localizedEntry?.groups ?? entry.groups;
        const summary = localizedEntry?.summary ?? entry.summary;

        return (
          <section
            key={entry.version}
            className={`bg-[#10141d] border rounded-xl shadow-lg overflow-hidden ${
              isCurrent ? 'border-amber-500/30' : 'border-slate-800'
            }`}
          >
            <div className="flex flex-wrap items-center gap-2.5 px-4 py-3 bg-[#141924] border-b border-slate-800">
              <h2 className="font-mono font-bold text-sm text-white">v{entry.version}</h2>
              {isCurrent && (
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/25">
                  {ui.changelog.currentBadge}
                </span>
              )}
              <span className="text-[11px] font-mono text-slate-500">{entry.date}</span>
            </div>

            <div className="px-4 py-4 space-y-3">
              {summary && (
                <p className="text-xs text-slate-300 leading-relaxed">{summary}</p>
              )}

              {groups.map((group) => (
                <div key={group.type} className="space-y-2">
                  <span
                    className={`inline-block text-[11px] font-medium px-2 py-0.5 rounded border ${TYPE_STYLES[group.type]}`}
                  >
                    {ui.changelog.types[group.type]}
                  </span>
                  <ul className="space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2 text-xs text-slate-400 leading-relaxed">
                        <span className="text-slate-600 select-none">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
};
