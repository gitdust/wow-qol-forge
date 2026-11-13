import { ModuleTranslation } from '../../types';

export const automationFr: Record<string, ModuleTranslation> = {
  'auto-repair': {
    title: 'Réparation automatique de l’équipement',
    description: 'Répare automatiquement tout l’équipement auprès des marchands réparateurs (avec priorité banque de guilde en option).',
    details: 'Maintenez Maj à l’ouverture pour ignorer.',
    tag: 'Essentiel',
    options: {
      guildRepair: {
        label: 'Priorité à la banque de guilde',
        description: 'Utilise d’abord les fonds de réparation de guilde si autorisé',
      },
      showSummary: {
        label: 'Afficher le coût dans le chat',
        description: 'Affiche le montant dépensé pour la réparation dans le chat',
      },
    },
    comments: {
      header: '[ Réparation automatique (Leatrix Plus) ]',
      guildFallbackNote: 'Utiliser d’abord la guilde ; le reste est payé avec l’or personnel',
    },
    strings: {
      repairedMsg: '|cff00ff99[QoL]|r Équipement réparé pour : ',
    },
  },
  'auto-sell-junk': {
    title: 'Vente automatique des objets gris',
    description: 'Vend instantanément tous les objets de qualité médiocre (gris) lors d’une visite chez un marchand.',
    details: 'Maintenez Maj pour ignorer. Parcourt les sacs par passes et affiche le total gagné.',
    tag: 'Essentiel',
    options: {
      showSummary: {
        label: 'Afficher le total gagné dans le chat',
        description: 'Affiche la somme d’or gagnée lors de la vente',
      },
    },
    comments: {
      header: '[ Vente automatique des objets gris (Leatrix Plus) ]',
      multiRoundNote: 'Les emplacements bougent après vente ; scanner toutes les 0,2s jusqu’à 6 passes',
      stopErrorNote: 'Stopper immédiatement si le marchand refuse ou si l’or est au plafond',
    },
    strings: {
      soldMsg: '|cff00ff99[QoL]|r Objets gris vendus pour : ',
    },
  },
  'automate-quests': {
    title: 'Acceptation & rendu rapide des quêtes',
    description: 'Accepte et rend automatiquement les quêtes auprès des PNJ ; s’arrête lorsque plusieurs récompenses sont proposées.',
    details: 'Maintenez Maj pour mettre en pause. Ne rend jamais les quêtes demandant or, monnaies, composants ou objets liés au compte.',
    tag: 'Montée en niveau',
    options: {
      autoAccept: {
        label: 'Accepter les quêtes auto',
        description: 'Accepte automatiquement quêtes journalières, hebdomadaires et normales',
      },
      autoComplete: {
        label: 'Rendre les quêtes auto',
        description: 'Rend automatiquement les quêtes avec 0 ou 1 récompense fixe',
      },
    },
    comments: {
      header: '[ Acceptation & rendu rapide des quêtes ]',
      accountBoundNote: 'Vérifier si l’objet requis est lié au bataillon/compte pour ne jamais le dépenser',
      currencyNote: 'Ne jamais rendre auto si monnaies, composants ou objets liés au compte requis',
      noAcceptNote: 'Acceptation auto désactivée',
      noCompleteNote: 'Rendu auto désactivé',
    },
  },
  'automate-gossip': {
    title: 'Alt+Ouverture : choix de dialogue unique',
    description: 'Maintenez Alt en parlant à un PNJ pour sélectionner aussitôt une option unique lorsqu’aucune quête n’est disponible.',
    details: 'Pratique pour maîtres de vol, aubergistes et PNJ de téléportation.',
    tag: 'Gain de temps',
    comments: {
      header: '[ Alt+Ouverture : choix de dialogue unique (Leatrix Plus) ]',
      onlyGossipNote: 'Sélectionner uniquement s’il y a 1 option et aucune quête',
      fallbackNote: 'Secours pour les options sans gossipOptionID',
    },
  },
  'faster-movie-skip': {
    title: 'Passer les cinématiques rapidement',
    description: 'Appuyez sur Espace, Échap ou Entrée pendant une cinématique pour la passer sans cliquer sur la confirmation.',
    details: 'Accélère les donjons et la montée de rerolls.',
    tag: 'Fluide',
    comments: {
      header: '[ Passer les cinématiques rapidement (Espace/Échap/Entrée) ]',
    },
  },
  'easy-item-destroy': {
    title: 'Destruction facile (sans taper EFFACER)',
    description: 'Supprime l’obligation de taper « EFFACER » / « DELETE » pour détruire des objets rares ou épiques.',
    details: 'Affiche directement le lien de l’objet (ou nom/niveau de mascotte) dans la boîte de confirmation.',
    tag: 'Minimal UX',
    comments: {
      header: '[ Destruction facile (Leatrix Plus EasyItemDestroy) ]',
      lineNote: 'La ligne 2 de DELETE_GOOD_ITEM demande le mot-clé ; la retirer avec le champ',
      petNote: 'Formater les mascottes en cage en « Nom (Niveau N) »',
      dialogsNote: 'Rechercher la fenêtre de suppression par nom',
      hideEditNote: 'Masquer le champ de saisie et activer le bouton Confirmer',
      appendLinkNote: 'Objets normaux : ajouter le lien dans le texte de confirmation',
    },
  },
  'auto-release-pvp': {
    title: 'Libération d’esprit auto en CdB & JcJ ouvert',
    description: 'Libère automatiquement votre esprit en champ de bataille et zones JcJ ouvertes (Joug-d’Hiver, Tol Barad, Ashran).',
    details: 'Ignoré si Pierre d’âme/Réincarnation disponible ; maintenez Maj pour annuler.',
    tag: 'Outil JcJ',
    options: {
      excludeAlterac: {
        label: 'Exclure la Vallée d’Alterac',
        description: 'Ne pas libérer automatiquement dans la Vallée d’Alterac',
      },
    },
    comments: {
      header: '[ Libération d’esprit auto en CdB & JcJ ouvert (Leatrix Plus) ]',
      worldPvpNote: 'IDs de cartes JcJ ouvert : Joug-d’Hiver, Tol Barad, Ashran, Bouclier-des-Tempêtes, Fer-de-Lance',
      alteracNote: 'Vallée d’Alterac (classique & choc) excluable en option',
    },
    strings: {
      cancelledMsg: '|cff00ff99[QoL]|r Libération automatique annulée',
    },
  },
  'auto-accept-res': {
    title: 'Accepter la résurrection hors combat',
    description: 'Accepte automatiquement les résurrections de vos alliés sans cliquer sur la fenêtre.',
    details: 'N’accepte jamais en combat lorsque la sécurité combat est active.',
    tag: 'Confort',
    options: {
      combatCheck: {
        label: 'Protection en combat',
        description: 'N’accepter que si ni vous ni le lanceur n’êtes en combat',
      },
    },
    comments: {
      header: '[ Accepter la résurrection hors combat ]',
    },
  },
  'auto-accept-summon': {
    title: 'Accepter les invocations auto (10s)',
    description: 'Annonce les invocations de démoniste ou pierre de rencontre dans le chat et les accepte après 10 secondes hors combat.',
    details: 'Annulable à tout moment dans la boîte de dialogue pendant les 10 secondes.',
    tag: 'Groupe QoL',
    comments: {
      header: '[ Accepter les invocations auto (Leatrix Plus, 10s) ]',
      confirmNote: 'Confirmer uniquement si invocateur/zone inchangés et hors combat',
    },
    strings: {
      summonNoticeMsg: '|cff00ff99[QoL]|r Invocation de %s (%s) acceptée dans 10s sauf annulation.',
    },
  },
  'dialog-key': {
    title: 'DialogKey (Espace & 1-9 pour dialogues PNJ)',
    description: 'Utilisez Espace pour valider quêtes/dialogues et 1–9 (0 = 10e) pour choisir options ou récompenses. Inactif en combat.',
    details: 'Ignoré avec modificateurs. La garde protège invitations, invocations, duels et libération d’esprit.',
    tag: 'MVP Quêtes',
    options: {
      enableNumKeys: {
        label: 'Touches 1-9 pour options & récompenses',
        description: 'Choisir options de dialogue ou récompenses de quête au clavier',
      },
      safePopups: {
        label: 'Protection des popups sensibles',
        description: 'Empêche Espace de cliquer invitations, invocations, duels ou libération d’esprit',
      },
    },
    comments: {
      header: '[ DialogKey (Espace & 1-9 pour dialogues PNJ) ]',
      blacklistNote: 'Popups de la liste noire DialogKey jamais cliqués par Espace',
      selfResNote: 'Préférer le second bouton pour auto-résurrection ; sinon ne jamais libérer',
      gossipButtonsNote: 'Collecter les boutons cliquables visibles de haut en bas',
      choiceNote: 'Mémoriser la récompense sélectionnée manuellement',
      combatNote: 'Ne pas modifier la propagation clavier en combat ; laisser passer',
      restorePropagateNote: 'Rétablir la propagation avant le combat',
    },
  },
  'auto-insert-keystone': {
    title: 'Insertion automatique de clé mythique',
    description: 'Insère automatiquement la clé mythique correspondante depuis vos sacs à l’ouverture de la Fontaine de puissance.',
    details: 'L’insertion est ignorée en combat ou si une clé est déjà en place.',
    tag: 'Mythique+',
    comments: {
      header: '[ Insertion automatique de clé mythique ]',
      openDelayNote: 'Attendre une frame après l’ouverture pour actualiser les affixes et l’icône',
      clearCursorNote: 'Vider le curseur en cas d’échec',
    },
  },
  'train-all-button': {
    title: 'Bouton « Tout apprendre » chez les maîtres',
    description: 'Ajoute un bouton « Tout apprendre » à côté d’Apprendre chez les maîtres de classe et de métier.',
    details: 'Affiche au survol le nombre de techniques et le coût total.',
    tag: 'Gain de temps',
    comments: {
      header: '[ Bouton « Tout apprendre » chez les maîtres ]',
      reverseOrderNote: 'Apprendre de la fin vers le début pour garder les index valides',
    },
    strings: {
      btnTrainAll: 'Tout apprendre',
      tooltipFmt: 'Apprendre %d compétence(s) pour %s',
    },
  },
  'auto-combat-log': {
    title: 'Journal de combat auto en Raid & Mythique+',
    description: 'Active /combatlog automatiquement en entrant en Raid ou Mythique+ et l’arrête à la sortie.',
    details: 'N’arrête le journal que s’il a été démarré par ce module.',
    tag: 'Raid Essentiel',
    options: {
      raid: { label: 'Activer en Raid' },
      mythicPlus: { label: 'Activer en Mythique+' },
    },
    comments: {
      header: '[ Journal de combat auto en Raid & Mythique+ ]',
      diffNote: 'Difficulté 8 = Pierre mythique',
    },
    strings: {
      startedMsg: '|cff00ff99[QoL]|r Journal de combat démarré automatiquement',
      stoppedMsg: '|cff00ff99[QoL]|r Journal de combat arrêté automatiquement',
    },
  },
};
