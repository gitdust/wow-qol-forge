import { QoLModule } from '../../../types';
import idTipLua from './id-tip.lua';
import enhanceTooltipsLua from './enhance-tooltips.lua';
import transmogStatusLua from './transmog-status.lua';
import tooltipCombatHideLua from './tooltip-combat-hide.lua';

export const tooltipModules: QoLModule[] = [
  {
    id: 'id-tip',
    title: '鼠标提示数值 ID 显示 (idTip)',
    category: 'tooltips',
    description: '在技能、光环、物品、玩具、NPC、任务、货币、坐骑、宠物、成就等鼠标提示底部显示底层 ID 编号。',
    details: '基于魔兽正式服现代 TooltipDataProcessor 架构编写，任务 ID 同时覆盖地图任务点与任务日志列表，查 Wowhead、编写宏与配置 WeakAuras 极其方便。',
    tag: '硬核实用',
    icon: 'Hash',
    defaultEnabled: true,
    sourceAddon: 'idTip',
    options: [
      { id: 'showSpell', label: '显示法术 ID (含光环/宠物技能)', type: 'boolean', default: true, live: true },
      { id: 'showItem', label: '显示物品 ID (含玩具)', type: 'boolean', default: true, live: true },
      { id: 'showNpc', label: '显示 NPC/怪物 ID', type: 'boolean', default: true, live: true },
      { id: 'showQuest', label: '显示任务 ID', type: 'boolean', default: true, live: true },
      { id: 'showCurrency', label: '显示货币 ID', type: 'boolean', default: true, live: true },
      { id: 'showCollections', label: '显示坐骑/宠物种类/成就 ID', type: 'boolean', default: true, live: true },
    ],
    generateLua: idTipLua,
  },
  {
    id: 'enhance-tooltips',
    title: '鼠标提示目标与公会高亮显示',
    category: 'tooltips',
    description: '在玩家/怪物的鼠标提示框中，按职业颜色显示名字，并追加显示“当前目标”与公会会阶信息。',
    tag: '信息直观',
    icon: 'Search',
    defaultEnabled: true,
    sourceAddon: 'Leatrix Plus',
    generateLua: enhanceTooltipsLua,
  },
  {
    id: 'transmog-status',
    title: '物品幻化收集状态提示',
    category: 'tooltips',
    description: '鼠标悬停在护甲或武器上时，在鼠标提示底部直接标注该外观当前是否已经加入战团幻化收藏。',
    tag: '收集党必备',
    icon: 'Palette',
    defaultEnabled: true,
    sourceAddon: 'Can I Mog It',
    generateLua: transmogStatusLua,
  },
  {
    id: 'tooltip-combat-hide',
    title: '战斗中隐藏单位鼠标提示',
    category: 'tooltips',
    description: '战斗中鼠标划过场景里的怪物和玩家时不再弹出提示框，避免挡住技能和地面效果。',
    details: '只隐藏场景中单位的提示，技能、物品和头像框上的提示照常显示。也可以让场景单位的提示跟随鼠标，不再固定在屏幕右下角。',
    tag: '战斗清爽',
    icon: 'EyeOff',
    defaultEnabled: false,
    sourceAddon: 'Leatrix Plus',
    options: [
      {
        id: 'hideInCombat',
        label: '战斗中隐藏场景单位提示',
        type: 'boolean',
        default: true,
        live: true,
      },
      {
        id: 'shiftOverride',
        label: '按住 Shift 时仍显示',
        type: 'boolean',
        default: true,
        live: true,
      },
      {
        id: 'anchorCursor',
        label: '场景单位提示跟随鼠标',
        description: '提示框出现在鼠标旁边，而不是屏幕右下角',
        type: 'boolean',
        default: false,
        live: true,
      },
    ],
    generateLua: tooltipCombatHideLua,
  },
];
