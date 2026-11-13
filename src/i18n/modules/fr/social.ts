import { ModuleTranslation } from '../../types';

export const socialFr: Record<string, ModuleTranslation> = {
  'accept-party-friends': {
    title: 'Accepter automatiquement les invitations amis/guilde',
    description: 'Accepte automatiquement les invitations de groupe venant d’amis Battle.net, d’amis du jeu et de membres de guilde.',
    details: 'Se met en pause si vous êtes déjà en file d’attente LFG.',
    tag: 'Social QoL',
    comments: {
      header: '[ Accepter automatiquement les invitations amis/guilde ]',
      popupNote: 'Marquer inviteAccepted avant de masquer pour éviter un refus dans OnHide',
    },
  },
  'alt-click-invite': {
    title: 'Alt+Clic sur un nom pour inviter dans le groupe',
    description: 'Maintenez Alt et cliquez gauche sur un nom de joueur dans le chat pour l’inviter aussitôt.',
    details: 'Évite le menu contextuel lors de la formation de groupes MM+ ou raid.',
    tag: 'Outil Groupe',
    comments: {
      header: '[ Alt+Clic sur un nom pour inviter ]',
    },
  },
  'invite-from-whisper': {
    title: 'Invitation auto par mot-clé en chuchotement',
    description: 'Invite automatiquement tout joueur qui vous chuchote un mot-clé précis (ex. « 111 » ou « inv ») si vous êtes chef ou seul.',
    details: 'Pratique pour les raids de guilde, world boss ou groupes Mythique+.',
    tag: 'Chef de groupe',
    options: {
      keyword: { label: 'Mot-clé d’invitation' },
    },
    comments: {
      header: '[ Invitation auto par mot-clé en chuchotement ]',
    },
  },
  'block-duel-requests': {
    title: 'Refuser automatiquement les duels d’inconnus',
    description: 'Décline les demandes de duel des joueurs hors amis et guilde.',
    details: 'Supprime le spam de duels en capitale.',
    tag: 'Anti-spam',
    comments: {
      header: '[ Refuser automatiquement les duels d’inconnus ]',
    },
  },
  'block-pet-duels': {
    title: 'Refuser les duels de mascottes',
    description: 'Refuse automatiquement les demandes de combat de mascottes JcJ venant d’inconnus.',
    tag: 'Anti-spam',
    comments: {
      header: '[ Refuser les duels de mascottes ]',
    },
  },
  'block-party-invites': {
    title: 'Bloquer les invitations de groupe d’inconnus',
    description: 'Décline automatiquement les invitations de groupe de joueurs qui ne sont ni amis ni dans votre guilde.',
    tag: 'Filtre spam',
    comments: {
      header: '[ Bloquer les invitations de groupe d’inconnus ]',
    },
  },
  'block-social-requests': {
    title: 'Refuser demandes d’amis B.net et invitations de guilde',
    description: 'Refuse automatiquement les demandes d’amis Battle.net et les invitations de guilde d’inconnus et affiche le total dans le chat.',
    details: 'Les invitations de guilde venant d’amis restent acceptées.',
    tag: 'Anti-spam',
    options: {
      friendRequests: { label: 'Refuser les demandes d’amis Battle.net' },
      guildInvites: { label: 'Refuser les invitations de guilde (sauf amis)' },
    },
    comments: {
      header: '[ Refuser demandes d’amis B.net et invitations de guilde ]',
      guildPopupNote: 'Attendre l’affichage de la fenêtre puis la masquer (OnHide appelle DeclineGuild)',
    },
    strings: {
      declinedFriendsMsg: '|cff00ff99[QoL]|r %d demande(s) d’ami Battle.net refusée(s)',
      declinedGuildMsg: '|cff00ff99[QoL]|r Invitation de guilde refusée automatiquement',
    },
  },
  'auto-confirm-role': {
    title: 'Confirmer automatiquement le rôle LFG',
    description: 'Valide automatiquement la fenêtre de vérification de rôle en recherche de groupe/raid avec vos rôles précédents.',
    details: 'N’agit que si un rôle valide est coché ; maintenez Maj pour passer.',
    tag: 'File rapide',
    options: {
      friendLeaderOnly: {
        label: 'Seulement si le chef est ami/guilde',
        description: 'Désactiver pour confirmer quel que soit le chef de groupe',
      },
    },
    comments: {
      header: '[ Confirmer automatiquement le rôle LFG ]',
      delayNote: 'Attendre une frame que l’état du bouton soit mis à jour',
    },
  },
  'safe-queue': {
    title: 'SafeQueue & Minuteur de file JcJ',
    description: 'Masque « Quitter la file » sur les fenêtres de champ de bataille/arène, centre le bouton Entrer et colore le temps restant.',
    tag: 'JcJ & Instance',
    options: {
      announceWaitTime: {
        label: 'Annoncer le temps d’attente dans le chat',
        description: 'Affiche la durée d’attente lorsqu’un match est prêt',
      },
    },
    comments: {
      header: '[ SafeQueue & Minuteur de file JcJ (SafeQueue) ]',
      hideLeaveNote: 'Masquer le bouton Quitter pour éviter un clic accidentel',
      waitTimeNote: 'Utiliser le temps d’attente suivi par le serveur pour rester précis',
    },
    strings: {
      remainingLabel: 'Temps restant : ',
      waitTimeMsg: '|cff33ff99[SafeQueue]|r Match prêt ! Attente : %02dm %02ds',
    },
  },
  'copy-player-name': {
    title: 'Copier le nom via le menu clic droit',
    description: 'Utilise la Menu API moderne de WoW 12.x pour ajouter « Copier le nom » au menu clic droit sur un joueur.',
    tag: 'Action rapide',
    comments: {
      header: '[ Copier le nom via le menu clic droit (Menu API) ]',
    },
    strings: {
      copyPrefix: '|cff00ff00[Copier le nom]|r ',
    },
  },
  'lfg-double-click-signup': {
    title: 'Double-clic pour s’inscrire en groupe prédéfini',
    description: 'Double-cliquez sur une annonce dans la recherche de groupes prédéfinis pour vous inscrire directement.',
    details: 'Passe la boîte de dialogue si vos rôles sont déjà choisis ; Maj+Double-clic ouvre toujours la fenêtre.',
    tag: 'File rapide',
    options: {
      skipDialog: {
        label: 'Ignorer la fenêtre si rôles choisis',
        description: 'Inscrit immédiatement avec les rôles cochés (Maj affiche la fenêtre)',
      },
    },
    comments: {
      header: '[ Double-clic pour s’inscrire en groupe prédéfini ]',
      skipNote: 'Valider automatiquement si le bouton S’inscrire est actif sans Maj',
    },
  },
  'guild-motd-login': {
    title: 'Réafficher le message du jour de guilde',
    description: 'Réaffiche le message du jour de la guilde (MOTD) quelques secondes après la connexion.',
    tag: 'Guilde QoL',
    comments: {
      header: '[ Réafficher le message du jour de guilde ]',
    },
    strings: {
      motdPrefix: '|cff40ff40[Message de guilde]|r ',
    },
  },
};
