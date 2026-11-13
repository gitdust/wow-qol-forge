import { ModuleTranslation } from '../../types';

export const socialDe: Record<string, ModuleTranslation> = {
  'accept-party-friends': {
    title: 'Freundes- & Gildeneinladungen annehmen',
    description: 'Nimmt Gruppeneinladungen von Battle.net-Freunden, Charakter-Freunden und Gildenmitgliedern automatisch an.',
    details: 'Pausiert automatisch, solange du in einer LFG-Warteschlange bist.',
    tag: 'Soziales',
    comments: {
      header: '[ Freundes- & Gildeneinladungen annehmen ]',
      popupNote: 'inviteAccepted vor dem Schließen setzen, damit OnHide nicht ablehnt',
    },
  },
  'alt-click-invite': {
    title: 'Alt+Klick auf Spielernamen zum Einladen',
    description: 'Halte Alt und klicke links auf einen Spielernamen im Chat, um ihn sofort in deine Gruppe einzuladen.',
    details: 'Spart das Rechtsklick-Kontextmenü beim Zusammenstellen von Gruppen.',
    tag: 'Gruppen-Tool',
    comments: {
      header: '[ Alt+Klick auf Spielernamen zum Einladen ]',
    },
  },
  'invite-from-whisper': {
    title: 'Automatische Einladung per Flüster-Keyword',
    description: 'Lädt jeden automatisch ein, der dir ein bestimmtes Codewort (z. B. "111" oder "inv") flüstert, wenn du solo oder Gruppenleiter bist.',
    details: 'Praktisch für Gildenraids, Weltbosse oder Mythisch+-Gruppen.',
    tag: 'Gruppenleiter',
    options: {
      keyword: { label: 'Flüster-Einladungscode' },
    },
    comments: {
      header: '[ Automatische Einladung per Flüster-Keyword ]',
    },
  },
  'block-duel-requests': {
    title: 'Duellanfragen von Fremden ablehnen',
    description: 'Lehnt Duell-Anfragen von fremden Spielern automatisch ab (Freunde und Gildenmitglieder ausgenommen).',
    details: 'Schützt vor Duell-Spam in Hauptstädten oder beim Questen.',
    tag: 'Spamschutz',
    comments: {
      header: '[ Duellanfragen von Fremden ablehnen ]',
    },
  },
  'block-pet-duels': {
    title: 'Haustierkampf-Duelle ablehnen',
    description: 'Lehnt PvP-Haustierkampf-Herausforderungen von Nicht-Freunden automatisch ab.',
    tag: 'Spamschutz',
    comments: {
      header: '[ Haustierkampf-Duelle ablehnen ]',
    },
  },
  'block-party-invites': {
    title: 'Gruppeneinladungen Fremder blockieren',
    description: 'Lehnt Gruppeneinladungen von Spielern außerhalb deiner Freundesliste und Gilde automatisch ab.',
    tag: 'Spamfilter',
    comments: {
      header: '[ Gruppeneinladungen Fremder blockieren ]',
    },
  },
  'block-social-requests': {
    title: 'B.net-Freundschafts- & Gildenanfragen ablehnen',
    description: 'Lehnt eingehende Battle.net-Freundschaftsanfragen und fremde Gildeneinladungen automatisch ab und meldet die Anzahl im Chat.',
    details: 'Gildeneinladungen von Freunden bleiben erlaubt. Beide Optionen einzeln schaltbar.',
    tag: 'Spamschutz',
    options: {
      friendRequests: { label: 'Battle.net-Freundschaftsanfragen ablehnen' },
      guildInvites: { label: 'Gildeneinladungen ablehnen (außer Freunde)' },
    },
    comments: {
      header: '[ B.net-Freundschafts- & Gildenanfragen ablehnen ]',
      guildPopupNote: 'Nach Anzeige des Blizzard-Fensters schließen; OnHide ruft DeclineGuild auf',
    },
    strings: {
      declinedFriendsMsg: '|cff00ff99[QoL]|r %d Battle.net-Freundschaftsanfrage(n) automatisch abgelehnt',
      declinedGuildMsg: '|cff00ff99[QoL]|r Eine Gildeneinladung automatisch abgelehnt',
    },
  },
  'auto-confirm-role': {
    title: 'LFG-Rollenprüfung automatisch bestätigen',
    description: 'Bestätigt die Rollenabfrage für Dungeon-/Schlachtzugsbrowser automatisch mit deinen zuletzt gewählten Rollen.',
    details: 'Nur aktiv, wenn eine Rolle gewählt ist; mit Shift überspringbar. Standardmäßig nur bei Freunden/Gilde als Leiter.',
    tag: 'Schnell-Queue',
    options: {
      friendLeaderOnly: {
        label: 'Nur wenn Leiter ein Freund/Gildenmitglied ist',
        description: 'Deaktivieren, um bei jedem Gruppenleiter automatisch zu bestätigen',
      },
    },
    comments: {
      header: '[ LFG-Rollenprüfung automatisch bestätigen ]',
      delayNote: 'Einen Frame warten, bis der Button-Status aktualisiert wurde',
    },
  },
  'safe-queue': {
    title: 'SafeQueue & PvP-Warteschlangen-Timer',
    description: 'Versteckt "Warteschlange verlassen" im Schlachtfeld-/Arena-Bereitschaftsfenster, zentriert "Betreten" und färbt den Timer.',
    tag: 'PvP & Instanz',
    options: {
      announceWaitTime: {
        label: 'Wartezeit im Chat ausgeben',
        description: 'Zeigt die gesamte Wartezeit im Chat, sobald der Match-Invite erscheint',
      },
    },
    comments: {
      header: '[ SafeQueue & PvP-Warteschlangen-Timer (SafeQueue) ]',
      hideLeaveNote: 'Verlassen-Knopf ausblenden, um versehentlichen Abbruch zu verhindern',
      waitTimeNote: 'Serverseitige Wartezeit nutzen, damit späte Ladevorgänge korrekt bleiben',
    },
    strings: {
      remainingLabel: 'Verbleibend: ',
      waitTimeMsg: '|cff33ff99[SafeQueue]|r Gefunden! Wartezeit: %02dm %02ds',
    },
  },
  'copy-player-name': {
    title: 'Spielernamen per Rechtsklick kopieren',
    description: 'Fügt über WoWs moderne 12.x Menu-API einen Eintrag "Name kopieren" in Rechtsklickmenüs hinzu.',
    tag: 'Schnellaktion',
    comments: {
      header: '[ Spielernamen per Rechtsklick kopieren (Menu API) ]',
    },
    strings: {
      copyPrefix: '|cff00ff00[Name kopieren]|r ',
    },
  },
  'lfg-double-click-signup': {
    title: 'Doppelklick-Anmeldung in Organisierten Gruppen',
    description: 'Doppelklicke auf einen Eintrag in den Organisierten Gruppen, um dich direkt anzumelden.',
    details: 'Überspringt den Anmeldedialog bei gewählten Rollen; Shift+Doppelklick öffnet ihn weiterhin.',
    tag: 'Schnell-Queue',
    options: {
      skipDialog: {
        label: 'Dialog bei gewählten Rollen überspringen',
        description: 'Sofort mit gewählten Rollen anmelden (Shift hält Dialog offen)',
      },
    },
    comments: {
      header: '[ Doppelklick-Anmeldung in Organisierten Gruppen ]',
      skipNote: 'Automatisch absenden, wenn die Anmeldeschaltfläche aktiv ist und die Umschalttaste nicht gedrückt wird',
    },
  },
  'guild-motd-login': {
    title: 'Gildennachricht des Tages beim Login',
    description: 'Gibt die Gildennachricht (MOTD) einige Sekunden nach dem Login erneut im Chat aus.',
    tag: 'Gilden-QoL',
    comments: {
      header: '[ Gildennachricht des Tages beim Login ]',
    },
    strings: {
      motdPrefix: '|cff40ff40[Gilden-MOTD]|r ',
    },
  },
};
