import { UiDictionary } from '../types';

export const es: UiDictionary = {
  seo: {
    title: 'WoW QoL Forge - Generador minimalista de addons para WoW Retail',
    description:
      'Generador web de addons QoL personalizados para World of Warcraft Retail. Elige solo los módulos útiles que necesitas, sin código sobrante, y descarga tu ZIP.',
    ogTitle: 'WoW QoL Forge - Generador minimalista de addons para WoW Retail',
    ogDescription:
      'Generador de addons QoL para WoW Retail. Combina {count} módulos ligeros sin relleno y crea tu propio addon.',
    ogImageAlt: 'Icono modular de WoW QoL Forge',
    siteSubtitle: 'Forja de addons minimalistas',
    gameType: 'Retail',
  },
  nav: {
    backToModules: 'Volver a módulos',
    changelog: 'Historial de cambios',
    githubRepo: 'Repositorio GitHub',
    languageAria: 'Cambiar idioma',
  },
  toolbar: {
    totalModules: '{count} módulos incluidos',
    showingCount: 'Mostrando {count} módulos',
    selectedCount: 'Seleccionados: {selected} / {total}',
    searchPlaceholder: 'Buscar nombre o descripción del módulo...',
    clearSearch: 'Limpiar búsqueda',
    selectAllCurrent: 'Seleccionar visibles',
    unselectAllCurrent: 'Deseleccionar visibles',
    tableHeaderModule: 'Módulos y descripción',
    tableHeaderAction: 'Acciones',
    emptyTitle: 'No se encontraron módulos coincidentes',
    emptyHint: 'Prueba otra categoría o limpia el cuadro de búsqueda',
  },
  moduleRow: {
    downloadsCount: '{count} descargas',
    downloadsTenThousand: '{value}0 mil',
    downloadsUnavailable: 'Descargas no disponibles',
    downloadsTitle: '{count} descargas totales',
    optionsButton: 'Opciones',
    optionsPreviewTitle: '{title} · Vista previa',
    optionsReadonlyHint: 'Solo lectura · Marca este módulo para editar sus opciones en el panel lateral',
    optionOn: 'Sí',
    optionOff: 'No',
    sourceButton: 'Código',
    sourceButtonTitle: 'Ver código fuente Lua independiente',
  },
  drawer: {
    title: 'Módulos seleccionados y ajustes',
    itemCount: '{count} activos',
    defaultsHintPrefix: 'Estos son valores predeterminados. Escribe',
    defaultsHintSuffix: 'en el juego para activar/desactivar módulos o cambiar opciones',
    clearAll: 'Vaciar todo',
    clearAllTitle: 'Quitar todos los módulos seleccionados',
    closeDrawer: 'Cerrar panel',
    addonNameLabel: 'Nombre de la carpeta del addon',
    addonNameHint: '(Solo letras en inglés, cualquier longitud)',
    addonNameDefault: 'Por defecto: {name}',
    charsCount: '{count} car.',
    addonNameError: 'El nombre no puede estar vacío y solo admite letras (A-Z, a-z)',
    emptyTitle: 'Aún no hay módulos seleccionados',
    emptyDesc:
      'Marca las funciones que necesites en la lista de la izquierda para personalizarlas aquí.',
    expandOptions: 'Mostrar opciones',
    collapseOptions: 'Ocultar opciones',
    optionsButton: 'Opciones',
    removeTitle: 'Quitar de la selección',
    selectedLabel: '{count} seleccionados',
    codePreview: 'Ver código',
    downloading: 'Empaquetando ZIP...',
    downloadButton: 'Descargar addon ({count})',
  },
  floating: {
    buttonTitle: 'Abrir selección para configurar y descargar',
    buttonLabel: 'Configurar y descargar',
  },
  codeModal: {
    subtitle: 'Código Lua limpio y sin dependencias para WoW Retail moderno',
    copyFile: 'Copiar archivo',
    copied: 'Copiado al portapapeles',
    close: 'Cerrar',
    lineCount: 'Líneas: {count}',
    closeWindow: 'Cerrar ventana',
    moduleSourceTitle: '{title} ({id}) - Código del módulo',
    bundlePreviewTitle: '{name} - Vista previa completa ({count} módulos activos)',
  },
  changelog: {
    title: 'Historial de cambios',
    currentVersion: 'Versión actual',
    backToModules: 'Volver a módulos',
    currentBadge: 'Actual',
    types: {
      added: 'Añadido',
      improved: 'Mejorado',
      fixed: 'Corregido',
      removed: 'Eliminado',
    },
    entries: {
      '1.3.1': {
        groups: [
          { type: 'added', items: ['Contador de descargas por módulo', 'Soporte en 9 idiomas (incluyendo interfaz en el juego y comentarios Lua)'] },
          { type: 'improved', items: ['Soporte de interfaz 12.1.5 / 12.1.7'] },
          { type: 'removed', items: ['Retirados 11 módulos poco usados o redundantes'] },
        ],
      },
      '1.3.0': {
        groups: [
          {
            type: 'added',
            items: [
              'Cambio automático de especialización de botín por jefe/estancia',
              'Aviso de recompensas de la Gran Cámara',
              'Reposición automática en vendedores',
            ],
          },
          { type: 'improved', items: ['Parpadeo en barra de tareas con susurros y comprobación de listo'] },
        ],
      },
      '1.2.0': {
        groups: [
          {
            type: 'added',
            items: [
              'Panel de ajustes en el juego (/nombreaddon)',
              '25 módulos nuevos incluyendo confirmación de rol e inserción de piedra angular',
            ],
          },
          {
            type: 'improved',
            items: ['Etiquetas Ligar al equipar / Banda guerrera', 'Mover ventanas estándar y recordar posición'],
          },
          { type: 'removed', items: ['Eliminados ocultar efectos de glifos y scroll con rueda en el chat'] },
        ],
      },
      '1.1.0': {
        groups: [
          {
            type: 'added',
            items: ['Icono propio del addon incluido en el ZIP', 'Subopciones añadidas a varios módulos'],
          },
          {
            type: 'improved',
            items: ['Compatibilidad total con Retail 12.1.5', 'Carga aislada por módulo mediante pcall'],
          },
          { type: 'fixed', items: ['Corregidos 11 fallos conocidos incluyendo pegado de texto largo y correo'] },
          { type: 'removed', items: ['Eliminado asistente 3D de transfiguración'] },
        ],
      },
      '1.0.0': {
        groups: [
          {
            type: 'added',
            items: ['Lanzamiento inicial: 64 módulos en 10 categorías con búsqueda, opciones y descarga ZIP'],
          },
        ],
      },
    },
  },
  footer: {
    sourcesLabel: 'Inspirado en',
    taintTitle: 'Cero contaminación UI (Zero Taint)',
    taintDesc:
      'Cumple estrictamente el sandbox moderno de Blizzard (hooksecurefunc, TooltipDataProcessor) sin sobrescribir funciones globales protegidas.',
    kernelTitle: 'Micro-núcleo único de eventos',
    kernelDesc:
      'Elijas 3 o 30 módulos, un único Frame ligero distribuye todos los eventos con aislamiento pcall y consumo mínimo de memoria.',
    installTitle: 'Guía rápida de instalación',
    step1Title: '1. Elegir y descargar',
    step1Desc:
      'Marca los módulos que quieras, abre el panel flotante abajo a la derecha y descarga el paquete ZIP.',
    step2Title: '2. Descomprimir en AddOns',
    step2Desc: 'Copia la carpeta extraída (por defecto MyQol) en el directorio AddOns de WoW:',
    step3Title: '3. Jugar al instante',
    step3DescPrefix:
      'Los módulos activos funcionan nada más entrar. Para cambiar ajustes en el juego, escribe',
    step3DescCmd: ' /nombreaddon',
    step3DescSuffix: ' (ej. /myqol) en el chat.',
    friendlyLinks: 'Enlaces:',
    wowApiLabel: 'World of Warcraft API (Warcraft Wiki)',
    wowUiSourceLabel: 'WoW UI Source (GitHub)',
  },
  alerts: {
    invalidAddonName: 'Introduce un nombre de addon solo con letras en inglés (ej. MyQol)',
    selectOneModule: 'Selecciona al menos un módulo',
    downloadFailed: 'No se pudo generar el archivo, inténtalo de nuevo',
    defaultAddonNotes:
      'Addon QoL minimalista y personalizado para World of Warcraft Retail',
  },
  categories: {
    all: {
      label: 'Todos los módulos',
      description: 'Explora todos los módulos QoL ligeros y probados',
    },
    automation: {
      label: 'Automatización',
      description: 'Reparación auto, vender chatarra, misiones rápidas, saltar cinemáticas, destruir fácil',
    },
    social: {
      label: 'Social y Grupo',
      description: 'Aceptar invitaciones de amigos/hermandad, invitación por susurro, bloquear duelos',
    },
    chat: {
      label: 'Chat',
      description: 'Mover cursor con flechas, copiar texto y enlaces, canales compactos',
    },
    ui: {
      label: 'Interfaz y Visual',
      description: 'Ocultar errores rojos y cabezas parlantes, zoom máximo, barras limpias',
    },
    inventory: {
      label: 'Bolsas y Mercader',
      description: 'Compra masiva sin límite, resaltar recetas conocidas, durabilidad de equipo',
    },
    looting: {
      label: 'Botín rápido',
      description: 'Elimina el retardo interno de despojo para recoger objetos al instante',
    },
    mail: {
      label: 'Correo',
      description: 'Abrir todo el correo en un clic, envío rápido, bloquear comercio en el buzón',
    },
    inspect: {
      label: 'Estadísticas',
      description: 'Análisis real de rendimientos decrecientes en estadísticas secundarias del personaje',
    },
    tooltips: {
      label: 'Tooltips',
      description: 'Mostrar IDs de hechizos/objetos/PNJ/misiones y colorear objetivo y hermandad',
    },
    system: {
      label: 'Sistema y Audio',
      description: 'Silenciar ruidos molestos de monturas, reducir brillo, parpadeo de barra de tareas',
    },
  },
  presets: {
    'all-in-one': {
      name: 'Todo en uno diario (Recomendado)',
      description:
        '19 mejoras diarias esenciales: reparación, venta de chatarra, botín instantáneo, saltar cinemáticas, correo rápido, etc.',
    },
    'dungeon-raid': {
      name: 'Míticas+ y Banda',
      description:
        'Ocultar cabezas parlantes y errores, zoom máximo, botín rápido, temporizador de listo y análisis de estadísticas.',
    },
    'pvp-combat': {
      name: 'Combate JcJ',
      description:
        'Liberación instantánea en campos de batalla, filtro de errores, zoom máximo, placas de combate y cola JcJ segura.',
    },
    'merchant-life': {
      name: 'Comercio y Profesiones',
      description:
        'Compra masiva, reparación automática, vender chatarra, recetas aprendidas, correo y envío rápido de oro.',
    },
  },
  generator: {
    luaHeaderGeneratedBy: 'Generado por WoW QoL Forge',
    luaHeaderTargetInterface: 'Interface objetivo',
    luaHeaderSelectedModules: 'Módulos seleccionados',
    luaHeaderNote:
      'Nota: Los parámetros web son valores predeterminados. Escribe /{slash} en el juego para configurarlos.',
    commentErrorReport: 'Registro de errores (imprimir cada error único una sola vez)',
    runtimeErrorPrint: 'Módulo ',
    commentEventBus:
      'Bus de eventos ligero (un solo Frame gestiona todo sin taint ni sobrecarga)',
    commentUnknownEvent:
      'Los eventos desconocidos lanzan error en clientes modernos; capturar y omitir',
    runtimeEventError: 'No se pudo registrar el evento ',
    commentFeatureList: 'Registro de funciones: categorías, módulos y opciones por defecto',
    commentSavedVars:
      'SavedVariables ({savedVar}): solo guarda diferencias respecto a los valores predeterminados',
    commentDefaultEnabled: 'Activado por defecto; guardar solo si está desactivado',
    commentOptionProxy:
      'Los módulos leen O.<key> obteniendo siempre el valor guardado o predeterminado actual',
    commentSettingsCallbacks:
      'Los módulos pueden registrar OnSettingsChanged para aplicar cambios sin /reload',
    commentModuleLoader:
      'Esperar a ADDON_LOADED e iniciar cada módulo activo dentro de un pcall aislado',
    commentModuleLoaderStates: 'started: intento de carga; loaded: cargado sin errores',
    commentModuleLabel: 'Módulo',
    commentSourceLabel: 'Referencia',
    commentWelcome: 'Mensaje de bienvenida al conectar',
    runtimeWelcomeLoaded: ' cargó ',
    runtimeWelcomeOpenCmd: ' módulos. Escribe ',
    tocDefaultNotes: 'Addon QoL ligero y personalizado creado con WoW QoL Forge',
    readmeTitle: '# {name} - Addon minimalista personalizado para WoW',
    readmeGeneratedBy: 'Generado en el navegador con **WoW QoL Forge**.',
    readmeImportantTitle: '## 💡 Notas importantes',
    readmeImportantBody:
      'Los módulos elegidos en la web estarán activos al entrar al juego con tus valores predeterminados.\nEscribe `/{slash}` en el chat para abrir el panel: elige categoría a la izquierda, marca para activar/desactivar,\ny pulsa la flecha derecha para ajustar subopciones. Todo se guarda automáticamente.\nTambién disponible en Opciones -> AddOns.',
    readmeInstallTitle: '## 📦 Instalación',
    readmeInstallStep1: '1. Descomprime el archivo descargado para obtener la carpeta `{name}`.',
    readmeInstallStep2:
      '2. Copia `{name}` en la carpeta AddOns de World of Warcraft:\n   - Ruta habitual: `World of Warcraft\\_retail_\\Interface\\AddOns\\{name}`',
    readmeInstallStep3: '3. Inicia WoW o escribe `/reload` en el chat.',
    readmeSelectedTitle: '## ⚙️ Módulos incluidos ({count})',
    panel: {
      headerComment: 'Panel de configuración en el juego',
      loadedStateComment:
        'Instantánea del estado inicial para detectar cuándo es necesario recargar la interfaz',
      needsReloadComment:
        'Activar o desactivar módulos requiere recargar la UI porque los hooks no se pueden deshacer',
      needsReloadStatus: '|cffff8040Algunos cambios requieren recargar la interfaz|r',
      setValueComment: 'Guardar al instante y notificar al módulo activo si tiene callback live',
      optionLineComment: 'Línea de opción: casilla / número / texto / desplegable',
      needsReloadTag: ' |cff888888(Recargar)|r',
      rowComment: 'Fila de módulo: casilla + título + descripción + flecha de opciones',
      collapseOptions: 'Ocultar opciones',
      expandOptions: 'Mostrar opciones',
      windowTitleSuffix: ' Ajustes',
      allCategory: 'Todos',
      bottomHint: 'Marca para activar · Flecha para opciones · Guardado automático',
      reloadButton: 'Recargar UI',
      settingsTabComment: 'Añadir acceso directo en Opciones -> AddOns',
      settingsTabText: ' usa una ventana independiente. También puedes escribir ',
      openPanelButton: 'Abrir ajustes',
    },
  },
};
