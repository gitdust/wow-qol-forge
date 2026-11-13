import React, { useState, useEffect } from 'react';
import { AddonMetadata, QoLModule } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { WOW_VERSION_CONFIG } from '../config/version';
import { useI18n } from '../i18n/react';
import {
  X,
  Trash2,
  Download,
  Code2,
  Sliders,
  Sparkles,
  Layers,
  AlertCircle,
  Package,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface SelectedDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  metadata: AddonMetadata;
  onMetadataChange: (key: keyof AddonMetadata, value: string) => void;
  selectedModules: QoLModule[];
  moduleOptions: Record<string, Record<string, any>>;
  onUpdateOption: (moduleId: string, optionId: string, value: any) => void;
  onRemoveModule: (moduleId: string) => void;
  onClearAll: () => void;
  onOpenCodePreview: () => void;
  onDownloadZip: () => void;
  isDownloading: boolean;
}

export const SelectedDrawer: React.FC<SelectedDrawerProps> = ({
  isOpen,
  onClose,
  metadata,
  onMetadataChange,
  selectedModules,
  moduleOptions,
  onUpdateOption,
  onRemoveModule,
  onClearAll,
  onOpenCodePreview,
  onDownloadZip,
  isDownloading,
}) => {
  const { ui, f } = useI18n();
  // Accordion expanded module IDs state (default collapsed / empty Set)
  const [expandedModuleIds, setExpandedModuleIds] = useState<Set<string>>(new Set());

  // 当前聚焦的模块（点击卡片标题区高亮其边框），null 表示未选中
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null);

  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Toggle accordion expand/collapse
  const toggleAccordion = (id: string) => {
    setExpandedModuleIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
        // 展开时把该模块标记为当前聚焦，边框保持高亮
        setActiveModuleId(id);
      }
      return next;
    });
  };

  // 移除模块时同步清理其高亮与展开状态
  const handleRemove = (id: string) => {
    if (activeModuleId === id) setActiveModuleId(null);
    setExpandedModuleIds((prev) => {
      if (!prev.has(id)) return prev;
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
    onRemoveModule(id);
  };

  // Addon name handler: letters only [a-zA-Z], unlimited length
  const handleAddonNameChange = (val: string) => {
    const lettersOnly = val.replace(/[^a-zA-Z]/g, '');
    onMetadataChange('name', lettersOnly);
    onMetadataChange('title', lettersOnly || WOW_VERSION_CONFIG.defaultAddonName);
  };

  const isNameValid = metadata.name.trim().length > 0;

  return (
    <>
      {/* Background Dim Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-[2px] transition-opacity"
        />
      )}

      {/* Slide-over Right Floating Panel */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[480px] lg:w-[500px] bg-[#0d111a] border-l border-slate-800 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-[#121722]/90 backdrop-blur-md flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Sparkles size={16} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm text-white">{ui.drawer.title}</h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  {f(ui.drawer.itemCount, { count: selectedModules.length })}
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                {ui.drawer.defaultsHintPrefix}{' '}
                <code className="font-mono text-amber-300">
                  /{(metadata.name.replace(/[^a-zA-Z]/g, '') || WOW_VERSION_CONFIG.defaultAddonName).toLowerCase()}
                </code>{' '}
                {ui.drawer.defaultsHintSuffix}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {selectedModules.length > 0 && (
              <button
                type="button"
                onClick={onClearAll}
                className="text-xs text-slate-400 hover:text-red-400 px-2 py-1 rounded hover:bg-slate-800 transition-colors cursor-pointer"
                title={ui.drawer.clearAllTitle}
              >
                {ui.drawer.clearAll}
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              title={ui.drawer.closeDrawer}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Addon Name Configuration Card */}
        <div className="p-4 bg-[#141926] border-b border-slate-800/80 flex-shrink-0 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <label className="text-xs font-semibold text-slate-200 flex items-center gap-1.5 flex-wrap">
              <span>{ui.drawer.addonNameLabel}</span>
              <span className="text-[10px] font-normal text-amber-400/90">
                {ui.drawer.addonNameHint}
              </span>
            </label>
            <span className="text-[10px] font-mono text-slate-400 shrink-0">
              {f(ui.drawer.addonNameDefault, { name: WOW_VERSION_CONFIG.defaultAddonName })}
            </span>
          </div>

          <div className="relative">
            <input
              type="text"
              value={metadata.name}
              onChange={(e) => handleAddonNameChange(e.target.value)}
              placeholder={WOW_VERSION_CONFIG.defaultAddonName}
              className={`w-full bg-slate-900/90 border rounded-lg px-3.5 py-2 text-xs font-mono font-medium text-slate-100 placeholder:text-slate-600 focus:outline-none transition-colors ${
                isNameValid
                  ? 'border-slate-700 focus:border-amber-500/60'
                  : 'border-red-500/60 focus:border-red-500'
              }`}
            />
            {metadata.name && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-500">
                {f(ui.drawer.charsCount, { count: metadata.name.length })}
              </span>
            )}
          </div>

          {!isNameValid && (
            <div className="flex items-center gap-1 text-[11px] text-red-400">
              <AlertCircle size={12} />
              <span>{ui.drawer.addonNameError}</span>
            </div>
          )}
        </div>

        {/* Selected Modules Streamlined Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-3.5 space-y-2 scrollbar-thin scrollbar-thumb-slate-700">
          {selectedModules.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-500 space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-slate-800/40 border border-slate-800 flex items-center justify-center text-slate-600">
                <Package size={28} />
              </div>
              <div className="space-y-1 max-w-xs">
                <p className="text-sm font-medium text-slate-300">{ui.drawer.emptyTitle}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{ui.drawer.emptyDesc}</p>
              </div>
            </div>
          ) : (
            selectedModules.map((module) => {
              const options = module.options || [];
              const hasOptions = options.length > 0;
              const isExpanded = expandedModuleIds.has(module.id);
              const currentOpts = moduleOptions[module.id] || {};
              // 点击卡片或展开参数时，该模块保持边框高亮
              const isActive = activeModuleId === module.id || isExpanded;

              return (
                <div
                  key={module.id}
                  onClick={() => setActiveModuleId(module.id)}
                  className={`rounded-lg border p-2.5 transition-all shadow-sm group cursor-pointer ${
                    isActive
                      ? 'bg-[#151b28] border-amber-500/70 ring-1 ring-amber-500/25'
                      : 'bg-[#121622] border-slate-800/90 hover:border-amber-500/50'
                  }`}
                >
                  {/* Streamlined Card Header: Icon, Title, Source, Accordion Toggle & Remove */}
                  <div className="flex items-center justify-between gap-2">
                    {/* Left: Icon + Title + Source Tag */}
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <div className="p-1 rounded-md bg-slate-800/80 text-amber-400 border border-slate-700/50 flex-shrink-0">
                        <DynamicIcon name={module.icon} size={13} />
                      </div>
                      <span className="text-xs font-semibold text-slate-200 group-hover:text-amber-300 transition-colors truncate">
                        {module.title}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/40 flex-shrink-0">
                        {module.sourceAddon}
                      </span>
                    </div>

                    {/* Right: Accordion Toggle Button (if options) + Remove Button */}
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      {hasOptions && (
                        <button
                          type="button"
                          onClick={() => toggleAccordion(module.id)}
                          className={`flex items-center gap-1 px-2 py-0.5 text-[11px] rounded transition-colors cursor-pointer border ${
                            isExpanded
                              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 font-medium'
                              : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border-slate-700/60'
                          }`}
                          title={isExpanded ? ui.drawer.collapseOptions : ui.drawer.expandOptions}
                        >
                          <Sliders size={11} className={isExpanded ? 'text-amber-400' : 'text-slate-400'} />
                          <span>{ui.drawer.optionsButton}</span>
                          {isExpanded ? <ChevronUp size={11} /> : <ChevronDown size={11} />}
                        </button>
                      )}

                      {/* Remove button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemove(module.id);
                        }}
                        className="text-slate-500 hover:text-red-400 p-1 rounded hover:bg-slate-800 transition-colors cursor-pointer"
                        title={ui.drawer.removeTitle}
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>

                  {/* Accordion Expandable Options Body */}
                  {hasOptions && isExpanded && (
                    <div className="mt-2.5 p-2 bg-[#0a0e14] rounded-lg border border-slate-800/80 space-y-1.5 animate-in fade-in duration-150">
                      {options.map((opt) => {
                        const val = currentOpts[opt.id] ?? opt.default;

                        // Boolean option
                        if (opt.type === 'boolean') {
                          return (
                            <label
                              key={opt.id}
                              className="flex items-center justify-between gap-3 text-xs cursor-pointer py-1 select-none hover:text-white"
                            >
                              <div className="flex-1 min-w-0">
                                <div className="text-slate-200 text-xs font-medium">
                                  {opt.label}
                                </div>
                                {opt.description && (
                                  <div className="text-[10px] text-slate-400">
                                    {opt.description}
                                  </div>
                                )}
                              </div>
                              <input
                                type="checkbox"
                                checked={Boolean(val)}
                                onChange={(e) =>
                                  onUpdateOption(module.id, opt.id, e.target.checked)
                                }
                                className="rounded border-slate-700 bg-slate-900 text-amber-500 focus:ring-amber-500/40 h-3.5 w-3.5 cursor-pointer"
                              />
                            </label>
                          );
                        }

                        // Select option
                        if (opt.type === 'select' && opt.choices) {
                          return (
                            <div
                              key={opt.id}
                              className="flex items-center justify-between gap-3 text-xs py-1"
                            >
                              <div className="flex-1 min-w-0">
                                <div className="text-slate-200 text-xs font-medium">
                                  {opt.label}
                                </div>
                                {opt.description && (
                                  <div className="text-[10px] text-slate-400">
                                    {opt.description}
                                  </div>
                                )}
                              </div>
                              <select
                                value={val}
                                onChange={(e) =>
                                  onUpdateOption(module.id, opt.id, e.target.value)
                                }
                                className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-md px-2 py-0.5 focus:border-amber-500 focus:outline-none"
                              >
                                {opt.choices.map((c) => (
                                  <option key={c.value} value={c.value}>
                                    {c.label}
                                  </option>
                                ))}
                              </select>
                            </div>
                          );
                        }

                        // String option
                        if (opt.type === 'string') {
                          return (
                            <div
                              key={opt.id}
                              className="flex items-center justify-between gap-3 text-xs py-1"
                            >
                              <div className="flex-1 min-w-0">
                                <div className="text-slate-200 text-xs font-medium">
                                  {opt.label}
                                </div>
                                {opt.description && (
                                  <div className="text-[10px] text-slate-400">
                                    {opt.description}
                                  </div>
                                )}
                              </div>
                              <input
                                type="text"
                                value={val || ''}
                                onChange={(e) =>
                                  onUpdateOption(module.id, opt.id, e.target.value)
                                }
                                className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-md px-2 py-0.5 w-28 text-right focus:border-amber-500 focus:outline-none"
                              />
                            </div>
                          );
                        }

                        return null;
                      })}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Drawer Sticky Footer: Actions & Download Button */}
        <div className="p-4 border-t border-slate-800 bg-[#121722]/95 backdrop-blur-md flex-shrink-0 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Layers size={13} className="text-amber-400" />
              <span>
                {ui.seo.gameType} (TOC: {WOW_VERSION_CONFIG.interfaceVersion})
              </span>
            </span>
            <span className="font-mono text-slate-300">
              {f(ui.drawer.selectedLabel, { count: selectedModules.length })}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Code Preview Button */}
            <button
              type="button"
              onClick={onOpenCodePreview}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-slate-300 hover:text-white text-xs font-semibold rounded-xl transition-all cursor-pointer"
            >
              <Code2 size={14} />
              <span>{ui.drawer.codePreview}</span>
            </button>

            {/* Download CTA Button */}
            <button
              type="button"
              onClick={onDownloadZip}
              disabled={selectedModules.length === 0 || !isNameValid || isDownloading}
              className="flex-[2] flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-amber-500/20 active:scale-98 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <Download size={15} />
              <span>
                {isDownloading
                  ? ui.drawer.downloading
                  : f(ui.drawer.downloadButton, { count: selectedModules.length })}
              </span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
