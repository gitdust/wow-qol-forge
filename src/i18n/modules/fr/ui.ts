import { ModuleTranslation } from '../../types';

export const uiFr: Record<string, ModuleTranslation> = {
  'hide-error-messages': {
    title: 'Masquer les erreurs rouges de combat',
    description: 'Supprime les messages d’erreur rouges au centre de l’écran (« Hors de portée », « Pas assez de mana », etc.).',
    details: 'Utilise la liste blanche de Leatrix Plus pour conserver les alertes importantes comme Inventaire plein.',
    tag: 'Écran propre',
    comments: {
      header: '[ Masquer les erreurs rouges de combat (Leatrix Plus) ]',
      whitelistNote: 'Conserver les messages critiques (liste blanche Leatrix Plus)',
      pingNote: 'Supprimer aussi les erreurs de Ping (12.x GameEvent écrit dans UIErrorsFrame)',
    },
  },
  'hide-talking-head': {
    title: 'Masquer la fenêtre Tête parlante (Talking Head)',
    description: 'Cache l’imposante fenêtre vocale de PNJ pendant vos Mythique+, raids et expéditions.',
    details: 'Utilise hooksecurefunc sans couper la voix des PNJ ni les déclencheurs de quête.',
    tag: 'Essentiel MM+',
    comments: {
      header: '[ Masquer la fenêtre Tête parlante ]',
    },
  },
  'max-camera-zoom': {
    title: 'Débloquer le zoom caméra maximum',
    description: 'Applique automatiquement cameraDistanceMaxZoomFactor au maximum Blizzard (2.6) à chaque connexion.',
    details: 'Évite la réinitialisation du recul maximal entre les sessions.',
    tag: 'Champ de vision',
    comments: {
      header: '[ Débloquer le zoom caméra maximum ]',
    },
  },
  'hide-actionbar-elements': {
    title: 'Masquer raccourcis & noms de macros des barres',
    description: 'Cache les libellés de raccourcis et noms de macros sur les barres d’action pour un style minimaliste.',
    details: 'Chaque option est indépendante tout en gardant temps de recharge et surbrillances.',
    tag: 'UI minimaliste',
    options: {
      hideHotKey: {
        label: 'Masquer les raccourcis clavier',
        description: 'Cache les textes comme 1, 2, A, E, s-F',
      },
      hideMacroName: {
        label: 'Masquer les noms de macros',
        description: 'Cache les titres jaunes en bas des boutons de macro',
      },
    },
    comments: {
      header: '[ Masquer raccourcis & noms de macros ]',
    },
  },
  'hide-boss-banner': {
    title: 'Masquer la bannière de mort de boss',
    description: 'Supprime la grande bannière centrale et le résumé de butin après avoir vaincu un boss.',
    details: 'Garde votre champ de vision dégagé lors des enchaînements rapides en MM+.',
    tag: 'Essentiel MM+',
    comments: {
      header: '[ Masquer la bannière de mort de boss (Leatrix Plus) ]',
      keepIntroNote: 'Masquer uniquement la bannière de mort et de butin',
    },
  },
  'hide-alerts': {
    title: 'Masquer les toasts de hauts faits & butin',
    description: 'Cache les notifications animées de hauts faits, montures et recettes en bas de l’écran (et en option les bannières d’événements).',
    tag: 'UI propre',
    options: {
      hideEventToasts: {
        label: 'Masquer aussi les toasts d’événements',
        description: 'Cache les bannières de montée de niveau, objectifs de boss et mascottes en haut',
      },
    },
    comments: {
      header: '[ Masquer les toasts (Leatrix Plus NoAlerts) ]',
      preventReregisterNote: 'Empêcher Blizzard de réenregistrer les événements d’alerte',
      eventToastNote: 'Toasts d’événements (Leatrix Plus HideEventToasts)',
    },
  },
  'hide-zone-text': {
    title: 'Masquer les grands titres de changement de zone',
    description: 'Cache le grand nom de zone/sous-zone affiché au centre de l’écran lors de vos déplacements.',
    tag: 'UI minimaliste',
    comments: {
      header: '[ Masquer les titres de changement de zone ]',
      keepEventsNote: 'Conserver les événements et masquer seulement à l’affichage (Leatrix Plus)',
    },
  },
  'show-ready-timer': {
    title: 'Barre de compte à rebours LFG',
    description: 'Affiche une barre de progression avec le temps restant sous la fenêtre de proposition donjon/raid.',
    tag: 'Pratique',
    comments: {
      header: '[ Barre de compte à rebours LFG (Leatrix Plus ShowReadyTimer) ]',
    },
  },
  'blizz-move': {
    title: 'Fenêtres Blizzard déplaçables & redimensionnables (BlizzMove)',
    description:
      'Déverrouille environ 60 fenêtres Blizzard (Personnage, Quêtes, Sorts, Métiers, HV, Carte du monde, etc.) pour les déplacer et zoomer avec Ctrl+Molette. Maj+Clic droit réinitialise la position, Ctrl+Clic droit l’échelle.',
    tag: 'Indispensable',
    options: {
      enableScale: {
        label: 'Autoriser Ctrl + Molette pour redimensionner',
        description: 'Maintenez Ctrl et faites défiler la molette sur une fenêtre pour changer son échelle',
      },
    },
    comments: {
      header: '[ Fenêtres Blizzard déplaçables & redimensionnables (BlizzMove) ]',
      framesNote: 'Fenêtres Retail issues de BlizzMove 3.8.5',
      addonFramesNote: 'Addons UI Blizzard chargés à la demande -> fenêtres',
      subFramesNote: 'Sous-cadres capturant la souris permettant aussi de déplacer la fenêtre',
      stateNote: 'Stocker l’état en interne sans modifier les cadres Blizzard (session uniquement)',
      rootsComment: 'cadre -> nomCadre',
      handleComment: 'poignée -> cadreRacine',
      posComment: 'cadre -> { x, y } (coin haut-gauche à échelle 1)',
      scaleComment: 'cadre -> échelle',
      pointsComment: 'cadre -> ancres d’origine avant premier déplacement',
      pendingApplyComment: 'cadres protégés en combat à replacer après combat',
      pendingHookComment: 'cadres protégés chargés en combat à hook ensuite',
      unpackNote: 'relativeTo peut être nil ; éviter unpack()',
      panelManagerNote: 'Rendre le cadre au gestionnaire UIPanelWindows lors de la réinitialisation',
      userPlacedNote: 'Conserver UserPlaced d’origine pour garder layout-cache propre',
      repositionNote: 'Réappliquer la position déplacée lorsque le gestionnaire repositionne',
      wheelNote1: 'Ctrl + Molette : capturer la molette uniquement quand Ctrl est maintenu sur une fenêtre',
      wheelNote2: 'via une couche transparente, puis relâcher aussitôt Ctrl lâché',
      anchorScaleNote: 'Mettre à l’échelle depuis le coin haut-gauche sans saut',
    },
  },
  'slash-way-native': {
    title: 'Commande repère carte natif (/way)',
    description: 'Tapez /way 45.2 60.1 pour poser un repère Blizzard natif avec faisceau lumineux, ou /way seul pour afficher vos coordonnées.',
    tag: 'Amélioration API',
    comments: {
      header: '[ Commande repère carte natif (/way) ]',
    },
    strings: {
      noMapMsg: '|cffff3333[Way]|r Impossible de déterminer la carte actuelle.',
      currentMapFallback: 'Carte actuelle',
      coordMsg: '|cff00ff00[Coords]|r %s : %.1f, %.1f',
      usageMsg: '|cffffaa00[Way]|r Usage : /way 45.2 62.8 (ou /way pour vos coordonnées)',
      invalidCoordMsg: '|cffff3333[Way]|r Coordonnées invalides ; saisissez des valeurs entre 0 et 100.',
      pinSetMsg: '|cff00ff00[Way]|r Repère placé sur %s (%.1f, %.1f) !',
    },
  },
  'cursor-ring': {
    title: 'Anneau lumineux autour du curseur',
    description: 'Dessine un anneau coloré autour du pointeur pour ne jamais le perdre sous les effets visuels en raid.',
    details: 'Taille, couleur et mode « en combat uniquement » configurables. Ne bloque jamais les clics.',
    tag: 'Aide Combat',
    options: {
      size: { label: 'Taille de l’anneau (px)' },
      color: {
        label: 'Couleur de l’anneau',
        choices: {
          amber: 'Ambre',
          white: 'Blanc',
          red: 'Rouge',
          green: 'Vert',
          blue: 'Bleu',
        },
      },
      combatOnly: { label: 'Afficher uniquement en combat' },
    },
    comments: {
      header: '[ Anneau lumineux autour du curseur ]',
    },
  },
  'hide-micro-menu-bags': {
    title: 'Masquer le micro-menu et la barre de sacs',
    description: 'Cache le micro-menu et les sacs en bas à droite (affichage au survol en option).',
    details: 'Les raccourcis (C, P, B, etc.) fonctionnent toujours normalement.',
    tag: 'UI minimaliste',
    options: {
      hideMicroMenu: { label: 'Masquer le micro-menu' },
      hideBagsBar: { label: 'Masquer la barre de sacs' },
      mouseover: {
        label: 'Afficher au survol de la souris',
        description: 'Si désactivé, les barres restent cachées (accès par raccourcis uniquement)',
      },
    },
    comments: {
      header: '[ Masquer le micro-menu et la barre de sacs ]',
      mouseoverNote: 'Masquage par opacité jusqu’au survol (toujours visible en Mode Édition)',
    },
  },
  'hide-portrait-numbers': {
    title: 'Masquer les chiffres de dégâts/soins sur les portraits',
    description: 'Cache les nombres de dégâts et soins flottants sur les portraits du joueur et du familier.',
    tag: 'UI minimaliste',
    comments: {
      header: '[ Masquer les chiffres sur les portraits ]',
    },
  },
  'quest-font-size': {
    title: 'Taille de police des quêtes',
    description: 'Ajuste la taille du texte dans les fenêtres de quêtes et le journal pour plus de confort.',
    tag: 'Lisibilité',
    options: {
      fontSize: {
        label: 'Taille du texte de quête',
        description: 'Par défaut ~13 chez Blizzard ; les titres sont +2 plus grands',
      },
    },
    comments: {
      header: '[ Taille de police des quêtes ]',
    },
  },
};
