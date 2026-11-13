import { ModuleTranslation } from '../../types';

export const inventoryEn: Record<string, ModuleTranslation> = {
  'buy-em-all': {
    title: 'Bulk Merchant Buying (BuyEmAll)',
    description:
      'Shift+Right-click a vendor item to open a custom quantity prompt with your maximum affordable/storable amount and buy in automatic batches.',
    details: 'Respects gold, free bag space (including reagent bag), and vendor stock; extended-cost or multi-pack items keep default behavior.',
    tag: 'Crafting',
    comments: {
      header: '[ Bulk Merchant Buying (BuyEmAll) ]',
      freeBagSpaceNote: 'Total bag capacity: free slots * stack size + remaining room in partial stacks (BuyEmAll GetFreeBagSpace)',
      goldOnlyNote: 'Handle single-unit gold items only; leave extended-cost or pre-stacked items untouched',
    },
    strings: {
      popupText: 'Buy %s\nMax available: %d (limited by gold, bag space & stock)',
      insufficientMsg: 'Not enough gold or bag space to buy',
    },
  },
  'already-known': {
    title: 'Highlight Already Known Recipes & Collectibles',
    description: 'Tints known recipes, patterns, mounts, pets, and toys green at merchants, the Auction House, and the Guild Bank.',
    details: 'See at a glance which recipes or collectibles you already own so you never buy duplicates.',
    tag: 'Collectors',
    comments: {
      header: '[ Highlight Already Known Recipes & Collectibles (AlreadyKnown) ]',
      cagedPetNote: 'Caged battle pets',
      knownTooltipNote: 'Recipes/patterns: look for ITEM_SPELL_KNOWN in tooltip',
      merchantNote: 'Merchant',
      ahNote: 'Auction House browse list',
      guildBankNote: 'Guild Bank',
      guildBankConstNote: 'Internal Guild Bank UI constants (98 slots per tab, 14 per column)',
    },
  },
  'durability-status': {
    title: 'Character Sheet Durability Summary',
    description: 'Shows total gear durability percentage in the bottom-right corner of the Character Frame with a per-slot tooltip breakdown, plus a chat reminder on death.',
    tag: 'Basic QoL',
    comments: {
      header: '[ Character Sheet Durability Summary (Leatrix Plus) ]',
      getDurabilityNote: 'Return total durability percentage and per-slot breakdown; nil if no durable gear equipped',
      buttonNote: 'Durability label in the bottom-right of PaperDollFrame with breakdown on hover',
      deathNoticeNote: 'Print durability in chat on death (throttled to once per 2s)',
    },
    strings: {
      labelPrefix: 'Durability ',
      tooltipTitle: 'Gear Durability',
      tooltipTotal: 'Total',
      deathMsg: '|cffff9900[QoL]|r Current gear durability: ',
    },
  },
  'hide-cleanup-buttons': {
    title: 'Hide Bag & Bank Clean-Up Buttons',
    description: 'Hides Blizzard’s native "Clean Up Bags" and "Clean Up Bank" broom icons to prevent accidentally scrambling your bag layout.',
    tag: 'Misclick Guard',
    comments: {
      header: '[ Hide Bag & Bank Clean-Up Buttons ]',
      hideNote: 'Hide immediately on show (Leatrix Plus); Retail 12.x bank sort button is BankPanel.AutoSortButton',
    },
  },
  'quest-item-destroy-info': {
    title: 'Quest Info Before Destroying Quest Items',
    description: 'Prints the linked quest name and whether you have accepted it in chat whenever you attempt to delete a quest-related item.',
    details: 'Helps prevent accidentally deleting active quest items or quest-starting items.',
    tag: 'Misclick Guard',
    comments: {
      header: '[ Quest Info Before Destroying Quest Items ]',
    },
    strings: {
      questFallback: 'Quest ',
      stateActive: 'in your quest log',
      stateStarter: 'not yet accepted—this item starts a quest',
      warnRelated: '|cffff5555[QoL] Warning:|r This item is related to quest "%s" (%s)',
      warnGeneric: '|cffff5555[QoL] Warning:|r This is a quest item and may need to be reacquired if destroyed',
    },
  },
  'auto-restock': {
    title: 'Auto-Restock at Merchants',
    description: 'Automatically tops up consumables or reagents to your target quantities when opening a merchant (e.g. "Conjured Water=40").',
    details: 'Accepts exact item names or item IDs. Only buys single-unit gold items, respecting gold, bag space, and vendor stock.',
    tag: 'Time Saver',
    options: {
      items: {
        label: 'Restock list',
        description: 'Format "ItemNameOrID=TargetCount", separated by commas/semicolons, e.g. Refreshing Spring Water=40, 113509=20',
      },
      showSummary: { label: 'Print restock summary in chat' },
    },
    comments: {
      header: '[ Auto-Restock at Merchants (Restocker) ]',
      parseListNote: 'Parse "ItemOrID=Count" rules; split on ASCII "=" and normalize separators',
      freeBagSpaceNote: 'Compute free bag capacity: empty slots * stack size + partial stack space',
      goldOnlyNote: 'Buy only single-unit gold-priced items',
      delayNote: 'Merchant item data finishes populating a frame after MERCHANT_SHOW',
    },
    strings: {
      summaryMsg: '|cff00ff99[QoL]|r Auto-restocked: %s (spent %s)',
      listSep: ', ',
    },
  },
};
