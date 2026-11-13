import { ModuleTranslation } from '../../types';

export const inventoryFr: Record<string, ModuleTranslation> = {
  'buy-em-all': {
    title: 'Achat en gros chez les marchands (BuyEmAll)',
    description:
      'Maj+Clic droit sur un article du marchand ouvre une boîte de quantité affichant le maximum achetable et achète automatiquement par lots.',
    details: 'Prend en compte l’or, la place libre (sac de composants inclus) et le stock du vendeur.',
    tag: 'Métiers',
    comments: {
      header: '[ Achat en gros chez les marchands (BuyEmAll) ]',
      freeBagSpaceNote: 'Capacité libre : emplacements vides * taille de pile + place restante dans les piles partielles',
      goldOnlyNote: 'Traiter uniquement les articles unitaires en or ; laisser le reste inchangé',
    },
    strings: {
      popupText: 'Acheter %s\nMaximum possible : %d (limité par or, sacs et stock)',
      insufficientMsg: 'Or ou place en sac insuffisant pour acheter',
    },
  },
  'already-known': {
    title: 'Surligner les recettes et objets déjà connus',
    description: 'Teinte en vert les recettes, patrons, montures, mascottes et jouets déjà connus chez les marchands, à l’HV et en banque de guilde.',
    details: 'Évite d’acheter des doublons par erreur d’un seul coup d’œil.',
    tag: 'Collectionneurs',
    comments: {
      header: '[ Surligner les recettes et objets déjà connus (AlreadyKnown) ]',
      cagedPetNote: 'Mascottes de combat en cage',
      knownTooltipNote: 'Recettes/patrons : rechercher ITEM_SPELL_KNOWN dans l’infobulle',
      merchantNote: 'Marchand',
      ahNote: 'Liste de l’hôtel des ventes',
      guildBankNote: 'Banque de guilde',
      guildBankConstNote: 'Constantes internes de la banque de guilde (98 cases par onglet, 14 par colonne)',
    },
  },
  'durability-status': {
    title: 'Durabilité de l’équipement sur la fiche perso',
    description: 'Affiche le pourcentage total de durabilité en bas à droite de la fiche de personnage avec détail au survol et rappel au décès.',
    tag: 'QoL de base',
    comments: {
      header: '[ Durabilité de l’équipement sur la fiche perso (Leatrix Plus) ]',
      getDurabilityNote: 'Renvoyer le pourcentage global et le détail par emplacement ; nil si rien avec durabilité',
      buttonNote: 'Libellé de durabilité en bas à droite de PaperDollFrame',
      deathNoticeNote: 'Annoncer dans le chat à la mort (limité à 1 fois / 2s)',
    },
    strings: {
      labelPrefix: 'Durab. ',
      tooltipTitle: 'Durabilité de l’équipement',
      tooltipTotal: 'Total',
      deathMsg: '|cffff9900[QoL]|r Durabilité actuelle de l’équipement : ',
    },
  },
  'hide-cleanup-buttons': {
    title: 'Masquer les boutons de tri des sacs et de la banque',
    description: 'Cache les icônes balai de tri automatique dans les sacs et la banque pour éviter tout tri accidentel.',
    tag: 'Anti-erreur',
    comments: {
      header: '[ Masquer les boutons de tri des sacs et de la banque ]',
      hideNote: 'Masquer dès l’affichage ; en Retail 12.x le bouton de banque est BankPanel.AutoSortButton',
    },
  },
  'quest-item-destroy-info': {
    title: 'Info de quête avant de détruire un objet de quête',
    description: 'Affiche dans le chat la quête associée et son état lorsque vous tentez de supprimer un objet lié à une quête.',
    details: 'Évite de supprimer par erreur des objets de quête actifs ou déclencheurs.',
    tag: 'Anti-erreur',
    comments: {
      header: '[ Info de quête avant de détruire un objet de quête ]',
    },
    strings: {
      questFallback: 'Quête ',
      stateActive: 'dans votre journal de quêtes',
      stateStarter: 'pas encore acceptée — cet objet lance une quête',
      warnRelated: '|cffff5555[QoL] Attention :|r cet objet est lié à la quête « %s » (%s)',
      warnGeneric: '|cffff5555[QoL] Attention :|r ceci est un objet de quête qu’il faudra peut-être réobtenir en cas de destruction',
    },
  },
  'auto-restock': {
    title: 'Réapprovisionnement automatique chez le marchand',
    description: 'Achète automatiquement consommables et composants jusqu’à vos quantités cibles à l’ouverture d’un marchand (ex. « Eau=40 »).',
    details: 'Accepte noms exacts ou IDs d’objets ; achète uniquement les articles unitaires en or selon vos moyens et sacs.',
    tag: 'Gain de temps',
    options: {
      items: {
        label: 'Liste de réapprovisionnement',
        description: 'Format « NomOuID=QuantitéCible », séparés par virgule/point-virgule, ex. 113509=20',
      },
      showSummary: { label: 'Afficher le récapitulatif dans le chat' },
    },
    comments: {
      header: '[ Réapprovisionnement automatique chez le marchand (Restocker) ]',
      parseListNote: 'Analyser la liste « ObjetOuID=Quantité » ; couper sur « = » ASCII',
      freeBagSpaceNote: 'Calculer l’espace disponible dans les sacs',
      goldOnlyNote: 'N’acheter que les articles unitaires payables en or',
      delayNote: 'Les données du marchand finissent de charger une frame après MERCHANT_SHOW',
    },
    strings: {
      summaryMsg: '|cff00ff99[QoL]|r Réapprovisionné : %s (dépensé %s)',
      listSep: ', ',
    },
  },
};
