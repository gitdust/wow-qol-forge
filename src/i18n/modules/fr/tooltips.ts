import { ModuleTranslation } from '../../types';

export const tooltipsFr: Record<string, ModuleTranslation> = {
  'id-tip': {
    title: 'Afficher les IDs numériques (idTip)',
    description: 'Affiche les IDs des sorts, auras, objets, jouets, PNJ, quêtes, monnaies, montures, mascottes et hauts faits dans les infobulles.',
    details: 'Basé sur TooltipDataProcessor moderne et couvre aussi les marqueurs de quête sur la carte et le journal.',
    tag: 'Avancé',
    options: {
      showSpell: { label: 'Afficher les IDs de sorts (auras/mascottes incl.)' },
      showItem: { label: 'Afficher les IDs d’objets (jouets incl.)' },
      showNpc: { label: 'Afficher les IDs de PNJ/créatures' },
      showQuest: { label: 'Afficher les IDs de quêtes' },
      showCurrency: { label: 'Afficher les IDs de monnaies' },
      showCollections: { label: 'Afficher les IDs montures/espèces/hauts faits' },
    },
    comments: {
      header: '[ Afficher les IDs numériques (idTip) ]',
      dedupNote: 'Éviter d’ajouter deux fois la même ligne d’ID dans une infobulle',
      questHookNote: 'Les points de quête sur carte et boutons du journal ne passent pas par TooltipDataProcessor',
    },
  },
  'enhance-tooltips': {
    title: 'Couleurs de classe, rang de guilde et cible',
    description: 'Colore le nom des joueurs selon leur classe et ajoute le rang de guilde ainsi que la cible actuelle dans l’infobulle.',
    tag: 'Info claire',
    comments: {
      header: '[ Couleurs de classe, rang de guilde et cible (Leatrix Plus) ]',
      secretSkipNote: 'En contexte restreint 12.x (ex. en combat), le jeton d’unité peut être secret ; ignorer',
      safeFilterNote: 'Les requêtes peuvent renvoyer des valeurs secrètes ; filtrer via Safe()',
      classColorNote: 'Colorer le nom du joueur par classe',
      guildRankNote: 'Ajouter le rang à la ligne de guilde',
      targetNote: 'Cible actuelle',
    },
    strings: {
      youLabel: '>> VOUS <<',
      targetLabel: 'Cible :',
    },
  },
  'transmog-status': {
    title: 'Statut de collection de transmogrification',
    description: 'Indique en bas de l’infobulle d’armure ou d’arme si l’apparence est déjà ajoutée à votre collection de bataillon.',
    tag: 'Collectionneurs',
    comments: {
      header: '[ Statut de collection de transmogrification (Can I Mog It Lite) ]',
      statusRuleNote: 'sourceID exact connu -> Collectée ; même apparence autre source -> Connue (autre objet) ; sinon Non collectée',
    },
    strings: {
      collected: '|cff88ff88Collectée|r',
      appearanceCollected: '|cffbbee88Apparence collectée (autre objet)|r',
      notCollected: '|cffff5588Non collectée|r',
      label: 'Transmo :',
    },
  },
  'tooltip-combat-hide': {
    title: 'Masquer les infobulles d’unités en combat',
    description: 'Masque les infobulles des monstres et joueurs survolés dans le monde 3D pendant le combat.',
    details: 'Les infobulles de sorts, objets et cadres d’unités restent visibles. Ancrage au curseur disponible en option.',
    tag: 'Combat propre',
    options: {
      hideInCombat: { label: 'Masquer les infobulles du monde en combat' },
      shiftOverride: { label: 'Afficher en maintenant Maj' },
      anchorCursor: {
        label: 'Ancrer ces infobulles au curseur',
        description: 'Affiche les infobulles des unités du monde près du curseur plutôt qu’en bas à droite',
      },
    },
    comments: {
      header: '[ Masquer les infobulles d’unités en combat ]',
      worldMotionNote: 'Activer le suivi souris sur WorldFrame pour détecter le survol dans le monde 3D',
    },
  },
};
