import { UiDictionary } from '../types';

export const fr: UiDictionary = {
  seo: {
    heading: 'Générateur d’addons pour World of Warcraft Retail',
    description: 'Choisissez parmi {count} modules de confort, dont la réparation automatique et le ramassage rapide du butin. Réglez les options, prévisualisez le Lua et téléchargez votre addon en ZIP.',
    ogImageAlt: 'Icône modulaire WoW QoL Forge',
    siteSubtitle: 'Atelier d’addons minimalistes',
    gameType: 'Retail',
  },
  nav: {
    backToModules: 'Retour aux modules',
    changelog: 'Notes de version',
    githubRepo: 'Dépôt GitHub',
    languageAria: 'Changer de langue',
  },
  toolbar: {
    totalModules: '{count} modules inclus',
    showingCount: '{count} modules affichés',
    selectedCount: 'Sélectionnés : {selected} / {total}',
    searchPlaceholder: 'Rechercher un module ou une description...',
    clearSearch: 'Effacer la recherche',
    selectAllCurrent: 'Sélectionner les modules visibles',
    unselectAllCurrent: 'Désélectionner les modules visibles',
    tableHeaderModule: 'Modules et détails',
    tableHeaderAction: 'Actions',
    emptyTitle: 'Aucun module correspondant',
    emptyHint: 'Essayez une autre catégorie ou videz le champ de recherche',
  },
  moduleRow: {
    downloadsCount: '{count} téléch.',
    downloadsTenThousand: '{value}0k',
    downloadsUnavailable: 'Compteur indisponible',
    downloadsTitle: '{count} téléchargements au total',
    optionsButton: 'Options',
    optionsPreviewTitle: '{title} · Aperçu des options',
    optionsReadonlyHint: 'Aperçu seul · Cochez ce module pour le configurer dans le panneau latéral',
    optionOn: 'Activé',
    optionOff: 'Désactivé',
    sourceButton: 'Code',
    sourceButtonTitle: 'Voir le code Lua autonome',
  },
  drawer: {
    title: 'Modules sélectionnés et réglages',
    itemCount: '{count} choisis',
    defaultsHintPrefix: 'Ces réglages sont des valeurs par défaut. Tapez',
    defaultsHintSuffix: 'en jeu pour activer/désactiver les modules et ajuster les options',
    clearAll: 'Tout vider',
    clearAllTitle: 'Désélectionner tous les modules',
    closeDrawer: 'Fermer le panneau',
    addonNameLabel: 'Nom du dossier de l’addon',
    addonNameHint: '(Lettres de A à Z uniquement, sans limite)',
    addonNameDefault: 'Par défaut : {name}',
    charsCount: '{count} car.',
    addonNameError: 'Le nom ne peut pas être vide et ne doit contenir que des lettres (A-Z, a-z)',
    emptyTitle: 'Aucun module sélectionné',
    emptyDesc:
      'Cochez les fonctionnalités souhaitées dans la liste à gauche pour les configurer ici.',
    expandOptions: 'Afficher les options',
    collapseOptions: 'Masquer les options',
    optionsButton: 'Options',
    removeTitle: 'Retirer de la sélection',
    selectedLabel: '{count} sélectionnés',
    codePreview: 'Aperçu du code',
    downloading: 'Création du ZIP...',
    downloadButton: 'Télécharger l’addon ({count})',
  },
  floating: {
    buttonTitle: 'Ouvrir la sélection pour configurer et télécharger',
  },
  codeModal: {
    subtitle: 'Code Lua pur et sans dépendance pour WoW Retail moderne',
    copyFile: 'Copier le fichier',
    copied: 'Copié !',
    close: 'Fermer',
    lineCount: 'Lignes : {count}',
    closeWindow: 'Fermer',
    moduleSourceTitle: '{title} ({id}) - Code du module',
    bundlePreviewTitle: '{name} - Aperçu complet ({count} modules actifs)',
  },
  changelog: {
    title: 'Notes de version',
    currentVersion: 'Version actuelle',
    backToModules: 'Retour aux modules',
    currentBadge: 'Actuelle',
    types: {
      added: 'Ajouté',
      improved: 'Amélioré',
      fixed: 'Corrigé',
      removed: 'Supprimé',
    },
    entries: {
      '1.3.1': {
        groups: [
          { type: 'added', items: ['Compteur de téléchargements par module', 'Support multilingue en 9 langues (UI en jeu et commentaires Lua inclus)'] },
          { type: 'improved', items: ['Support des versions d’interface 12.1.5 / 12.1.7'] },
          { type: 'removed', items: ['Retrait de 11 modules peu utilisés ou redondants'] },
        ],
      },
      '1.3.0': {
        groups: [
          {
            type: 'added',
            items: [
              'Changement auto de spécialisation de butin par boss/instance',
              'Rappel de récompense de la Grande chambre forte',
              'Réapprovisionnement automatique chez le marchand',
            ],
          },
          { type: 'improved', items: ['Clignotement de la barre des tâches lors d’un appel/chuchotement'] },
        ],
      },
      '1.2.0': {
        groups: [
          {
            type: 'added',
            items: [
              'Panneau de configuration en jeu (/nomaddon)',
              '25 nouveaux modules dont confirmation auto de rôle et insertion de clé MM+',
            ],
          },
          {
            type: 'improved',
            items: ['Marqueurs LqE/Bataillon (Warbound)', 'Déplacement libre et mémorisé des fenêtres Blizzard'],
          },
          { type: 'removed', items: ['Suppression du masquage des glyphes et du défilement molette du chat'] },
        ],
      },
      '1.1.0': {
        groups: [
          {
            type: 'added',
            items: ['Icône dédiée incluse dans le ZIP', 'Sous-options ajoutées sur plusieurs modules'],
          },
          {
            type: 'improved',
            items: ['Compatibilité complète Retail 12.1.5', 'Chargement isolé par pcall pour chaque module'],
          },
          { type: 'fixed', items: ['11 correctifs dont le collage de longs textes et l’assistant courrier'] },
          { type: 'removed', items: ['Suppression de l’assistant de transmogrification 3D'] },
        ],
      },
      '1.0.0': {
        groups: [
          {
            type: 'added',
            items: ['Première version : 64 modules en 10 catégories avec recherche, options et export ZIP'],
          },
        ],
      },
    },
  },
  footer: {
    sourcesLabel: 'Inspiré de',
    taintTitle: 'Zéro contamination UI (Zero Taint)',
    taintDesc:
      'Respecte strictement le bac à sable Blizzard (hooksecurefunc, TooltipDataProcessor) sans écraser les fonctions globales protégées.',
    kernelTitle: 'Micro-noyau événementiel unique',
    kernelDesc:
      'Que vous choisissiez 3 ou 30 modules, un seul Frame léger distribue tous les événements avec isolation pcall et empreinte mémoire minime.',
    installTitle: 'Guide d’installation rapide',
    step1Title: '1. Choisir & Télécharger',
    step1Desc:
      'Cochez les modules voulus, ouvrez le panneau en bas à droite et téléchargez l’archive ZIP.',
    step2Title: '2. Extraire dans AddOns',
    step2Desc: 'Copiez le dossier extrait (par défaut MyQol) dans le répertoire AddOns de WoW :',
    step3Title: '3. Jouer immédiatement',
    step3DescPrefix:
      'Les modules actifs fonctionnent dès la connexion. Pour configurer en jeu, tapez',
    step3DescCmd: ' /nomaddon',
    step3DescSuffix: ' (ex. /myqol) dans le chat.',
    friendlyLinks: 'Liens :',
    wowApiLabel: 'World of Warcraft API (Warcraft Wiki)',
    wowUiSourceLabel: 'WoW UI Source (GitHub)',
  },
  alerts: {
    invalidAddonName: 'Veuillez saisir un nom composé uniquement de lettres de A à Z (p. ex. : MyQol)',
    selectOneModule: 'Veuillez sélectionner au moins un module',
    downloadFailed: 'Échec de la création du ZIP, veuillez réessayer',
    defaultAddonNotes:
      'Addon QoL minimaliste et sur mesure pour World of Warcraft Retail',
  },
  categories: {
    all: {
      label: 'Tous les modules',
      description: 'Parcourir tous les modules QoL légers et éprouvés',
    },
    automation: {
      label: 'Automatisation',
      description: 'Réparation auto, vente de camelote, quêtes rapides, passer cinématiques, destruction facile',
    },
    social: {
      label: 'Social & Groupe',
      description: 'Acceptation auto amis/guilde, invitation par chuchotement, blocage duels et spam',
    },
    chat: {
      label: 'Discussion',
      description: 'Flèches du curseur, copie de texte et liens, noms de canaux compacts',
    },
    ui: {
      label: 'Interface & Visuels',
      description: 'Masquer erreurs rouges et têtes parlantes, zoom caméra max, barres épurées',
    },
    inventory: {
      label: 'Sacs & Marchand',
      description: 'Achat en masse au marchand, surlignage des recettes connues, durabilité',
    },
    looting: {
      label: 'Butin rapide',
      description: 'Supprime le délai interne de fouille pour ramasser instantanément',
    },
    mail: {
      label: 'Courrier',
      description: 'Tout ouvrir en un clic, envoi express, bloquer les échanges à la boîte aux lettres',
    },
    inspect: {
      label: 'Stats & Inspection',
      description: 'Analyse des rendements décroissants des statistiques secondaires sur la fiche perso',
    },
    tooltips: {
      label: 'Infobulles',
      description: 'Afficher les IDs de sorts/objets/PNJ/quêtes et colorer cible/guilde',
    },
    system: {
      label: 'Système & Audio',
      description: 'Couper les bruits pénibles de montures, réduire le flou, clignotement barre des tâches',
    },
  },
  presets: {
    'all-in-one': {
      name: 'Essentiel quotidien (Recommandé)',
      description:
        '19 indispensables fiables : réparation, vente auto, butin instantané, passer cinématiques, courrier, fenêtres déplaçables, etc.',
    },
    'dungeon-raid': {
      name: 'Mythique+ & Raid',
      description:
        'Masquer têtes parlantes et erreurs, zoom max, butin instantané, minuteur d’appel et analyse des stats secondaires.',
    },
    'pvp-combat': {
      name: 'Combat JcJ',
      description:
        'Libération instantanée en BG, filtre d’erreurs, zoom max, barres de noms en combat et file JcJ sécurisée.',
    },
    'merchant-life': {
      name: 'Marchand & Métiers',
      description:
        'Achat en gros, réparation auto, vente camelote, recettes déjà apprises, ouverture/envoi rapide de courrier.',
    },
  },
  generator: {
    luaHeaderGeneratedBy: 'Généré par WoW QoL Forge',
    luaHeaderTargetInterface: 'Interface cible',
    luaHeaderSelectedModules: 'Modules sélectionnés',
    luaHeaderNote:
      'Note : Les réglages du site servent de valeurs par défaut. Tapez /{slash} en jeu pour activer/désactiver les modules.',
    commentErrorReport: 'Rapport d’erreurs (n’afficher chaque erreur unique qu’une fois)',
    runtimeErrorPrint: 'Module ',
    commentEventBus:
      'Bus d’événements léger (un seul Frame distribue tout sans taint ni surcoût)',
    commentUnknownEvent:
      'Les événements inconnus lèvent une erreur sur les clients récents ; capturer et ignorer',
    runtimeEventError: 'Impossible d’enregistrer l’événement ',
    commentFeatureList: 'Registre : catégories, modules et options par défaut',
    commentSavedVars:
      'SavedVariables ({savedVar}) : ne stocke que les écarts par rapport aux valeurs par défaut',
    commentDefaultEnabled: 'Activé par défaut ; ne persister que l’état désactivé',
    commentOptionProxy:
      'Les modules lisent O.<key> pour obtenir immédiatement la dernière valeur enregistrée ou par défaut',
    commentSettingsCallbacks:
      'Les modules peuvent enregistrer OnSettingsChanged pour appliquer les changements sans /reload',
    commentModuleLoader:
      'Attendre ADDON_LOADED puis initialiser chaque module actif dans un pcall isolé',
    commentModuleLoaderStates: 'started : chargement tenté ; loaded : chargé sans erreur',
    commentModuleLabel: 'Module',
    commentSourceLabel: 'Source',
    commentWelcome: 'Message de bienvenue à la connexion',
    runtimeWelcomeLoaded: ' a chargé ',
    runtimeWelcomeOpenCmd: ' modules. Tapez ',
    tocDefaultNotes: 'Addon QoL léger et personnalisé généré avec WoW QoL Forge',
    readmeTitle: '# {name} - Addon WoW minimaliste sur mesure',
    readmeGeneratedBy: 'Généré côté client avec **WoW QoL Forge**.',
    readmeImportantTitle: '## 💡 Notes importantes',
    readmeImportantBody:
      'Les modules choisis sur le site sont actifs dès la connexion avec vos valeurs par défaut.\nTapez `/{slash}` dans le chat pour ouvrir le panneau : choisissez une catégorie à gauche, cochez pour activer/désactiver,\net cliquez sur la flèche à droite pour régler les sous-options. Tout est enregistré automatiquement.\nÉgalement accessible via Options -> AddOns.',
    readmeInstallTitle: '## 📦 Installation',
    readmeInstallStep1: '1. Extrayez l’archive pour obtenir le dossier `{name}`.',
    readmeInstallStep2:
      '2. Copiez `{name}` dans le dossier AddOns de World of Warcraft :\n   - Chemin courant : `World of Warcraft\\_retail_\\Interface\\AddOns\\{name}`',
    readmeInstallStep3: '3. Lancez WoW ou tapez `/reload` dans le chat.',
    readmeSelectedTitle: '## ⚙️ Modules inclus ({count})',
    panel: {
      headerComment: 'Panneau de configuration en jeu',
      loadedStateComment:
        'Capture l’état initial des modules et options non-live pour détecter le besoin de /reload',
      needsReloadComment:
        'Activer ou désactiver un module nécessite un rechargement de l’interface',
      needsReloadStatus: '|cffff8040Certains changements nécessitent de recharger l’UI|r',
      setValueComment: 'Enregistrer aussitôt et notifier le module actif si un callback est enregistré',
      optionLineComment: 'Ligne d’option : case / nombre / texte / menu déroulant',
      needsReloadTag: ' |cff888888(Recharger)|r',
      rowComment: 'Ligne de module : case + titre + description + flèche d’options',
      collapseOptions: 'Masquer les options',
      expandOptions: 'Afficher les options',
      windowTitleSuffix: ' Paramètres',
      allCategory: 'Tous',
      bottomHint: 'Cocher pour activer · Flèche pour les options · Sauvegarde auto',
      reloadButton: 'Recharger UI',
      settingsTabComment: 'Ajouter un bouton d’ouverture dans Options -> AddOns',
      settingsTabText: ' utilise une fenêtre dédiée. Vous pouvez aussi taper ',
      openPanelButton: 'Ouvrir les paramètres',
    },
  },
};
