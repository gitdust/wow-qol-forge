import { ModuleTranslation } from '../../types';

export const mailFr: Record<string, ModuleTranslation> = {
  'postal-open-all': {
    title: 'Tout ouvrir au courrier (Open All)',
    description: 'Ajoute un bouton « Tout ouvrir » à la boîte aux lettres pour récupérer automatiquement l’or et les pièces jointes.',
    details: 'Issu de Postal : s’arrête proprement si les sacs sont pleins, affiche le bilan d’or et peut être interrompu à tout moment.',
    tag: 'Indispensable',
    options: {
      skipAH: {
        label: 'Ignorer le courrier de l’hôtel des ventes',
        description: 'Ne récupère que les lettres de joueurs et conserve celles de l’HV',
      },
    },
    comments: {
      header: '[ Tout ouvrir au courrier (Postal OpenAll) ]',
      ahPatternNote: 'Détecter le courrier HV via les titres localisés Blizzard (comme Postal)',
      retryNote: 'Si la même lettre ne change plus (sacs pleins/objet unique), arrêter plutôt que boucler',
    },
    strings: {
      btnOpenAll: 'Tout ouvrir',
      btnStop: 'Arrêter',
      earnedPrefix: ', reçu : ',
      logPrefix: '|cff00ff99[QoL Courrier]|r ',
      stopFailed: 'Impossible de récupérer le courrier restant (sacs pleins ou objet unique), arrêté',
      stopMorePages: 'Page vidée ; %d autres lettres non chargées — rouvrez la boîte aux lettres',
      stopDone: 'Tout le courrier contenant de l’or ou des objets a été ouvert',
      stopAborted: 'Ouverture du courrier annulée',
      stopClosed: 'Boîte aux lettres fermée, arrêté',
      stopBagFull: 'Inventaire plein, ouverture arrêtée',
    },
  },
  'postal-express': {
    title: 'Raccourcis courrier express (Shift/Alt)',
    description:
      'Shift+Clic dans la boîte de réception récupère les pièces jointes, Ctrl+Clic renvoie la lettre, et Alt+Clic sur un objet du sac l’ajoute à l’envoi.',
    details: 'Idéal pour envoyer consommables, gemmes et composants à vos rerolls sans glisser-déposer.',
    tag: 'Action rapide',
    comments: {
      header: '[ Raccourcis courrier express (Postal Express) ]',
      inboxNote: 'Réception : clics modifiés via InboxFrame_OnModifiedClick, clics simples via InboxFrame_OnClick',
      sendNote: 'Envoi : Alt+Clic gauche joint l’objet du sac (via HandleModifiedItemClick)',
    },
  },
  'postal-trade-block': {
    title: 'Bloquer les échanges à la boîte aux lettres',
    description: 'Refuse automatiquement les demandes d’échange lorsque votre boîte aux lettres est ouverte et rétablit l’état à la fermeture.',
    details: 'Évite les fenêtres d’échange intempestives en capitale.',
    tag: 'Anti-spam',
    comments: {
      header: '[ Bloquer les échanges à la boîte aux lettres (Postal TradeBlock) ]',
    },
  },
  'postal-wire': {
    title: 'Envoyer tout l’or en un clic (Wire)',
    description:
      'Ajoute un bouton « Tout » dans l’onglet d’envoi pour saisir tout votre or (hors frais de port) et remplit automatiquement l’objet vide avec le montant.',
    details: 'Évite de taper de longs chiffres lors des transferts d’or entre personnages.',
    tag: 'Astuce Or',
    options: {
      fillSubject: {
        label: 'Remplir l’objet avec le montant',
        description: 'Inscrit automatiquement le montant envoyé si le champ Objet est vide',
      },
    },
    comments: {
      header: '[ Envoyer tout l’or en un clic (Postal Wire) ]',
    },
    strings: {
      btnAll: 'Tout',
    },
  },
};
