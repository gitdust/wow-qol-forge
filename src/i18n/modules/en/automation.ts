import { ModuleTranslation } from '../../types';

export const automationEn: Record<string, ModuleTranslation> = {
  'auto-repair': {
    title: 'Auto Repair Gear',
    description: 'Automatically repairs your gear when you talk to a repair vendor, with an option to use guild bank funds first.',
    details: 'Hold Shift when opening a merchant to skip. Falls back to personal gold if guild repair funds are insufficient.',
    tag: 'Essential',
    options: {
      guildRepair: {
        label: 'Prefer guild bank repair',
        description: 'Use guild bank repair funds first if your guild allows it',
      },
      showSummary: {
        label: 'Print repair cost in chat',
        description: 'Prints the total gold spent on repairs in chat',
      },
    },
    comments: {
      header: '[ Auto Repair Gear (Leatrix Plus) ]',
      guildFallbackNote: 'Use guild funds first; any remainder is covered by personal gold',
    },
    strings: {
      repairedMsg: '|cff00ff99[QoL]|r Gear repaired for: ',
    },
  },
  'auto-sell-junk': {
    title: 'Auto Sell Gray Junk',
    description: 'Automatically sells all poor-quality (gray) items when visiting a merchant to free up bag space.',
    details: 'Hold Shift to skip. Scans all bags in passes, stops cleanly if the vendor refuses or gold caps, and summarizes earnings.',
    tag: 'Essential',
    options: {
      showSummary: {
        label: 'Print gold earned in chat',
        description: 'Prints total gold earned from selling gray junk items',
      },
    },
    comments: {
      header: '[ Auto Sell Gray Junk (Leatrix Plus) ]',
      multiRoundNote: 'Bag slots shift after selling; scan every 0.2s up to 6 passes until clear (Leatrix Plus)',
      stopErrorNote: 'Stop immediately if vendor does not buy item or player hits gold cap',
    },
    strings: {
      soldMsg: '|cff00ff99[QoL]|r Sold gray junk for: ',
    },
  },
  'automate-quests': {
    title: 'Fast Quest Accept & Turn-In',
    description: 'Automatically accepts quests and turns in completed ones when talking to NPCs, pausing when you need to choose a reward.',
    details: 'Hold Shift to pause temporarily. Never auto-completes quests costing gold, currencies, crafting reagents, or account-bound items.',
    tag: 'Leveling',
    options: {
      autoAccept: {
        label: 'Auto accept quests',
        description: 'Automatically accept available daily, weekly, and regular quests',
      },
      autoComplete: {
        label: 'Auto turn-in quests',
        description: 'Automatically turn in completed quests with 0 or 1 reward',
      },
    },
    comments: {
      header: '[ Fast Quest Accept & Turn-In ]',
      accountBoundNote: 'Check if required item is Warband/Account-bound so it is never auto-spent',
      currencyNote: 'Skip auto turn-in for quests requiring currencies, reagents, or account-bound items (Leatrix Plus)',
      noAcceptNote: 'Auto-accept disabled',
      noCompleteNote: 'Auto-complete disabled',
    },
  },
  'automate-gossip': {
    title: 'Alt+Open Fast Single Gossip',
    description: 'Hold Alt when talking to an NPC to automatically pick a single gossip option when no quests are available or active.',
    details: 'Handy for repetitive flight masters, innkeepers, and dungeon/teleporter NPCs.',
    tag: 'Speed Up',
    comments: {
      header: '[ Alt+Open Fast Single Gossip (Leatrix Plus) ]',
      onlyGossipNote: 'Only auto-select when there is exactly 1 gossip option and no quests',
      fallbackNote: 'Fallback for gossip options without gossipOptionID (e.g. Court of Stars)',
    },
  },
  'faster-movie-skip': {
    title: 'Fast Cutscene & Movie Skip',
    description: 'Press Space, Esc, or Enter during in-game cinematics or pre-rendered movies to skip immediately without clicking the confirmation button.',
    details: 'Eliminates the secondary mouse confirmation click for faster dungeon runs and alt leveling.',
    tag: 'Smooth UX',
    comments: {
      header: '[ Fast Cutscene & Movie Skip (Space/Esc/Enter) ]',
    },
  },
  'easy-item-destroy': {
    title: 'Easy Item Destroy (No DELETE Typing)',
    description: 'Removes the requirement to type "DELETE" when destroying Rare or Epic items—just click Accept directly.',
    details: 'Displays the item link (or battle pet name and level) right in the delete confirmation dialog for safety.',
    tag: 'Minimal UX',
    comments: {
      header: '[ Easy Item Destroy (Leatrix Plus EasyItemDestroy) ]',
      lineNote: 'Line 2 of DELETE_GOOD_ITEM asks to type DELETE; strip it when hiding the input box',
      petNote: 'Format caged battle pets as "Name (Level N)"',
      dialogsNote: 'Delete popup may not be StaticPopup1 if another popup is visible; search by name',
      hideEditNote: 'Items requiring DELETE: hide input box and enable confirm button',
      appendLinkNote: 'Normal items: append item link to confirmation text',
    },
  },
  'auto-release-pvp': {
    title: 'Auto Release Spirit in BG & World PvP',
    description: 'Automatically releases spirit upon death inside Battlegrounds and World PvP zones (Wintergrasp, Tol Barad, Ashran).',
    details: 'Skips if you have Soulstone/Reincarnation available; hold Shift to cancel. Never active in Mythic+ or raids.',
    tag: 'PvP Tool',
    options: {
      excludeAlterac: {
        label: 'Exclude Alterac Valley',
        description: 'Do not auto-release in Alterac Valley',
      },
    },
    comments: {
      header: '[ Auto Release Spirit in BG & World PvP (Leatrix Plus) ]',
      worldPvpNote: 'World PvP map IDs: Wintergrasp, Tol Barad, Ashran, Stormshield, Warspear',
      alteracNote: 'Alterac Valley (classic & brawl) can be excluded via options',
    },
    strings: {
      cancelledMsg: '|cff00ff99[QoL]|r Auto spirit release cancelled',
    },
  },
  'auto-accept-res': {
    title: 'Auto Accept Resurrection Out of Combat',
    description: 'Automatically accepts incoming resurrections from groupmates without manual popup confirmation.',
    details: 'Never accepts while in combat when combat safety is enabled.',
    tag: 'QoL',
    options: {
      combatCheck: {
        label: 'Combat safety guard',
        description: 'Only auto-accept resurrection when neither you nor the caster is in combat',
      },
    },
    comments: {
      header: '[ Auto Accept Resurrection Out of Combat ]',
    },
  },
  'auto-accept-summon': {
    title: 'Auto Accept Summons (10s Delay)',
    description: 'Announces incoming Warlock/Meeting Stone summons in chat and accepts after 10 seconds out of combat unless cancelled.',
    details: 'Never triggers in combat so you can safely alt-tab while waiting for raid or Mythic+ summons.',
    tag: 'Party QoL',
    comments: {
      header: '[ Auto Accept Summons (Leatrix Plus, 10s delay) ]',
      confirmNote: 'Confirm only if summoner and destination remained unchanged and player is out of combat',
    },
    strings: {
      summonNoticeMsg: '|cff00ff99[QoL]|r Summon from %s (%s) will be accepted in 10s unless cancelled.',
    },
  },
  'dialog-key': {
    title: 'DialogKey (Space & 1-9 for NPC Dialogs)',
    description: 'Press Space to advance quests and NPC dialogs, and 1–9 (0 for 10th) to pick gossip options or quest rewards. Inactive during combat.',
    details: 'Ignored while holding modifiers. Popup guard keeps Space from accepting group invites, summons, duels, resurrections, or spirit releases.',
    tag: 'Questing MVP',
    options: {
      enableNumKeys: {
        label: 'Enable 1-9 keys for options & rewards',
        description: 'Press number keys to pick gossip options or multi-choice quest rewards',
      },
      safePopups: {
        label: 'Popup safety guard',
        description: 'Prevent Space from clicking party invites, summons, duels, res, or spirit release (prefers self-res)',
      },
    },
    comments: {
      header: '[ DialogKey (Space & 1-9 for NPC Dialogs) ]',
      blacklistNote: 'Popups Space should never click (built-in DialogKey blacklist)',
      selfResNote: 'Prefer second button for Soulstone/Reincarnation self-res; otherwise never auto-release',
      gossipButtonsNote: 'Collect visible clickable gossip/quest buttons sorted top-to-bottom',
      choiceNote: 'Track player-selected reward when multiple choices exist',
      combatNote: 'Cannot modify key propagation during combat lockdown; pass through',
      restorePropagateNote: 'Restore keyboard propagation before combat so Space is never swallowed',
    },
  },
  'auto-insert-keystone': {
    title: 'Automatically Insert Mythic Keystones',
    description: 'Automatically inserts the matching Mythic Keystone from your bags when you open the Font of Power.',
    details: 'Only inserts a keystone usable in the current dungeon; skips if already slotted or in combat.',
    tag: 'Mythic+',
    comments: {
      header: '[ Automatically Insert Mythic Keystones ]',
      openDelayNote: 'Wait a frame after Font opens so affix and keystone icons refresh cleanly',
      clearCursorNote: 'Return item to bag if slotting failed so the keystone does not stay on cursor',
    },
  },
  'train-all-button': {
    title: 'Trainer "Train All" Button',
    description: 'Adds a "Train All" button next to Train in class and profession trainer windows to learn all available skills in one click.',
    details: 'Hover to preview learnable count and total gold cost; disabled when nothing is available.',
    tag: 'Time Saver',
    comments: {
      header: '[ Trainer "Train All" Button ]',
      reverseOrderNote: 'Train from bottom to top so earlier service indices stay valid',
    },
    strings: {
      btnTrainAll: 'Train All',
      tooltipFmt: 'Train %d skill(s) for %s',
    },
  },
  'auto-combat-log': {
    title: 'Auto Combat Log in raids & Mythic+',
    description: 'Automatically starts combat logging (/combatlog) upon entering Raids or Mythic+ dungeons and stops when leaving.',
    details: 'Only stops logging if it was started by this module; prints status notices in chat.',
    tag: 'Raid Essential',
    options: {
      raid: { label: 'Enable in raids' },
      mythicPlus: { label: 'Enable in Mythic+' },
    },
    comments: {
      header: '[ Auto Combat Log in raids & Mythic+ ]',
      diffNote: 'Difficulty 8 = Mythic Keystone',
    },
    strings: {
      startedMsg: '|cff00ff99[QoL]|r Combat logging started automatically',
      stoppedMsg: '|cff00ff99[QoL]|r Combat logging stopped automatically',
    },
  },
};
