import { ModuleTranslation } from '../../types';

export const uiDe: Record<string, ModuleTranslation> = {
  'hide-error-messages': {
    title: 'Rote Kampffehlermeldungen ausblenden',
    description: 'Unterdrückt störende rote Fehlermeldungen in der Bildschirmmitte ("Außer Reichweite", "Nicht genug Mana" usw.).',
    details: 'Nutzt die Leatrix-Plus-Whitelist, sodass wichtige Meldungen wie "Inventar voll" weiterhin erscheinen.',
    tag: 'Freie Sicht',
    comments: {
      header: '[ Rote Kampffehlermeldungen ausblenden (Leatrix Plus) ]',
      whitelistNote: 'Wichtige Hinweise behalten (Leatrix-Plus-Whitelist)',
      pingNote: 'Auch Ping-System-Fehler unterdrücken (12.x GameEvent schreibt direkt in UIErrorsFrame)',
    },
  },
  'hide-talking-head': {
    title: 'Sprechende Köpfe (Talking Head) ausblenden',
    description: 'Blendet das große NSC-Dialog-Popup in Mythisch+, Raids und Weltquests aus.',
    details: 'Verwendet Taint-sicheres hooksecurefunc, ohne Sprachausgabe oder Quests zu beeinträchtigen.',
    tag: 'M+ Pflicht',
    comments: {
      header: '[ Sprechende Köpfe ausblenden ]',
    },
  },
  'max-camera-zoom': {
    title: 'Maximalen Kamerazoom freischalten',
    description: 'Setzt cameraDistanceMaxZoomFactor bei jedem Login auf das Blizzard-Maximum von 2.6.',
    details: 'Verhindert das Zurücksetzen der maximalen Kameradistanz zwischen Spielsitzungen.',
    tag: 'Weitblick',
    comments: {
      header: '[ Maximalen Kamerazoom freischalten ]',
    },
  },
  'hide-actionbar-elements': {
    title: 'Tastenkürzel & Makronamen auf Leisten ausblenden',
    description: 'Versteckt Tastenbelegungen und Makrotitel auf Aktionsleisten für einen aufgeräumten Look.',
    details: 'Beide Optionen sind getrennt umschaltbar; Abklingzeiten bleiben sichtbar.',
    tag: 'Minimal-UI',
    options: {
      hideHotKey: {
        label: 'Tastenbelegungstext ausblenden',
        description: 'Blendet Kürzel wie 1, 2, Q, E, s-F aus',
      },
      hideMacroName: {
        label: 'Makronamen ausblenden',
        description: 'Blendet gelbe Makrotitel unten auf den Buttons aus',
      },
    },
    comments: {
      header: '[ Tastenkürzel & Makronamen ausblenden ]',
    },
  },
  'hide-boss-banner': {
    title: 'Boss-Kill-Banner ausblenden',
    description: 'Unterdrückt das große Boss-Siegesbanner samt Beuteeinblendung nach Bosskämpfen.',
    details: 'Hält das Sichtfeld bei schnellen M+-Pulls frei.',
    tag: 'M+ Pflicht',
    comments: {
      header: '[ Boss-Kill-Banner ausblenden (Leatrix Plus) ]',
      keepIntroNote: 'Nur Kill- & Beutebanner unterdrücken; Begegnungs-Start belassen',
    },
  },
  'hide-alerts': {
    title: 'Erfolgs- & Beute-Toasts ausblenden',
    description: 'Blendet Erfolgs-, Reittier- und Rezept-Popups am unteren Bildschirmrand aus (optional auch Stufenaufstieg-/Boss-Event-Toasts).',
    tag: 'Sauberes UI',
    options: {
      hideEventToasts: {
        label: 'Auch Event-Toasts ausblenden',
        description: 'Blendet Stufenaufstieg-, Bossziel- und Haustierkampf-Banner oben mittig aus',
      },
    },
    comments: {
      header: '[ Erfolgs- & Beute-Toasts ausblenden (Leatrix Plus NoAlerts) ]',
      preventReregisterNote: 'Verhindern, dass Blizzard Events später erneut registriert',
      eventToastNote: 'Event-Toasts (Leatrix Plus HideEventToasts)',
    },
  },
  'hide-zone-text': {
    title: 'Zonenwechsel-Text ausblenden',
    description: 'Blendet den großen Gebietsnamen in der Bildschirmmitte beim Betreten neuer Zonen aus.',
    tag: 'Minimal-UI',
    comments: {
      header: '[ Zonenwechsel-Text ausblenden ]',
      keepEventsNote: 'Events belassen und nur Frame beim Anzeigen verstecken (wie Leatrix Plus)',
    },
  },
  'show-ready-timer': {
    title: 'LFG-Bereitschafts-Countdown',
    description: 'Zeigt einen Countdown-Balken samt Restzeit unter der Einladung des Dungeon-/Schlachtzugsbrowsers.',
    tag: 'Praktisch',
    comments: {
      header: '[ LFG-Bereitschafts-Countdown (Leatrix Plus ShowReadyTimer) ]',
    },
  },
  'blizz-move': {
    title: 'Blizzard-Fenster verschieben & skalieren (BlizzMove)',
    description:
      'Macht rund 60 Standardfenster (Charakter, Quest, Zauberbuch, Berufe, Händler, AH, Sammlungen, Weltkarte usw.) verschiebbar und per Strg+Mausrad skalierbar. Shift+Rechtsklick setzt Position zurück, Strg+Rechtsklick die Skalierung.',
    tag: 'Unverzichtbar',
    options: {
      enableScale: {
        label: 'Strg + Mausrad zum Skalieren erlauben',
        description: 'Mit Strg+Mausrad über einem Fenster dessen Größe anpassen',
      },
    },
    comments: {
      header: '[ Blizzard-Fenster verschieben & skalieren (BlizzMove) ]',
      framesNote: 'Top-Level-Retail-Fenster aus BlizzMove 3.8.5',
      addonFramesNote: 'Bei Bedarf geladene Blizzard-UI-Addons -> Fenster',
      subFramesNote: 'Große Unterfenster, mit denen das Hauptfenster ebenfalls verschoben wird',
      stateNote: 'Zustand nur intern im Modul speichern (pro Sitzung), keine Felder an Blizzard-Frames hängen',
      rootsComment: 'Frame -> FrameName',
      handleComment: 'Ziehgriff -> Hauptfenster',
      posComment: 'Frame -> { x, y } (links oben bei Skalierung 1)',
      scaleComment: 'Frame -> Skalierung',
      pointsComment: 'Frame -> ursprüngliche Ankerpunkte vor erstem Ziehen',
      pendingApplyComment: 'Im Kampf geschützte Fenster für spätere Neupositionierung',
      pendingHookComment: 'Im Kampf geladene geschützte Fenster für späteres Hooking',
      unpackNote: 'relativeTo kann nil sein; kein unpack() nutzen',
      panelManagerNote: 'Fenster beim Zurücksetzen an UIPanelWindows zurückgeben',
      userPlacedNote: 'Ursprüngliches UserPlaced beibehalten, damit layout-cache sauber bleibt',
      repositionNote: 'Gezogene Position wiederherstellen, wenn Panel-Manager neu anordnet',
      wheelNote1: 'Strg + Mausrad: Scrollrad nur abfangen, während Strg über einem Fenster gehalten wird,',
      wheelNote2: 'über eine transparente Ebene; beim Loslassen sofort wieder freigeben',
      anchorScaleNote: 'Von links oben skalieren, damit das Fenster nicht springt',
    },
  },
  'slash-way-native': {
    title: 'Nativer Kartenpin-Wegpunkt (/way)',
    description: 'Setzt mit /way 45.2 60.1 einen nativen Blizzard-Kartenpin inkl. Leuchtstrahl; /way ohne Zahlen zeigt deine aktuelle Position.',
    tag: 'Native Plus',
    comments: {
      header: '[ Nativer Kartenpin-Wegpunkt (/way) ]',
    },
    strings: {
      noMapMsg: '|cffff3333[Way]|r Aktuelle Karte konnte nicht ermittelt werden.',
      currentMapFallback: 'Aktuelle Karte',
      coordMsg: '|cff00ff00[Koordinaten]|r %s: %.1f, %.1f',
      usageMsg: '|cffffaa00[Way]|r Verwendung: /way 45.2 62.8 (oder /way für aktuelle Position)',
      invalidCoordMsg: '|cffff3333[Way]|r Ungültige Koordinaten; Werte von 0 bis 100 eingeben.',
      pinSetMsg: '|cff00ff00[Way]|r Kartenpin gesetzt bei %s (%.1f, %.1f)!',
    },
  },
  'cursor-ring': {
    title: 'Mauszeiger-Leuchtring',
    description: 'Zeichnet einen farbigen Ring um den Mauszeiger, damit er im Effektgewitter immer sichtbar bleibt.',
    details: 'Größe, Farbe und Nur-im-Kampf-Anzeige anpassbar; blockiert keine Klicks.',
    tag: 'Kampfhilfe',
    options: {
      size: { label: 'Ringgröße (px)' },
      color: {
        label: 'Ringfarbe',
        choices: {
          amber: 'Bernstein',
          white: 'Weiß',
          red: 'Rot',
          green: 'Grün',
          blue: 'Blau',
        },
      },
      combatOnly: { label: 'Nur im Kampf anzeigen' },
    },
    comments: {
      header: '[ Mauszeiger-Leuchtring ]',
    },
  },
  'hide-micro-menu-bags': {
    title: 'Mikromenü & Taschenleiste ausblenden',
    description: 'Blendet das Mikromenü und die Taschenleiste unten rechts aus (optional bei Mouseover sichtbar).',
    details: 'Tastenkürzel (C, P, B usw.) funktionieren weiterhin ganz normal.',
    tag: 'Minimal-UI',
    options: {
      hideMicroMenu: { label: 'Mikromenü ausblenden' },
      hideBagsBar: { label: 'Taschenleiste ausblenden' },
      mouseover: {
        label: 'Bei Mouseover anzeigen',
        description: 'Wenn deaktiviert, bleiben die Leisten verborgen und öffnen sich nur per Shortcut',
      },
    },
    comments: {
      header: '[ Mikromenü & Taschenleiste ausblenden ]',
      mouseoverNote: 'Per Alpha bei Mouseover einblenden (im Bearbeitungsmodus immer sichtbar)',
    },
  },
  'hide-portrait-numbers': {
    title: 'Kampfzahlen auf Porträts ausblenden',
    description: 'Blendet schwebende Schadens- und Heilungszahlen auf Spieler- und Begleiterporträts aus.',
    tag: 'Minimal-UI',
    comments: {
      header: '[ Kampfzahlen auf Porträts ausblenden ]',
    },
  },
  'quest-font-size': {
    title: 'Schriftgröße für Questtexte',
    description: 'Passt die Schriftgröße in Questfenstern und im Questlog für besseres Lesen an.',
    tag: 'Lesbarkeit',
    options: {
      fontSize: {
        label: 'Questtext-Schriftgröße',
        description: 'Blizzard-Standard ist ca. 13; Überschriften sind +2 größer',
      },
    },
    comments: {
      header: '[ Schriftgröße für Questtexte ]',
    },
  },
};
