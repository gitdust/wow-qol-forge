import React from 'react';
import { QoLModule, ModuleOption } from '../types';
import { Sliders, Code2 } from 'lucide-react';
import { DynamicIcon } from './DynamicIcon';
import { HoverTooltip } from './HoverTooltip';
import { useI18n } from '../i18n/react';

interface ModuleRowProps {
  module: QoLModule;
  isSelected: boolean;
  downloadCount?: number;
  moduleOptions: Record<string, Record<string, any>>;
  onToggle: (id: string, e?: React.MouseEvent | React.ChangeEvent) => void;
  onViewCode: (module: QoLModule) => void;
}

/** 把参数项的当前值格式化成便于阅读的文本 */
const formatOptionValue = (
  opt: ModuleOption,
  value: unknown,
  onText: string,
  offText: string
): string => {
  if (opt.type === 'boolean') return value ? onText : offText;
  if (opt.type === 'select' && opt.choices) {
    const hit = opt.choices.find((c) => c.value === value);
    return hit ? hit.label : String(value);
  }
  if (opt.type === 'number') {
    const range =
      opt.min !== undefined && opt.max !== undefined ? ` (${opt.min}~${opt.max})` : '';
    return `${String(value)}${range}`;
  }
  return String(value ?? '');
};

export const ModuleRow: React.FC<ModuleRowProps> = ({
  module,
  isSelected,
  downloadCount,
  moduleOptions,
  onToggle,
  onViewCode,
}) => {
  const { ui, f } = useI18n();
  const options = module.options || [];
  const hasOptions = options.length > 0;
  const currentOpts = moduleOptions[module.id] || {};

  // 只读参数预览：展示参数项与当前生效值，不做任何联动
  const tooltipContent = (
    <div className="space-y-2">
      <div className="text-[11px] font-semibold text-amber-300 border-b border-slate-700/60 pb-1.5">
        {f(ui.moduleRow.optionsPreviewTitle, { title: module.title })}
      </div>

      {options.map((opt) => {
        const value = currentOpts[opt.id] ?? opt.default;
        return (
          <div key={opt.id} className="space-y-0.5">
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-xs text-slate-200">{opt.label}</span>
              <span className="text-[11px] font-mono text-amber-300 shrink-0">
                {formatOptionValue(
                  opt,
                  value,
                  ui.moduleRow.optionOn,
                  ui.moduleRow.optionOff
                )}
              </span>
            </div>
            {opt.description && (
              <div className="text-[10px] text-slate-400 leading-snug">{opt.description}</div>
            )}
          </div>
        );
      })}

      <div className="text-[10px] text-slate-500 border-t border-slate-700/60 pt-1.5 leading-snug">
        {ui.moduleRow.optionsReadonlyHint}
      </div>
    </div>
  );

  const formattedDownloads =
    downloadCount === undefined
      ? '—'
      : downloadCount >= 10000
      ? f(ui.moduleRow.downloadsTenThousand, {
          value: (downloadCount / 10000).toFixed(1),
        })
      : downloadCount;

  return (
    <div
      className={`group flex items-center justify-between gap-4 px-4 py-3.5 transition-colors ${
        isSelected ? 'bg-amber-500/5 hover:bg-amber-500/10' : 'hover:bg-slate-900/40'
      }`}
    >
      {/* Left: Checkbox & Info (Semantic Label) */}
      <label className="flex items-center gap-3.5 flex-1 min-w-0 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(e) => onToggle(module.id, e)}
          className="rounded border-slate-700 bg-slate-900 text-amber-500 focus:ring-amber-500/40 h-4 w-4 cursor-pointer flex-shrink-0"
        />

        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-800/60 border border-slate-700/50 flex-shrink-0 text-amber-400">
          <DynamicIcon name={module.icon} size={16} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`text-sm font-medium transition-colors ${
                isSelected ? 'text-white font-semibold' : 'text-slate-300'
              }`}
            >
              {module.title}
            </span>
            <span
              className="text-[11px] text-slate-500"
              title={
                downloadCount === undefined
                  ? ui.moduleRow.downloadsUnavailable
                  : f(ui.moduleRow.downloadsTitle, { count: downloadCount })
              }
            >
              {f(ui.moduleRow.downloadsCount, { count: formattedDownloads })}
            </span>
            {module.tag && (
              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/20">
                {module.tag}
              </span>
            )}
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/50">
              {module.sourceAddon}
            </span>
          </div>
          <p className="text-xs text-slate-400 truncate mt-0.5 max-w-2xl">{module.description}</p>
        </div>
      </label>

      {/* Right: Actions */}
      <div className="flex items-center gap-2 flex-shrink-0">
        {hasOptions && (
          <HoverTooltip content={tooltipContent} width={320}>
            <button
              type="button"
              className="flex items-center gap-1 px-2.5 py-1 text-xs rounded border border-slate-700 bg-slate-800/60 hover:bg-slate-700 hover:text-white text-slate-300 transition-colors cursor-pointer"
            >
              <Sliders size={12} className="text-amber-400" />
              <span>{ui.moduleRow.optionsButton}</span>
            </button>
          </HoverTooltip>
        )}

        <button
          type="button"
          onClick={() => onViewCode(module)}
          className="flex items-center gap-1 px-2.5 py-1 text-xs rounded border border-slate-700/80 bg-slate-900/60 hover:bg-slate-800 hover:text-white text-slate-400 transition-colors cursor-pointer"
          title={ui.moduleRow.sourceButtonTitle}
        >
          <Code2 size={12} />
          <span>{ui.moduleRow.sourceButton}</span>
        </button>
      </div>
    </div>
  );
};
