import { ModuleTranslation } from '../../types';

export const mailDe: Record<string, ModuleTranslation> = {
  'postal-open-all': {
    title: 'Alle Briefe öffnen (Open All)',
    description: 'Fügt dem Briefkasten eine Schaltfläche "Alle öffnen" hinzu, um Gold und Anhänge aus allen Briefen automatisch einzusammeln.',
    details: 'Destilliert aus Postal: stoppt sicher bei vollen Taschen, meldet die Summe und kann jederzeit unterbrochen werden.',
    tag: 'Pflichtmodul',
    options: {
      skipAH: {
        label: 'Auktionshaus-Post überspringen',
        description: 'Nur Spielerpost einsammeln und Auktionshaus-Briefe belassen',
      },
    },
    comments: {
      header: '[ Alle Briefe öffnen (Postal OpenAll) ]',
      ahPatternNote: 'Auktionshaus-Post über Blizzards lokalisierte Betreffzeilen erkennen',
      retryNote: 'Wenn derselbe Brief unverändert bleibt (Taschen voll/einzigartig), abbrechen statt endlos zu wiederholen',
    },
    strings: {
      btnOpenAll: 'Alle öffnen',
      btnStop: 'Stopp',
      earnedPrefix: ', erhalten: ',
      logPrefix: '|cff00ff99[QoL Post]|r ',
      stopFailed: 'Verbleibende Post konnte nicht entnommen werden (Taschen voll oder einzigartig)',
      stopMorePages: 'Seite geleert; %d weitere Briefe noch nicht geladen — Briefkasten kurz neu öffnen',
      stopDone: 'Alle Briefe mit Gold oder Gegenständen wurden geleert',
      stopAborted: 'Postabholung abgebrochen',
      stopClosed: 'Briefkasten geschlossen, gestoppt',
      stopBagFull: 'Taschen voll, Abholung gestoppt',
    },
  },
  'postal-express': {
    title: 'Schnell-Postkürzel (Shift/Alt)',
    description:
      'Shift+Klick im Posteingang entnimmt Anhänge sofort, Strg+Klick sendet zurück; Alt+Klick auf Taschenitems beim Verfassen hängt sie direkt an.',
    details: 'Ideal zum schnellen Versenden von Tränken, Edelsteinen und Handwerksmaterialien an Twinks.',
    tag: 'Schnellaktion',
    comments: {
      header: '[ Schnell-Postkürzel (Postal Express) ]',
      inboxNote: 'Posteingang: Modifikatorklicks über InboxFrame_OnModifiedClick, normale Klicks über InboxFrame_OnClick',
      sendNote: 'Verfassen: Alt+Linksklick hängt Taschenitems an (Retail via HandleModifiedItemClick)',
    },
  },
  'postal-trade-block': {
    title: 'Handel am Briefkasten blockieren',
    description: 'Lehnt eingehende Handelsanfragen automatisch ab, solange dein Briefkasten geöffnet ist, und stellt danach den Vorzustand wieder her.',
    details: 'Verhindert versehentliche Unterbrechungen beim Sortieren von Gold und Post in Hauptstädten.',
    tag: 'Spamschutz',
    comments: {
      header: '[ Handel am Briefkasten blockieren (Postal TradeBlock) ]',
    },
  },
  'postal-wire': {
    title: 'Gesamtes Gold per Klick einfügen (Wire)',
    description:
      'Fügt im Sendefenster einen "Alle"-Knopf hinzu, um dein ganzes Gold (abzgl. Porto) einzutragen, und füllt leere Betreffs mit dem Betrag.',
    details: 'Spart Tipparbeit bei Goldtransfers zwischen Charakteren.',
    tag: 'Gold-Helfer',
    options: {
      fillSubject: {
        label: 'Betreff automatisch mit Betrag füllen',
        description: 'Trägt den gesendeten Goldbetrag automatisch in leere Betreffzeilen ein',
      },
    },
    comments: {
      header: '[ Gesamtes Gold per Klick einfügen (Postal Wire) ]',
    },
    strings: {
      btnAll: 'Alle',
    },
  },
};
