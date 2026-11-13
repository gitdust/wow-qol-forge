import { ModuleTranslation } from '../../types';

export const chatDe: Record<string, ModuleTranslation> = {
  'chat-arrow-keys': {
    title: 'Pfeiltasten im Chat ohne Alt',
    description: 'Bewege den Cursor im Chateingabefeld direkt mit den Pfeiltasten links/rechts, ohne Alt zu halten.',
    details: 'Gilt für alle bestehenden Chatfenster sowie neue temporäre Flüsterfenster.',
    tag: 'Schreib-QoL',
    comments: {
      header: '[ Pfeiltasten im Chat ohne Alt ]',
      coverNote: 'Alle Chatfenster und künftige temporäre Flüsterfenster abdecken (Leatrix Plus)',
    },
  },
  'chat-copy': {
    title: 'Chatverlauf per Klick kopieren',
    description: 'Shift+Klick auf einen Chat-Tab öffnet ein Fenster mit dem gesamten Verlauf zum Markieren und Kopieren.',
    details: 'Ideal zum Kopieren von Discord-Links, Raid-Makros oder WeakAuras-Strings.',
    tag: 'Unverzichtbar',
    comments: {
      header: '[ Chatverlauf per Klick kopieren (BasicChatMods ChatCopy) ]',
      cleanerNote: 'Verstecktes FontString nutzen, um |4Singular:Plural;-Escapes aufzulösen',
      rtNote: 'Schlachtzugssymbole in {rt1}-Notation umwandeln',
    },
    strings: {
      windowTitle: 'Chatverlauf kopieren',
    },
  },
  'chat-short-channels': {
    title: 'Chat-Kanalnamen verkürzen',
    description: 'Kürzt lange Kanalpräfixe wie [1. Allgemein - Dornogal] auf [A]. Auch die Präfixe für Gilde, Gruppe und Schlachtzug werden gekürzt.',
    details: 'Nutzt Blizzards lokalisierte Kanalnamen; eigene Kanäle behalten nur ihre Nummer.',
    tag: 'Sauberes UI',
    comments: {
      header: '[ Chat-Kanalnamen verkürzen (BasicChatMods ChannelNames) ]',
      historyNote: 'Kanalpräfixe stehen außerhalb des Textes; formatierte Zeilen im historyBuffer umschreiben',
      customRuleNote: 'Für benutzerdefinierte Kanäle nur die Nummer behalten',
    },
    strings: {
      general: '[A]',
      trade: '[H]',
      worldDefense: '[WV]',
      localDefense: '[LV]',
      lfg: '[SNG]',
      recruitment: '[GR]',
      instanceLeader: '[IL]',
      instance: '[I]',
      guild: '[G]',
      partyLeader: '[PL]',
      party: '[P]',
      officer: '[O]',
      raidLeader: '[RL]',
      raidWarning: '[RW]',
      raid: '[R]',
    },
  },
  'chat-timestamps': {
    title: 'Chat-Zeitstempel',
    description: 'Stellt jeder Chatzeile einen dezenten grauen Zeitstempel ([12:35]) voran.',
    details: 'Deaktiviert Blizzards eigene Zeitstempel-CVar, um doppelte Zeitangaben zu vermeiden.',
    tag: 'Basis-QoL',
    options: {
      showSeconds: {
        label: 'Sekunden anzeigen',
        description: 'Ändert das Format auf [12:35:08]',
      },
    },
    comments: {
      header: '[ Chat-Zeitstempel (BasicChatMods Timestamp) ]',
      disableNativeNote: 'Native Blizzard-Zeitstempel deaktivieren, um Duplikate zu vermeiden',
      prependNote: 'Zeitstempel vor Kanal/Namen über den neuesten historyBuffer-Eintrag einfügen',
    },
  },
  'chat-unclamp': {
    title: 'Chatfenster bis an den Bildschirmrand ziehen',
    description: 'Entfernt Blizzards Randbegrenzung, sodass Chatfenster bündig am Bildschirmrand platziert werden können.',
    tag: 'Freies Layout',
    comments: {
      header: '[ Chatfenster bis an den Bildschirmrand ziehen ]',
      hookNote: 'Blizzard setzt Ränder bei Layout-Updates zurück; per Hook auf 0 setzen (BasicChatMods)',
    },
  },
  'disable-chat-fade': {
    title: 'Automatisches Verblassen des Chats deaktivieren',
    description: 'Chatnachrichten bleiben dauerhaft lesbar und verblassen nicht nach kurzer Inaktivität.',
    details: 'Optional eigene Verblass-Dauer in Sekunden wählbar.',
    tag: 'Basis-QoL',
    options: {
      visibleSeconds: {
        label: 'Sekunden bis zum Verblassen',
        description: '0 = nie verblassen; Blizzard-Standard ist 120 Sekunden',
      },
    },
    comments: {
      header: '[ Automatisches Verblassen des Chats deaktivieren ]',
      tempWindowNote: 'Temporäre Flüsterfenster erhalten Indizes nach den Standardfenstern',
    },
  },
  'hide-chat-buttons': {
    title: 'Chat-Seiten- & Kanalbuttons ausblenden',
    description: 'Versteckt Schnellbeitritt-, Kanal- und Chatmenü-Schaltflächen neben dem Chatfenster.',
    tag: 'Minimal-UI',
    comments: {
      header: '[ Chat-Seiten- & Kanalbuttons ausblenden ]',
      hookNote: 'Per Show-Hook ausblenden ohne Blizzard-Methoden zu überschreiben (Taint-sicher)',
    },
  },
  'paste-text': {
    title: 'Mehrzeiligen Text & Makros einfügen (/paste)',
    description: 'Öffnet mit /paste ein mehrzeiliges Eingabefeld ohne das 255-Zeichen-Limit—perfekt für /way-Listen oder lange Makros.',
    tag: 'Profi-Helfer',
    comments: {
      header: '[ Mehrzeiligen Text & Makros einfügen (Paste) ]',
    },
    strings: {
      title: 'Einfüge-Helfer (/paste)',
      runBtn: 'Einfügen & Ausführen',
      sentMsg: '|cff00ff00[Paste]|r Textzeilen ausgeführt/gesendet.',
      clearBtn: 'Leeren',
    },
  },
  'chat-keyword-filter': {
    title: 'Chat-Keyword-Spamfilter',
    description: 'Blendet Nachrichten in öffentlichen Kanälen, Sagen und Schreien aus, die blockierte Schlagwörter enthalten.',
    details: 'Ignoriert Groß-/Kleinschreibung, kommagetrennt. In Instanzen/M+/Raids/PvP ab 12.0 technisch nicht filterbar.',
    tag: 'Spamschutz',
    options: {
      keywords: {
        label: 'Blockierte Schlagwörter',
        description: 'Mehrere Wörter durch Komma trennen',
        default: 'wts,boost,carry,gold',
      },
      includeWhisper: {
        label: 'Auch Flüstern von Fremden filtern',
        description: 'Flüsternachrichten von Freunden und Gilde bleiben unberührt',
      },
    },
    comments: {
      header: '[ Chat-Keyword-Spamfilter ]',
      splitNote: 'Schlagwörter am Komma trennen und bei Einstellungsänderung neu parsen',
      secretNote: 'Chattexte in Instanzen sind geheim; unverändert durchlassen',
    },
  },
  'tell-target': {
    title: '/tt Ziel anflüstern',
    description: 'Tippe /tt <Nachricht>, um deinen anvisierten Spieler direkt anzuflüstern, ohne den Namen zu schreiben.',
    details: 'Nur /tt öffnet ein Flüsterfeld mit dem Namen des Ziels.',
    tag: 'Soziales',
    comments: {
      header: '[ /tt Ziel anflüstern ]',
    },
    strings: {
      noTargetMsg: '|cff00ff99[QoL]|r Für /tt muss zuerst ein Spieler anvisiert sein',
    },
  },
  'auto-leave-channels': {
    title: 'Kanäle beim Login automatisch verlassen',
    description: 'Verlässt angegebene Chatkanäle (z. B. SucheNachGruppe) automatisch nach dem Einloggen.',
    details: 'Mehrere exakte Kanalnamen mit Komma trennen. Wiederbeitritt jederzeit über /join Kanalname.',
    tag: 'Spamschutz',
    options: {
      channels: {
        label: 'Zu verlassende Kanäle',
        description: 'Mehrere Kanalnamen durch Komma trennen',
        default: 'SucheNachGruppe',
      },
    },
    comments: {
      header: '[ Kanäle beim Login automatisch verlassen ]',
      delayNote: 'Standardkanäle werden nach dem Login verzögert betreten; zweimal prüfen',
    },
  },
  'chat-editbox-top': {
    title: 'Chateingabefeld nach oben verschieben',
    description: 'Setzt die Eingabezeile vom unteren an den oberen Rand des Chatfensters.',
    tag: 'Freies Layout',
    comments: {
      header: '[ Chateingabefeld nach oben verschieben ]',
      anchorNote: 'Innerhalb des oberen Chatfenster-Rands verankern, um Tabs nicht zu verdecken (Leatrix Plus)',
    },
  },
};
