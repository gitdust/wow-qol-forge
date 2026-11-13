import { ModuleTranslation } from '../../types';

export const tooltipsEn: Record<string, ModuleTranslation> = {
  'id-tip': {
    title: 'Numeric Tooltip IDs (idTip)',
    description: 'Displays Spell, Aura, Item, Toy, NPC, Quest, Currency, Mount, Pet, and Achievement IDs at the bottom of tooltips.',
    details: 'Built on modern Retail TooltipDataProcessor and also hooks map task pins and quest log titles—great for Wowhead lookups, macros, and WeakAuras.',
    tag: 'Power User',
    options: {
      showSpell: { label: 'Show Spell IDs (incl. Auras/Pet spells)' },
      showItem: { label: 'Show Item IDs (incl. Toys)' },
      showNpc: { label: 'Show NPC/Mob IDs' },
      showQuest: { label: 'Show Quest IDs' },
      showCurrency: { label: 'Show Currency IDs' },
      showCollections: { label: 'Show Mount/Species/Achievement IDs' },
    },
    comments: {
      header: '[ Numeric Tooltip IDs (idTip) ]',
      dedupNote: 'Avoid adding the same ID line twice in one tooltip',
      questHookNote: 'Map quest POIs and quest log buttons do not go through TooltipDataProcessor',
    },
  },
  'enhance-tooltips': {
    title: 'Class-Colored Tooltips, Guild Rank & Target',
    description: 'Colors player names by class on unit tooltips and appends their guild rank and current target.',
    tag: 'Clear Info',
    comments: {
      header: '[ Class-Colored Tooltips, Guild Rank & Target (Leatrix Plus) ]',
      secretSkipNote: 'In restricted 12.x contexts (e.g. combat), unit tokens can be secret values; skip safely',
      safeFilterNote: 'Queries in restricted contexts may return secret values; filter through Safe()',
      classColorNote: 'Color player name by class',
      guildRankNote: 'Append guild rank to guild line',
      targetNote: 'Current target',
    },
    strings: {
      youLabel: '>> YOU <<',
      targetLabel: 'Target:',
    },
  },
  'transmog-status': {
    title: 'Transmog Collection Status Tooltip',
    description: 'Shows whether an armor or weapon appearance is already collected in your Warband wardrobe when hovered.',
    tag: 'Collectors',
    comments: {
      header: '[ Transmog Collection Status Tooltip (Can I Mog It Lite) ]',
      statusRuleNote: 'Exact sourceID known -> Collected; same appearance from another source -> Known from another item; otherwise Not collected',
    },
    strings: {
      collected: '|cff88ff88Collected|r',
      appearanceCollected: '|cffbbee88Collected (from another item)|r',
      notCollected: '|cffff5588Not collected|r',
      label: 'Transmog:',
    },
  },
  'tooltip-combat-hide': {
    title: 'Hide World Unit Tooltips in Combat',
    description: 'Hides unit tooltips when hovering mobs or players in the 3D world during combat so your view stays unobstructed.',
    details: 'Tooltips on spells, items, and unit frames remain visible. Optionally anchor world unit tooltips to your cursor.',
    tag: 'Clean Combat',
    options: {
      hideInCombat: { label: 'Hide world unit tooltips in combat' },
      shiftOverride: { label: 'Still show while holding Shift' },
      anchorCursor: {
        label: 'Anchor world unit tooltips to cursor',
        description: 'Shows world unit tooltips beside your cursor instead of the bottom-right corner',
      },
    },
    comments: {
      header: '[ Hide World Unit Tooltips in Combat ]',
      worldMotionNote: 'Enable mouse motion on WorldFrame to detect hovering 3D world units (same as Leatrix Plus)',
    },
  },
};
