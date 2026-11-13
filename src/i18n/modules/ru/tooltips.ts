import { ModuleTranslation } from '../../types';

export const tooltipsRu: Record<string, ModuleTranslation> = {
  'id-tip': {
    title: 'Отображение числовых ID (idTip)',
    description: 'Показывает ID заклинаний, аур, предметов, игрушек, НИП, заданий, валют, транспорта, питомцев и достижений внизу подсказок.',
    details: 'Работает через современный TooltipDataProcessor, включая метки заданий на карте и журнал заданий.',
    tag: 'Полезное',
    options: {
      showSpell: { label: 'Показывать ID заклинаний (вкл. ауры/питомцев)' },
      showItem: { label: 'Показывать ID предметов (вкл. игрушки)' },
      showNpc: { label: 'Показывать ID НИП/существ' },
      showQuest: { label: 'Показывать ID заданий' },
      showCurrency: { label: 'Показывать ID валют' },
      showCollections: { label: 'Показывать ID транспорта/питомцев/достижений' },
    },
    comments: {
      header: '[ Отображение числовых ID (idTip) ]',
      dedupNote: 'Не дублировать одинаковую строку ID в одной подсказке',
      questHookNote: 'Точки заданий на карте и кнопки журнала не проходят через TooltipDataProcessor',
    },
  },
  'enhance-tooltips': {
    title: 'Цвета классов, звание в гильдии и цель в подсказке',
    description: 'Окрашивает имена игроков по классу, добавляет звание в гильдии и текущую цель юнита.',
    tag: 'Информативно',
    comments: {
      header: '[ Цвета классов, звание в гильдии и цель (Leatrix Plus) ]',
      secretSkipNote: 'В защищённых сценах 12.x юнит может быть секретным значением; пропускаем',
      safeFilterNote: 'Запросы в ограниченных сценах фильтруем через Safe()',
      classColorNote: 'Окрасить имя игрока в цвет класса',
      guildRankNote: 'Добавить звание к строке гильдии',
      targetNote: 'Текущая цель',
    },
    strings: {
      youLabel: '>> ВЫ <<',
      targetLabel: 'Цель:',
    },
  },
  'transmog-status': {
    title: 'Статус коллекции трансмогрификации',
    description: 'Показывает внизу подсказки брони или оружия, добавлен ли этот облик в коллекцию Отряда.',
    tag: 'Коллекционерам',
    comments: {
      header: '[ Статус коллекции трансмогрификации (Can I Mog It Lite) ]',
      statusRuleNote: 'Точный sourceID собран -> Собрано; тот же облик из другого источника -> Облик собран; иначе Не собрано',
    },
    strings: {
      collected: '|cff88ff88Собрано|r',
      appearanceCollected: '|cffbbee88Облик собран (другой предмет)|r',
      notCollected: '|cffff5588Не собрано|r',
      label: 'Трансмог:',
    },
  },
  'tooltip-combat-hide': {
    title: 'Скрывать подсказки юнитов в мире во время боя',
    description: 'Убирает всплывающие подсказки при наведении на существ и игроков в 3D-мире во время боя.',
    details: 'Подсказки на заклинаниях, предметах и рамках юнитов остаются видимыми. Опционально привязывает подсказку к курсору.',
    tag: 'Чистый бой',
    options: {
      hideInCombat: { label: 'Скрывать подсказки юнитов в мире в бою' },
      shiftOverride: { label: 'Показывать при удержании Shift' },
      anchorCursor: {
        label: 'Привязывать подсказки юнитов к курсору',
        description: 'Подсказка появляется рядом с курсором вместо правого нижнего угла',
      },
    },
    comments: {
      header: '[ Скрывать подсказки юнитов в мире во время боя ]',
      worldMotionNote: 'Включить отслеживание мыши на WorldFrame (как в Leatrix Plus)',
    },
  },
};
