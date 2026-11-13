import { ModuleTranslation } from '../../types';

export const uiEn: Record<string, ModuleTranslation> = {
  'hide-error-messages': {
    title: 'Hide Red Combat Error Messages',
    description: 'Suppresses spammy red center-screen error messages ("Out of range", "Not enough mana", etc.).',
    details: 'Uses Leatrix Plus’s whitelist so critical alerts like Inventory Full, Quest Log Full, and Vote Kick limits still appear.',
    tag: 'Clean Screen',
    comments: {
      header: '[ Hide Red Combat Error Messages (Leatrix Plus) ]',
      whitelistNote: 'Keep critical error messages (Leatrix Plus whitelist)',
      pingNote: 'Also suppress Ping System errors (Retail 12.x GameEvent writes directly to UIErrorsFrame)',
    },
  },
  'hide-talking-head': {
    title: 'Hide Talking Head Frame',
    description: 'Hides the giant NPC Talking Head popup frame during Mythic+, raids, and world quests.',
    details: 'Uses taint-safe hooksecurefunc on display only without muting NPC dialogue audio or quest triggers.',
    tag: 'M+ Essential',
    comments: {
      header: '[ Hide Talking Head Frame ]',
    },
  },
  'max-camera-zoom': {
    title: 'Max Camera Zoom Unlock',
    description: 'Automatically sets cameraDistanceMaxZoomFactor to Blizzard’s maximum 2.6 on every login/reload.',
    details: 'Ensures maximum raid and Mythic+ camera visibility without resetting between sessions.',
    tag: 'Wide View',
    comments: {
      header: '[ Max Camera Zoom Unlock ]',
    },
  },
  'hide-actionbar-elements': {
    title: 'Hide Action Bar Keybinds & Macro Names',
    description: 'Hides hotkey labels and macro text on Blizzard action bar buttons for a clean minimalist look.',
    details: 'Toggle hotkey and macro name hiding independently while preserving cooldowns and highlights.',
    tag: 'Minimal UI',
    options: {
      hideHotKey: {
        label: 'Hide keybind text',
        description: 'Hides shortcut labels like 1, 2, Q, E, s-F',
      },
      hideMacroName: {
        label: 'Hide macro name text',
        description: 'Hides yellow macro titles at the bottom of buttons',
      },
    },
    comments: {
      header: '[ Hide Action Bar Keybinds & Macro Names ]',
    },
  },
  'hide-boss-banner': {
    title: 'Hide Boss Kill Banner',
    description: 'Suppresses the large center-screen Boss Banner and loot toast after defeating a dungeon or raid boss.',
    details: 'Keeps your view clear during fast M+ pulls and post-boss trash.',
    tag: 'M+ Essential',
    comments: {
      header: '[ Hide Boss Kill Banner (Leatrix Plus) ]',
      keepIntroNote: 'Suppress kill & loot banner only; keep boss encounter start notice',
    },
  },
  'hide-alerts': {
    title: 'Hide Achievement & Loot Alert Toasts',
    description: 'Hides achievement, mount, recipe, and loot alert toasts at the bottom of the screen, with an option to hide level-up/boss event toasts too.',
    tag: 'Clean UI',
    options: {
      hideEventToasts: {
        label: 'Also hide event toasts',
        description: 'Hides top-center level-up, boss objective, and pet battle reward banners (unless dismissible)',
      },
    },
    comments: {
      header: '[ Hide Achievement & Loot Alert Toasts (Leatrix Plus NoAlerts) ]',
      preventReregisterNote: 'Prevent Blizzard code from re-registering alert events later',
      eventToastNote: 'Event toasts (Leatrix Plus HideEventToasts)',
    },
  },
  'hide-zone-text': {
    title: 'Hide Zone Change Banner Text',
    description: 'Hides the huge center-screen zone/subzone title text when entering a new area.',
    tag: 'Minimal UI',
    comments: {
      header: '[ Hide Zone Change Banner Text ]',
      keepEventsNote: 'Keep events intact and only hide frames on show (same as Leatrix Plus)',
    },
  },
  'show-ready-timer': {
    title: 'LFG Ready Check Countdown Bar',
    description: 'Displays a visual countdown bar and timer under the Dungeon/Raid Finder proposal popup.',
    tag: 'Helpful',
    comments: {
      header: '[ LFG Ready Check Countdown Bar (Leatrix Plus ShowReadyTimer) ]',
    },
  },
  'blizz-move': {
    title: 'Draggable & Scalable Blizzard Frames (BlizzMove)',
    description:
      'Unlocks ~60 Blizzard frames (Character, Quest, Spells, Professions, Merchant, AH, Collections, Journal, World Map, etc.) for dragging and Ctrl+Wheel scaling, remembering positions per session. Shift+Right-click resets position; Ctrl+Right-click resets scale.',
    tag: 'Must-Have',
    options: {
      enableScale: {
        label: 'Allow Ctrl + Mouse Wheel scaling',
        description: 'Hold Ctrl and scroll mouse wheel over any unlocked frame to resize it',
      },
    },
    comments: {
      header: '[ Draggable & Scalable Blizzard Frames (BlizzMove) ]',
      framesNote: 'Top-level Retail frames sourced from BlizzMove 3.8.5 (excluding legacy tutorials & bags)',
      addonFramesNote: 'Load-on-demand Blizzard UI addons -> frames',
      subFramesNote: 'Large mouse-capturing subframes that also drag their root frame (BlizzMove SubFrames)',
      stateNote: 'Store state internally without writing fields onto Blizzard frames; session-only memory',
      rootsComment: 'frame -> frameName',
      handleComment: 'dragHandle -> rootFrame',
      posComment: 'frame -> { x, y } (top-left at scale 1 relative to UIParent bottom-left)',
      scaleComment: 'frame -> scale',
      pointsComment: 'frame -> original anchor points before first drag',
      pendingApplyComment: 'protected frames queued during combat to reposition after regen',
      pendingHookComment: 'protected frames loaded in combat queued to hook after regen',
      unpackNote: 'relativeTo may be nil; avoid unpack()',
      panelManagerNote: 'Hand frame back to UIPanelWindows manager when resetting position',
      userPlacedNote: 'Preserve original UserPlaced flag so layout-cache does not persist across logins',
      repositionNote: 'Re-apply user-dragged position when UIPanel manager repositions frame',
      wheelNote1: 'Ctrl + Wheel scaling: capture wheel only while Ctrl is held over a root frame',
      wheelNote2: 'via a transparent overlay, releasing immediately when Ctrl is released',
      anchorScaleNote: 'Scale relative to top-left corner so frame does not jump',
    },
  },
  'slash-way-native': {
    title: 'Native Map Pin Waypoint Command (/way)',
    description: 'Use /way 45.2 60.1 to place a native Blizzard map pin with super-tracked beam, or type /way alone to print your current coordinates.',
    tag: 'Native Plus',
    comments: {
      header: '[ Native Map Pin Waypoint Command (/way) ]',
    },
    strings: {
      noMapMsg: '|cffff3333[Way]|r Unable to determine current map.',
      currentMapFallback: 'Current Map',
      coordMsg: '|cff00ff00[Coords]|r %s: %.1f, %.1f',
      usageMsg: '|cffffaa00[Way]|r Usage: /way 45.2 62.8 (or /way to print current coords)',
      invalidCoordMsg: '|cffff3333[Way]|r Invalid coordinates; enter numbers between 0 and 100.',
      pinSetMsg: '|cff00ff00[Way]|r Native map pin set at %s (%.1f, %.1f)!',
    },
  },
  'cursor-ring': {
    title: 'Cursor Highlight Ring',
    description: 'Draws a colored ring around your mouse pointer so you never lose your cursor during chaotic boss pulls.',
    details: 'Customize size, color, and combat-only visibility. Never blocks clicks.',
    tag: 'Combat Aid',
    options: {
      size: { label: 'Ring size (px)' },
      color: {
        label: 'Ring color',
        choices: {
          amber: 'Amber',
          white: 'White',
          red: 'Red',
          green: 'Green',
          blue: 'Blue',
        },
      },
      combatOnly: { label: 'Show in combat only' },
    },
    comments: {
      header: '[ Cursor Highlight Ring ]',
    },
  },
  'hide-micro-menu-bags': {
    title: 'Hide Micro Menu & Bags Bar',
    description: 'Hides the bottom-right Micro Menu and Bags Bar for a cleaner screen, with optional mouseover reveal.',
    details: 'Keybinds (C, P, B, etc.) continue working normally.',
    tag: 'Minimal UI',
    options: {
      hideMicroMenu: { label: 'Hide Micro Menu' },
      hideBagsBar: { label: 'Hide Bags Bar' },
      mouseover: {
        label: 'Show on mouseover',
        description: 'When disabled, frames stay hidden and open via keybinds only',
      },
    },
    comments: {
      header: '[ Hide Micro Menu & Bags Bar ]',
      mouseoverNote: 'Alpha-hide until mouseover (always visible during Edit Mode)',
    },
  },
  'hide-portrait-numbers': {
    title: 'Hide Portrait Combat Hit Numbers',
    description: 'Hides floating damage and healing numbers on player and pet unit portraits.',
    tag: 'Minimal UI',
    comments: {
      header: '[ Hide Portrait Combat Hit Numbers ]',
    },
  },
  'quest-font-size': {
    title: 'Quest Text Font Size',
    description: 'Adjusts font size in quest dialogs and the quest log for easier reading.',
    tag: 'Readability',
    options: {
      fontSize: {
        label: 'Quest body font size',
        description: 'Blizzard default is ~13; quest titles are +2 larger',
      },
    },
    comments: {
      header: '[ Quest Text Font Size ]',
    },
  },
};
