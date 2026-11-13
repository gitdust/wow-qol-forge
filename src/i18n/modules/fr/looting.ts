import { ModuleTranslation } from '../../types';

export const lootingFr: Record<string, ModuleTranslation> = {
  'faster-loot': {
    title: 'Butin instantané (Faster Loot)',
    description: 'Supprime le délai interne d’ouverture de la fenêtre de butin Blizzard et ramasse tous les objets instantanément.',
    details:
      'Basé sur SpeedyAutoLoot : parcourt les emplacements à rebours lors de LOOT_READY ; les objets en cours de jet ou sans place restent dans la fenêtre avec un son d’alerte si les sacs sont pleins.',
    tag: 'Essentiel',
    options: {
      speedMode: {
        label: 'Mode de vitesse de fouille',
        choices: {
          instant: 'Balayage instantané (Recommandé)',
          fast: 'Progressif (0,033s par objet)',
        },
      },
    },
    comments: {
      header: '[ Butin instantané (SpeedyAutoLoot) ]',
      itemFits: 'Vérifier si l’objet tient en sac : piles partielles d’abord, puis emplacements libres adaptés',
      lockedNote: 'Laisser les objets verrouillés (jet de groupe / autre joueur) à la fenêtre Blizzard',
      lootReadyNote: 'LOOT_READY peut se répéter au clic rapide et inverser autoLoot ; garder le premier état',
      invFullNote: 'Émettre un son d’avertissement une fois si les sacs sont pleins',
    },
  },
  'skip-loot-confirm': {
    title: 'Ignorer les confirmations LqR et jets de butin',
    description: 'Confirme automatiquement les objets Liés quand ramassés (LqR) ainsi que les jets Besoin/Désenchanter sans fenêtre « Êtes-vous sûr ? ».',
    details: 'N’ignore que la seconde confirmation après votre clic ; ne lance jamais de dés à votre place.',
    tag: 'Butin rapide',
    options: {
      lootBind: { label: 'Ignorer la confirmation d’objet LqR' },
      lootRoll: { label: 'Ignorer la confirmation Besoin/Désenchanter' },
    },
    comments: {
      header: '[ Ignorer les confirmations LqR et jets de butin ]',
      hidePopupNote: 'Confirmer aussitôt puis masquer la fenêtre affichée à la frame suivante',
    },
  },
  'loot-spec-by-boss': {
    title: 'Spécialisation du butin auto par boss ou instance',
    description:
      'Change votre spécialisation du butin au début d’un combat contre un boss. Rétablit la précédente si aucune règle ne correspond ou si vous quittez l’instance.',
    details:
      'Accepte le nom du boss, le nom de l’instance ou l’ID de la rencontre. Les règles de boss sont prioritaires. Utilisez « actuelle » pour suivre votre spécialisation active.',
    tag: 'Aide Raid',
    options: {
      rules: {
        label: 'Règles de changement',
        description: 'Utilisez « NomDuBossOuIDDeRencontre=Spécialisation » ou « NomInstance=Spécialisation ». Saisissez les noms tels qu’ils apparaissent en jeu et séparez les règles par des virgules ou des points-virgules.',
      },
      announce: { label: 'Annoncer les changements dans le chat' },
    },
    comments: {
      header: '[ Spécialisation du butin auto par boss ou instance (LootSpecSwapper) ]',
      originalNote: 'Spécialisation du butin avant le premier changement auto ; nil = inchangé',
      parseRulesNote: 'Analyser les règles « Nom=Spé » ; couper uniquement sur « = » et normaliser la ponctuation',
      findSpecNote: 'Nom de spé -> ID de spécialisation du butin ; 0 = spé actuelle',
      noRuleNote: 'Boss sans règle : restaurer la configuration précédente',
      leaveInstanceNote: 'Restaurer en quittant l’instance',
    },
    strings: {
      currentKeyword: 'actuelle',
      currentSpecLabel: 'Spé actuelle',
      switchedMsg: '|cff00ff99[QoL]|r Spécialisation du butin passée sur « %s »%s',
      restoredNoRule: ' (Boss : %s sans règle, restauré)',
      invalidSpecMsg: '|cffff5555[QoL]|r La spé de la règle « %s=%s » n’appartient pas à votre classe ; ignoré',
      restoredLeftInstance: ' (Instance quittée, restauré)',
    },
  },
};
