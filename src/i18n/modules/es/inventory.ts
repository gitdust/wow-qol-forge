import { ModuleTranslation } from '../../types';

export const inventoryEs: Record<string, ModuleTranslation> = {
  'buy-em-all': {
    title: 'Compra masiva en mercaderes (BuyEmAll)',
    description:
      'Shift+Clic derecho en un objeto del vendedor abre un cuadro de cantidad con el máximo comprable y compra por lotes automáticamente.',
    details: 'Tiene en cuenta tu oro, huecos libres (incluida bolsa de componentes) y stock del vendedor.',
    tag: 'Profesiones',
    comments: {
      header: '[ Compra masiva en mercaderes (BuyEmAll) ]',
      freeBagSpaceNote: 'Capacidad libre: huecos vacíos * tamaño de pila + espacio en pilas parciales',
      goldOnlyNote: 'Solo artículos unitarios por oro; dejar costes especiales o paquetes sin tocar',
    },
    strings: {
      popupText: 'Comprar %s\nMáximo disponible: %d (limitado por oro, bolsas y stock)',
      insufficientMsg: 'Oro o espacio en bolsas insuficiente para comprar',
    },
  },
  'already-known': {
    title: 'Resaltar recetas y coleccionables ya conocidos',
    description: 'Tiñe de verde recetas, patrones, monturas, mascotas y juguetes ya conocidos en mercaderes, subasta y banco de hermandad.',
    details: 'Evita comprar repetidos por error de un solo vistazo.',
    tag: 'Coleccionistas',
    comments: {
      header: '[ Resaltar recetas y coleccionables ya conocidos (AlreadyKnown) ]',
      cagedPetNote: 'Mascotas de duelo enjauladas',
      knownTooltipNote: 'Recetas/patrones: buscar ITEM_SPELL_KNOWN en el tooltip',
      merchantNote: 'Mercader',
      ahNote: 'Lista de Casa de Subastas',
      guildBankNote: 'Banco de hermandad',
      guildBankConstNote: 'Constantes internas del banco de hermandad (98 ranuras por pestaña, 14 por columna)',
    },
  },
  'durability-status': {
    title: 'Resumen de durabilidad en ventana de personaje',
    description: 'Muestra el porcentaje total de durabilidad abajo a la derecha del marco de personaje con desglose al pasar el ratón y aviso al morir.',
    tag: 'QoL básico',
    comments: {
      header: '[ Resumen de durabilidad en ventana de personaje (Leatrix Plus) ]',
      getDurabilityNote: 'Devolver porcentaje total y desglose por ranura; nil si no hay equipo con durabilidad',
      buttonNote: 'Etiqueta de durabilidad abajo a la derecha de PaperDollFrame',
      deathNoticeNote: 'Imprimir en chat al morir (limitado a 1 vez cada 2s)',
    },
    strings: {
      labelPrefix: 'Durab. ',
      tooltipTitle: 'Durabilidad del equipo',
      tooltipTotal: 'Total',
      deathMsg: '|cffff9900[QoL]|r Durabilidad actual del equipo: ',
    },
  },
  'hide-cleanup-buttons': {
    title: 'Ocultar botones de ordenar bolsas y banco',
    description: 'Oculta los iconos de escoba para limpiar bolsas y banco y evitar desordenar tus huecos por accidente.',
    tag: 'Anticlic',
    comments: {
      header: '[ Ocultar botones de ordenar bolsas y banco ]',
      hideNote: 'Ocultar al mostrar; en Retail 12.x el botón del banco es BankPanel.AutoSortButton',
    },
  },
  'quest-item-destroy-info': {
    title: 'Aviso de misión antes de destruir objetos de misión',
    description: 'Muestra en el chat la misión asociada y si ya la tienes aceptada cuando intentas destruir un objeto relacionado.',
    details: 'Ayuda a evitar borrar objetos de misión activos o iniciadores de misión.',
    tag: 'Anticlic',
    comments: {
      header: '[ Aviso antes de destruir objetos de misión ]',
    },
    strings: {
      questFallback: 'Misión ',
      stateActive: 'en tu registro de misiones',
      stateStarter: 'aún no aceptada — este objeto inicia una misión',
      warnRelated: '|cffff5555[QoL] Aviso:|r Este objeto pertenece a la misión «%s» (%s)',
      warnGeneric: '|cffff5555[QoL] Aviso:|r Es un objeto de misión y podrías tener que recuperarlo si lo destruyes',
    },
  },
  'auto-restock': {
    title: 'Reposición automática en mercaderes',
    description: 'Compra automáticamente consumibles o materiales hasta las cantidades objetivo al abrir un mercader (ej. «Agua=40»).',
    details: 'Acepta nombres exactos o IDs de objeto; compra solo artículos unitarios en oro respetando oro, bolsas y stock.',
    tag: 'Ahorra tiempo',
    options: {
      items: {
        label: 'Lista de reposición',
        description: 'Formato «NombreOID=CantidadObjetivo», separados por coma/punto y coma, ej. 113509=20',
      },
      showSummary: { label: 'Mostrar resumen en el chat' },
    },
    comments: {
      header: '[ Reposición automática en mercaderes (Restocker) ]',
      parseListNote: 'Analizar lista «ObjetoOID=Cantidad»; dividir por «=» ASCII',
      freeBagSpaceNote: 'Calcular espacio libre en bolsas',
      goldOnlyNote: 'Comprar solo artículos unitarios por oro',
      delayNote: 'Los datos del mercader terminan de cargarse un frame tras MERCHANT_SHOW',
    },
    strings: {
      summaryMsg: '|cff00ff99[QoL]|r Repuesto automáticamente: %s (gastado %s)',
      listSep: ', ',
    },
  },
};
