import { ModuleTranslation } from '../../types';

export const automationEs: Record<string, ModuleTranslation> = {
  'auto-repair': {
    title: 'Reparación automática de equipo',
    description: 'Repara automáticamente todo el equipo al hablar con un vendedor reparador (con prioridad opcional del banco de hermandad).',
    details: 'Mantén Shift al abrir el vendedor para omitir. Si no alcanza el fondo de hermandad, el resto usa tu oro.',
    tag: 'Esencial',
    options: {
      guildRepair: {
        label: 'Priorizar banco de hermandad',
        description: 'Usa primero fondos de reparación de hermandad si está permitido',
      },
      showSummary: {
        label: 'Mostrar coste de reparación en chat',
        description: 'Imprime en el chat el oro gastado en reparar',
      },
    },
    comments: {
      header: '[ Reparación automática de equipo (Leatrix Plus) ]',
      guildFallbackNote: 'Usar primero fondos de hermandad; el resto se paga con oro personal',
    },
    strings: {
      repairedMsg: '|cff00ff99[QoL]|r Equipo reparado por: ',
    },
  },
  'auto-sell-junk': {
    title: 'Vender chatarra gris automáticamente',
    description: 'Vende al instante todos los objetos de calidad pobre (grises) al visitar a un mercader.',
    details: 'Mantén Shift para omitir. Escanea las bolsas en varias pasadas y resume el oro obtenido.',
    tag: 'Esencial',
    options: {
      showSummary: {
        label: 'Mostrar oro ganado en el chat',
        description: 'Imprime el total de oro obtenido al vender objetos grises',
      },
    },
    comments: {
      header: '[ Vender chatarra gris automáticamente (Leatrix Plus) ]',
      multiRoundNote: 'Los huecos cambian al vender; escanear cada 0.2s hasta 6 pasadas',
      stopErrorNote: 'Detener de inmediato si el mercader no compra o se alcanza el límite de oro',
    },
    strings: {
      soldMsg: '|cff00ff99[QoL]|r Chatarra gris vendida por: ',
    },
  },
  'automate-quests': {
    title: 'Aceptar y entregar misiones rápido',
    description: 'Acepta y entrega misiones completadas automáticamente al hablar con PNJ; se detiene si hay varias recompensas a elegir.',
    details: 'Mantén Shift para pausar. Nunca entrega misiones que cuesten oro, monedas, materiales o objetos ligados a cuenta.',
    tag: 'Leveo',
    options: {
      autoAccept: {
        label: 'Aceptar misiones automáticamente',
        description: 'Acepta misiones diarias, semanales y normales automáticamente',
      },
      autoComplete: {
        label: 'Entregar misiones automáticamente',
        description: 'Entrega misiones completadas con 0 o 1 recompensa fija',
      },
    },
    comments: {
      header: '[ Aceptar y entregar misiones rápido ]',
      accountBoundNote: 'Comprobar si el objeto requerido está ligado a banda guerrera/cuenta',
      currencyNote: 'No entregar automáticamente misiones con monedas, materiales u objetos ligados a cuenta',
      noAcceptNote: 'Aceptación automática desactivada',
      noCompleteNote: 'Entrega automática desactivada',
    },
  },
  'automate-gossip': {
    title: 'Alt+Hablar: selección única de diálogo',
    description: 'Mantén Alt al hablar con un PNJ para elegir automáticamente la única opción de charla si no hay misiones.',
    details: 'Muy práctico para maestros de vuelo, taberneros y PNJ de teletransporte.',
    tag: 'Velocidad',
    comments: {
      header: '[ Alt+Hablar: selección única de diálogo (Leatrix Plus) ]',
      onlyGossipNote: 'Solo seleccionar cuando haya exactamente 1 opción y ninguna misión',
      fallbackNote: 'Alternativa para opciones sin gossipOptionID',
    },
  },
  'faster-movie-skip': {
    title: 'Saltar cinemáticas y vídeos rápido',
    description: 'Pulsa Espacio, Esc o Enter durante cinemáticas del juego o vídeos para saltarlos sin confirmar con el ratón.',
    details: 'Agiliza mazmorras y subida de alters.',
    tag: 'Fluidez',
    comments: {
      header: '[ Saltar cinemáticas y vídeos rápido (Space/Esc/Enter) ]',
    },
  },
  'easy-item-destroy': {
    title: 'Destrucción fácil de objetos (sin escribir BORRAR)',
    description: 'Elimina el requisito de teclear «BORRAR» / «DELETE» al destruir objetos raros o épicos.',
    details: 'Muestra el enlace del objeto (o nombre y nivel de mascota de duelo) en el diálogo por seguridad.',
    tag: 'UX mínima',
    comments: {
      header: '[ Destrucción fácil de objetos (Leatrix Plus EasyItemDestroy) ]',
      lineNote: 'La segunda línea de DELETE_GOOD_ITEM pide escribir confirmación; quitarla al ocultar la caja',
      petNote: 'Mostrar mascotas enjauladas como «Nombre (Nivel N)»',
      dialogsNote: 'Buscar el diálogo de borrado por nombre por si hay otros popups abiertos',
      hideEditNote: 'Ocultar cuadro de texto y habilitar el botón Aceptar',
      appendLinkNote: 'Objetos normales: añadir enlace al texto de confirmación',
    },
  },
  'auto-release-pvp': {
    title: 'Liberar espíritu automático en CB y JcJ de mundo',
    description: 'Libera el espíritu automáticamente al morir en campos de batalla y zonas JcJ abiertas (Conquista del Invierno, Tol Barad, Ashran).',
    details: 'Se omite si tienes Piedra de alma o Reencarnación; mantén Shift para cancelar.',
    tag: 'Herramienta JcJ',
    options: {
      excludeAlterac: {
        label: 'Excluir Valle de Alterac',
        description: 'No liberar automáticamente en Valle de Alterac',
      },
    },
    comments: {
      header: '[ Liberar espíritu automático en CB y JcJ (Leatrix Plus) ]',
      worldPvpNote: 'IDs de mapa JcJ abierto: Conquista del Invierno, Tol Barad, Ashran, Escudo de Tormenta, Lanza de Guerra',
      alteracNote: 'Valle de Alterac (clásico y trifulca) excluible por opción',
    },
    strings: {
      cancelledMsg: '|cff00ff99[QoL]|r Liberación automática de espíritu cancelada',
    },
  },
  'auto-accept-res': {
    title: 'Aceptar resurrección fuera de combate',
    description: 'Acepta automáticamente las resurrecciones de compañeros sin tener que pulsar el aviso.',
    details: 'Nunca acepta en combate cuando la protección de combate está activa.',
    tag: 'Comodidad',
    options: {
      combatCheck: {
        label: 'Protección en combate',
        description: 'Solo acepta si ni tú ni quien resucita estáis en combate',
      },
    },
    comments: {
      header: '[ Aceptar resurrección fuera de combate ]',
    },
  },
  'auto-accept-summon': {
    title: 'Aceptar invocaciones automáticamente (10s)',
    description: 'Avisa en el chat al recibir una invocación de brujo o piedra de encuentro y la acepta tras 10 segundos fuera de combate.',
    details: 'Se puede cancelar en el diálogo durante los 10 segundos y nunca actúa en combate.',
    tag: 'Grupo QoL',
    comments: {
      header: '[ Aceptar invocaciones automáticamente (Leatrix Plus, 10s) ]',
      confirmNote: 'Confirmar solo si invocador y zona siguen igual y estás fuera de combate',
    },
    strings: {
      summonNoticeMsg: '|cff00ff99[QoL]|r Invocación de %s (%s) se aceptará en 10s salvo cancelación.',
    },
  },
  'dialog-key': {
    title: 'DialogKey (Espacio y 1-9 para diálogos de PNJ)',
    description: 'Pulsa Espacio para avanzar misiones/diálogos y 1–9 (0 para la 10.ª) para elegir opciones o recompensas. Inactivo en combate.',
    details: 'Ignorado con modificadores; la protección impide que Espacio acepte invitaciones, invocaciones, duelos o liberar espíritu.',
    tag: 'MVP Misiones',
    options: {
      enableNumKeys: {
        label: 'Teclas 1-9 para opciones y recompensas',
        description: 'Elige opciones de diálogo o recompensas de misión con el teclado numérico',
      },
      safePopups: {
        label: 'Protección de diálogos sensibles',
        description: 'Evita que Espacio acepte grupos, invocaciones, duelos o liberar espíritu (prioriza autoresurrección)',
      },
    },
    comments: {
      header: '[ DialogKey (Espacio y 1-9 para diálogos de PNJ) ]',
      blacklistNote: 'Diálogos de la lista negra de DialogKey que Espacio nunca pulsa',
      selfResNote: 'Preferir segundo botón para Piedra de alma/Reencarnación; si no, no liberar',
      gossipButtonsNote: 'Recoger botones clicables visibles ordenados de arriba abajo',
      choiceNote: 'Recordar la recompensa elegida manualmente cuando hay varias',
      combatNote: 'No se puede alterar la propagación de teclas en combate; dejar pasar',
      restorePropagateNote: 'Restaurar la propagación antes de entrar en combate',
    },
  },
  'auto-insert-keystone': {
    title: 'Insertar automáticamente la piedra angular mítica',
    description: 'Coloca automáticamente la piedra angular correspondiente de tus bolsas al abrir la Fuente de poder.',
    details: 'Se omite en combate o si ya hay una piedra insertada.',
    tag: 'Míticas+',
    comments: {
      header: '[ Insertar automáticamente la piedra angular mítica ]',
      openDelayNote: 'Esperar un fotograma tras abrir la Fuente para que se actualicen los afijos y el icono',
      clearCursorNote: 'Limpiar el cursor si falla para no dejar la piedra colgada',
    },
  },
  'train-all-button': {
    title: 'Botón «Aprender todo» en instructores',
    description: 'Añade un botón «Aprender todo» junto a Instruir en instructores de clase y profesión.',
    details: 'Muestra al pasar el cursor la cantidad de facultades disponibles y el coste total.',
    tag: 'Ahorra tiempo',
    comments: {
      header: '[ Botón «Aprender todo» en instructores ]',
      reverseOrderNote: 'Aprender de atrás hacia adelante para mantener válidos los índices',
    },
    strings: {
      btnTrainAll: 'Aprender todo',
      tooltipFmt: 'Aprender %d facultad(es) por %s',
    },
  },
  'auto-combat-log': {
    title: 'Registro de combate automático en Bandas y M+',
    description: 'Activa /combatlog automáticamente al entrar en Bandas o Míticas+ y lo detiene al salir.',
    details: 'Solo detiene el registro si fue iniciado por este módulo.',
    tag: 'Esencial Banda',
    options: {
      raid: { label: 'Activar en Bandas' },
      mythicPlus: { label: 'Activar en Míticas+' },
    },
    comments: {
      header: '[ Registro de combate automático en Bandas y M+ ]',
      diffNote: 'Dificultad 8 = Piedra angular mítica',
    },
    strings: {
      startedMsg: '|cff00ff99[QoL]|r Registro de combate iniciado automáticamente',
      stoppedMsg: '|cff00ff99[QoL]|r Registro de combate detenido automáticamente',
    },
  },
};
