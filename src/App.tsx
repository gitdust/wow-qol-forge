import React, { useState, useEffect, useLayoutEffect, useMemo } from 'react';
import { AddonMetadata, Category, QoLModule } from './types';
import { allModules, categories, defaultPresets, moduleMap } from './data/modules';
import { Navbar, SiteView } from './components/Navbar';
import { ChangelogPage } from './components/ChangelogPage';
import { ModuleRow } from './components/ModuleRow';
import { CodeModal } from './components/CodeModal';
import { SelectedDrawer } from './components/SelectedDrawer';
import { Footer } from './components/Footer';
import { FloatingSelectionButton } from './components/FloatingSelectionButton';
import { useDownloadCounts } from './hooks/useDownloadCounts';
import { DynamicIcon } from './components/DynamicIcon';
import { Search, X } from 'lucide-react';
import {
  generateAddonCode,
  packageAndDownloadZip,
} from './utils/addonGenerator';
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from './utils/presetStorage';
import { WOW_VERSION_CONFIG } from './config/version';
import {
  createLuaLocaleContext,
  DEFAULT_LOCALE,
  getUi,
  Locale,
  LOCALE_CONFIGS,
  localizeCategory,
  localizeModule,
} from './i18n';
import { I18nProvider, useI18n } from './i18n/react';

// 服务端渲染时退化为 useEffect，避免 React 的 “useLayoutEffect does nothing on the server” 警告
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// 预渲染 HTML 所使用的默认值，必须与客户端首次渲染完全一致，否则水合会失配
function createDefaultMetadata(notes: string): AddonMetadata {
  return {
    name: WOW_VERSION_CONFIG.defaultAddonName,
    title: WOW_VERSION_CONFIG.defaultAddonName,
    author: WOW_VERSION_CONFIG.author,
    notes,
    interfaceVersion: WOW_VERSION_CONFIG.interfaceVersion,
  };
}

interface AppProps {
  locale?: Locale;
}

