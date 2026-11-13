import { ModuleTranslation } from '../../types';

export const chatEn: Record<string, ModuleTranslation> = {
  'chat-arrow-keys': {
    title: 'Arrow Keys in Chat EditBox (No Alt Needed)',
    description: 'Use Left/Right arrow keys directly to move the cursor in chat input boxes without holding Alt.',
    details: 'Restores standard text-cursor navigation across all chat frames and temporary whisper windows.',
    tag: 'Typing QoL',
    comments: {
      header: '[ Arrow Keys in Chat EditBox (No Alt Needed) ]',
      coverNote: 'Apply to all existing chat frames and future temporary whisper windows (Leatrix Plus)',
    },
  },
  'chat-copy': {
    title: 'One-Click Copy Chat History',
    description: 'Shift+Click any chat tab to open a clean selectable text window containing that frame’s chat log for easy copying.',
    details: 'Great for copying Discord links, Raid/M+ strats, macros, or WeakAuras strings from chat.',
    tag: 'Essential',
    comments: {
      header: '[ One-Click Copy Chat History (BasicChatMods ChatCopy) ]',
      cleanerNote: 'Use a hidden FontString to expand |4singular:plural; and similar grammar escapes',
      rtNote: 'Convert raid target icons to {rt1} notation',
    },
    strings: {
      windowTitle: 'Copy Chat Log',
    },
  },
  'chat-short-channels': {
    title: 'Shorten Chat Channel Prefixes',
    description: 'Abbreviates verbose prefixes like [1. General - Dornogal] to [G], as well as Guild, Party, Raid, and Instance tags.',
    details: 'Derived from Blizzard’s localized strings across supported clients; custom channels keep only their channel number.',
    tag: 'Clean UI',
    comments: {
      header: '[ Shorten Chat Channel Prefixes (BasicChatMods ChannelNames) ]',
      historyNote: 'Channel prefixes live outside message payloads, so rewrite formatted lines in historyBuffer (BasicChatMods)',
      customRuleNote: 'Keep only number for custom channels',
    },
    strings: {
      general: '[G]',
      trade: '[T]',
      worldDefense: '[WD]',
      localDefense: '[LD]',
      lfg: '[LFG]',
      recruitment: '[GR]',
      instanceLeader: '[IL]',
      instance: '[I]',
      guild: '[G]',
      partyLeader: '[PL]',
      party: '[P]',
      officer: '[O]',
      raidLeader: '[RL]',
      raidWarning: '[RW]',
      raid: '[R]',
    },
  },
  'chat-timestamps': {
    title: 'Chat Timestamps',
    description: 'Prepends clean gray timestamps (e.g. [12:35]) to every chat line.',
    details: 'Disables Blizzard’s built-in timestamp CVar to avoid duplicates while stamping all non-combat chat lines.',
    tag: 'Basic QoL',
    options: {
      showSeconds: {
        label: 'Show seconds',
        description: 'Changes timestamp format to [12:35:08]',
      },
    },
    comments: {
      header: '[ Chat Timestamps (BasicChatMods Timestamp) ]',
      disableNativeNote: 'Disable Blizzard native timestamps to avoid showing two timestamps per line',
      prependNote: 'Prepend timestamp before channel/name by editing newest entry in historyBuffer',
    },
  },
  'chat-unclamp': {
    title: 'Unclamp Chat Frames from Screen Edges',
    description: 'Allows dragging chat frames all the way to the very edge of your screen without Blizzard’s clamp margin.',
    tag: 'Free Layout',
    comments: {
      header: '[ Unclamp Chat Frames from Screen Edges ]',
      hookNote: 'Blizzard resets clamp insets on layout updates; hook and restore 0 (BasicChatMods)',
    },
  },
  'disable-chat-fade': {
    title: 'Disable Chat Text Auto-Fade',
    description: 'Prevents chat messages from fading away after inactivity so recent messages stay readable anytime.',
    details: 'Optionally configure a custom fade delay in seconds. Applies to normal and temporary whisper frames.',
    tag: 'Basic QoL',
    options: {
      visibleSeconds: {
        label: 'Seconds before fade',
        description: '0 = never fade; Blizzard default is 120 seconds',
      },
    },
    comments: {
      header: '[ Disable Chat Text Auto-Fade ]',
      tempWindowNote: 'Temporary whisper frames are created dynamically beyond standard window indices',
    },
  },
  'hide-chat-buttons': {
    title: 'Hide Chat Side & Channel Buttons',
    description: 'Hides the Quick Join, Channel, and Chat Menu buttons beside the chat frame for a cleaner look.',
    tag: 'Minimal UI',
    comments: {
      header: '[ Hide Chat Side & Channel Buttons ]',
      hookNote: 'Hide via Show hook without replacing Blizzard methods (taint-safe)',
    },
  },
  'paste-text': {
    title: 'Multi-Line Text & Macro Paste (/paste)',
    description: 'Type /paste to open a multi-line box bypassing WoW’s 255-character single-line limit—ideal for /way lists, macros, or announcements.',
    tag: 'Power Tool',
    comments: {
      header: '[ Multi-Line Text & Macro Paste (Paste) ]',
    },
    strings: {
      title: 'Paste Helper (/paste)',
      runBtn: 'Paste & Run',
      sentMsg: '|cff00ff00[Paste]|r Text lines executed/sent.',
      clearBtn: 'Clear',
    },
  },
  'chat-keyword-filter': {
    title: 'Chat Keyword Spam Filter',
    description: 'Hides messages in public channels, say, and yell containing any of your blocked keywords (e.g. boost or gold spam).',
    details: 'Case-insensitive, comma-separated. Note: due to 12.0+ addon restrictions, chat content inside instances/M+/raids/PvP is secret and cannot be filtered.',
    tag: 'Anti-Spam',
    options: {
      keywords: {
        label: 'Blocked keywords',
        description: 'Separate multiple keywords with commas',
        default: 'wts,boost,carry,gold,cheap',
      },
      includeWhisper: {
        label: 'Also filter stranger whispers',
        description: 'Whispers from friends and guild members are never filtered',
      },
    },
    comments: {
      header: '[ Chat Keyword Spam Filter ]',
      splitNote: 'Split keywords on commas and re-parse automatically when settings change',
      secretNote: 'Chat text inside instances is a secret value and cannot be read; pass through',
    },
  },
  'tell-target': {
    title: '/tt Whisper Current Target',
    description: 'Type /tt <message> to whisper your currently targeted player without typing their name.',
    details: 'Typing /tt alone opens a whisper input box pre-filled with your target’s name.',
    tag: 'Social QoL',
    comments: {
      header: '[ /tt Whisper Current Target ]',
    },
    strings: {
      noTargetMsg: '|cff00ff99[QoL]|r /tt requires targeting a player first',
    },
  },
  'auto-leave-channels': {
    title: 'Auto-Leave Channels on Login',
    description: 'Automatically leaves specified chat channels (such as LookingForGroup) after login so you don’t have to do it on every alt.',
    details: 'Separate multiple exact channel names with commas. Rejoin anytime with /join ChannelName.',
    tag: 'Anti-Spam',
    options: {
      channels: {
        label: 'Channels to leave',
        description: 'Separate multiple channel names with commas',
        default: 'LookingForGroup',
      },
    },
    comments: {
      header: '[ Auto-Leave Channels on Login ]',
      delayNote: 'Default channels join over several seconds after login; check twice',
    },
  },
  'chat-editbox-top': {
    title: 'Move Chat Input Box to Top',
    description: 'Moves the chat EditBox from the bottom to the top of the chat frame so bottom-aligned chat boxes never push it off-screen.',
    tag: 'Free Layout',
    comments: {
      header: '[ Move Chat Input Box to Top ]',
      anchorNote: 'Anchor inside top edge of chat frame to avoid overlapping chat tabs (Leatrix Plus)',
    },
  },
};
