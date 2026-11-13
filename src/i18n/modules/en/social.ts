import { ModuleTranslation } from '../../types';

export const socialEn: Record<string, ModuleTranslation> = {
  'accept-party-friends': {
    title: 'Auto Accept Friend & Guild Party Invites',
    description: 'Automatically accepts group invitations from Battle.net friends, character friends, and guild members.',
    details: 'Never miss an invite while tabbed out. Automatically pauses if you are already in an LFG queue.',
    tag: 'Social QoL',
    comments: {
      header: '[ Auto Accept Friend & Guild Party Invites ]',
      popupNote: 'Mark inviteAccepted before hiding popup so OnHide does not decline the invite',
    },
  },
  'alt-click-invite': {
    title: 'Alt+Click Player Name to Invite',
    description: 'Hold Alt and Left-click any player name in chat to immediately invite them to your group.',
    details: 'Skips the right-click context menu when forming Mythic+, raid, or pug groups.',
    tag: 'Group Tool',
    comments: {
      header: '[ Alt+Click Player Name to Invite ]',
    },
  },
  'invite-from-whisper': {
    title: 'Auto Invite by Whisper Keyword',
    description: 'Automatically invites anyone who whispers a specific keyword (such as "111" or "inv") when you are solo, the group leader, or a raid assistant.',
    details: 'Handy when forming groups for guild raids, world bosses, or Mythic+ without typing invites manually.',
    tag: 'Group Lead',
    options: {
      keyword: { label: 'Whisper invite keyword' },
    },
    comments: {
      header: '[ Auto Invite by Whisper Keyword ]',
    },
  },
  'block-duel-requests': {
    title: 'Auto Decline Stranger Duel Requests',
    description: 'Automatically declines duel requests from strangers while allowing friends and guildmates.',
    details: 'Prevents unwanted duel spam while idling in cities or questing.',
    tag: 'Anti-Spam',
    comments: {
      header: '[ Auto Decline Stranger Duel Requests ]',
    },
  },
  'block-pet-duels': {
    title: 'Auto Decline Pet Battle Duels',
    description: 'Automatically declines PvP pet battle duel requests from non-friends and non-guildmates.',
    tag: 'Anti-Spam',
    comments: {
      header: '[ Auto Decline Pet Battle Duels ]',
    },
  },
  'block-party-invites': {
    title: 'Block Stranger Party Invites',
    description: 'Automatically declines group invitations from players who are not friends or guild members.',
    tag: 'Spam Filter',
    comments: {
      header: '[ Block Stranger Party Invites ]',
    },
  },
  'block-social-requests': {
    title: 'Auto Decline B.net Friend & Guild Invites',
    description: 'Automatically declines incoming Battle.net friend requests and guild invites from strangers (friends exempted), printing a count in chat.',
    details: 'Guild invites from character or Battle.net friends are still allowed. Toggle each option separately.',
    tag: 'Anti-Spam',
    options: {
      friendRequests: { label: 'Decline Battle.net friend requests' },
      guildInvites: { label: 'Decline guild invites (except friends)' },
    },
    comments: {
      header: '[ Auto Decline B.net Friend & Guild Invites ]',
      guildPopupNote: 'Wait for Blizzard invite frame to show then hide it; OnHide calls DeclineGuild',
    },
    strings: {
      declinedFriendsMsg: '|cff00ff99[QoL]|r Auto-declined %d Battle.net friend request(s)',
      declinedGuildMsg: '|cff00ff99[QoL]|r Auto-declined a guild invitation',
    },
  },
  'auto-confirm-role': {
    title: 'Auto Confirm LFG Role Check',
    description: 'Automatically confirms the dungeon/raid finder role check popup using your previously selected roles.',
    details: 'Only confirms when a valid role is checked; hold Shift to skip. By default only triggers if the leader is a friend or guildmate.',
    tag: 'Fast Queue',
    options: {
      friendLeaderOnly: {
        label: 'Only when leader is friend/guildmate',
        description: 'Disable to auto-confirm role checks from any group leader',
      },
    },
    comments: {
      header: '[ Auto Confirm LFG Role Check ]',
      delayNote: 'Wait a frame for popup button state to update; button is disabled if no role is selected',
    },
  },
  'safe-queue': {
    title: 'SafeQueue & PvP Queue Timer',
    description: 'Hides the "Leave Queue" button on BG/Arena ready popups to prevent accidental clicks, centers Enter, and shows color-coded time left.',
    tag: 'PvP & Instance',
    options: {
      announceWaitTime: {
        label: 'Print queue wait time in chat',
        description: 'Announces how long your PvP queue took when a match pops',
      },
    },
    comments: {
      header: '[ SafeQueue & PvP Queue Timer (SafeQueue) ]',
      hideLeaveNote: 'Hide leave button to prevent accidental queue drops',
      waitTimeNote: 'Report queue duration using server-tracked wait time so late loads stay accurate',
    },
    strings: {
      remainingLabel: 'Time left: ',
      waitTimeMsg: '|cff33ff99[SafeQueue]|r Match ready! Queue wait time: %02dm %02ds',
    },
  },
  'copy-player-name': {
    title: 'Copy Player Name via Right-Click Menu',
    description: 'Uses WoW 12.x modern Menu API to add a "Copy Name" button when right-clicking player names in chat or unit frames.',
    tag: 'Fast Action',
    comments: {
      header: '[ Copy Player Name via Right-Click Menu (Modern Menu API) ]',
    },
    strings: {
      copyPrefix: '|cff00ff00[Copy Name]|r ',
    },
  },
  'lfg-double-click-signup': {
    title: 'Double-Click to Sign Up in Premade Groups',
    description: 'Double-click any listing in the Premade Groups search list to sign up directly without clicking the Sign Up button.',
    details: 'Can skip the application dialog if roles are already selected; hold Shift while double-clicking to open the dialog.',
    tag: 'Fast Queue',
    options: {
      skipDialog: {
        label: 'Skip dialog when roles are selected',
        description: 'Submits immediately with checked roles; hold Shift to force showing the dialog',
      },
    },
    comments: {
      header: '[ Double-Click to Sign Up in Premade Groups ]',
      skipNote: 'Auto-submit when SignUpButton is enabled unless Shift is held',
    },
  },
  'guild-motd-login': {
    title: 'Reprint Guild MOTD on Login',
    description: 'Reprints the Guild Message of the Day a few seconds after login so it is not buried in login chat spam.',
    tag: 'Guild QoL',
    comments: {
      header: '[ Reprint Guild MOTD on Login ]',
    },
    strings: {
      motdPrefix: '|cff40ff40[Guild MOTD]|r ',
    },
  },
};
