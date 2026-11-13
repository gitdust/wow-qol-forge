import { ModuleTranslation } from '../../types';

export const tooltipsDe: Record<string, ModuleTranslation> = {
  'id-tip': {
    title: 'Numerische Tooltip-IDs (idTip)',
    description: 'Zeigt Zauber-, Aura-, Gegenstands-, Spielzeug-, NSC-, Quest-, Währungs-, Reittier-, Haustier- und Erfolgs-IDs im Tooltip an.',
    details: 'Basierend auf Blizzards modernem TooltipDataProcessor inkl. Karten-Questpins und Questlog.',
    tag: 'Profi-Tool',
    options: {
      showSpell: { label: 'Zauber-IDs anzeigen (inkl. Auren/Begleiter)' },
      showItem: { label: 'Gegenstands-IDs anzeigen (inkl. Spielzeuge)' },
      showNpc: { label: 'NSC-/Gegner-IDs anzeigen' },
      showQuest: { label: 'Quest-IDs anzeigen' },
      showCurrency: { label: 'Währungs-IDs anzeigen' },
      showCollections: { label: 'Reittier-/Haustier-/Erfolgs-IDs anzeigen' },
    },
    comments: {
      header: '[ Numerische Tooltip-IDs (idTip) ]',
      dedupNote: 'Dieselbe ID-Zeile in einem Tooltip nicht doppelt hinzufügen',
      questHookNote: 'Karten-Quest-POIs und Questlog-Buttons laufen nicht über TooltipDataProcessor',
    },
  },
  'enhance-tooltips': {
    title: 'Klassenfarben, Gildenrang & Ziel im Tooltip',
    description: 'Färbt Spielernamen im Einheiten-Tooltip nach Klasse und ergänzt Gildenrang sowie aktuelles Ziel.',
    tag: 'Klare Info',
    comments: {
      header: '[ Klassenfarben, Gildenrang & Ziel im Tooltip (Leatrix Plus) ]',
      secretSkipNote: 'In eingeschränkten 12.x-Kontexten können Unit-Tokens geheim sein; sicher überspringen',
      safeFilterNote: 'Abfragen können geheime Werte liefern; über Safe() filtern',
      classColorNote: 'Spielernamen nach Klasse färben',
      guildRankNote: 'Gildenrang an die Gildenzeile anhängen',
      targetNote: 'Aktuelles Ziel',
    },
    strings: {
      youLabel: '>> DU <<',
      targetLabel: 'Ziel:',
    },
  },
  'transmog-status': {
    title: 'Transmog-Sammlungsstatus im Tooltip',
    description: 'Zeigt unten im Tooltip von Rüstung oder Waffen an, ob die Vorlage bereits zur Sammlung deiner Kriegsmeute gehört.',
    tag: 'Sammler',
    comments: {
      header: '[ Transmog-Sammlungsstatus im Tooltip (Can I Mog It Lite) ]',
      statusRuleNote: 'Exakte sourceID bekannt -> Gesammelt; gleiches Aussehen von anderem Item -> Vorlage bekannt; sonst Nicht gesammelt',
    },
    strings: {
      collected: '|cff88ff88Gesammelt|r',
      appearanceCollected: '|cffbbee88Vorlage gesammelt (anderer Gegenstand)|r',
      notCollected: '|cffff5588Nicht gesammelt|r',
      label: 'Transmog:',
    },
  },
  'tooltip-combat-hide': {
    title: 'Welt-Einheiten-Tooltips im Kampf ausblenden',
    description: 'Blendet Tooltips von Gegnern und Spielern in der 3D-Welt während des Kampfes aus, um freie Sicht zu behalten.',
    details: 'Tooltips auf Zaubern, Items und Einheitenfenstern bleiben erhalten. Optional am Mauszeiger verankerbar.',
    tag: 'Sauberer Kampf',
    options: {
      hideInCombat: { label: 'Welt-Einheiten-Tooltips im Kampf ausblenden' },
      shiftOverride: { label: 'Mit gedrückter Shift-Taste anzeigen' },
      anchorCursor: {
        label: 'Welt-Einheiten-Tooltips am Mauszeiger',
        description: 'Zeigt Tooltips von Einheiten in der Welt direkt neben dem Mauszeiger',
      },
    },
    comments: {
      header: '[ Welt-Einheiten-Tooltips im Kampf ausblenden ]',
      worldMotionNote: 'Mausbewegung auf WorldFrame aktivieren, um Einheiten in der 3D-Welt zu erkennen',
    },
  },
};
