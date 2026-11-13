import { ModuleTranslation } from '../../types';

export const inventoryDe: Record<string, ModuleTranslation> = {
  'buy-em-all': {
    title: 'Händler-Mengenkauf (BuyEmAll)',
    description:
      'Shift+Rechtsklick auf ein Händler-Item öffnet ein Mengenfenster mit dem maximal möglichen Kaufbetrag und kauft automatisch in Stapeln.',
    details: 'Berücksichtigt Gold, freien Taschenplatz (inkl. Reagenzientasche) und Händlerbestand.',
    tag: 'Berufe',
    comments: {
      header: '[ Händler-Mengenkauf (BuyEmAll) ]',
      freeBagSpaceNote: 'Freier Taschenplatz: leere Plätze * Stapelgröße + Restplatz in Teil-Stapeln',
      goldOnlyNote: 'Nur einzelne Gold-Items behandeln; Sonderwährungen oder Pakete unverändert lassen',
    },
    strings: {
      popupText: '%s kaufen\nMaximal möglich: %d (begrenzt durch Gold, Taschen & Bestand)',
      insufficientMsg: 'Nicht genug Gold oder Taschenplatz zum Kaufen',
    },
  },
  'already-known': {
    title: 'Bekannte Rezepte & Sammlungen grün färben',
    description: 'Färbt bekannte Rezepte, Baupläne sowie gesammelte Reittiere, Haustiere und Spielzeuge bei Händlern, im AH und in der Gildenbank grün.',
    details: 'Verhindert versehentliche Doppelkäufe auf einen Blick.',
    tag: 'Sammler',
    comments: {
      header: '[ Bekannte Rezepte & Sammlungen grün färben (AlreadyKnown) ]',
      cagedPetNote: 'Eingesperrte Kampfhaustiere',
      knownTooltipNote: 'Rezepte/Baupläne: im Tooltip nach ITEM_SPELL_KNOWN suchen',
      merchantNote: 'Händler',
      ahNote: 'Auktionshaus-Suchliste',
      guildBankNote: 'Gildenbank',
      guildBankConstNote: 'Interne Gildenbank-Konstanten (98 Plätze pro Fach, 14 pro Spalte)',
    },
  },
  'durability-status': {
    title: 'Haltbarkeitsanzeige im Charakterfenster',
    description: 'Zeigt die Gesamthaltbarkeit unten rechts im Charakterfenster mit Detail-Tooltip pro Platz sowie eine Erinnerung beim Tod.',
    tag: 'Basis-QoL',
    comments: {
      header: '[ Haltbarkeitsanzeige im Charakterfenster (Leatrix Plus) ]',
      getDurabilityNote: 'Gesamthaltbarkeit in Prozent und Detail-Liste zurückgeben; nil wenn keine Rüstung mit Haltbarkeit',
      buttonNote: 'Haltbarkeits-Schaltfläche unten rechts am PaperDollFrame mit Tooltip',
      deathNoticeNote: 'Beim Tod im Chat ausgeben (max. alle 2 Sekunden)',
    },
    strings: {
      labelPrefix: 'Haltb. ',
      tooltipTitle: 'Ausrüstungshaltbarkeit',
      tooltipTotal: 'Gesamt',
      deathMsg: '|cffff9900[QoL]|r Aktuelle Ausrüstungshaltbarkeit: ',
    },
  },
  'hide-cleanup-buttons': {
    title: 'Taschen- & Bank-Sortierknopf ausblenden',
    description: 'Blendet Blizzards Besen-Symbol zum Aufräumen in Taschen und Bank aus, um versehentliches Umsortieren zu verhindern.',
    tag: 'Schutz',
    comments: {
      header: '[ Taschen- & Bank-Sortierknopf ausblenden ]',
      hideNote: 'Beim Anzeigen sofort verstecken; Bank-Button in Retail 12.x ist BankPanel.AutoSortButton',
    },
  },
  'quest-item-destroy-info': {
    title: 'Questinfo vor Zerstören von Questitems',
    description: 'Zeigt beim Versuch, ein Questitem zu zerstören, den zugehörigen Questnamen und den Status im Chat an.',
    details: 'Schützt vor versehentlichem Löschen aktiver Questitems oder Queststarter.',
    tag: 'Schutz',
    comments: {
      header: '[ Questinfo vor Zerstören von Questitems ]',
    },
    strings: {
      questFallback: 'Quest ',
      stateActive: 'im Questlog',
      stateStarter: 'noch nicht angenommen — dieses Item startet eine Quest',
      warnRelated: '|cffff5555[QoL] Achtung:|r Dieser Gegenstand gehört zu Quest "%s" (%s)',
      warnGeneric: '|cffff5555[QoL] Achtung:|r Dies ist ein Questgegenstand und muss bei Verlust ggf. neu beschafft werden',
    },
  },
  'auto-restock': {
    title: 'Automatisches Auffüllen beim Händler',
    description: 'Füllt Verbrauchsgüter und Reagenzien beim Öffnen eines Händlers automatisch bis zur Zielmenge auf (z. B. "Quellwasser=40").',
    details: 'Akzeptiert exakte Namen oder Item-IDs; kauft nur einzelne Gold-Items unter Beachtung von Gold, Taschenplatz und Bestand.',
    tag: 'Zeitsparer',
    options: {
      items: {
        label: 'Auffüll-Liste',
        description: 'Format "ItemnameOderID=Zielmenge", getrennt durch Komma/Semikolon, z. B. 113509=20',
      },
      showSummary: { label: 'Zusammenfassung im Chat ausgeben' },
    },
    comments: {
      header: '[ Automatisches Auffüllen beim Händler (Restocker) ]',
      parseListNote: '"ItemOderID=Menge"-Liste parsen; an ASCII "=" trennen und Trennzeichen normalisieren',
      freeBagSpaceNote: 'Freien Taschenplatz berechnen: leere Plätze * Stapelgröße + Teil-Stapel',
      goldOnlyNote: 'Nur einzelne Items gegen Gold kaufen',
      delayNote: 'Händlerdaten sind erst einen Frame nach MERCHANT_SHOW vollständig',
    },
    strings: {
      summaryMsg: '|cff00ff99[QoL]|r Automatisch aufgefüllt: %s (Kosten: %s)',
      listSep: ', ',
    },
  },
};
