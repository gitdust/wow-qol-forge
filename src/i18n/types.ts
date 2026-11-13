import { Category, ChangeType } from '../types';

export interface ChangelogTranslationGroup {
  type: ChangeType;
  items: string[];
}

export interface ChangelogTranslationEntry {
  summary?: string;
  groups: ChangelogTranslationGroup[];
}

export interface UiDictionary {
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogImageAlt: string;
    siteSubtitle: string;
    gameType: string;
  };
  nav: {
    backToModules: string;
    changelog: string;
    githubRepo: string;
    languageAria: string;
  };
  toolbar: {
    totalModules: string;
    showingCount: string;
    selectedCount: string;
    searchPlaceholder: string;
    clearSearch: string;
    selectAllCurrent: string;
    unselectAllCurrent: string;
    tableHeaderModule: string;
    tableHeaderAction: string;
    emptyTitle: string;
    emptyHint: string;
  };
  moduleRow: {
    downloadsCount: string;
    downloadsTenThousand: string;
    downloadsUnavailable: string;
    downloadsTitle: string;
    optionsButton: string;
    optionsPreviewTitle: string;
    optionsReadonlyHint: string;
    optionOn: string;
    optionOff: string;
    sourceButton: string;
    sourceButtonTitle: string;
  };
  drawer: {
    title: string;
    itemCount: string;
    defaultsHintPrefix: string;
    defaultsHintSuffix: string;
    clearAll: string;
    clearAllTitle: string;
    closeDrawer: string;
    addonNameLabel: string;
    addonNameHint: string;
    addonNameDefault: string;
    charsCount: string;
    addonNameError: string;
    emptyTitle: string;
    emptyDesc: string;
    expandOptions: string;
    collapseOptions: string;
    optionsButton: string;
    removeTitle: string;
    selectedLabel: string;
    codePreview: string;
    downloading: string;
    downloadButton: string;
  };
  floating: {
    buttonTitle: string;
    buttonLabel: string;
  };
  codeModal: {
    subtitle: string;
    copyFile: string;
    copied: string;
    close: string;
    lineCount: string;
    closeWindow: string;
    moduleSourceTitle: string;
    bundlePreviewTitle: string;
  };
  changelog: {
    title: string;
    currentVersion: string;
    backToModules: string;
    currentBadge: string;
    types: Record<ChangeType, string>;
    entries: Record<string, ChangelogTranslationEntry>;
  };
  footer: {
    sourcesLabel: string;
    taintTitle: string;
    taintDesc: string;
    kernelTitle: string;
    kernelDesc: string;
    installTitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3DescPrefix: string;
    step3DescCmd: string;
    step3DescSuffix: string;
    friendlyLinks: string;
    wowApiLabel: string;
    wowUiSourceLabel: string;
  };
  alerts: {
    invalidAddonName: string;
    selectOneModule: string;
    downloadFailed: string;
    defaultAddonNotes: string;
  };
  categories: Record<Category, { label: string; description: string }>;
  presets: Record<string, { name: string; description: string }>;
  generator: {
    luaHeaderGeneratedBy: string;
    luaHeaderTargetInterface: string;
    luaHeaderSelectedModules: string;
    luaHeaderNote: string;
    commentErrorReport: string;
    runtimeErrorPrint: string;
    commentEventBus: string;
    commentUnknownEvent: string;
    runtimeEventError: string;
    commentFeatureList: string;
    commentSavedVars: string;
    commentDefaultEnabled: string;
    commentOptionProxy: string;
    commentSettingsCallbacks: string;
    commentModuleLoader: string;
    commentModuleLoaderStates: string;
    commentModuleLabel: string;
    commentSourceLabel: string;
    commentWelcome: string;
    runtimeWelcomeLoaded: string;
    runtimeWelcomeOpenCmd: string;
    tocDefaultNotes: string;
    readmeTitle: string;
    readmeGeneratedBy: string;
    readmeImportantTitle: string;
    readmeImportantBody: string;
    readmeInstallTitle: string;
    readmeInstallStep1: string;
    readmeInstallStep2: string;
    readmeInstallStep3: string;
    readmeSelectedTitle: string;
    panel: {
      headerComment: string;
      loadedStateComment: string;
      needsReloadComment: string;
      needsReloadStatus: string;
      setValueComment: string;
      optionLineComment: string;
      needsReloadTag: string;
      rowComment: string;
      collapseOptions: string;
      expandOptions: string;
      windowTitleSuffix: string;
      allCategory: string;
      bottomHint: string;
      reloadButton: string;
      settingsTabComment: string;
      settingsTabText: string;
      openPanelButton: string;
    };
  };
}

export interface OptionTranslation {
  label: string;
  description?: string;
  default?: string;
  choices?: Record<string, string>;
}

export interface ModuleTranslation {
  title: string;
  description: string;
  details?: string;
  tag?: string;
  options?: Record<string, OptionTranslation>;
  comments?: Record<string, string>;
  strings?: Record<string, string>;
}

export interface LocaleBundle {
  ui: UiDictionary;
  modules: Record<string, ModuleTranslation>;
}

export interface LuaLocaleContext {
  c: (key: string) => string;
  s: (key: string) => string;
  t: (key: string) => string;
}
