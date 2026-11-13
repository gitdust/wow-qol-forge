import { ModuleTranslation } from '../../types';

export const systemEn: Record<string, ModuleTranslation> = {
  'mute-annoying-sounds': {
    title: 'Mute Annoying Mount & Game Sounds',
    description: 'Selectively mutes /train whistles, gyrocopter mounts, mechanical mount footsteps, city chimes, and other repetitive noises.',
    details: 'Uses Blizzard’s official MuteSoundFile API with Leatrix Plus (Midnight) sound IDs without affecting normal game audio.',
    tag: 'Ear Saver',
    options: {
      muteTrains: { label: 'Train emotes', description: 'Player /train whistle sound effects' },
      muteGyrocopters: {
        label: 'Gyrocopters & flying machines',
        description: 'Engine roar from Mimiron’s Head, Mecha-Mogul, and similar mounts',
      },
      muteMechSteps: { label: 'Mechanical mount footsteps', description: 'Metallic clanking from mechanostriders and mech suits' },
      muteChimes: { label: 'Hourly chimes', description: 'Capital city clock tower chimes' },
      muteFizzle: { label: 'Spell fizzle', description: 'Fizzle sound on failed or interrupted casts' },
      muteSniffing: { label: 'Worgen sniffing', description: 'Repetitive Worgen idle sniffing sounds' },
      muteYawns: { label: 'Hunter cat yawns', description: 'Hunter feline pet yawning sounds' },
    },
    comments: {
      header: '[ Mute Annoying Sounds (Leatrix Plus Mute) ]',
      applyNote: 'Mute checked groups and unmute unchecked ones (unmuting non-muted IDs is a safe no-op)',
    },
  },
  'silence-rested-emotes': {
    title: 'Silence Emote Sounds in Rested Areas',
    description: 'Automatically mutes repetitive /laugh, /cry, and /chicken emote audio while resting in inns or capital cities, and restores it outside.',
    tag: 'Peace & Quiet',
    comments: {
      header: '[ Silence Emote Sounds in Rested Areas ]',
      cvarNote: 'Disable Sound_EnableEmoteSounds while resting and restore when leaving; only revert changes made by us',
      restoreNote: 'Restore before logout/zone change since CVar changes persist to config',
    },
  },
  'disable-screen-glow': {
    title: 'Disable Full-Screen Glow & Drunk Blur',
    description: 'Turns off excessive FFX Glow and drunken camera blur effects for cleaner, crisper visuals.',
    tag: 'Eye Comfort',
    comments: {
      header: '[ Disable Full-Screen Glow & Drunk Blur ]',
    },
  },
  'combat-nameplates': {
    title: 'Auto-Show Enemy Nameplates in Combat',
    description: 'Automatically enables enemy nameplates when entering combat and hides them out of combat for a clean open-world view.',
    tag: 'Smart UI',
    comments: {
      header: '[ Auto-Show Enemy Nameplates in Combat ]',
    },
  },
  'keep-audio-synced': {
    title: 'Auto-Sync Audio Output Device Changes',
    description: 'Automatically switches WoW audio to your new default Windows/macOS device when plugging in headphones or switching Bluetooth.',
    tag: 'System QoL',
    comments: {
      header: '[ Auto-Sync Audio Output Device Changes ]',
      syncNote: 'Switch back to system default output device and restart sound engine on device change',
      cinematicNote: 'Avoid restarting audio mid-cinematic; defer until playback finishes',
    },
  },
  'flash-taskbar': {
    title: 'Taskbar Flash on Queues, Ready Checks & Whispers',
    description: 'Flashes your taskbar icon (and optionally plays a ready check chime) while tabbed out whenever queues pop, ready checks start, or whispers arrive.',
    tag: 'Alt-Tab Safe',
    options: {
      playSound: {
        label: 'Play alert sound',
        description: 'Plays the ready check sound on the Master channel when flashing',
      },
      flashOnWhisper: {
        label: 'Flash taskbar on whispers',
        description: 'Flash on character or Battle.net whispers without extra sound',
      },
    },
    comments: {
      header: '[ Taskbar Flash on Queues & Whispers (FlashTaskBar) ]',
      whisperNote: 'Whispers: check event arrival only without reading message text (restricted in instances)',
      readyCheckNote: 'Ready check / Dungeon proposal / Resurrection / Summon',
      battlefieldNote: 'Battleground / Arena enter confirmation',
      lfgHookNote: 'Premade Group invite dialog (FlashTaskBar LFGListInviteDialog_Show hook)',
    },
  },
  'talent-ready-check': {
    title: 'Print Active Talent Loadout on Ready Check',
    description: 'Prints your current talent loadout name in chat during Ready Checks so you never pull a boss in open-world talents.',
    details: 'Optionally list expected loadout names (comma-separated) to warn in red and play a raid warning sound on mismatch.',
    tag: 'Raid Check',
    options: {
      expectedNames: {
        label: 'Expected loadout names',
        description: 'Leave blank to only print current loadout; separate multiple valid names with commas',
      },
      playSound: { label: 'Play alarm sound on mismatch' },
    },
    comments: {
      header: '[ Print Active Talent Loadout on Ready Check ]',
    },
    strings: {
      starterBuild: 'Starter Build',
      unsavedBuild: 'Unsaved Loadout',
      currentMsg: '|cff00ff99[QoL]|r Active talent loadout: |cffffd100%s|r',
      mismatchMsg: '|cffff5555[QoL] Wrong talent loadout!|r Current: %s, Expected: %s',
    },
  },
  'cvar-tweaks': {
    title: 'Apply Common Hidden CVar Settings',
    description: 'Automatically applies selected hidden client CVars on login across every alt (auto dismount in flight, loot at cursor, no tutorials, etc.).',
    details: 'Unchecked entries leave your existing in-game CVar settings completely untouched.',
    tag: 'Alt Sync',
    options: {
      autoDismountFlying: { label: 'Auto dismount when casting in flight' },
      noMapFade: { label: 'Disable world map fade while moving' },
      lootUnderMouse: { label: 'Open loot window at cursor' },
      noTutorials: { label: 'Disable tutorial popups' },
      noErrorSpeech: { label: 'Disable character error speech ("I can’t do that")' },
      alwaysCompare: { label: 'Always compare gear in tooltips' },
    },
    comments: {
      header: '[ Apply Common Hidden CVar Settings ]',
      tableNote: '{ optionKey, CVar, valueWhenChecked }; unchecked options leave existing settings untouched',
    },
  },
  'great-vault-reminder': {
    title: 'Great Vault Reward Reminder',
    description: 'Reminds you once per login/reload in chat (and optionally center-screen) when unclaimed Great Vault rewards are waiting.',
    details: 'Alerts you immediately upon logging in rather than only inside the Mythic+ UI.',
    tag: 'Weekly',
    options: {
      showCenter: {
        label: 'Show center-screen alert',
        description: 'Display a one-time raid-warning style reminder on screen',
      },
      playSound: { label: 'Play reminder sound' },
    },
    comments: {
      header: '[ Great Vault Reward Reminder ]',
      skipShownNote: 'Skip if the player already has the Great Vault window open',
      delayNote: 'Weekly reward data arrives slightly after login; check after login and on WEEKLY_REWARDS_UPDATE',
    },
    strings: {
      reminderMsg: 'You have unclaimed rewards waiting in the Great Vault!',
    },
  },
};
