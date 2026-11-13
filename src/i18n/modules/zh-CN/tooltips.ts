import { ModuleTranslation } from '../../types';

export const tooltipsZhCN: Record<string, ModuleTranslation> = {
  'id-tip': {
    title: '鼠标提示数值 ID 显示 (idTip)',
    description: '在技能、光环、物品、玩具、NPC、任务、货币、坐骑、宠物、成就等鼠标提示底部显示底层 ID 编号。',
    details: '基于魔兽正式服现代 TooltipDataProcessor 架构编写，任务 ID 同时覆盖地图任务点与任务日志列表，查 Wowhead、编写宏与配置 WeakAuras 极其方便。',
    tag: '硬核实用',
    options: {
      showSpell: { label: '显示法术 ID (含光环/宠物技能)' },
      showItem: { label: '显示物品 ID (含玩具)' },
      showNpc: { label: '显示 NPC/怪物 ID' },
      showQuest: { label: '显示任务 ID' },
      showCurrency: { label: '显示货币 ID' },
      showCollections: { label: '显示坐骑/宠物种类/成就 ID' },
    },
    comments: {
      header: '[ 鼠标提示显示底层 ID (idTip) ]',
      dedupNote: '同一个提示框里同类 ID 只显示一次',
      questHookNote: '地图任务点与任务日志列表的提示不走 TooltipDataProcessor',
    },
  },
  'enhance-tooltips': {
    title: '鼠标提示目标与公会高亮显示',
    description: '在玩家/怪物的鼠标提示框中，按职业颜色显示名字，并追加显示“当前目标”与公会会阶信息。',
    tag: '信息直观',
    comments: {
      header: '[ 鼠标提示职业着色、公会会阶与目标显示 (Leatrix Plus TipModEnable) ]',
      secretSkipNote: '12.x 受限场景 (如战斗中) 单位是加密值，不能传给 UnitIsPlayer 等函数，直接跳过',
      safeFilterNote: '受限场景下这些查询也可能返回加密值，统一经 Safe 过滤 (加密值视为 nil)',
      classColorNote: '名字按职业着色',
      guildRankNote: '公会行追加会阶',
      targetNote: '当前目标',
    },
    strings: {
      youLabel: '>> 你 <<',
      targetLabel: '目标:',
    },
  },
  'transmog-status': {
    title: '物品幻化收集状态提示',
    description: '鼠标悬停在护甲或武器上时，在鼠标提示底部直接标注该外观当前是否已经加入战团幻化收藏。',
    tag: '收集党必备',
    comments: {
      header: '[ 物品幻化收集状态提示 (Can I Mog It 精简版) ]',
      statusRuleNote: '物品的 sourceID 已收藏 → 已收藏；同外观的其他来源已收藏 → 外观已收藏；否则未收集',
    },
    strings: {
      collected: '|cff88ff88已收藏|r',
      appearanceCollected: '|cffbbee88外观已收藏 (来自其他物品)|r',
      notCollected: '|cffff5588尚未收集|r',
      label: '幻化外观:',
    },
  },
  'tooltip-combat-hide': {
    title: '战斗中隐藏单位鼠标提示',
    description: '战斗中鼠标划过场景里的怪物和玩家时不再弹出提示框，避免挡住技能和地面效果。',
    details: '只隐藏场景中单位的提示，技能、物品和头像框上的提示照常显示。也可以让场景单位的提示跟随鼠标，不再固定在屏幕右下角。',
    tag: '战斗清爽',
    options: {
      hideInCombat: { label: '战斗中隐藏场景单位提示' },
      shiftOverride: { label: '按住 Shift 时仍显示' },
      anchorCursor: {
        label: '场景单位提示跟随鼠标',
        description: '提示框出现在鼠标旁边，而不是屏幕右下角',
      },
    },
    comments: {
      header: '[ 战斗中隐藏单位鼠标提示 ]',
      worldMotionNote: '需要世界框体的鼠标移动事件才能判断鼠标是否指在场景上 (与 Leatrix Plus 相同)',
    },
  },
};
