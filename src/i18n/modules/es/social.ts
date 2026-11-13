import { ModuleTranslation } from '../../types';

export const socialEs: Record<string, ModuleTranslation> = {
  'accept-party-friends': {
    title: 'Aceptar automáticamente invitaciones de amigos/hermandad',
    description: 'Acepta automáticamente invitaciones de grupo de amigos de Battle.net, amigos del juego y miembros de tu hermandad.',
    details: 'Se pausa automáticamente si ya estás en una cola del buscador.',
    tag: 'Social QoL',
    comments: {
      header: '[ Aceptar invitaciones de amigos/hermandad ]',
      popupNote: 'Marcar inviteAccepted antes de ocultar para que OnHide no rechace la invitación',
    },
  },
  'alt-click-invite': {
    title: 'Alt+Clic en nombre para invitar al grupo',
    description: 'Mantén Alt y haz clic izquierdo sobre el nombre de un jugador en el chat para invitarlo al instante.',
    details: 'Evita abrir el menú contextual al montar grupos de M+ o banda.',
    tag: 'Grupos',
    comments: {
      header: '[ Alt+Clic en nombre para invitar ]',
    },
  },
  'invite-from-whisper': {
    title: 'Invitación automática por palabra clave en susurro',
    description: 'Invita automáticamente a quien te susurre una palabra clave (ej. «111» o «inv») cuando estés solo o seas líder/ayudante.',
    details: 'Ideal para bandas de hermandad, jefes de mundo o montar piedras angulares.',
    tag: 'Líder de grupo',
    options: {
      keyword: { label: 'Palabra clave de invitación' },
    },
    comments: {
      header: '[ Invitación automática por palabra clave ]',
    },
  },
  'block-duel-requests': {
    title: 'Rechazar automáticamente duelos de desconocidos',
    description: 'Declina peticiones de duelo de jugadores que no sean amigos ni de tu hermandad.',
    details: 'Evita el spam de duelos en ciudades o haciendo misiones.',
    tag: 'Antispam',
    comments: {
      header: '[ Rechazar duelos de desconocidos ]',
    },
  },
  'block-pet-duels': {
    title: 'Rechazar duelos de mascotas',
    description: 'Declina automáticamente retos de duelo JcJ de mascotas de jugadores desconocidos.',
    tag: 'Antispam',
    comments: {
      header: '[ Rechazar duelos de mascotas ]',
    },
  },
  'block-party-invites': {
    title: 'Bloquear invitaciones de grupo de desconocidos',
    description: 'Rechaza automáticamente invitaciones de grupo de jugadores fuera de tu lista de amigos y hermandad.',
    tag: 'Filtro spam',
    comments: {
      header: '[ Bloquear invitaciones de desconocidos ]',
    },
  },
  'block-social-requests': {
    title: 'Rechazar solicitudes B.net e invitaciones de hermandad',
    description: 'Rechaza automáticamente solicitudes de amistad de Battle.net e invitaciones de hermandad de desconocidos e informa en el chat.',
    details: 'Las invitaciones de hermandad enviadas por amigos no se rechazan.',
    tag: 'Antispam',
    options: {
      friendRequests: { label: 'Rechazar solicitudes de amistad Battle.net' },
      guildInvites: { label: 'Rechazar invitaciones de hermandad (salvo amigos)' },
    },
    comments: {
      header: '[ Rechazar solicitudes B.net e invitaciones de hermandad ]',
      guildPopupNote: 'Esperar a que salga la ventana y ocultarla (OnHide llama a DeclineGuild)',
    },
    strings: {
      declinedFriendsMsg: '|cff00ff99[QoL]|r Se rechazaron automáticamente %d solicitud(es) de amistad de Battle.net',
      declinedGuildMsg: '|cff00ff99[QoL]|r Invitación de hermandad rechazada automáticamente',
    },
  },
  'auto-confirm-role': {
    title: 'Confirmar función automáticamente en LFG',
    description: 'Confirma la ventana de comprobación de función del buscador usando tus funciones seleccionadas previamente.',
    details: 'Solo confirma si hay una función marcada; mantén Shift para omitir.',
    tag: 'Cola rápida',
    options: {
      friendLeaderOnly: {
        label: 'Solo si el líder es amigo/hermandad',
        description: 'Desactiva para confirmar con cualquier líder de grupo',
      },
    },
    comments: {
      header: '[ Confirmar función automáticamente en LFG ]',
      delayNote: 'Esperar un frame hasta que se actualice el estado del botón',
    },
  },
  'safe-queue': {
    title: 'SafeQueue y temporizador de cola JcJ',
    description: 'Oculta el botón «Abandonar cola» en los avisos de campo de batalla/arena, centra Entrar y colorea el tiempo restante.',
    tag: 'JcJ y Estancia',
    options: {
      announceWaitTime: {
        label: 'Mostrar tiempo de espera en el chat',
        description: 'Anuncia cuánto tardó en saltar la cola cuando aparece la partida',
      },
    },
    comments: {
      header: '[ SafeQueue y temporizador de cola JcJ (SafeQueue) ]',
      hideLeaveNote: 'Ocultar el botón abandonar para evitar clics accidentales',
      waitTimeNote: 'Usar el tiempo rastreado por el servidor para mayor precisión',
    },
    strings: {
      remainingLabel: 'Tiempo restante: ',
      waitTimeMsg: '|cff33ff99[SafeQueue]|r ¡Partida lista! Espera: %02dm %02ds',
    },
  },
  'copy-player-name': {
    title: 'Copiar nombre desde el menú contextual',
    description: 'Usa la moderna Menu API de WoW 12.x para añadir «Copiar nombre» al hacer clic derecho sobre jugadores.',
    tag: 'Acción rápida',
    comments: {
      header: '[ Copiar nombre desde el menú contextual (Menu API) ]',
    },
    strings: {
      copyPrefix: '|cff00ff00[Copiar nombre]|r ',
    },
  },
  'lfg-double-click-signup': {
    title: 'Doble clic para apuntarse en Grupos ya creados',
    description: 'Haz doble clic sobre cualquier grupo de la lista de búsqueda para apuntarte al instante.',
    details: 'Omite el cuadro de diálogo si ya elegiste tus funciones; Shift+Doble clic abre el diálogo igualmente.',
    tag: 'Cola rápida',
    options: {
      skipDialog: {
        label: 'Omitir diálogo si hay funciones elegidas',
        description: 'Envía la solicitud directamente (Shift muestra el diálogo)',
      },
    },
    comments: {
      header: '[ Doble clic para apuntarse en Grupos ya creados ]',
      skipNote: 'Enviar automáticamente si el botón Apuntarse está activo y no se pulsa Shift',
    },
  },
  'guild-motd-login': {
    title: 'Reimprimir mensaje del día de hermandad',
    description: 'Vuelve a mostrar el mensaje del día de tu hermandad (MOTD) unos segundos después de conectar.',
    tag: 'Hermandad QoL',
    comments: {
      header: '[ Reimprimir mensaje del día de hermandad ]',
    },
    strings: {
      motdPrefix: '|cff40ff40[Mensaje de hermandad]|r ',
    },
  },
};
