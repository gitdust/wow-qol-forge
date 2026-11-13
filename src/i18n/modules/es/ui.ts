import { ModuleTranslation } from '../../types';

export const uiEs: Record<string, ModuleTranslation> = {
  'hide-error-messages': {
    title: 'Ocultar errores rojos de combate',
    description: 'Suprime los molestos errores rojos en el centro de la pantalla («Fuera de alcance», «Maná insuficiente», etc.).',
    details: 'Usa la lista blanca de Leatrix Plus para conservar avisos importantes como Inventario lleno.',
    tag: 'Pantalla limpia',
    comments: {
      header: '[ Ocultar errores rojos de combate (Leatrix Plus) ]',
      whitelistNote: 'Conservar mensajes críticos (lista blanca Leatrix Plus)',
      pingNote: 'Suprimir también errores de Ping (12.x GameEvent escribe en UIErrorsFrame)',
    },
  },
  'hide-talking-head': {
    title: 'Ocultar marco de cabeza parlante (Talking Head)',
    description: 'Oculta el enorme diálogo emergente de PNJ durante Míticas+, bandas y misiones del mundo.',
    details: 'Usa hooksecurefunc seguro sin silenciar las voces ni interrumpir misiones.',
    tag: 'Esencial M+',
    comments: {
      header: '[ Ocultar marco de cabeza parlante ]',
    },
  },
  'max-camera-zoom': {
    title: 'Desbloquear zoom máximo de cámara',
    description: 'Ajusta automáticamente cameraDistanceMaxZoomFactor al máximo permitido por Blizzard (2.6) en cada inicio.',
    details: 'Evita que el juego reinicie el alejamiento máximo entre sesiones.',
    tag: 'Gran visión',
    comments: {
      header: '[ Desbloquear zoom máximo de cámara ]',
    },
  },
  'hide-actionbar-elements': {
    title: 'Ocultar atajos y nombres de macros en barras',
    description: 'Oculta las etiquetas de teclas y títulos de macros en las barras de acción para un diseño minimalista.',
    details: 'Ambas opciones son independientes y mantienen tiempos de reutilización visibles.',
    tag: 'UI minimalista',
    options: {
      hideHotKey: {
        label: 'Ocultar texto de atajos',
        description: 'Oculta textos como 1, 2, Q, E, s-F',
      },
      hideMacroName: {
        label: 'Ocultar nombres de macros',
        description: 'Oculta los títulos amarillos en la parte inferior de los botones',
      },
    },
    comments: {
      header: '[ Ocultar atajos y nombres de macros ]',
    },
  },
  'hide-boss-banner': {
    title: 'Ocultar estandarte de jefe derrotado',
    description: 'Suprime el gran estandarte central y resumen de botín al derrotar a un jefe de mazmorra o banda.',
    details: 'Mantiene la vista despejada al encadenar pulls en M+.',
    tag: 'Esencial M+',
    comments: {
      header: '[ Ocultar estandarte de jefe derrotado (Leatrix Plus) ]',
      keepIntroNote: 'Ocultar solo el banner de derrota y botín; mantener aviso inicial',
    },
  },
  'hide-alerts': {
    title: 'Ocultar notificaciones de logros y botín',
    description: 'Oculta las ventanas emergentes de logros, monturas y recetas abajo (y opcionalmente avisos de subida de nivel o jefe).',
    tag: 'UI limpia',
    options: {
      hideEventToasts: {
        label: 'Ocultar también avisos de eventos',
        description: 'Oculta los avisos superiores de subida de nivel, objetivos de jefe y duelos de mascotas',
      },
    },
    comments: {
      header: '[ Ocultar notificaciones de logros y botín (Leatrix Plus NoAlerts) ]',
      preventReregisterNote: 'Evitar que Blizzard vuelva a registrar eventos de alerta más tarde',
      eventToastNote: 'Avisos de eventos (Leatrix Plus HideEventToasts)',
    },
  },
  'hide-zone-text': {
    title: 'Ocultar texto grande al cambiar de zona',
    description: 'Oculta el título gigante del nombre de zona o subzona en el centro de la pantalla al entrar a un área.',
    tag: 'UI minimalista',
    comments: {
      header: '[ Ocultar texto al cambiar de zona ]',
      keepEventsNote: 'Mantener eventos y ocultar solo al mostrarse (igual que Leatrix Plus)',
    },
  },
  'show-ready-timer': {
    title: 'Barra de cuenta atrás para LFG',
    description: 'Muestra una barra de progreso con el tiempo restante bajo la ventana de invitación de mazmorra o banda.',
    tag: 'Útil',
    comments: {
      header: '[ Barra de cuenta atrás LFG (Leatrix Plus ShowReadyTimer) ]',
    },
  },
  'blizz-move': {
    title: 'Ventanas de Blizzard móviles y escalables (BlizzMove)',
    description:
      'Desbloquea unas 60 ventanas estándar (Personaje, Misiones, Hechizos, Profesiones, Subasta, Mapa, etc.) para moverlas y escalarlas con Ctrl+Rueda. Shift+Clic derecho restablece posición; Ctrl+Clic derecho la escala.',
    tag: 'Imprescindible',
    options: {
      enableScale: {
        label: 'Permitir Ctrl + Rueda para escalar',
        description: 'Mantén Ctrl y gira la rueda sobre cualquier ventana para ajustar su tamaño',
      },
    },
    comments: {
      header: '[ Ventanas móviles y escalables (BlizzMove) ]',
      framesNote: 'Ventanas principales de Retail tomadas de BlizzMove 3.8.5',
      addonFramesNote: 'Addons de interfaz Blizzard bajo demanda -> ventanas',
      subFramesNote: 'Submarcos grandes que capturan el ratón y también mueven la ventana raíz',
      stateNote: 'Guardar estado internamente solo durante la sesión sin escribir campos en marcos Blizzard',
      rootsComment: 'marco -> nombreMarco',
      handleComment: 'asidero -> marcoRaíz',
      posComment: 'marco -> { x, y } (esquina sup. izquierda a escala 1)',
      scaleComment: 'marco -> escala',
      pointsComment: 'marco -> anclas originales antes del primer arrastre',
      pendingApplyComment: 'marcos protegidos en combate pendientes de reposicionar',
      pendingHookComment: 'marcos protegidos cargados en combate pendientes de hook',
      unpackNote: 'relativeTo puede ser nil; evitar unpack()',
      panelManagerNote: 'Devolver el marco a UIPanelWindows al restablecer posición',
      userPlacedNote: 'Conservar UserPlaced original para mantener limpio layout-cache',
      repositionNote: 'Reaplicar la posición arrastrada cuando el gestor reposiciona el marco',
      wheelNote1: 'Ctrl + Rueda: capturar la rueda solo mientras Ctrl se mantiene sobre una ventana',
      wheelNote2: 'mediante una capa transparente, liberando al instante al soltar Ctrl',
      anchorScaleNote: 'Escalar desde la esquina superior izquierda para evitar saltos',
    },
  },
  'slash-way-native': {
    title: 'Comando de marcador nativo en mapa (/way)',
    description: 'Usa /way 45.2 60.1 para colocar un pin nativo de Blizzard con haz guía, o escribe /way solo para ver tus coordenadas actuales.',
    tag: 'Mejora nativa',
    comments: {
      header: '[ Comando de marcador nativo en mapa (/way) ]',
    },
    strings: {
      noMapMsg: '|cffff3333[Way]|r No se pudo obtener el mapa actual.',
      currentMapFallback: 'Mapa actual',
      coordMsg: '|cff00ff00[Coords]|r %s: %.1f, %.1f',
      usageMsg: '|cffffaa00[Way]|r Uso: /way 45.2 62.8 (o /way para ver tus coordenadas)',
      invalidCoordMsg: '|cffff3333[Way]|r Coordenadas no válidas; introduce números entre 0 y 100.',
      pinSetMsg: '|cff00ff00[Way]|r ¡Marcador nativo colocado en %s (%.1f, %.1f)!',
    },
  },
  'cursor-ring': {
    title: 'Anillo de resalte en el cursor',
    description: 'Dibuja un anillo de color alrededor del puntero para no perderlo nunca entre efectos de hechizos.',
    details: 'Tamaño, color y visibilidad solo en combate configurables. No bloquea clics.',
    tag: 'Ayuda combate',
    options: {
      size: { label: 'Tamaño del anillo (px)' },
      color: {
        label: 'Color del anillo',
        choices: {
          amber: 'Ámbar',
          white: 'Blanco',
          red: 'Rojo',
          green: 'Verde',
          blue: 'Azul',
        },
      },
      combatOnly: { label: 'Mostrar solo en combate' },
    },
    comments: {
      header: '[ Anillo de resalte en el cursor ]',
    },
  },
  'hide-micro-menu-bags': {
    title: 'Ocultar micromenú y barra de bolsas',
    description: 'Oculta el micromenú y la barra de bolsas abajo a la derecha (con opción de mostrar al pasar el ratón).',
    details: 'Los atajos (C, P, B, etc.) siguen funcionando con normalidad.',
    tag: 'UI minimalista',
    options: {
      hideMicroMenu: { label: 'Ocultar micromenú' },
      hideBagsBar: { label: 'Ocultar barra de bolsas' },
      mouseover: {
        label: 'Mostrar al pasar el ratón',
        description: 'Si se desactiva, solo se abren mediante atajos de teclado',
      },
    },
    comments: {
      header: '[ Ocultar micromenú y barra de bolsas ]',
      mouseoverNote: 'Ocultar por transparencia hasta pasar el ratón (siempre visible en Modo Edición)',
    },
  },
  'hide-portrait-numbers': {
    title: 'Ocultar números de combate en retratos',
    description: 'Oculta los números flotantes de daño y sanación sobre los retratos de jugador y mascota.',
    tag: 'UI minimalista',
    comments: {
      header: '[ Ocultar números de combate en retratos ]',
    },
  },
  'quest-font-size': {
    title: 'Tamaño de fuente de misiones',
    description: 'Ajusta el tamaño del texto en diálogos y registro de misiones para leer cómodamente.',
    tag: 'Legibilidad',
    options: {
      fontSize: {
        label: 'Tamaño de texto de misión',
        description: 'Por defecto es ~13 en Blizzard; los títulos son +2 más grandes',
      },
    },
    comments: {
      header: '[ Tamaño de fuente de misiones ]',
    },
  },
};
