import { ModuleTranslation } from '../../types';

export const chatFr: Record<string, ModuleTranslation> = {
  'chat-arrow-keys': {
    title: 'Touches fléchées dans le chat sans Alt',
    description: 'Déplacez le curseur dans la saisie du chat avec les flèches gauche/droite sans maintenir Alt.',
    details: 'S’applique à toutes les fenêtres de discussion et aux futures fenêtres de chuchotement.',
    tag: 'Confort saisie',
    comments: {
      header: '[ Touches fléchées dans le chat sans Alt ]',
      coverNote: 'Couvrir toutes les fenêtres et les chuchotements temporaires (Leatrix Plus)',
    },
  },
  'chat-copy': {
    title: 'Copier l’historique du chat en un clic',
    description: 'Maj+Clic sur un onglet de chat ouvre une fenêtre sélectionnable contenant tout l’historique à copier.',
    details: 'Pratique pour copier liens Discord, macros de raid ou chaînes WeakAuras.',
    tag: 'Essentiel',
    comments: {
      header: '[ Copier l’historique du chat (BasicChatMods ChatCopy) ]',
      cleanerNote: 'FontString caché pour développer les échappements |4singulier:pluriel;',
      rtNote: 'Convertir les icônes de cible de raid en notation {rt1}',
    },
    strings: {
      windowTitle: 'Copier le journal du chat',
    },
  },
  'chat-short-channels': {
    title: 'Raccourcir les préfixes de canaux',
    description: 'Abrège les longs préfixes comme [1. Général - Dornogal] en [G] ainsi que Guilde, Groupe et Raid.',
    details: 'Dérivé des chaînes localisées Blizzard ; les canaux personnalisés ne gardent que leur numéro.',
    tag: 'UI propre',
    comments: {
      header: '[ Raccourcir les préfixes de canaux (BasicChatMods ChannelNames) ]',
      historyNote: 'Les préfixes sont hors du message ; réécrire la ligne formatée dans historyBuffer',
      customRuleNote: 'Ne garder que le numéro pour les canaux personnalisés',
    },
    strings: {
      general: '[G]',
      trade: '[C]',
      worldDefense: '[DG]',
      localDefense: '[DL]',
      lfg: '[RG]',
      recruitment: '[Rec]',
      instanceLeader: '[CI]',
      instance: '[I]',
      guild: '[Gui]',
      partyLeader: '[CG]',
      party: '[Gr]',
      officer: '[O]',
      raidLeader: '[CR]',
      raidWarning: '[AR]',
      raid: '[R]',
    },
  },
  'chat-timestamps': {
    title: 'Horodatage du chat',
    description: 'Ajoute un horodatage gris discret ([12:35]) devant chaque ligne de discussion.',
    details: 'Désactive l’horodatage natif Blizzard pour éviter les doublons.',
    tag: 'QoL de base',
    options: {
      showSeconds: {
        label: 'Afficher les secondes',
        description: 'Passe le format à [12:35:08]',
      },
    },
    comments: {
      header: '[ Horodatage du chat (BasicChatMods Timestamp) ]',
      disableNativeNote: 'Désactiver l’horodatage natif Blizzard pour éviter tout doublon',
      prependNote: 'Insérer l’heure devant canal/nom sur la dernière ligne de historyBuffer',
    },
  },
  'chat-unclamp': {
    title: 'Détacher le chat des bords de l’écran',
    description: 'Permet de déplacer les fenêtres de chat jusqu’au bord exact de l’écran sans marge forcée.',
    tag: 'Placement libre',
    comments: {
      header: '[ Détacher le chat des bords de l’écran ]',
      hookNote: 'Blizzard réinitialise les marges au redimensionnement ; remettre à 0 via hook',
    },
  },
  'disable-chat-fade': {
    title: 'Désactiver l’effacement automatique du chat',
    description: 'Empêche les messages du chat de disparaître après inactivité.',
    details: 'Délai personnalisable en secondes en option.',
    tag: 'QoL de base',
    options: {
      visibleSeconds: {
        label: 'Secondes avant effacement',
        description: '0 = permanent ; défaut Blizzard : 120 secondes',
      },
    },
    comments: {
      header: '[ Désactiver l’effacement automatique du chat ]',
      tempWindowNote: 'Les fenêtres de chuchotement temporaires suivent les fenêtres fixes',
    },
  },
  'hide-chat-buttons': {
    title: 'Masquer les boutons latéraux et canaux du chat',
    description: 'Cache les boutons Rejoindre rapidement, Canaux et Menu à côté du chat.',
    tag: 'UI minimaliste',
    comments: {
      header: '[ Masquer les boutons latéraux du chat ]',
      hookNote: 'Masquer via hook Show sans remplacer les méthodes Blizzard (sans taint)',
    },
  },
  'paste-text': {
    title: 'Coller texte long & macros multi-lignes (/paste)',
    description: 'Tapez /paste pour ouvrir une zone multi-lignes dépassant la limite de 255 caractères—idéal pour listes /way et macros.',
    tag: 'Outil malin',
    comments: {
      header: '[ Coller texte long & macros multi-lignes (Paste) ]',
    },
    strings: {
      title: 'Assistant Collage (/paste)',
      runBtn: 'Coller & Exécuter',
      sentMsg: '|cff00ff00[Paste]|r Lignes exécutées/envoyées.',
      clearBtn: 'Vider',
    },
  },
  'chat-keyword-filter': {
    title: 'Filtre anti-spam par mots-clés',
    description: 'Masque les messages en canaux publics, Dire et Crier contenant vos mots-clés bloqués.',
    details: 'Insensible à la casse, séparés par des virgules. Inactif en instance/MM+/raid/JcJ (restriction 12.0+).',
    tag: 'Anti-spam',
    options: {
      keywords: {
        label: 'Mots-clés bloqués',
        description: 'Séparez plusieurs mots-clés par des virgules',
        default: 'wts,boost,pl,carry,po',
      },
      includeWhisper: {
        label: 'Filtrer aussi les chuchotements d’inconnus',
        description: 'Les chuchotements des amis et de la guilde ne sont jamais filtrés',
      },
    },
    comments: {
      header: '[ Filtre anti-spam par mots-clés ]',
      splitNote: 'Découper les mots-clés par virgule et réanalyser à chaque modification',
      secretNote: 'Le texte en instance est secret ; laisser passer tel quel',
    },
  },
  'tell-target': {
    title: '/tt Chuchoter à la cible actuelle',
    description: 'Tapez /tt <message> pour chuchoter directement au joueur ciblé sans écrire son nom.',
    details: 'Taper /tt seul ouvre une saisie de chuchotement pré-remplie.',
    tag: 'Social QoL',
    comments: {
      header: '[ /tt Chuchoter à la cible actuelle ]',
    },
    strings: {
      noTargetMsg: '|cff00ff99[QoL]|r /tt nécessite de cibler un joueur d’abord',
    },
  },
  'auto-leave-channels': {
    title: 'Quitter automatiquement des canaux au login',
    description: 'Quitte automatiquement les canaux listés (ex. RechercheDeGroupe) après connexion.',
    details: 'Séparez les noms exacts par des virgules. Rejoignez à tout moment avec /join Nom.',
    tag: 'Anti-spam',
    options: {
      channels: {
        label: 'Canaux à quitter',
        description: 'Séparez plusieurs noms par des virgules',
        default: 'RechercheDeGroupe',
      },
    },
    comments: {
      header: '[ Quitter automatiquement des canaux au login ]',
      delayNote: 'Les canaux par défaut rejoignent sur plusieurs secondes ; vérifier deux fois',
    },
  },
  'chat-editbox-top': {
    title: 'Déplacer la zone de saisie du chat en haut',
    description: 'Place la ligne de saisie en haut du cadre de chat pour qu’elle ne sorte jamais de l’écran.',
    tag: 'Placement libre',
    comments: {
      header: '[ Déplacer la zone de saisie du chat en haut ]',
      anchorNote: 'Ancrer à l’intérieur du bord supérieur sans recouvrir les onglets (Leatrix Plus)',
    },
  },
};