const AppInner: React.FC = () => {
  const { locale, ui, f } = useI18n();

  const { counts, recordDownload } = useDownloadCounts();

  // Addon metadata（默认值用于预渲染，本地存档在挂载后恢复）
  const [metadata, setMetadata] = useState<AddonMetadata>(() =>
    createDefaultMetadata(ui.alerts.defaultAddonNotes)
  );

  // Selected module IDs (default select recommended modules)
  const [selectedModules, setSelectedModules] = useState<string[]>(() => {
    const defaultPreset = defaultPresets.find((p) => p.id === 'all-in-one');
    return defaultPreset ? defaultPreset.moduleIds : allModules.map((m) => m.id);
  });

  // Module options state
  const [moduleOptions, setModuleOptions] = useState<Record<string, Record<string, any>>>({});

  // 挂载后从 LocalStorage 恢复上次配置。必须早于自动保存完成，
  // 否则首屏默认值会把玩家存档覆盖掉。
  const [isRestored, setIsRestored] = useState(false);
  useIsomorphicLayoutEffect(() => {
    const local = loadFromLocalStorage();
    if (local) {
      if (local.meta && local.meta.name) {
        const cleanName =
          local.meta.name.replace(/[^a-zA-Z]/g, '') || WOW_VERSION_CONFIG.defaultAddonName;
        setMetadata({
          ...local.meta,
          name: cleanName,
          title: cleanName,
          // 若存档中未自定义 notes，则跟随当前语言默认说明
          notes: ui.alerts.defaultAddonNotes,
          interfaceVersion: WOW_VERSION_CONFIG.interfaceVersion,
        });
      }
      // 过滤掉已下线的模块 ID，避免旧存档让计数和 README 清单出错
      // 注意：玩家主动全部取消勾选（清空）时，modules 为空数组，必须如实恢复为空，不能回退到默认预设
      const savedModules = (local.modules || []).filter((id) => moduleMap.has(id));
      setSelectedModules(savedModules);
      if (local.options) setModuleOptions(local.options);
    }
    setIsRestored(true);
  }, []);

  // Category and filtering state
  const [currentCategory, setCurrentCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // 页面视图：功能列表 / 更新日志。更新日志对应 URL #changelog，可直接分享链接与使用浏览器后退。
  // 首屏固定渲染功能列表 (与预渲染一致)，挂载后再根据 hash 切换，避免水合失配。
  const [view, setView] = useState<SiteView>('modules');
  useEffect(() => {
    const syncFromHash = () =>
      setView(window.location.hash === '#changelog' ? 'changelog' : 'modules');
    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  // 同步 document.title、html[lang] 与 meta description（兼容开发模式、动态切换及 #changelog 视图）
  useEffect(() => {
    document.documentElement.lang = LOCALE_CONFIGS[locale].htmlLang;
    document.title =
      view === 'changelog' ? `${ui.changelog.title} - WoW QoL Forge` : `${ui.seo.heading} | WoW QoL Forge`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        f(ui.seo.description, { count: allModules.length })
      );
    }
  }, [locale, ui, view, f]);

  const navigate = (next: SiteView) => {
    if (next === view) return;
    if (next === 'changelog') {
      window.location.hash = 'changelog';
    } else {
      // 去掉 hash 回到功能列表，同时保留一条历史记录供后退
      window.history.pushState(null, '', window.location.pathname + window.location.search);
      setView('modules');
    }
    window.scrollTo({ top: 0 });
  };

  // Floating drawer state (closed by default; do NOT auto-open on check)
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  // Modals state
  const [isDownloading, setIsDownloading] = useState(false);
  const [codeModalData, setCodeModalData] = useState<{
    isOpen: boolean;
    title: string;
    files: { name: string; content: string }[];
  }>({
    isOpen: false,
    title: '',
    files: [],
  });

  // Auto-save to LocalStorage（待存档恢复完成后再写入，避免默认值覆盖玩家配置；
  // 服务端渲染时 isRestored 恒为 false，因此不会在 Node 中访问 localStorage）
  useEffect(() => {
    if (!isRestored) return;
    saveToLocalStorage(metadata, selectedModules, moduleOptions);
  }, [isRestored, metadata, selectedModules, moduleOptions]);

  // 本地化后的分类与模块列表
  const localizedCategories = useMemo(
    () => categories.map((cat) => localizeCategory(cat, locale)),
    [locale]
  );

  const localizedModules = useMemo(
    () => allModules.map((mod) => localizeModule(mod, locale)),
    [locale]
  );

  const localizedModuleMap = useMemo(
    () => new Map<string, QoLModule>(localizedModules.map((m) => [m.id, m])),
    [localizedModules]
  );

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: localizedModules.length };
    localizedCategories.forEach((cat) => {
      if (cat.id !== 'all') {
        counts[cat.id] = localizedModules.filter((m) => m.category === cat.id).length;
      }
    });
    return counts;
  }, [localizedCategories, localizedModules]);

  // Filtered modules
  const filteredModules = useMemo(() => {
    return localizedModules.filter((mod) => {
      // Category filter
      if (currentCategory !== 'all' && mod.category !== currentCategory) {
        return false;
      }
      // Search filter (匹配本地化文案以及原插件名与模块 ID)
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = mod.title.toLowerCase().includes(q);
        const matchesDesc = mod.description.toLowerCase().includes(q);
        const matchesDetails = mod.details?.toLowerCase().includes(q);
        const matchesId = mod.id.toLowerCase().includes(q);
        const matchesSource = mod.sourceAddon.toLowerCase().includes(q);
        const matchesTag = mod.tag?.toLowerCase().includes(q);
        if (
          !matchesTitle &&
          !matchesDesc &&
          !matchesDetails &&
          !matchesId &&
          !matchesSource &&
          !matchesTag
        ) {
          return false;
        }
      }
      return true;
    });
  }, [localizedModules, currentCategory, searchQuery]);

  // Selected module objects for drawer
  const selectedModuleObjects = useMemo(() => {
    return selectedModules
      .map((id) => localizedModuleMap.get(id))
      .filter((m): m is QoLModule => Boolean(m));
  }, [selectedModules, localizedModuleMap]);

  // Selected count within current filtered view
  const selectedInFilteredCount = useMemo(() => {
    return filteredModules.filter((m) => selectedModules.includes(m.id)).length;
  }, [filteredModules, selectedModules]);

  const handleToggleModule = (id: string) => {
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  // Batch toggle all modules currently filtered in the table
  const isAllFilteredSelected =
    filteredModules.length > 0 && selectedInFilteredCount === filteredModules.length;

  const handleToggleSelectFiltered = () => {
    if (isAllFilteredSelected) {
      const filteredSet = new Set(filteredModules.map((m) => m.id));
      setSelectedModules((prev) => prev.filter((id) => !filteredSet.has(id)));
    } else {
      const nextSet = new Set(selectedModules);
      filteredModules.forEach((m) => nextSet.add(m.id));
      setSelectedModules(Array.from(nextSet));
    }
  };

  // Remove module directly from drawer
  const handleRemoveModule = (id: string) => {
    setSelectedModules((prev) => prev.filter((m) => m !== id));
  };

  // Clear all selections
  const handleClearAll = () => {
    setSelectedModules([]);
  };

  // Option update in right drawer
  const handleUpdateOption = (moduleId: string, optionId: string, value: any) => {
    setModuleOptions((prev) => ({
      ...prev,
      [moduleId]: {
        ...(prev[moduleId] || {}),
        [optionId]: value,
      },
    }));
  };

  // View individual module code
  const handleViewModuleCode = (module: QoLModule) => {
    const opts = moduleOptions[module.id] || {};
    const lua = module.generateLua(opts, createLuaLocaleContext(module.id, locale));
    setCodeModalData({
      isOpen: true,
      title: f(ui.codeModal.moduleSourceTitle, { title: module.title, id: module.id }),
      files: [
        {
          name: `${module.id}.lua`,
          content: lua,
        },
      ],
    });
  };

  // View full addon bundle code
  const handleViewFullCode = () => {
    const { tocContent, luaContent } = generateAddonCode(
      metadata,
      selectedModules,
      moduleOptions,
      locale
    );
    const safeName =
      metadata.name.replace(/[^a-zA-Z]/g, '') || WOW_VERSION_CONFIG.defaultAddonName;
    setCodeModalData({
      isOpen: true,
      title: f(ui.codeModal.bundlePreviewTitle, {
        name: safeName,
        count: selectedModules.length,
      }),
      files: [
        {
          name: `${safeName}.toc`,
          content: tocContent,
        },
        {
          name: 'core.lua',
          content: luaContent,
        },
      ],
    });
  };

  // Download Zip package
  const handleDownloadZip = async () => {
    const safeName = metadata.name.replace(/[^a-zA-Z]/g, '');
    if (!safeName) {
      alert(ui.alerts.invalidAddonName);
      return;
    }
    if (selectedModules.length === 0) {
      alert(ui.alerts.selectOneModule);
      return;
    }

    try {
      setIsDownloading(true);
      await packageAndDownloadZip(metadata, selectedModules, moduleOptions, locale);
      recordDownload(selectedModules);
      const { default: confetti } = await import('canvas-confetti');
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#10b981', '#3b82f6'],
      });
    } catch (err) {
      console.error('Download failed', err);
      alert(ui.alerts.downloadFailed);
    } finally {
      setIsDownloading(false);
    }
  };

  const activeCategoryInfo =
    localizedCategories.find((c) => c.id === currentCategory) || localizedCategories[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0e14] text-slate-100">
      {/* Top Navigation Bar */}
      <Navbar view={view} onNavigate={navigate} />

      {view === 'changelog' ? (
        <ChangelogPage onBack={() => navigate('modules')} />
      ) : (
        /* Main Content Area */
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-6 space-y-5">
          <div className="space-y-1">
            <h1 className="text-lg font-bold text-white">{ui.seo.heading}</h1>
            <p className="text-xs leading-relaxed text-slate-400">
              {f(ui.seo.description, { count: allModules.length })}
            </p>
          </div>
          {/* Category Horizontal Navigation Tabs */}
          <div className="bg-[#10141d] border border-slate-800 rounded-xl p-2.5 shadow-lg space-y-2">
            <div className="flex flex-wrap items-center gap-1.5">
              {localizedCategories.map((cat) => {
                const isActive = currentCategory === cat.id;
                const count = categoryCounts[cat.id] || 0;
                return (
                  <button
                    type="button"
                    key={cat.id}
                    onClick={() => setCurrentCategory(cat.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/70'
                    }`}
                  >
                    <DynamicIcon name={cat.icon} size={14} />
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                        isActive
                          ? 'bg-slate-950/20 text-slate-950 font-bold'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Category Description Notice */}
            <div className="px-1.5 pt-2 text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-t border-slate-800/80">
              <span>{activeCategoryInfo.description}</span>
              <span className="text-slate-500 text-[11px] font-mono">
                {f(ui.toolbar.totalModules, { count: localizedModules.length })}
              </span>
            </div>
          </div>

          {/* Table Toolbar: Filter Summary & Search Input */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400 px-1">
            <div className="flex items-center gap-2">
              <span>
                {f(ui.toolbar.showingCount, { count: filteredModules.length })}
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-amber-400 font-medium">
                {f(ui.toolbar.selectedCount, {
                  selected: selectedInFilteredCount,
                  total: filteredModules.length,
                })}
              </span>
            </div>

            {/* Search Box */}
            <div className="relative w-full sm:w-72">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={ui.toolbar.searchPlaceholder}
                className="w-full bg-slate-900/90 border border-slate-800 rounded-lg pl-8 pr-7 py-1.5 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white cursor-pointer"
                  title={ui.toolbar.clearSearch}
                >
                  <X size={13} />
                </button>
              )}
            </div>
          </div>

          {/* Modules Table List Container */}
          <div className="bg-[#10141d] border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
            {/* Table Header Row */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#141924] border-b border-slate-800 text-xs font-medium text-slate-400 select-none">
              <label className="flex items-center gap-3.5 cursor-pointer hover:text-slate-200 transition-colors">
                <input
                  type="checkbox"
                  checked={isAllFilteredSelected}
                  ref={(el) => {
                    if (el) {
                      el.indeterminate =
                        selectedInFilteredCount > 0 && !isAllFilteredSelected;
                    }
                  }}
                  onChange={handleToggleSelectFiltered}
                  className="rounded border-slate-700 bg-slate-900 text-amber-500 focus:ring-amber-500/40 h-4 w-4 cursor-pointer"
                  title={
                    isAllFilteredSelected
                      ? ui.toolbar.unselectAllCurrent
                      : ui.toolbar.selectAllCurrent
                  }
                />
                <span>{ui.toolbar.tableHeaderModule}</span>
              </label>
              <span className="pr-2">{ui.toolbar.tableHeaderAction}</span>
            </div>

            {/* Module Rows */}
            {filteredModules.length === 0 ? (
              <div className="py-16 text-center text-slate-500 space-y-2">
                <p className="text-sm">{ui.toolbar.emptyTitle}</p>
                <p className="text-xs text-slate-600">{ui.toolbar.emptyHint}</p>
              </div>
            ) : (
              <div className="divide-y divide-slate-800/60">
                {filteredModules.map((module) => (
                  <ModuleRow
                    downloadCount={counts === null ? undefined : (counts[module.id] ?? 0)}
                    key={module.id}
                    module={module}
                    isSelected={selectedModules.includes(module.id)}
                    moduleOptions={moduleOptions}
                    onToggle={handleToggleModule}
                    onViewCode={handleViewModuleCode}
                  />
                ))}
              </div>
            )}
          </div>
        </main>
      )}

      {/* Website Footer with Introduction & Author info */}
      <Footer />

      {/* Right Floating Drawer (已选功能配置、参数与打包下载浮窗) */}
      <SelectedDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        metadata={metadata}
        onMetadataChange={(key, val) =>
          setMetadata((prev) => ({ ...prev, [key]: val }))
        }
        selectedModules={selectedModuleObjects}
        moduleOptions={moduleOptions}
        onUpdateOption={handleUpdateOption}
        onRemoveModule={handleRemoveModule}
        onClearAll={handleClearAll}
        onOpenCodePreview={handleViewFullCode}
        onDownloadZip={handleDownloadZip}
        isDownloading={isDownloading}
      />

      <FloatingSelectionButton
        count={selectedModules.length}
        label={`${ui.floating.buttonTitle} (${f(ui.drawer.selectedLabel, { count: selectedModules.length })})`}
        visible={!isDrawerOpen && view === 'modules'}
        onOpen={() => setIsDrawerOpen(true)}
      />

      {/* Code Viewer Modal */}
      <CodeModal
        isOpen={codeModalData.isOpen}
        onClose={() => setCodeModalData((prev) => ({ ...prev, isOpen: false }))}
        title={codeModalData.title}
        files={codeModalData.files}
      />
    </div>
  );
};

export const App: React.FC<AppProps> = ({ locale = DEFAULT_LOCALE }) => {
  // 确保直接调用 <App /> 时也能读取到对应语言包
  void getUi(locale);
  return (
    <I18nProvider locale={locale}>
      <AppInner />
    </I18nProvider>
  );
};
