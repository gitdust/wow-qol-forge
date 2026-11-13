import { ModuleTranslation } from '../../types';

export const inspectFr: Record<string, ModuleTranslation> = {
  'true-stat-values': {
    title: 'Rendements décroissants réels des stats secondaires',
    description:
      'Affiche le score effectif réel, la perte due aux rendements décroissants (DR) et le palier actuel au survol de Critique, Hâte, Maîtrise, Polyvalence, Ponction, Évitement et Vitesse.',
    details:
      'Formules et coefficients issus de TrueStatValues (simc) pour les niveaux 81–90 ; ignoré automatiquement si les stats sont marquées secrètes.',
    tag: 'Essentiel MM+',
    options: {
      showNextBracket: {
        label: 'Afficher la progression du palier actuel',
        description: 'Affiche le score utilisé / plafond du palier et le malus du palier suivant dans l’infobulle',
      },
    },
    comments: {
      header: '[ Rendements décroissants réels des stats secondaires (TrueStatValues) ]',
      conversionNote: 'Score requis pour 1 % de statistique du niveau 81 à 90 (source : TrueStatValues / simc)',
      bracketsNote: 'Paliers DR : size = plage en %, penalty = perte d’efficacité dans ce palier',
      tooltipNote: 'La première ligne Blizzard ressemble à « Coup critique : 25,3 % »',
    },
    strings: {
      trueRating: 'Score effectif réel',
      lostRating: 'Score perdu (DR)',
      currentPenalty: 'Malus du palier',
      bracketProgress: 'Progression palier',
      bracketFormat: '%d / %d (Suiv. -%d%%)',
    },
  },
};
