import { ModuleTranslation } from '../../types';

export const mailEs: Record<string, ModuleTranslation> = {
  'postal-open-all': {
    title: 'Abrir todo el correo (Open All)',
    description: 'Añade un botón «Abrir todo» al buzón para recoger automáticamente el oro y los adjuntos de todos los mensajes.',
    details: 'Basado en Postal: se detiene de forma segura si se llenan las bolsas, resume el oro obtenido y permite cancelar con otro clic.',
    tag: 'Imprescindible',
    options: {
      skipAH: {
        label: 'Omitir correo de Casa de Subastas',
        description: 'Recoge solo correos de jugadores y conserva los de la subasta',
      },
    },
    comments: {
      header: '[ Abrir todo el correo (Postal OpenAll) ]',
      ahPatternNote: 'Detectar correos de subasta mediante asuntos localizados de Blizzard (igual que Postal)',
      retryNote: 'Si la misma ranura no cambia (bolsas llenas/objeto único), detener en lugar de repetir',
    },
    strings: {
      btnOpenAll: 'Abrir todo',
      btnStop: 'Detener',
      earnedPrefix: ', recogido: ',
      logPrefix: '|cff00ff99[QoL Correo]|r ',
      stopFailed: 'No se pudo recoger el correo restante (bolsas llenas u objeto único), detenido',
      stopMorePages: 'Página vaciada; quedan %d correos por cargar — vuelve a abrir el buzón en breve',
      stopDone: 'Se ha recogido todo el correo con oro u objetos',
      stopAborted: 'Recogida de correo cancelada',
      stopClosed: 'Buzón cerrado, detenido',
      stopBagFull: 'Inventario lleno, recogida detenida',
    },
  },
  'postal-express': {
    title: 'Atajos de correo exprés (Shift/Alt)',
    description:
      'Shift+Clic en la bandeja recoge adjuntos al instante, Ctrl+Clic devuelve el correo y Alt+Clic sobre objetos de tu bolsa los adjunta al redactar.',
    details: 'Ideal para enviar consumibles, gemas y materiales entre alters sin arrastrar uno a uno.',
    tag: 'Acción rápida',
    comments: {
      header: '[ Atajos de correo exprés (Postal Express) ]',
      inboxNote: 'Entrada: clics modificados por InboxFrame_OnModifiedClick, normales por InboxFrame_OnClick',
      sendNote: 'Envío: Alt+Clic izquierdo adjunta objetos de bolsa (vía HandleModifiedItemClick)',
    },
  },
  'postal-trade-block': {
    title: 'Bloquear comercio en el buzón',
    description: 'Rechaza automáticamente las peticiones de comercio mientras tienes el buzón abierto y restaura tu ajuste al cerrarlo.',
    details: 'Evita interrupciones molestas mientras ordenas oro o correo en ciudades concurridas.',
    tag: 'Antispam',
    comments: {
      header: '[ Bloquear comercio en el buzón (Postal TradeBlock) ]',
    },
  },
  'postal-wire': {
    title: 'Enviar todo el oro en un clic (Wire)',
    description:
      'Añade un botón «Todo» en la pestaña Enviar para rellenar todo tu oro (menos franqueo) y completa asuntos vacíos con la cantidad.',
    details: 'Ahorra tiempo al transferir oro entre personajes.',
    tag: 'Ayuda Oro',
    options: {
      fillSubject: {
        label: 'Rellenar asunto con la cantidad',
        description: 'Escribe automáticamente el importe enviado si el asunto está vacío',
      },
    },
    comments: {
      header: '[ Enviar todo el oro en un clic (Postal Wire) ]',
    },
    strings: {
      btnAll: 'Todo',
    },
  },
};
