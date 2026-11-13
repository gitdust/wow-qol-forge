import { ModuleTranslation } from '../../types';

export const systemFr: Record<string, ModuleTranslation> = {
  'mute-annoying-sounds': {
    title: 'Couper les sons agaçants de montures et du jeu',
    description: 'Coupe au choix les sifflets de train, moteurs de gyrocoptères, pas mécaniques, cloches horaires et autres bruits pénibles.',
    details: 'Utilise MuteSoundFile avec les IDs issus de Leatrix Plus (Midnight).',
    tag: 'Confort auditif',
    options: {
      muteTrains: { label: 'Émotes train', description: 'Sifflet de l’émote /train' },
      muteGyrocopters: {
        label: 'Gyrocoptères et machines volantes',
        description: 'Vrombissement de la Tête de Mimiron, Méca-mogul, etc.',
      },
      muteMechSteps: { label: 'Pas de montures mécaniques', description: 'Bruits métalliques des mécanotrotteurs et mécas' },
      muteChimes: { label: 'Carillons horaires', description: 'Cloches des capitales toutes les heures' },
      muteFizzle: { label: 'Échec de sort', description: 'Son d’échec ou d’interruption d’incantation' },
      muteSniffing: { label: 'Reniflements worgen', description: 'Reniflements répétitifs des personnages worgens' },
      muteYawns: { label: 'Bâillements des félins', description: 'Bâillements des familiers félins de chasseur' },
    },
    comments: {
      header: '[ Couper les sons agaçants (Leatrix Plus Mute) ]',
      applyNote: 'Couper les groupes cochés et réactiver les groupes décochés',
    },
  },
  'silence-rested-emotes': {
    title: 'Couper les sons d’émotes en zone de repos',
    description: 'Désactive automatiquement les sons d’émotes (/rire, /pleurer, /poule) dans les auberges et capitales.',
    tag: 'Tranquillité',
    comments: {
      header: '[ Couper les sons d’émotes en zone de repos ]',
      cvarNote: 'Désactiver Sound_EnableEmoteSounds au repos et restaurer en sortant',
      restoreNote: 'Rétablir avant déconnexion/changement de zone car la CVar est persistée',
    },
  },
  'disable-screen-glow': {
    title: 'Désactiver le halo plein écran et le flou d’ébriété',
    description: 'Désactive la lueur FFX excessive et le flou de caméra en état d’ivresse pour une image nette.',
    tag: 'Confort visuel',
    comments: {
      header: '[ Désactiver le halo plein écran et le flou d’ébriété ]',
    },
  },
  'combat-nameplates': {
    title: 'Barres de noms ennemies uniquement en combat',
    description: 'Active automatiquement les barres de noms ennemies en combat et les masque hors combat.',
    tag: 'UI intelligent',
    comments: {
      header: '[ Barres de noms ennemies uniquement en combat ]',
    },
  },
  'keep-audio-synced': {
    title: 'Synchroniser les changements de périphérique audio',
    description: 'Bascule instantanément le son du jeu vers le nouveau périphérique par défaut (casque, Bluetooth) sans redémarrer.',
    tag: 'Système',
    comments: {
      header: '[ Synchroniser les changements de périphérique audio ]',
      syncNote: 'Revenir au périphérique système par défaut et relancer le moteur audio',
      cinematicNote: 'Ne pas relancer l’audio pendant une cinématique ; attendre la fin',
    },
  },
  'flash-taskbar': {
    title: 'Clignotement barre des tâches sur appels & chuchotements',
    description: 'Fait clignoter l’icône dans la barre des tâches (avec son optionnel) lors d’un appel, d’une file prête ou d’un chuchotement en arrière-plan.',
    tag: 'Anti-Alt-Tab',
    options: {
      playSound: {
        label: 'Jouer le son d’alerte',
        description: 'Joue le son d’appel sur le canal principal lors du clignotement',
      },
      flashOnWhisper: {
        label: 'Clignoter sur les chuchotements',
        description: 'Clignote sur les chuchotements en jeu ou Battle.net (sans son supplémentaire)',
      },
    },
    comments: {
      header: '[ Clignotement barre des tâches (FlashTaskBar) ]',
      whisperNote: 'Chuchotements : détecter uniquement l’événement sans lire le texte',
      readyCheckNote: 'Appel / Proposition de donjon / Résurrection / Invocation',
      battlefieldNote: 'Confirmation d’entrée champ de bataille / arène',
      lfgHookNote: 'Fenêtre d’invitation de groupe prédéfini (FlashTaskBar)',
    },
  },
  'talent-ready-check': {
    title: 'Afficher la configuration de talents à l’appel',
    description: 'Affiche votre configuration de talents active dans le chat lors d’un appel pour éviter de pull en spé extérieure.',
    details: 'Indiquez des noms attendus (séparés par des virgules) pour recevoir une alerte rouge et sonore en cas d’erreur.',
    tag: 'Vérif Raid',
    options: {
      expectedNames: {
        label: 'Noms de configurations attendues',
        description: 'Laisser vide pour afficher uniquement ; séparer plusieurs noms par des virgules',
      },
      playSound: { label: 'Jouer une alarme en cas d’erreur' },
    },
    comments: {
      header: '[ Afficher la configuration de talents à l’appel ]',
    },
    strings: {
      starterBuild: 'Config. de départ',
      unsavedBuild: 'Config. non enregistrée',
      currentMsg: '|cff00ff99[QoL]|r Configuration de talents active : |cffffd100%s|r',
      mismatchMsg: '|cffff5555[QoL] Mauvaise configuration de talents !|r Actuelle : %s, Attendue : %s',
    },
  },
  'cvar-tweaks': {
    title: 'Appliquer les réglages CVar cachés courants',
    description: 'Applique automatiquement à la connexion vos réglages cachés favoris sur tous vos personnages (descente auto en vol, butin sous la souris, etc.).',
    details: 'Les options décochées laissent vos réglages actuels intacts.',
    tag: 'Sync Rerolls',
    options: {
      autoDismountFlying: { label: 'Descendre de monture en lançant un sort en vol' },
      noMapFade: { label: 'Désactiver la transparence de la carte en marchant' },
      lootUnderMouse: { label: 'Ouvrir le butin sous le curseur' },
      noTutorials: { label: 'Désactiver les didacticiels' },
      noErrorSpeech: { label: 'Couper les voix d’erreur du personnage' },
      alwaysCompare: { label: 'Toujours comparer l’équipement dans les infobulles' },
    },
    comments: {
      header: '[ Appliquer les réglages CVar cachés courants ]',
      tableNote: '{ option, CVar, valeurSiCoché } ; les options décochées restent inchangées',
    },
  },
  'great-vault-reminder': {
    title: 'Rappel de récompense de la grande chambre-forte',
    description: 'Si une récompense vous attend dans la grande chambre-forte, affiche un rappel dans le chat à la connexion ou au rechargement de l’interface. Le rappel peut aussi s’afficher au centre de l’écran.',
    details: 'Alerte dès la connexion au lieu d’attendre l’ouverture du panneau Mythique+.',
    tag: 'Hebdo',
    options: {
      showCenter: {
        label: 'Afficher une alerte au centre de l’écran',
        description: 'Affiche un rappel visuel unique façon alerte de raid',
      },
      playSound: { label: 'Jouer un son de rappel' },
    },
    comments: {
      header: '[ Rappel de récompense de la grande chambre-forte ]',
      skipShownNote: 'Ignorer si la fenêtre de la grande chambre-forte est déjà ouverte',
      delayNote: 'Les données hebdomadaires arrivent peu après la connexion ; revérifier à la mise à jour',
    },
    strings: {
      reminderMsg: 'Des récompenses vous attendent dans la grande chambre-forte !',
    },
  },
};
