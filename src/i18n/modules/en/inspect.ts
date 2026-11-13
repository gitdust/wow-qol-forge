import { ModuleTranslation } from '../../types';

export const inspectEn: Record<string, ModuleTranslation> = {
  'true-stat-values': {
    title: 'True Secondary Stat Diminishing Returns',
    description:
      'Displays true effective rating, rating lost to diminishing returns, and current DR bracket when hovering Crit, Haste, Mastery, Versatility, Leech, Avoidance, or Speed on the character sheet.',
    details:
      'Formulas and conversion factors are sourced from TrueStatValues (simc) for levels 81–90; automatically skipped when stats are marked secret.',
    tag: 'M+ Essential',
    options: {
      showNextBracket: {
        label: 'Show current bracket progress',
        description: 'Display rating used / bracket cap and next bracket penalty in the tooltip',
      },
    },
    comments: {
      header: '[ True Secondary Stat Diminishing Returns (TrueStatValues) ]',
      conversionNote: 'Rating needed per 1% stat for levels 81-90 (sourced from TrueStatValues / simc)',
      bracketsNote: 'DR brackets: size is percentage span, penalty is efficiency loss in that bracket',
      tooltipNote: 'Blizzard stat tooltip line 1 looks like "Critical Strike: 25.3%"; match by localized label',
    },
    strings: {
      trueRating: 'True Stat Rating',
      lostRating: 'Rating Lost to DR',
      currentPenalty: 'Current Bracket DR',
      bracketProgress: 'Bracket Progress',
      bracketFormat: '%d / %d (Next -%d%%)',
    },
  },
};
