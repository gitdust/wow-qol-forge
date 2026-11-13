import { UiDictionary } from '../types';

export const de: UiDictionary = {
  seo: {
    heading: 'Addon-Baukasten für World of Warcraft Retail',
    description: 'Wähle aus {count} Komfortmodulen wie automatischer Reparatur und schnellerem Plündern. Passe die Einstellungen an, prüfe den Lua-Code und lade dein Addon als ZIP herunter.',
    ogImageAlt: 'Modulares Würfelsymbol von WoW QoL Forge',
    siteSubtitle: 'Minimalistischer Addon-Baukasten',
    gameType: 'Retail',
  },
  nav: {
    backToModules: 'Zurück zu den Modulen',
    changelog: 'Änderungsprotokoll',
    githubRepo: 'GitHub-Repository',
    languageAria: 'Sprache wechseln',
  },
  toolbar: {
    totalModules: '{count} Module enthalten',
    showingCount: '{count} Module angezeigt',
    selectedCount: 'Ausgewählt: {selected} / {total}',
    searchPlaceholder: 'Modulname oder Beschreibung suchen...',
    clearSearch: 'Suche leeren',
    selectAllCurrent: 'Alle sichtbaren auswählen',
    unselectAllCurrent: 'Alle sichtbaren abwählen',
    tableHeaderModule: 'Module & Beschreibung',
    tableHeaderAction: 'Aktionen',
    emptyTitle: 'Keine passenden Module gefunden',
    emptyHint: 'Wechsle die Kategorie oder leere das Suchfeld',
  },
  moduleRow: {
    downloadsCount: '{count} Downloads',
    downloadsTenThousand: '{value}0 Tsd.',
    downloadsUnavailable: 'Downloadzahl nicht verfügbar',
    downloadsTitle: '{count} Downloads insgesamt',
    optionsButton: 'Optionen',
    optionsPreviewTitle: '{title} · Optionsvorschau',
    optionsReadonlyHint: 'Nur Vorschau · Modul aktivieren, um Optionen im Seitenpanel anzupassen',
    optionOn: 'Ein',
    optionOff: 'Aus',
    sourceButton: 'Code',
    sourceButtonTitle: 'Eigenständigen Lua-Quellcode anzeigen',
  },
  drawer: {
    title: 'Ausgewählte Module & Konfiguration',
    itemCount: '{count} aktiv',
    defaultsHintPrefix: 'Dies sind Standardwerte. Gib im Spiel',
    defaultsHintSuffix: 'ein, um Module und Optionen jederzeit anzupassen',
    clearAll: 'Alle leeren',
    clearAllTitle: 'Alle ausgewählten Module entfernen',
    closeDrawer: 'Panel schließen',
    addonNameLabel: 'Addon-Ordnername',
    addonNameHint: '(Nur Buchstaben von A bis Z, beliebige Länge)',
    addonNameDefault: 'Standard: {name}',
    charsCount: '{count} Zeichen',
    addonNameError: 'Der Addon-Name darf nicht leer sein und nur Buchstaben (A-Z, a-z) enthalten',
    emptyTitle: 'Noch keine Module ausgewählt',
    emptyDesc:
      'Aktiviere links die gewünschten Komfort-Module, um sie hier zu prüfen und anzupassen.',
    expandOptions: 'Optionen ausklappen',
    collapseOptions: 'Optionen einklappen',
    optionsButton: 'Optionen',
    removeTitle: 'Aus Auswahl entfernen',
    selectedLabel: '{count} ausgewählt',
    codePreview: 'Code-Vorschau',
    downloading: 'ZIP wird erstellt...',
    downloadButton: 'Addon herunterladen ({count})',
  },
  floating: {
    buttonTitle: 'Ausgewählte Module öffnen, konfigurieren und herunterladen',
  },
  codeModal: {
    subtitle: 'Schlanker, abhängigkeitsfreier Lua-Code für modernes Retail WoW',
    copyFile: 'Datei kopieren',
    copied: 'In die Zwischenablage kopiert',
    close: 'Schließen',
    lineCount: 'Zeilen: {count}',
    closeWindow: 'Fenster schließen',
    moduleSourceTitle: '{title} ({id}) - Modul-Quellcode',
    bundlePreviewTitle: '{name} - Vollständige Addon-Vorschau ({count} aktive Module)',
  },
  changelog: {
    title: 'Änderungsprotokoll',
    currentVersion: 'Aktuelle Version',
    backToModules: 'Zurück zu den Modulen',
    currentBadge: 'Aktuell',
    types: {
      added: 'Hinzugefügt',
      improved: 'Verbessert',
      fixed: 'Behoben',
      removed: 'Entfernt',
    },
    entries: {
      '1.3.1': {
        groups: [
          { type: 'added', items: ['Download-Zähler pro Modul', 'Mehrsprachige Unterstützung (9 Sprachen inkl. Ingame-UI & Lua-Kommentaren)'] },
          { type: 'improved', items: ['Unterstützung für Interface 12.1.5 / 12.1.7'] },
          { type: 'removed', items: ['11 selten genutzte oder redundante Module entfernt'] },
        ],
      },
      '1.3.0': {
        groups: [
          {
            type: 'added',
            items: [
              'Automatischer Beutespezialisierungs-Wechsel nach Boss/Instanz',
              'Hinweis auf Belohnungen der Großen Schatzkammer',
              'Automatische Händler-Auffüllung',
            ],
          },
          { type: 'improved', items: ['Taskleisten-Blinken bei Bereitschaftscheck und Flüsternachrichten'] },
        ],
      },
      '1.2.0': {
        groups: [
          {
            type: 'added',
            items: [
              'Konfigurationsfenster im Spiel (/addonname)',
              '25 neue Module inkl. automatischer Rollenabfrage & Schlüsselstein-Einsetzen',
            ],
          },
          {
            type: 'improved',
            items: ['BoE-/Kriegsmeute-Markierungen', 'Standardfenster überall ziehen und Position merken'],
          },
          { type: 'removed', items: ['Glypheneffekte ausblenden und Chat-Mausrad-Scrollen entfernt'] },
        ],
      },
      '1.1.0': {
        groups: [
          {
            type: 'added',
            items: ['Eigenes Addon-Symbol im ZIP enthalten', 'Unteroptionen für mehrere Module ergänzt'],
          },
          {
            type: 'improved',
            items: ['Vollständig an Retail 12.1.5 angepasst', 'Isolierte pcall-Sandbox pro Modul'],
          },
          { type: 'fixed', items: ['11 bekannte Fehler inkl. Langtext-Einfügen und Posthelfer behoben'] },
          { type: 'removed', items: ['3D-Anprobe-Transmog-Helfer entfernt'] },
        ],
      },
      '1.0.0': {
        groups: [
          {
            type: 'added',
            items: ['Erstveröffentlichung: 64 Module in 10 Kategorien mit Suche, Optionen und ZIP-Export'],
          },
        ],
      },
    },
  },
  footer: {
    sourcesLabel: 'Inspiriert von',
    taintTitle: 'Kein UI-Taint (Zero Taint)',
    taintDesc:
      'Hält sich strikt an Blizzards Sandbox-Regeln (hooksecurefunc, TooltipDataProcessor) und überschreibt keine geschützten globalen Funktionen.',
    kernelTitle: 'Schlanker Mikro-Kernel-Event-Bus',
    kernelDesc:
      'Egal ob 3 oder 30 Module: Ein einziger Frame verteilt alle Events mit pcall-Fehlerisolierung bei minimalem Speicherbedarf.',
    installTitle: 'Kurzanleitung zur Installation',
    step1Title: '1. Auswählen & Herunterladen',
    step1Desc:
      'Gewünschte Module anhaken, unten rechts das Konfigurationspanel öffnen und das ZIP-Paket herunterladen.',
    step2Title: '2. In AddOns entpacken',
    step2Desc: 'Den entpackten Ordner (Standard: MyQol) in das WoW-AddOns-Verzeichnis kopieren:',
    step3Title: '3. Sofort losspielen',
    step3DescPrefix:
      'Alle gewählten Funktionen sind direkt aktiv. Zum Umschalten im Spiel einfach',
    step3DescCmd: ' /addonname',
    step3DescSuffix: ' (z. B. /myqol) im Chat eingeben.',
    friendlyLinks: 'Links:',
    wowApiLabel: 'World of Warcraft API (Warcraft Wiki)',
    wowUiSourceLabel: 'WoW UI Source (GitHub)',
  },
  alerts: {
    invalidAddonName: 'Bitte gib einen Addon-Namen nur aus Buchstaben von A bis Z ein (z. B. MyQol)',
    selectOneModule: 'Bitte wähle mindestens ein Modul aus',
    downloadFailed: 'Paket konnte nicht erstellt werden, bitte erneut versuchen',
    defaultAddonNotes:
      'Schlankes, maßgeschneidertes Komfort-Addon für World of Warcraft Retail',
  },
  categories: {
    all: {
      label: 'Alle Module',
      description: 'Alle bewährten Komfort-Module auf einen Blick',
    },
    automation: {
      label: 'Automatisierung',
      description: 'Auto-Reparatur, Plunder verkaufen, schnelle Quests, Sequenzen überspringen, schnelles Zerstören',
    },
    social: {
      label: 'Soziales & Gruppe',
      description: 'Freundes-/Gildeneinladungen annehmen, Flüster-Einladung, Duelle & Spam blockieren',
    },
    chat: {
      label: 'Chat',
      description: 'Pfeiltasten im Eingabefeld, Text & URLs kopieren, kompakte Kanalnamen',
    },
    ui: {
      label: 'UI & Optik',
      description: 'Rote Fehlermeldungen & Sprechende Köpfe ausblenden, max. Kamerazoom, aufgeräumte Leisten',
    },
    inventory: {
      label: 'Taschen & Händler',
      description: 'Händler-Mengenkauf ohne Limit, bekannte Rezepte färben, Ausrüstungshaltbarkeit',
    },
    looting: {
      label: 'Schnelles Plündern',
      description: 'Entfernt Blizzards Plünderverzögerung für sofortiges Einsammeln',
    },
    mail: {
      label: 'Posthelfer',
      description: 'Alle Briefe per Klick öffnen, schneller Versand, Handel am Briefkasten blockieren',
    },
    inspect: {
      label: 'Werte & Betrachten',
      description: 'Analyse abnehmender Erträge (Diminishing Returns) für Sekundärwerte im Charakterfenster',
    },
    tooltips: {
      label: 'Tooltips',
      description: 'Zauber-/Gegenstands-/NSC-/Quest-IDs sowie Ziel- & Gildenfarben im Tooltip',
    },
    system: {
      label: 'System & Audio',
      description: 'Nervige Reittiergeräusche stummschalten, Leuchteffekte reduzieren, Taskleisten-Blinken',
    },
  },
  presets: {
    'all-in-one': {
      name: 'All-in-One Alltag (Empfohlen)',
      description:
        '19 bewährte Alltagshelfer: Auto-Reparatur, Schrottverkauf, Schnellplündern, Videosequenzen überspringen, Post öffnen u. v. m.',
    },
    'dungeon-raid': {
      name: 'Mythisch+ & Raid',
      description:
        'Sprechende Köpfe & Fehler ausblenden, maximaler Kamerazoom, Schnellplündern, Bereitschafts-Timer und Werteanalyse.',
    },
    'pvp-combat': {
      name: 'PvP-Kampf',
      description:
        'Sofortiges Freilassen im Schlachtfeld, Fehlerfilter, Max-Zoom, Kampf-Namensplaketten und sichere PvP-Warteschlange.',
    },
    'merchant-life': {
      name: 'Händler & Berufe',
      description:
        'Stapelkauf beim Händler, Auto-Reparatur, Schrottverkauf, bekannte Rezepte markieren, schnelle Post & Goldversand.',
    },
  },
  generator: {
    luaHeaderGeneratedBy: 'Erstellt mit WoW QoL Forge',
    luaHeaderTargetInterface: 'Ziel-Interface',
    luaHeaderSelectedModules: 'Ausgewählte Module',
    luaHeaderNote:
      'Hinweis: Web-Optionen sind Standardwerte. Gib /{slash} im Spiel ein, um Module umzuschalten und Optionen zu ändern.',
    commentErrorReport: 'Fehlerausgabe (jede eindeutige Meldung nur einmal pro Sitzung ausgeben)',
    runtimeErrorPrint: 'Modul ',
    commentEventBus:
      'Leichtgewichtiger Event-Bus (ein einzelner Frame verteilt alle Events ohne Taint)',
    commentUnknownEvent:
      'Unbekannte Events werfen auf modernen Clients Fehler; abfangen und überspringen',
    runtimeEventError: 'Event konnte nicht registriert werden: ',
    commentFeatureList: 'Modulliste: Kategorien, Module und Optionen (Standardwerte aus dem Web)',
    commentSavedVars:
      'SavedVariables ({savedVar}): speichert nur Abweichungen, sodass Web-Updates Standardwerte sauber aktualisieren',
    commentDefaultEnabled: 'Standardmäßig aktiv; nur Deaktivierung speichern',
    commentOptionProxy:
      'Module lesen Optionen über O.<key> und erhalten sofort gespeicherte oder Standardwerte',
    commentSettingsCallbacks:
      'Module können OnSettingsChanged registrieren, um Änderungen ohne /reload anzuwenden',
    commentModuleLoader:
      'Auf ADDON_LOADED warten und aktivierte Module isoliert per pcall laden',
    commentModuleLoaderStates: 'started: Ladeversuch gestartet; loaded: erfolgreich geladen',
    commentModuleLabel: 'Modul',
    commentSourceLabel: 'Quellreferenz',
    commentWelcome: 'Willkommensmeldung beim Einloggen',
    runtimeWelcomeLoaded: ' geladen: ',
    runtimeWelcomeOpenCmd: ' Module. Eingeben: ',
    tocDefaultNotes: 'Schlankes Komfort-Addon erstellt mit WoW QoL Forge',
    readmeTitle: '# {name} - Minimalistisches WoW-Addon',
    readmeGeneratedBy: 'Clientseitig erstellt mit **WoW QoL Forge**.',
    readmeImportantTitle: '## 💡 Wichtige Hinweise',
    readmeImportantBody:
      'Alle im Web gewählten Module sind im Spiel sofort aktiv; die Web-Einstellungen dienen als Standardwerte.\nGib `/{slash}` im Chat ein, um das Konfigurationsfenster zu öffnen: Links Kategorie wählen, per Haken aktivieren/deaktivieren,\nund rechts auf den Pfeil klicken, um Unteroptionen zu öffnen. Änderungen werden automatisch gespeichert.\nDas Fenster findest du auch unter Optionen -> AddOns.',
    readmeInstallTitle: '## 📦 Installation',
    readmeInstallStep1: '1. Entpacke das heruntergeladene Archiv, um den Ordner `{name}` zu erhalten.',
    readmeInstallStep2:
      '2. Kopiere `{name}` in das AddOns-Verzeichnis von World of Warcraft:\n   - Standardpfad: `World of Warcraft\\_retail_\\Interface\\AddOns\\{name}`',
    readmeInstallStep3: '3. Starte WoW oder gib `/reload` im Chat ein.',
    readmeSelectedTitle: '## ⚙️ Enthaltene Module ({count})',
    panel: {
      headerComment: 'Konfigurationsfenster im Spiel',
      loadedStateComment:
        'Merkt sich den Ladezustand und Nicht-Live-Optionen, um anzuzeigen wann UI neu laden nötig ist',
      needsReloadComment:
        'Das Aktivieren/Deaktivieren von Modulen erfordert ein Neuladen, da Hooks nicht entfernt werden können',
      needsReloadStatus: '|cffff8040Einige Änderungen erfordern UI neu laden|r',
      setValueComment: 'Sofort speichern und aktives Modul über Live-Callback aktualisieren',
      optionLineComment: 'Optionszeile: Checkbox / Zahl / Text / Auswahlmenü',
      needsReloadTag: ' |cff888888(Neuladen)|r',
      rowComment: 'Modulzeile: Checkbox + Titel + Beschreibung + Ausklapppfeil bei Optionen',
      collapseOptions: 'Optionen einklappen',
      expandOptions: 'Optionen ausklappen',
      windowTitleSuffix: ' Einstellungen',
      allCategory: 'Alle',
      bottomHint: 'Haken zum Aktivieren · Pfeil für Optionen · Automatisch gespeichert',
      reloadButton: 'UI neu laden',
      settingsTabComment: 'Schaltfläche unter Optionen -> AddOns hinzufügen',
      settingsTabText: ' nutzt ein eigenes Fenster. Oder im Chat eingeben: ',
      openPanelButton: 'Einstellungen öffnen',
    },
  },
};
