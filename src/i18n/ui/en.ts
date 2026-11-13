import { UiDictionary } from '../types';

export const en: UiDictionary = {
  seo: {
    heading: 'World of Warcraft Retail Addon Builder',
    description: 'Build a custom WoW Retail addon from {count} quality-of-life modules. Choose features such as auto repair and faster looting, preview the Lua, and download an installable ZIP.',
    ogImageAlt: 'WoW QoL Forge modular cube icon',
    siteSubtitle: 'Minimalist Addon Forge',
    gameType: 'Retail',
  },
  nav: {
    backToModules: 'Back to Modules',
    changelog: 'Changelog',
    githubRepo: 'GitHub Repository',
    languageAria: 'Switch language',
  },
  toolbar: {
    totalModules: '{count} modules included',
    showingCount: 'Showing {count} modules',
    selectedCount: 'Selected {selected} / {total}',
    searchPlaceholder: 'Search module name or description...',
    clearSearch: 'Clear search',
    selectAllCurrent: 'Select all visible',
    unselectAllCurrent: 'Deselect all visible',
    tableHeaderModule: 'Modules & Details',
    tableHeaderAction: 'Actions',
    emptyTitle: 'No matching modules found',
    emptyHint: 'Try switching categories or clearing your search query',
  },
  moduleRow: {
    downloadsCount: '{count} downloads',
    downloadsTenThousand: '{value}0k',
    downloadsUnavailable: 'Download count unavailable',
    downloadsTitle: '{count} total downloads',
    optionsButton: 'Options',
    optionsPreviewTitle: '{title} · Options Preview',
    optionsReadonlyHint: 'Read-only preview · Check this module to configure options in the drawer',
    optionOn: 'On',
    optionOff: 'Off',
    sourceButton: 'Code',
    sourceButtonTitle: 'View standalone Lua source',
  },
  drawer: {
    title: 'Selected Modules & Config',
    itemCount: '{count} selected',
    defaultsHintPrefix: 'Values here are defaults. Type',
    defaultsHintSuffix: 'in-game to toggle modules or adjust options anytime',
    clearAll: 'Clear All',
    clearAllTitle: 'Clear all selected modules',
    closeDrawer: 'Close drawer',
    addonNameLabel: 'Addon Folder Name',
    addonNameHint: '(Letters only, any length)',
    addonNameDefault: 'Default: {name}',
    charsCount: '{count} chars',
    addonNameError: 'Addon name cannot be empty and may contain only letters (A-Z, a-z)',
    emptyTitle: 'No modules selected yet',
    emptyDesc:
      'Check the QoL modules you want from the list on the left to review and customize their options here.',
    expandOptions: 'Expand options',
    collapseOptions: 'Collapse options',
    optionsButton: 'Options',
    removeTitle: 'Remove from selection',
    selectedLabel: '{count} selected',
    codePreview: 'Preview Code',
    downloading: 'Packaging ZIP...',
    downloadButton: 'Download Custom Addon ({count})',
  },
  floating: {
    buttonTitle: 'Open selected modules drawer to configure and download',
  },
  codeModal: {
    subtitle: 'Zero-bloat, dependency-free modern Retail WoW Lua code',
    copyFile: 'Copy File',
    copied: 'Copied to Clipboard',
    close: 'Close',
    lineCount: 'Lines: {count}',
    closeWindow: 'Close',
    moduleSourceTitle: '{title} ({id}) - Module Source',
    bundlePreviewTitle: '{name} - Full Addon Preview ({count} active modules)',
  },
  changelog: {
    title: 'Changelog',
    currentVersion: 'Current version',
    backToModules: 'Back to Modules',
    currentBadge: 'Current',
    types: {
      added: 'Added',
      improved: 'Improved',
      fixed: 'Fixed',
      removed: 'Removed',
    },
    entries: {
      '1.3.1': {
        groups: [
          { type: 'added', items: ['Per-module download counter', '9-language support (EN, ZH-CN, ZH-TW, KO, DE, RU, FR, ES, PT) including in-game UI & Lua comments'] },
          { type: 'improved', items: ['Support 12.1.5 / 12.1.7 TOC interface versions'] },
          { type: 'removed', items: ['Retired 11 low-usage or redundant modules'] },
        ],
      },
      '1.3.0': {
        groups: [
          {
            type: 'added',
            items: [
              'Auto loot spec switching by boss/instance',
              'Great Vault reward reminder',
              'Merchant auto-restock',
            ],
          },
          { type: 'improved', items: ['Queue/ready check taskbar flash now supports whispers'] },
        ],
      },
      '1.2.0': {
        groups: [
          {
            type: 'added',
            items: [
              'In-game settings panel (/addonname)',
              '25 new modules including auto role check and auto slot keystone',
            ],
          },
          {
            type: 'improved',
            items: ['BoE/Warbound item tags', 'Drag Blizzard frames anywhere and remember position'],
          },
          { type: 'removed', items: ['Retired hide glyph effects and chat mouse-wheel scrolling'] },
        ],
      },
      '1.1.0': {
        groups: [
          {
            type: 'added',
            items: ['Custom addon icon bundled in ZIP', 'Sub-options added for multiple modules'],
          },
          {
            type: 'improved',
            items: [
              'Full Retail 12.1.5 compatibility',
              'Isolated per-module pcall sandbox loading',
            ],
          },
          { type: 'fixed', items: ['Fixed 11 known issues including long text paste and mail helper'] },
          { type: 'removed', items: ['Removed 3D Dressing Room transmog helper'] },
        ],
      },
      '1.0.0': {
        groups: [
          {
            type: 'added',
            items: [
              'Initial release: 64 features across 10 categories with search, options, and one-click ZIP download',
            ],
          },
        ],
      },
    },
  },
  footer: {
    sourcesLabel: 'Inspired by',
    taintTitle: 'Zero UI Taint',
    taintDesc:
      'Strictly follows Blizzard modern sandbox rules (hooksecurefunc, TooltipDataProcessor) without overwriting protected globals, preventing combat taint errors.',
    kernelTitle: 'Single Micro-Kernel Event Bus',
    kernelDesc:
      'Whether you pick 3 or 30 modules, a single lightweight Frame routes all events with pcall fault isolation—tiny memory footprint and instant load times.',
    installTitle: 'Quick Installation Guide',
    step1Title: '1. Select & Download',
    step1Desc:
      'Check the modules you want, open the floating drawer in the bottom-right corner, and click Download Custom Addon to get the ZIP.',
    step2Title: '2. Extract to AddOns',
    step2Desc: 'Copy the extracted folder (default MyQol) into your WoW AddOns directory:',
    step3Title: '3. Play Immediately',
    step3DescPrefix:
      'Enabled features work as soon as you log in. To toggle modules or tweak options in-game, type',
    step3DescCmd: ' /addonname',
    step3DescSuffix: ' (e.g. /myqol) in chat to open the settings panel.',
    friendlyLinks: 'Links:',
    wowApiLabel: 'World of Warcraft API (Warcraft Wiki)',
    wowUiSourceLabel: 'WoW UI Source (GitHub)',
  },
  alerts: {
    invalidAddonName: 'Please enter an addon name using only A–Z or a–z (e.g. MyQol)',
    selectOneModule: 'Please select at least one module',
    downloadFailed: 'Failed to generate package, please try again',
    defaultAddonNotes:
      'Custom minimalist quality-of-life addon built with zero bloat for Retail WoW',
  },
  categories: {
    all: {
      label: 'All Modules',
      description: 'Browse all lightweight QoL modules distilled from popular addons',
    },
    automation: {
      label: 'Automation',
      description: 'Auto repair, sell junk, fast questing, skip cinematics, easy item destroy',
    },
    social: {
      label: 'Social & Party',
      description: 'Auto accept friend/guild invites, whisper invite, block duels and spam',
    },
    chat: {
      label: 'Chat',
      description: 'Arrow-key cursor movement, copy chat text & URLs, clean channel tags',
    },
    ui: {
      label: 'UI & Visuals',
      description: 'Hide red error messages, hide Talking Head, max camera zoom, clean bars',
    },
    inventory: {
      label: 'Bags & Merchant',
      description: 'Stack-split bulk buying, highlight already known recipes, gear durability',
    },
    looting: {
      label: 'Fast Looting',
      description: 'Eliminate Blizzard auto-loot delay and snatch drops instantly',
    },
    mail: {
      label: 'Mail',
      description: 'Open all mail in one click, express item mailing, block trade at mailbox',
    },
    inspect: {
      label: 'Stats & Inspect',
      description: 'True secondary stat diminishing returns analysis on your character sheet',
    },
    tooltips: {
      label: 'Tooltips',
      description: 'Show Spell/Item/NPC/Quest IDs, target & guild coloring on tooltips',
    },
    system: {
      label: 'System & Audio',
      description: 'Mute annoying mount/pet sounds, disable glow, audio sync, taskbar flash',
    },
  },
  presets: {
    'all-in-one': {
      name: 'All-in-One Daily (Recommended)',
      description:
        '19 rock-solid daily essentials: auto repair, sell junk, instant loot, skip cinematics, open all mail, hide errors, draggable frames, and more.',
    },
    'dungeon-raid': {
      name: 'Mythic+ & Raid Focus',
      description:
        'Hide Talking Head, suppress errors, max camera zoom, instant loot, ready check timer, and true secondary stat analysis.',
    },
    'pvp-combat': {
      name: 'PvP Combat',
      description:
        'Instant BG spirit release, clean error filter, max zoom, fast badge loot, combat nameplate tweaks, and safe PvP queue.',
    },
    'merchant-life': {
      name: 'Merchant & Professions',
      description:
        'Bulk buy stacks, auto repair, sell junk, already-known recipe tint, one-click mail & gold send, and fast loot.',
    },
  },
  generator: {
    luaHeaderGeneratedBy: 'Generated by WoW QoL Forge',
    luaHeaderTargetInterface: 'Target Interface',
    luaHeaderSelectedModules: 'Selected Modules',
    luaHeaderNote:
      'Note: Web options are defaults. Type /{slash} in-game to toggle modules and edit options.',
    commentErrorReport: 'Error reporting (print each unique error once to avoid chat spam)',
    runtimeErrorPrint: 'Module ',
    commentEventBus:
      'Lightweight event bus (single Frame dispatches all events with zero taint and minimal overhead)',
    commentUnknownEvent:
      'Unknown events throw on modern clients; catch and skip so other modules keep running',
    runtimeEventError: 'Cannot register event ',
    commentFeatureList: 'Module registry: categories, modules, and options (defaults from web builder)',
    commentSavedVars:
      'SavedVariables ({savedVar}): stores only overrides from defaults so web rebuilds update defaults cleanly',
    commentDefaultEnabled: 'Enabled by default; only persist disabled state',
    commentOptionProxy:
      'Modules read options via O.<key>, always returning the latest saved or default value',
    commentSettingsCallbacks:
      'Modules may register OnSettingsChanged callbacks to apply live updates without /reload',
    commentModuleLoader:
      'Wait for ADDON_LOADED before initializing enabled modules inside isolated pcall blocks',
    commentModuleLoaderStates: 'started: attempted to load; loaded: initialized without errors',
    commentModuleLabel: 'Module',
    commentSourceLabel: 'Source reference',
    commentWelcome: 'Login welcome message',
    runtimeWelcomeLoaded: ' loaded ',
    runtimeWelcomeOpenCmd: ' modules. Type ',
    tocDefaultNotes: 'Customized lightweight QoL addon built with WoW QoL Forge',
    readmeTitle: '# {name} - Minimalist Custom WoW Addon',
    readmeGeneratedBy: 'Built client-side with **WoW QoL Forge**.',
    readmeImportantTitle: '## 💡 Important Notes',
    readmeImportantBody:
      'Modules you picked in the builder are enabled immediately in-game using your web values as defaults.\nType `/{slash}` in chat to open the in-game config panel: pick a category on the left, check to enable/disable,\nand click the arrow on the right to expand module options. Changes save automatically and a Reload UI button appears when needed.\nYou can also find this panel under Options -> AddOns.',
    readmeInstallTitle: '## 📦 Installation',
    readmeInstallStep1: '1. Extract the downloaded archive to get the `{name}` folder.',
    readmeInstallStep2:
      '2. Copy `{name}` into your World of Warcraft AddOns directory:\n   - Default path: `World of Warcraft\\_retail_\\Interface\\AddOns\\{name}`',
    readmeInstallStep3: '3. Launch WoW or type `/reload` in chat to activate.',
    readmeSelectedTitle: '## ⚙️ Included Modules ({count})',
    panel: {
      headerComment: 'In-game configuration panel',
      loadedStateComment:
        'Snapshot of started modules and non-live option values at load time to detect when Reload UI is required',
      needsReloadComment:
        'Toggling modules requires a reload since hooks cannot be unhooked and newly enabled modules must initialize',
      needsReloadStatus: '|cffff8040Some changes require a UI reload|r',
      setValueComment: 'Save immediately and notify running module if it registered a live callback',
      optionLineComment: 'Single option row: checkbox / number / string / dropdown',
      needsReloadTag: ' |cff888888(Reload)|r',
      rowComment: 'Module row: enable checkbox + title + description + expand arrow when options exist',
      collapseOptions: 'Collapse options',
      expandOptions: 'Expand options',
      windowTitleSuffix: ' Settings',
      allCategory: 'All',
      bottomHint: 'Check to enable · Click arrow to expand options · Auto-saved',
      reloadButton: 'Reload UI',
      settingsTabComment: 'Add a shortcut button inside Options -> AddOns',
      settingsTabText: ' uses a standalone panel. You can also type ',
      openPanelButton: 'Open Settings',
    },
  },
};
