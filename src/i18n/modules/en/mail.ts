import { ModuleTranslation } from '../../types';

export const mailEn: Record<string, ModuleTranslation> = {
  'postal-open-all': {
    title: 'Open All Mail (Open All)',
    description: 'Adds an "Open All" button to the mailbox to automatically collect gold and item attachments from all messages.',
    details: 'Distilled from Postal’s core queue loop: stops safely if bags fill up, prints a gold summary, and can be interrupted anytime by clicking again.',
    tag: 'Must-Have',
    options: {
      skipAH: {
        label: 'Skip Auction House mail',
        description: 'Only collect player mail and leave Auction House mail untouched',
      },
    },
    comments: {
      header: '[ Open All Mail (Postal OpenAll) ]',
      ahPatternNote: 'Detect Auction House mail via Blizzard localized subject strings (same as Postal)',
      retryNote: 'If the same slot stops changing, collection failed (full bags/unique item); abort instead of looping',
    },
    strings: {
      btnOpenAll: 'Open All',
      btnStop: 'Stop',
      earnedPrefix: ', collected ',
      logPrefix: '|cff00ff99[QoL Mail]|r ',
      stopFailed: 'Unable to loot remaining mail (bags full or unique item), stopped',
      stopMorePages: 'Page cleared; %d more mail items not yet loaded—reopen mailbox shortly',
      stopDone: 'All mail with items or gold has been collected',
      stopAborted: 'Mail collection cancelled',
      stopClosed: 'Mailbox closed, stopped',
      stopBagFull: 'Inventory full, stopped collecting mail',
    },
  },
  'postal-express': {
    title: 'Express Mail Shortcuts (Shift/Alt)',
    description:
      'Hold Shift and click inbox mail to loot attachments instantly, Ctrl-click to return mail, or Alt-click bag items while composing to attach them right away.',
    details: 'Ideal for mailing consumables, gems, and reagents between alts without tedious dragging.',
    tag: 'Fast Action',
    comments: {
      header: '[ Express Mail Shortcuts (Postal Express) ]',
      inboxNote: 'Inbox: modified clicks route via InboxFrame_OnModifiedClick, plain clicks via InboxFrame_OnClick',
      sendNote: 'Compose: Alt+LeftClick bag item attaches it (Retail routes through HandleModifiedItemClick)',
    },
  },
  'postal-trade-block': {
    title: 'Block Trades at Mailbox',
    description: 'Automatically declines incoming player trade requests while your mailbox is open, and restores your setting when closed.',
    details: 'Prevents accidental trade window interruptions while sorting gold or mail in crowded cities.',
    tag: 'Anti-Spam',
    comments: {
      header: '[ Block Trades at Mailbox (Postal TradeBlock) ]',
    },
  },
  'postal-wire': {
    title: 'One-Click Send All Gold (Wire)',
    description:
      'Adds an "All" button on the Send Mail tab to fill all your character’s gold (minus postage) and auto-fills empty subjects with the amount sent.',
    details: 'Saves typing when funneling gold between alts and makes gold transfers clear at a glance in the inbox.',
    tag: 'Gold Helper',
    options: {
      fillSubject: {
        label: 'Auto-fill subject with amount',
        description: 'Writes the gold amount (e.g. [100g 0s 0c]) into empty subjects automatically',
      },
    },
    comments: {
      header: '[ One-Click Send All Gold (Postal Wire) ]',
    },
    strings: {
      btnAll: 'All',
    },
  },
};
