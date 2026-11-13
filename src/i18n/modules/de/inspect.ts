import { ModuleTranslation } from '../../types';

export const inspectDe: Record<string, ModuleTranslation> = {
  'true-stat-values': {
    title: 'Wahre Sekundärwerte & Diminishing Returns',
    description:
      'Zeigt im Charakterfenster beim Überfahren von Krit, Tempo, Meisterschaft, Vielseitigkeit (sowie Lebensraub, Vermeidung, Geschwindigkeit) den effektiven Wert, DR-Verlust und den aktuellen Bereich.',
    details:
      'Formeln und Umrechnungsfaktoren stammen aus TrueStatValues (simc) für Stufe 81–90; wird automatisch übersprungen, wenn Werte als geheim markiert sind.',
    tag: 'M+ Pflicht',
    options: {
      showNextBracket: {
        label: 'Fortschritt im aktuellen Bereich anzeigen',
        description: 'Zeigt genutzte Wertung / Bereichsgrenze und den Malus der nächsten Stufe im Tooltip',
      },
    },
    comments: {
      header: '[ Wahre Sekundärwerte & Diminishing Returns (TrueStatValues) ]',
      conversionNote: 'Benötigte Wertung pro 1 % Stat für Stufe 81-90 (Quelle: TrueStatValues / simc)',
      bracketsNote: 'DR-Bereiche: size = Prozent-Spanne, penalty = Effizienzverlust in diesem Bereich',
      tooltipNote: 'Erste Zeile des Blizzard-Tooltips hat das Format "Kritische Trefferwertung: 25,3 %"',
    },
    strings: {
      trueRating: 'Effektive Wertung',
      lostRating: 'DR-Verlust',
      currentPenalty: 'Aktueller DR-Malus',
      bracketProgress: 'Bereichsfortschritt',
      bracketFormat: '%d / %d (Nächste -%d%%)',
    },
  },
};
