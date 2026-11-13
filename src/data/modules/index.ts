import { automationModules } from './automation';
import { socialModules } from './social';
import { chatModules } from './chat';
import { uiModules } from './ui';
import { inventoryModules } from './inventory';
import { lootingModules } from './looting';
import { mailModules } from './mail';
import { inspectModules } from './inspect';
import { tooltipModules } from './tooltips';
import { systemModules } from './system';
import { CategoryInfo, Preset, QoLModule } from '../../types';

export const allModules: QoLModule[] = [
  ...automationModules,
  ...socialModules,
  ...chatModules,
  ...uiModules,
  ...inventoryModules,
  ...lootingModules,
  ...mailModules,
  ...inspectModules,
  ...tooltipModules,
  ...systemModules,
];

export const moduleMap = new Map<string, QoLModule>(
  allModules.map((m) => [m.id, m])
);

export const categories: CategoryInfo[] = [
  {
    id: 'all',
    label: '全部模块',
    icon: 'Sparkles',
    description: '查看全部提炼自成熟插件的 QoL 功能模块',
  },
  {
    id: 'automation',
    label: '任务自动化',
    icon: 'CheckCircle2',
    description: '自动修装、卖垃圾、快速接交任务、跳过动画、免输 DELETE 摧毁',
  },
  {
    id: 'social',
    label: '社交与组队',
    icon: 'Users',
    description: '好友/公会组队邀请自动同意、密语组队、屏蔽决斗与骚扰',
  },
  {
    id: 'chat',
    label: '聊天增强',
    icon: 'MessageSquare',
    description: '方向键光标移动、滚轮翻页、聊天文字与网址一键复制、精简频道',
  },
  {
    id: 'ui',
    label: '界面与视觉',
    icon: 'Tv',
    description: '屏蔽红字战斗报错、隐藏 NPC 剧情对话框、最大视距、精简动作条',
  },
  {
    id: 'inventory',
    label: '背包与商人',
    icon: 'ShoppingCart',
    description: '突破商人批量购买上限、已学会配方高亮、全身耐久度一览',
  },
  {
    id: 'looting',
    label: '极速拾取',
    icon: 'Zap',
    description: '抹平暴雪拾取内部延迟，瞬秒拾取掉落物品入包',
  },
  {
    id: 'mail',
    label: '邮件助手',
    icon: 'Mail',
    description: '一键批量收取全部邮件、极速邮寄附件、开邮箱防交易打扰',
  },
  {
    id: 'inspect',
    label: '装等与观察',
    icon: 'Award',
    description: '绿字副属性收益递减分析，查看人物面板真实有效绿字',
  },
  {
    id: 'tooltips',
    label: '鼠标提示',
    icon: 'Hash',
    description: '法术/物品/怪物/任务底层数值 ID 显示、目标与公会着色',
  },
  {
    id: 'system',
    label: '系统与视听',
    icon: 'Target',
    description: '静音刺耳坐骑噪音、全屏泛光优化、音频热同步、任务栏后台强提醒',
  },
];

export const defaultPresets: Preset[] = [
  {
    id: 'all-in-one',
    name: '全能极简日常 (推荐)',
    description: '包含自动修装、卖垃圾、秒拾取、跳动画、一键收信、去红字、窗口自由拖拽等 19 项最稳日常提速功能。',
    icon: 'Sparkles',
    moduleIds: [
      'auto-repair',
      'auto-sell-junk',
      'faster-loot',
      'faster-movie-skip',
      'automate-quests',
      'easy-item-destroy',
      'postal-open-all',
      'postal-express',
      'hide-error-messages',
      'hide-talking-head',
      'max-camera-zoom',
      'chat-arrow-keys',
      'chat-copy',
      'id-tip',
      'already-known',
      'blizz-move',
      'dialog-key',
      'slash-way-native',
      'paste-text',
    ],
  },
  {
    id: 'dungeon-raid',
    name: '大秘境 & 团本专注',
    description: '隐藏遮挡 NPC 对话框、屏蔽红字、最大视角解锁、秒拾取、就位倒计时、副属性真实递减分析。',
    icon: 'Swords',
    moduleIds: [
      'faster-loot',
      'hide-talking-head',
      'hide-error-messages',
      'max-camera-zoom',
      'chat-arrow-keys',
      'easy-item-destroy',
      'show-ready-timer',
      'mute-annoying-sounds',
      'blizz-move',
      'true-stat-values',
      'flash-taskbar',
      'safe-queue',
    ],
  },
  {
    id: 'pvp-combat',
    name: 'PVP 竞技狂暴',
    description: '战场死后秒释放、清爽红字过滤、最大视野、极速拾取徽记、战斗姓名板自适应、排本安全确认。',
    icon: 'Shield',
    moduleIds: [
      'auto-release-pvp',
      'auto-accept-res',
      'combat-nameplates',
      'hide-error-messages',
      'max-camera-zoom',
      'faster-loot',
      'chat-arrow-keys',
      'safe-queue',
      'flash-taskbar',
    ],
  },
  {
    id: 'merchant-life',
    name: '商人与专业生活',
    description: '突破批量购买上限、自动修装、清空垃圾、已学会图纸高亮、一键收信倒金、极速拾取。',
    icon: 'Coins',
    moduleIds: [
      'buy-em-all',
      'auto-repair',
      'auto-sell-junk',
      'postal-open-all',
      'postal-express',
      'postal-wire',
      'faster-loot',
      'already-known',
      'easy-item-destroy',
    ],
  },
];
