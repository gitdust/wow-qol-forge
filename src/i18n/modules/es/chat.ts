import { ModuleTranslation } from '../../types';

export const chatEs: Record<string, ModuleTranslation> = {
  'chat-arrow-keys': {
    title: 'Flechas en el chat sin pulsar Alt',
    description: 'Mueve el cursor en la caja de texto del chat usando las flechas izquierda/derecha sin mantener pulsada la tecla Alt.',
    details: 'Funciona en todas las ventanas de chat y en futuras ventanas temporales de susurro.',
    tag: 'Escritura QoL',
    comments: {
      header: '[ Flechas en el chat sin pulsar Alt ]',
      coverNote: 'Aplicar a todas las ventanas y futuros susurros temporales (Leatrix Plus)',
    },
  },
  'chat-copy': {
    title: 'Copiar historial del chat en un clic',
    description: 'Shift+Clic en una pestaña de chat abre una ventana con todo el texto seleccionable para copiar fácilmente.',
    details: 'Muy útil para copiar enlaces de Discord, macros de banda o cadenas de WeakAuras.',
    tag: 'Esencial',
    comments: {
      header: '[ Copiar historial del chat (BasicChatMods ChatCopy) ]',
      cleanerNote: 'Usar un FontString oculto para expandir secuencias |4singular:plural;',
      rtNote: 'Convertir iconos de objetivo de banda a notación {rt1}',
    },
    strings: {
      windowTitle: 'Copiar registro del chat',
    },
  },
  'chat-short-channels': {
    title: 'Acortar prefijos de canales de chat',
    description: 'Abrevia prefijos largos como [1. General - Dornogal] a [G], así como Hermandad, Grupo, Banda y Estancia.',
    details: 'Basado en cadenas localizadas de Blizzard; los canales personalizados conservan solo su número.',
    tag: 'UI limpia',
    comments: {
      header: '[ Acortar prefijos de canales (BasicChatMods ChannelNames) ]',
      historyNote: 'Los prefijos están fuera del cuerpo; reescribir la línea formateada en historyBuffer',
      customRuleNote: 'Conservar solo el número en canales personalizados',
    },
    strings: {
      general: '[G]',
      trade: '[C]',
      worldDefense: '[DG]',
      localDefense: '[DL]',
      lfg: '[BG]',
      recruitment: '[Rec]',
      instanceLeader: '[LE]',
      instance: '[E]',
      guild: '[H]',
      partyLeader: '[LG]',
      party: '[Gr]',
      officer: '[O]',
      raidLeader: '[LB]',
      raidWarning: '[AB]',
      raid: '[B]',
    },
  },
  'chat-timestamps': {
    title: 'Marcas de tiempo en el chat',
    description: 'Añade una marca de tiempo gris discreta ([12:35]) al inicio de cada línea de chat.',
    details: 'Desactiva la marca nativa de Blizzard para evitar duplicados.',
    tag: 'QoL básico',
    options: {
      showSeconds: {
        label: 'Mostrar segundos',
        description: 'Cambia el formato a [12:35:08]',
      },
    },
    comments: {
      header: '[ Marcas de tiempo en el chat (BasicChatMods Timestamp) ]',
      disableNativeNote: 'Desactivar marcas de tiempo nativas de Blizzard para evitar duplicados',
      prependNote: 'Antepone la hora al canal/nombre en la última entrada de historyBuffer',
    },
  },
  'chat-unclamp': {
    title: 'Soltar marcos de chat de los bordes',
    description: 'Permite arrastrar las ventanas de chat hasta el mismo borde de la pantalla sin márgenes forzados.',
    tag: 'Diseño libre',
    comments: {
      header: '[ Soltar marcos de chat de los bordes ]',
      hookNote: 'Blizzard restablece márgenes al actualizar el diseño; interceptar y poner 0',
    },
  },
  'disable-chat-fade': {
    title: 'Desactivar desvanecimiento del texto del chat',
    description: 'Evita que los mensajes del chat desaparezcan con el tiempo para poder leer siempre lo reciente.',
    details: 'Opcionalmente puedes elegir un retraso personalizado en segundos.',
    tag: 'QoL básico',
    options: {
      visibleSeconds: {
        label: 'Segundos antes de desvanecer',
        description: '0 = nunca desvanecer; valor por defecto de Blizzard: 120 segundos',
      },
    },
    comments: {
      header: '[ Desactivar desvanecimiento del texto del chat ]',
      tempWindowNote: 'Las ventanas temporales de susurro se crean tras las ventanas fijas',
    },
  },
  'hide-chat-buttons': {
    title: 'Ocultar botones laterales y de canal del chat',
    description: 'Oculta los botones de Unión rápida, Canales y Menú junto al marco de chat.',
    tag: 'UI minimalista',
    comments: {
      header: '[ Ocultar botones laterales del chat ]',
      hookNote: 'Ocultar al mostrarse mediante hook Show sin sobrescribir métodos (sin taint)',
    },
  },
  'paste-text': {
    title: 'Pegar texto largo y macros multilínea (/paste)',
    description: 'Escribe /paste para abrir un cuadro multilínea sin el límite de 255 caracteres—ideal para listas /way y macros.',
    tag: 'Utilidad',
    comments: {
      header: '[ Pegar texto largo y macros multilínea (Paste) ]',
    },
    strings: {
      title: 'Asistente de pegado (/paste)',
      runBtn: 'Pegar y ejecutar',
      sentMsg: '|cff00ff00[Paste]|r Líneas de texto ejecutadas/enviadas.',
      clearBtn: 'Vaciar',
    },
  },
  'chat-keyword-filter': {
    title: 'Filtro de spam por palabras clave',
    description: 'Oculta mensajes en canales públicos, Decir y Gritar que contengan cualquiera de tus palabras bloqueadas.',
    details: 'No distingue mayúsculas y se separa por comas. Inactivo en estancias/M+/banda/JcJ por restricción 12.0+.',
    tag: 'Antispam',
    options: {
      keywords: {
        label: 'Palabras bloqueadas',
        description: 'Separa varias palabras con comas',
        default: 'wts,boost,carry,oro',
      },
      includeWhisper: {
        label: 'Filtrar también susurros de desconocidos',
        description: 'Los susurros de amigos y hermandad nunca se filtran',
      },
    },
    comments: {
      header: '[ Filtro de spam por palabras clave ]',
      splitNote: 'Separar palabras por comas y reanalizar al cambiar ajustes',
      secretNote: 'El texto en estancias es un valor secreto; dejar pasar sin cambios',
    },
  },
  'tell-target': {
    title: '/tt Susurrar al objetivo actual',
    description: 'Escribe /tt <mensaje> para susurrar directamente al jugador seleccionado sin teclear su nombre.',
    details: 'Escribir solo /tt abre la caja de susurro ya rellenada con su nombre.',
    tag: 'Social QoL',
    comments: {
      header: '[ /tt Susurrar al objetivo actual ]',
    },
    strings: {
      noTargetMsg: '|cff00ff99[QoL]|r /tt requiere seleccionar primero a un jugador',
    },
  },
  'auto-leave-channels': {
    title: 'Salir automáticamente de canales al conectar',
    description: 'Abandona automáticamente los canales indicados (ej. BuscarGrupo) tras iniciar sesión.',
    details: 'Separa varios nombres exactos con comas. Puedes volver en cualquier momento con /join Nombre.',
    tag: 'Antispam',
    options: {
      channels: {
        label: 'Canales a abandonar',
        description: 'Separa varios canales con comas',
        default: 'BuscarGrupo',
      },
    },
    comments: {
      header: '[ Salir automáticamente de canales al conectar ]',
      delayNote: 'Los canales por defecto se unen segundos tras conectar; comprobar dos veces',
    },
  },
  'chat-editbox-top': {
    title: 'Mover la barra de escritura del chat arriba',
    description: 'Mueve el cuadro de texto de la parte inferior a la superior del chat para que no quede fuera de pantalla.',
    tag: 'Diseño libre',
    comments: {
      header: '[ Mover la barra de escritura del chat arriba ]',
      anchorNote: 'Anclar por dentro del borde superior sin tapar pestañas (Leatrix Plus)',
    },
  },
};
