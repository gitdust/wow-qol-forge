import { ModuleTranslation } from '../../types';

export const systemEs: Record<string, ModuleTranslation> = {
  'mute-annoying-sounds': {
    title: 'Silenciar sonidos molestos de monturas y juego',
    description: 'Silencia selectivamente silbatos de tren, girocópteros, pasos mecánicos, campanas horarias y otros ruidos repetitivos.',
    details: 'Usa MuteSoundFile oficial con los IDs de Leatrix Plus (Midnight) sin afectar el resto del audio.',
    tag: 'Cuida tus oídos',
    options: {
      muteTrains: { label: 'Emotes de tren', description: 'Silbato del emote /tren' },
      muteGyrocopters: {
        label: 'Girocópteros y máquinas voladoras',
        description: 'Ruido del motor de Cabeza de Mimiron, Meca-magnate, etc.',
      },
      muteMechSteps: { label: 'Pasos de monturas mecánicas', description: 'Chasquidos metálicos de meca-zancudos y mecas' },
      muteChimes: { label: 'Campanadas horarias', description: 'Campanas cada hora en las capitales' },
      muteFizzle: { label: 'Fallo de hechizo', description: 'Sonido de chisporroteo al interrumpir o fallar un lanzamiento' },
      muteSniffing: { label: 'Olfateo de huargen', description: 'Olfateo repetitivo en reposo de los huargen' },
      muteYawns: { label: 'Bostezos de felinos', description: 'Bostezos de mascotas felinas de cazador' },
    },
    comments: {
      header: '[ Silenciar sonidos molestos (Leatrix Plus Mute) ]',
      applyNote: 'Silenciar grupos marcados y reactivar los desmarcados',
    },
  },
  'silence-rested-emotes': {
    title: 'Silenciar emotes en posadas y zonas de descanso',
    description: 'Desactiva automáticamente sonidos de /reír, /llorar o /pollo mientras descansas en posadas o capitales.',
    tag: 'Tranquilidad',
    comments: {
      header: '[ Silenciar emotes en zonas de descanso ]',
      cvarNote: 'Desactivar Sound_EnableEmoteSounds al descansar y restaurar al salir',
      restoreNote: 'Restaurar antes de desconectar o cambiar de zona porque la CVar se guarda',
    },
  },
  'disable-screen-glow': {
    title: 'Desactivar brillo de pantalla y desenfoque ebrio',
    description: 'Apaga el exceso de brillo FFX Glow y el desenfoque de cámara al beber para lograr una imagen más nítida.',
    tag: 'Comodidad visual',
    comments: {
      header: '[ Desactivar brillo de pantalla y desenfoque ebrio ]',
    },
  },
  'combat-nameplates': {
    title: 'Mostrar placas enemigas solo en combate',
    description: 'Activa automáticamente las placas de salud enemigas al entrar en combate y las oculta fuera de combate.',
    tag: 'UI inteligente',
    comments: {
      header: '[ Mostrar placas enemigas solo en combate ]',
    },
  },
  'keep-audio-synced': {
    title: 'Sincronizar cambios de dispositivo de audio',
    description: 'Cambia automáticamente el audio de WoW al nuevo dispositivo predeterminado al conectar auriculares o Bluetooth.',
    tag: 'Sistema QoL',
    comments: {
      header: '[ Sincronizar cambios de dispositivo de audio ]',
      syncNote: 'Volver al dispositivo predeterminado del sistema y reiniciar el motor de sonido',
      cinematicNote: 'Evitar reiniciar el audio durante cinemáticas; posponer hasta que acaben',
    },
  },
  'flash-taskbar': {
    title: 'Parpadeo en barra de tareas para colas y susurros',
    description: 'Hace parpadear el icono en la barra de tareas (con sonido opcional) al saltar colas, comprobaciones de listo o susurros en segundo plano.',
    tag: 'Anti-Alt-Tab',
    options: {
      playSound: {
        label: 'Reproducir sonido de aviso',
        description: 'Reproduce el sonido de comprobación de listo por el canal principal al parpadear',
      },
      flashOnWhisper: {
        label: 'Parpadear al recibir susurros',
        description: 'Parpadea con susurros de personaje o Battle.net sin sonido extra',
      },
    },
    comments: {
      header: '[ Parpadeo en barra de tareas (FlashTaskBar) ]',
      whisperNote: 'Susurros: comprobar solo la llegada del evento sin leer el mensaje',
      readyCheckNote: 'Comprobación de listo / Mazmorra / Resurrección / Invocación',
      battlefieldNote: 'Confirmación de entrada a campo de batalla / arena',
      lfgHookNote: 'Diálogo de invitación de grupo predefinido (FlashTaskBar)',
    },
  },
  'talent-ready-check': {
    title: 'Mostrar configuración de talentos al comprobar listo',
    description: 'Imprime tu configuración de talentos actual en el chat al iniciar una comprobación de listo.',
    details: 'Puedes indicar nombres esperados (separados por comas) para avisar en rojo y sonar alarma si no coinciden.',
    tag: 'Revisión banda',
    options: {
      expectedNames: {
        label: 'Nombres de configuración esperados',
        description: 'Déjalo vacío para solo imprimir la actual; separa varios nombres con comas',
      },
      playSound: { label: 'Reproducir alarma si no coincide' },
    },
    comments: {
      header: '[ Mostrar configuración de talentos al comprobar listo ]',
    },
    strings: {
      starterBuild: 'Configuración inicial',
      unsavedBuild: 'Configuración sin guardar',
      currentMsg: '|cff00ff99[QoL]|r Configuración de talentos actual: |cffffd100%s|r',
      mismatchMsg: '|cffff5555[QoL] ¡Talentos incorrectos!|r Actual: %s, Esperado: %s',
    },
  },
  'cvar-tweaks': {
    title: 'Aplicar ajustes ocultos de CVar al iniciar',
    description: 'Aplica automáticamente tus CVars favoritos al entrar con cada personaje (desmontar en vuelo, botín bajo ratón, sin tutoriales, etc.).',
    details: 'Las casillas sin marcar dejan intacta tu configuración actual del juego.',
    tag: 'Sincronización',
    options: {
      autoDismountFlying: { label: 'Desmontar automáticamente al lanzar en vuelo' },
      noMapFade: { label: 'No atenuar el mapa del mundo al moverse' },
      lootUnderMouse: { label: 'Abrir ventana de botín bajo el cursor' },
      noTutorials: { label: 'Desactivar avisos de tutorial' },
      noErrorSpeech: { label: 'Desactivar voces de error del personaje' },
      alwaysCompare: { label: 'Comparar siempre equipo en tooltips' },
    },
    comments: {
      header: '[ Aplicar ajustes ocultos de CVar ]',
      tableNote: '{ opción, CVar, valorSiMarcado }; las opciones sin marcar no se tocan',
    },
  },
  'great-vault-reminder': {
    title: 'Recordatorio de recompensa de la Gran Cámara',
    description: 'Si tienes recompensas pendientes en la Gran Cámara, te avisa una vez por el chat al entrar o recargar la interfaz. También puedes mostrar el aviso en el centro de la pantalla.',
    details: 'Te recuerda nada más conectar sin tener que abrir la interfaz de Míticas+.',
    tag: 'Semanal',
    options: {
      showCenter: {
        label: 'Mostrar alerta en el centro de la pantalla',
        description: 'Muestra un aviso único estilo alerta de banda en pantalla',
      },
      playSound: { label: 'Reproducir sonido de aviso' },
    },
    comments: {
      header: '[ Recordatorio de recompensa de la Gran Cámara ]',
      skipShownNote: 'Omitir si la ventana de la Gran Cámara ya está abierta',
      delayNote: 'Los datos semanales llegan poco después de conectar; comprobar también en WEEKLY_REWARDS_UPDATE',
    },
    strings: {
      reminderMsg: '¡Tienes recompensas sin recoger en la Gran Cámara!',
    },
  },
};
