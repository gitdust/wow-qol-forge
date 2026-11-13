import { UiDictionary } from '../types';

export const ru: UiDictionary = {
  seo: {
    title: 'WoW QoL Forge - Конструктор минималистичных аддонов для Retail WoW',
    description:
      'Браузерный генератор QoL-аддонов для World of Warcraft Retail. Выбирайте только нужные модули без лишнего кода и скачивайте готовый ZIP-архив в один клик.',
    ogTitle: 'WoW QoL Forge - Конструктор минималистичных аддонов для Retail WoW',
    ogDescription:
      'Генератор QoL-аддонов для актуального WoW. Выбирайте из {count} модулей без лишнего балласта и соберите свой лёгкий аддон.',
    ogImageAlt: 'Иконка WoW QoL Forge',
    siteSubtitle: 'Конструктор минималистичных аддонов',
    gameType: 'Актуальная (Retail)',
  },
  nav: {
    backToModules: 'К списку модулей',
    changelog: 'Список изменений',
    githubRepo: 'Репозиторий GitHub',
    languageAria: 'Сменить язык',
  },
  toolbar: {
    totalModules: 'Всего модулей: {count}',
    showingCount: 'Показано модулей: {count}',
    selectedCount: 'Выбрано: {selected} / {total}',
    searchPlaceholder: 'Поиск по названию или описанию...',
    clearSearch: 'Очистить поиск',
    selectAllCurrent: 'Выбрать все видимые',
    unselectAllCurrent: 'Снять выделение со всех видимых',
    tableHeaderModule: 'Модули и описание',
    tableHeaderAction: 'Действия',
    emptyTitle: 'Подходящие модули не найдены',
    emptyHint: 'Попробуйте выбрать другую категорию или очистить поиск',
  },
  moduleRow: {
    downloadsCount: 'Скачиваний: {count}',
    downloadsTenThousand: '{value}0 тыс.',
    downloadsUnavailable: 'Счётчик недоступен',
    downloadsTitle: 'Всего скачиваний: {count}',
    optionsButton: 'Опции',
    optionsPreviewTitle: '{title} · Предпросмотр опций',
    optionsReadonlyHint: 'Только просмотр · Отметьте модуль для настройки в боковой панели',
    optionOn: 'Вкл',
    optionOff: 'Выкл',
    sourceButton: 'Код',
    sourceButtonTitle: 'Посмотреть исходный код Lua',
  },
  drawer: {
    title: 'Выбранные модули и настройки',
    itemCount: '{count} шт.',
    defaultsHintPrefix: 'Здесь задаются значения по умолчанию. В игре введите',
    defaultsHintSuffix: 'для включения/отключения модулей и смены параметров',
    clearAll: 'Очистить всё',
    clearAllTitle: 'Снять выбор со всех модулей',
    closeDrawer: 'Закрыть панель',
    addonNameLabel: 'Имя папки аддона',
    addonNameHint: '(Только латинские буквы, любая длина)',
    addonNameDefault: 'По умолчанию: {name}',
    charsCount: '{count} симв.',
    addonNameError: 'Имя аддона не может быть пустым и должно содержать только буквы (A-Z, a-z)',
    emptyTitle: 'Модули ещё не выбраны',
    emptyDesc:
      'Отметьте нужные модули в списке слева, чтобы настроить параметры и скачать аддон.',
    expandOptions: 'Развернуть опции',
    collapseOptions: 'Свернуть опции',
    optionsButton: 'Опции',
    removeTitle: 'Удалить из списка',
    selectedLabel: 'Выбрано: {count}',
    codePreview: 'Просмотр кода',
    downloading: 'Сборка ZIP...',
    downloadButton: 'Скачать аддон ({count})',
  },
  floating: {
    buttonTitle: 'Открыть список выбранных модулей для настройки и скачивания',
    buttonLabel: 'Сборка и загрузка',
  },
  codeModal: {
    subtitle: 'Чистый Lua-код для актуального WoW без лишних зависимостей',
    copyFile: 'Копировать файл',
    copied: 'Скопировано',
    close: 'Закрыть',
    lineCount: 'Строк: {count}',
    closeWindow: 'Закрыть окно',
    moduleSourceTitle: '{title} ({id}) - Исходный код модуля',
    bundlePreviewTitle: '{name} - Предпросмотр всего аддона ({count} модулей)',
  },
  changelog: {
    title: 'Список изменений',
    currentVersion: 'Текущая версия',
    backToModules: 'К списку модулей',
    currentBadge: 'Текущая',
    types: {
      added: 'Добавлено',
      improved: 'Улучшено',
      fixed: 'Исправлено',
      removed: 'Удалено',
    },
    entries: {
      '1.3.1': {
        groups: [
          { type: 'added', items: ['Статистика скачиваний по модулям', 'Поддержка 9 языков (включая интерфейс аддона и комментарии в Lua-коде)'] },
          { type: 'improved', items: ['Поддержка версий интерфейса 12.1.5 / 12.1.7'] },
          { type: 'removed', items: ['Удалено 11 редко используемых или дублирующих модулей'] },
        ],
      },
      '1.3.0': {
        groups: [
          {
            type: 'added',
            items: [
              'Автосмена специализации добычи по боссу/подземелью',
              'Напоминание о наградах Великого хранилища',
              'Автопополнение расходников у торговца',
            ],
          },
          { type: 'improved', items: ['Мигание панели задач при шёпоте и проверке готовности'] },
        ],
      },
      '1.2.0': {
        groups: [
          {
            type: 'added',
            items: [
              'Внутриигровая панель настроек (/addonname)',
              '25 новых модулей, включая автоподтверждение роли и вставку ключа М+',
            ],
          },
          {
            type: 'improved',
            items: ['Метки BoE/Отряд (Warbound)', 'Перетаскивание стандартных окон с запоминанием позиции'],
          },
          { type: 'removed', items: ['Удалены скрытие эффектов символов и прокрутка чата колесом'] },
        ],
      },
      '1.1.0': {
        groups: [
          {
            type: 'added',
            items: ['Встроенная иконка аддона в ZIP', 'Дополнительные настройки для ряда модулей'],
          },
          {
            type: 'improved',
            items: ['Полная совместимость с Retail 12.1.5', 'Изолированная загрузка модулей через pcall'],
          },
          { type: 'fixed', items: ['Исправлено 11 проблем, включая вставку длинного текста и почту'] },
          { type: 'removed', items: ['Удалён 3D-помощник примерочной трансмогрификации'] },
        ],
      },
      '1.0.0': {
        groups: [
          {
            type: 'added',
            items: ['Первый релиз: 64 модуля в 10 категориях с поиском, настройками и скачиванием ZIP'],
          },
        ],
      },
    },
  },
  footer: {
    sourcesLabel: 'Источники вдохновения',
    taintTitle: 'Без загрязнения интерфейса (Zero Taint)',
    taintDesc:
      'Строго следует правилам песочницы Blizzard (hooksecurefunc, TooltipDataProcessor), не перезаписывает защищённые глобальные функции и предотвращает ошибки в бою.',
    kernelTitle: 'Единое микроядро событий',
    kernelDesc:
      'Независимо от того, выбрано 3 или 30 модулей, все события обрабатывает один лёгкий Frame с изоляцией ошибок через pcall.',
    installTitle: 'Быстрая установка аддона',
    step1Title: '1. Выберите и скачайте',
    step1Desc:
      'Отметьте нужные модули, откройте панель в правом нижнем углу и скачайте ZIP-архив.',
    step2Title: '2. Распакуйте в AddOns',
    step2Desc: 'Скопируйте папку (по умолчанию MyQol) в каталог AddOns вашей игры:',
    step3Title: '3. Готово к игре',
    step3DescPrefix:
      'Выбранные функции работают сразу после входа. Чтобы открыть настройки в игре, введите',
    step3DescCmd: ' /имяаддона',
    step3DescSuffix: ' (например, /myqol) в чат.',
    friendlyLinks: 'Ссылки:',
    wowApiLabel: 'World of Warcraft API (Warcraft Wiki)',
    wowUiSourceLabel: 'WoW UI Source (GitHub)',
  },
  alerts: {
    invalidAddonName: 'Введите имя аддона только латинскими буквами (например, MyQol)',
    selectOneModule: 'Выберите хотя бы один модуль',
    downloadFailed: 'Не удалось собрать архив, попробуйте ещё раз',
    defaultAddonNotes:
      'Минималистичный пользовательский QoL-аддон для World of Warcraft Retail',
  },
  categories: {
    all: {
      label: 'Все модули',
      description: 'Все компактные QoL-модули из проверенных аддонов',
    },
    automation: {
      label: 'Автоматизация',
      description: 'Автопочинка, продажа хлама, быстрые квесты, пропуск роликов, удаление без DELETE',
    },
    social: {
      label: 'Сообщество',
      description: 'Автоприём приглашений от друзей/гильдии, инвайт по шёпоту, блок дуэлей',
    },
    chat: {
      label: 'Чат',
      description: 'Стрелки курсора, копирование текста и ссылок, компактные названия каналов',
    },
    ui: {
      label: 'Интерфейс',
      description: 'Скрытие красных ошибок и говорящих голов, макс. дальность камеры, чистые панели',
    },
    inventory: {
      label: 'Сумки и торговцы',
      description: 'Покупка сверх лимита стака, подсветка изученных рецептов, прочность экипировки',
    },
    looting: {
      label: 'Быстрая добыча',
      description: 'Убирает задержку автосбора Blizzard для мгновенного получения добычи',
    },
    mail: {
      label: 'Почта',
      description: 'Сбор всей почты в один клик, быстрая отправка, защита от обмена у ящика',
    },
    inspect: {
      label: 'Характеристики',
      description: 'Анализ убывающей доходности (DR) вторичных характеристик в окне персонажа',
    },
    tooltips: {
      label: 'Подсказки',
      description: 'ID заклинаний/предметов/НИП/заданий, окраска целей и гильдии',
    },
    system: {
      label: 'Система и звук',
      description: 'Отключение надоедливых звуков маунтов, свечение экрана, мигание панели задач',
    },
  },
  presets: {
    'all-in-one': {
      name: 'Всё в одном (Рекомендуется)',
      description:
        '19 самых надёжных повседневных функций: починка, продажа хлама, быстрый лут, пропуск роликов, почта, скрытие ошибок и др.',
    },
    'dungeon-raid': {
      name: 'Эпохальные+ и Рейды',
      description:
        'Скрытие говорящих голов и ошибок, макс. камера, быстрый лут, таймер готовности и анализ вторичных статов.',
    },
    'pvp-combat': {
      name: 'PvP-бои',
      description:
        'Мгновенный выход из тела на БГ, фильтр ошибок, макс. обзор, боевые индикаторы и безопасная очередь PvP.',
    },
    'merchant-life': {
      name: 'Торговля и профессии',
      description:
        'Массовая закупка, автопочинка, продажа хлама, подсветка изученных рецептов, быстрая почта и отправка золота.',
    },
  },
  generator: {
    luaHeaderGeneratedBy: 'Создано в WoW QoL Forge',
    luaHeaderTargetInterface: 'Целевой Interface',
    luaHeaderSelectedModules: 'Выбрано модулей',
    luaHeaderNote:
      'Примечание: значения из веб-конструктора являются значениями по умолчанию. Введите /{slash} в игре для настройки.',
    commentErrorReport: 'Отчёт об ошибках (выводить каждую ошибку только один раз за сессию)',
    runtimeErrorPrint: 'Модуль ',
    commentEventBus:
      'Лёгкая шина событий (один Frame распределяет все события без загрязнения и лишних затрат)',
    commentUnknownEvent:
      'Неизвестные события вызывают ошибку на новых клиентах; перехватываем и пропускаем',
    runtimeEventError: 'Не удалось зарегистрировать событие ',
    commentFeatureList: 'Реестр модулей: категории, модули и параметры по умолчанию',
    commentSavedVars:
      'SavedVariables ({savedVar}): хранятся только отличия от значений по умолчанию',
    commentDefaultEnabled: 'Включено по умолчанию; сохраняется только отключение',
    commentOptionProxy:
      'Модули читают параметры через O.<key>, получая актуальное сохранённое или стандартное значение',
    commentSettingsCallbacks:
      'Модули могут регистрировать OnSettingsChanged для применения настроек без /reload',
    commentModuleLoader:
      'Ожидание ADDON_LOADED и изолированная загрузка каждого модуля в pcall',
    commentModuleLoaderStates: 'started: попытка загрузки; loaded: успешно загружен',
    commentModuleLabel: 'Модуль',
    commentSourceLabel: 'Источник',
    commentWelcome: 'Приветственное сообщение при входе',
    runtimeWelcomeLoaded: ' загружено модулей: ',
    runtimeWelcomeOpenCmd: '. Введите ',
    tocDefaultNotes: 'Компактный QoL-аддон, собранный в WoW QoL Forge',
    readmeTitle: '# {name} - Минималистичный аддон для WoW',
    readmeGeneratedBy: 'Сгенерировано в **WoW QoL Forge**.',
    readmeImportantTitle: '## 💡 Важная информация',
    readmeImportantBody:
      'Выбранные на сайте модули активны сразу после входа в игру с заданными значениями по умолчанию.\nВведите `/{slash}` в чате, чтобы открыть панель настроек: слева выберите категорию, галочкой включайте модули,\nа стрелка справа раскрывает поднастройки. Изменения сохраняются автоматически.\nПанель также доступна в разделе «Параметры -> Модификации».',
    readmeInstallTitle: '## 📦 Установка',
    readmeInstallStep1: '1. Распакуйте архив и получите папку `{name}`.',
    readmeInstallStep2:
      '2. Скопируйте `{name}` в папку AddOns игры World of Warcraft:\n   - Стандартный путь: `World of Warcraft\\_retail_\\Interface\\AddOns\\{name}`',
    readmeInstallStep3: '3. Запустите игру или введите `/reload` в чате.',
    readmeSelectedTitle: '## ⚙️ Включённые модули ({count})',
    panel: {
      headerComment: 'Внутриигровая панель настроек',
      loadedStateComment:
        'Снимок состояния модулей и опций при загрузке для определения необходимости /reload',
      needsReloadComment:
        'Включение и выключение модулей требует перезагрузки интерфейса',
      needsReloadStatus: '|cffff8040Некоторые изменения требуют перезагрузки UI|r',
      setValueComment: 'Немедленное сохранение и вызов live-обработчика активного модуля',
      optionLineComment: 'Строка параметра: флажок / число / текст / список',
      needsReloadTag: ' |cff888888(Перезагрузка)|r',
      rowComment: 'Строка модуля: флажок + название + описание + стрелка опций',
      collapseOptions: 'Свернуть опции',
      expandOptions: 'Развернуть опции',
      windowTitleSuffix: ' — Настройки',
      allCategory: 'Все',
      bottomHint: 'Флажок — включить · Стрелка — опции · Автосохранение',
      reloadButton: 'Перезагрузить',
      settingsTabComment: 'Кнопка открытия панели в «Параметры -> Модификации»',
      settingsTabText: ' использует отдельное окно. Также можно ввести ',
      openPanelButton: 'Открыть настройки',
    },
  },
};
