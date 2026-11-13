import { ModuleTranslation } from '../../types';

export const automationDe: Record<string, ModuleTranslation> = {
  'auto-repair': {
    title: 'Ausrüstung automatisch reparieren',
    description: 'Repariert beim Öffnen eines Reparaturhändlers automatisch die gesamte Ausrüstung (optional bevorzugt über die Gildenbank).',
    details: 'Shift beim Ansprechen gedrückt halten zum Überspringen.',
    tag: 'Unverzichtbar',
    options: {
      guildRepair: {
        label: 'Gildenbank-Reparatur bevorzugen',
        description: 'Nutzt zuerst das Gildenreparatur-Budget, sofern verfügbar',
      },
      showSummary: {
        label: 'Reparaturkosten im Chat ausgeben',
        description: 'Zeigt die entstandenen Reparaturkosten im Chat an',
      },
    },
    comments: {
      header: '[ Ausrüstung automatisch reparieren (Leatrix Plus) ]',
      guildFallbackNote: 'Zuerst Gildengold nutzen; Restbetrag vom Charakter bezahlen',
    },
    strings: {
      repairedMsg: '|cff00ff99[QoL]|r Ausrüstung repariert für: ',
    },
  },
  'auto-sell-junk': {
    title: 'Grauen Plunder automatisch verkaufen',
    description: 'Verkauft bei Händlerbesuch sofort alle grauen Gegenstände und schafft Platz in den Taschen.',
    details: 'Shift gedrückt halten zum Pausieren. Scannt alle Taschen in mehreren Durchläufen und meldet den Erlös.',
    tag: 'Unverzichtbar',
    options: {
      showSummary: {
        label: 'Erlös im Chat zusammenfassen',
        description: 'Gibt das insgesamt eingenommene Gold im Chat aus',
      },
    },
    comments: {
      header: '[ Grauen Plunder automatisch verkaufen (Leatrix Plus) ]',
      multiRoundNote: 'Plätze verschieben sich beim Verkauf; alle 0,2s bis zu 6 Runden scannen',
      stopErrorNote: 'Sofort stoppen, falls Händler Item ablehnt oder Goldlimit erreicht ist',
    },
    strings: {
      soldMsg: '|cff00ff99[QoL]|r Grauen Plunder verkauft für: ',
    },
  },
  'automate-quests': {
    title: 'Quests schnell annehmen & abgeben',
    description: 'Nimmt Quests automatisch an und gibt fertige Quests ab; stoppt bei mehreren Belohnungsoptionen.',
    details: 'Shift zum Pausieren halten. Quests mit Gold-, Währungs-, Handwerksmaterial- oder Accountgebundenen-Kosten werden nicht automatisch abgegeben.',
    tag: 'Level-Turbo',
    options: {
      autoAccept: {
        label: 'Quests automatisch annehmen',
        description: 'Tägliche, wöchentliche und normale Quests automatisch annehmen',
      },
      autoComplete: {
        label: 'Quests automatisch abgeben',
        description: 'Bei 0 oder 1 fester Belohnung automatisch abschließen',
      },
    },
    comments: {
      header: '[ Quests schnell annehmen & abgeben ]',
      accountBoundNote: 'Prüfen, ob ein benötigtes Item kriegsmeute-/accountgebunden ist',
      currencyNote: 'Quests mit Währungen, Reagenzien oder accountgebundenen Items nie automatisch abgeben',
      noAcceptNote: 'Automatisches Annehmen deaktiviert',
      noCompleteNote: 'Automatisches Abgeben deaktiviert',
    },
  },
  'automate-gossip': {
    title: 'Alt+Dialog: Einzelne Gesprächsoption wählen',
    description: 'Halte Alt beim Ansprechen eines NSCs, um eine einzelne Gesprächsoption direkt auszuwählen.',
    details: 'Praktisch für Flugmeister, Gastwirte und Teleport-NSCs.',
    tag: 'Tempo-Boost',
    comments: {
      header: '[ Alt+Dialog: Einzelne Gesprächsoption wählen (Leatrix Plus) ]',
      onlyGossipNote: 'Nur wählen, wenn genau 1 Option und keine Quests vorliegen',
      fallbackNote: 'Fallback für Optionen ohne gossipOptionID',
    },
  },
  'faster-movie-skip': {
    title: 'Zwischensequenzen per Taste überspringen',
    description: 'Überspringt Ingame-Sequenzen und Videos direkt mit Leertaste, Esc oder Enter ohne Bestätigungsklick.',
    details: 'Spart Zeit beim Leveln und in Dungeons.',
    tag: 'Flüssiges UX',
    comments: {
      header: '[ Zwischensequenzen per Taste überspringen (Space/Esc/Enter) ]',
    },
  },
  'easy-item-destroy': {
    title: 'Einfaches Zerstören (kein LÖSCHEN tippen)',
    description: 'Entfernt die Pflicht, "LÖSCHEN" bzw. "DELETE" beim Zerstören seltener/epischer Gegenstände einzutippen.',
    details: 'Zeigt aus Sicherheitsgründen den Item-Link (bzw. Kampfhaustier-Namen & Level) direkt im Dialog an.',
    tag: 'Minimal-UX',
    comments: {
      header: '[ Einfaches Zerstören (Leatrix Plus EasyItemDestroy) ]',
      lineNote: 'Zweite Zeile von DELETE_GOOD_ITEM fordert Texteingabe; mit dem Eingabefeld entfernen',
      petNote: 'Eingesperrte Kampfhaustiere als "Name (Stufe N)" anzeigen',
      dialogsNote: 'Löschdialog nach Namen suchen, falls andere Popups offen sind',
      hideEditNote: 'Eingabefeld ausblenden und Bestätigen-Button freischalten',
      appendLinkNote: 'Normale Items: Gegenstandslink an Text anhängen',
    },
  },
  'auto-release-pvp': {
    title: 'Geist in Schlachtfeldern & Welt-PvP freilassen',
    description: 'Lässt beim Tod auf Schlachtfeldern sowie in Welt-PvP-Zonen (Tausendwinter, Tol Barad, Ashran) automatisch den Geist frei.',
    details: 'Pausiert bei Seelenstein/Reinkarnation; Shift zum Abbrechen halten.',
    tag: 'PvP-Helfer',
    options: {
      excludeAlterac: {
        label: 'Alteractal ausschließen',
        description: 'Im Alteractal nicht automatisch freilassen',
      },
    },
    comments: {
      header: '[ Geist in Schlachtfeldern & Welt-PvP freilassen (Leatrix Plus) ]',
      worldPvpNote: 'Welt-PvP-Karten-IDs: Tausendwinter, Tol Barad, Ashran, Sturmschild, Kriegsspeer',
      alteracNote: 'Alteractal (klassisch & Rauferei) optional ausschließen',
    },
    strings: {
      cancelledMsg: '|cff00ff99[QoL]|r Automatisches Geistfreilassen abgebrochen',
    },
  },
  'auto-accept-res': {
    title: 'Wiederbelebung außerhalb des Kampfes annehmen',
    description: 'Nimmt Wiederbelebungen durch Gruppenmitglieder automatisch ohne Klick an.',
    details: 'Nimmt im Kampf niemals an, wenn der Kampfschutz aktiv ist.',
    tag: 'Komfort',
    options: {
      combatCheck: {
        label: 'Kampfschutz',
        description: 'Nur annehmen, wenn weder du noch der Zaubernde im Kampf ist',
      },
    },
    comments: {
      header: '[ Wiederbelebung außerhalb des Kampfes annehmen ]',
    },
  },
  'auto-accept-summon': {
    title: 'Beschwörungen automatisch annehmen (10s)',
    description: 'Kündigt Hexenmeister-/Versammlungsstein-Beschwörungen im Chat an und nimmt nach 10 Sekunden außerhalb des Kampfes an.',
    details: 'Lässt sich während der 10 Sekunden jederzeit im Dialog abbrechen.',
    tag: 'Gruppen-QoL',
    comments: {
      header: '[ Beschwörungen automatisch annehmen (Leatrix Plus, 10s) ]',
      confirmNote: 'Nur bestätigen, wenn Beschwörer/Ziel unverändert und Spieler kampffrei ist',
    },
    strings: {
      summonNoticeMsg: '|cff00ff99[QoL]|r Beschwörung von %s (%s) wird in 10 Sek. angenommen, falls nicht abgebrochen.',
    },
  },
  'dialog-key': {
    title: 'DialogKey (Leertaste & 1-9 für NSC-Dialoge)',
    description: 'Drücke die Leertaste für Quests/Dialoge und 1–9 (0 = 10.) für Optionen oder Questbelohnungen. Im Kampf inaktiv.',
    details: 'Mit Modifikatortasten ignoriert. Sicherheitsfilter schützt vor versehentlichem Annehmen von Einladungen, Duellen oder Geistfreilassen.',
    tag: 'Quest-MVP',
    options: {
      enableNumKeys: {
        label: 'Zifferntasten 1-9 für Optionen & Belohnungen',
        description: 'Gesprächsoptionen oder Mehrfachbelohnungen per Zifferntaste wählen',
      },
      safePopups: {
        label: 'Popup-Sicherheitsschutz',
        description: 'Leertaste klickt keine Einladungen, Beschwörungen, Duelle oder Geistfreilassen (bevorzugt Selbst-Rezz)',
      },
    },
    comments: {
      header: '[ DialogKey (Leertaste & 1-9 für NSC-Dialoge) ]',
      blacklistNote: 'Popups auf der DialogKey-Blacklist, die nie per Leertaste geklickt werden',
      selfResNote: 'Bei Seelenstein/Reinkarnation zweiten Button nutzen, sonst nie freilassen',
      gossipButtonsNote: 'Sichtbare Dialog-/Quest-Buttons von oben nach unten sammeln',
      choiceNote: 'Vom Spieler angeklickte Belohnung bei Auswahlquests merken',
      combatNote: 'Tastenweitergabe im Kampf nicht veränderbar; durchreichen',
      restorePropagateNote: 'Tastenweitergabe vor Kampfbeginn wiederherstellen',
    },
  },
  'auto-insert-keystone': {
    title: 'Mythisch+-Schlüsselstein automatisch einsetzen',
    description: 'Setzt beim Öffnen des Brunnens der Macht automatisch den passenden Schlüsselstein aus deinen Taschen ein.',
    details: 'Überspringt im Kampf oder wenn bereits ein Stein eingesetzt ist.',
    tag: 'Mythisch+',
    comments: {
      header: '[ Mythisch+-Schlüsselstein automatisch einsetzen ]',
      openDelayNote: 'Einen Frame nach Öffnen warten, bis Affixe und Icons aktualisiert sind',
      clearCursorNote: 'Cursor leeren, falls Einsetzen fehlschlägt',
    },
  },
  'train-all-button': {
    title: '"Alle lernen"-Button beim Lehrer',
    description: 'Fügt Klassen- und Berufslehrern eine Schaltfläche "Alle lernen" neben "Ausbilden" hinzu.',
    details: 'Zeigt im Tooltip Anzahl und Gesamtkosten der verfügbaren Fertigkeiten.',
    tag: 'Zeitsparer',
    comments: {
      header: '[ "Alle lernen"-Button beim Lehrer ]',
      reverseOrderNote: 'Von unten nach oben lernen, damit Indizes stabil bleiben',
    },
    strings: {
      btnTrainAll: 'Alle lernen',
      tooltipFmt: '%d Fertigkeit(en) lernen für %s',
    },
  },
  'auto-combat-log': {
    title: 'Automatisches Kampflog in Raids & M+',
    description: 'Startet /combatlog automatisch beim Betreten von Schlachtzügen oder Mythisch+-Dungeons und beendet es beim Verlassen.',
    details: 'Beendet nur Logs, die von diesem Modul gestartet wurden.',
    tag: 'Raid-Pflicht',
    options: {
      raid: { label: 'In Schlachtzügen aktivieren' },
      mythicPlus: { label: 'In Mythisch+ aktivieren' },
    },
    comments: {
      header: '[ Automatisches Kampflog in Raids & M+ ]',
      diffNote: 'Schwierigkeitsgrad 8 = Mythischer Schlüsselstein',
    },
    strings: {
      startedMsg: '|cff00ff99[QoL]|r Kampflog automatisch gestartet',
      stoppedMsg: '|cff00ff99[QoL]|r Kampflog automatisch gestoppt',
    },
  },
};
