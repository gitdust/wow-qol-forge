import { ModuleTranslation } from '../../types';

export const tooltipsZhTW: Record<string, ModuleTranslation> = {
  'id-tip': {
    title: '滑鼠提示數值 ID 顯示 (idTip)',
    description: '在技能、光環、物品、玩具、NPC、任務、貨幣、坐騎、寵物、成就等滑鼠提示底部顯示底層 ID 編號。',
    details: '基於魔獸正式版現代 TooltipDataProcessor 架構編寫，任務 ID 同時涵蓋地圖任務點與任務日誌列表，查 Wowhead、編寫巨集與設定 WeakAuras 極為方便。',
    tag: '硬核實用',
    options: {
      showSpell: { label: '顯示法術 ID (含光環/寵物技能)' },
      showItem: { label: '顯示物品 ID (含玩具)' },
      showNpc: { label: '顯示 NPC/怪物 ID' },
      showQuest: { label: '顯示任務 ID' },
      showCurrency: { label: '顯示貨幣 ID' },
      showCollections: { label: '顯示坐騎/寵物種類/成就 ID' },
    },
    comments: {
      header: '[ 滑鼠提示顯示底層 ID (idTip) ]',
      dedupNote: '同一個提示框內同類 ID 只顯示一次',
      questHookNote: '地圖任務點與任務日誌列表的提示不走 TooltipDataProcessor',
    },
  },
  'enhance-tooltips': {
    title: '滑鼠提示目標與公會高亮顯示',
    description: '在玩家/怪物的滑鼠提示框中，依職業顏色顯示名字，並追加顯示「目前目標」與公會會階資訊。',
    tag: '資訊直觀',
    comments: {
      header: '[ 滑鼠提示職業著色、公會會階與目標顯示 (Leatrix Plus TipModEnable) ]',
      secretSkipNote: '12.x 受限場景 (如戰鬥中) 單位為機密值，不能傳給 UnitIsPlayer 等函式，直接略過',
      safeFilterNote: '受限場景下這些查詢也可能回傳機密值，統一經 Safe 過濾 (機密值視為 nil)',
      classColorNote: '名字依職業著色',
      guildRankNote: '公會行追加會階',
      targetNote: '目前目標',
    },
    strings: {
      youLabel: '>> 你 <<',
      targetLabel: '目標:',
    },
  },
  'transmog-status': {
    title: '物品塑形收集狀態提示',
    description: '將滑鼠移到護甲或武器上時，在滑鼠提示底部直接標註該外觀目前是否已經加入戰隊塑形收藏。',
    tag: '收集黨必備',
    comments: {
      header: '[ 物品塑形收集狀態提示 (Can I Mog It 精簡版) ]',
      statusRuleNote: '物品的 sourceID 已收藏 → 已收藏；同外觀的其他來源已收藏 → 外觀已收藏；否則未收集',
    },
    strings: {
      collected: '|cff88ff88已收藏|r',
      appearanceCollected: '|cffbbee88外觀已收藏 (來自其他物品)|r',
      notCollected: '|cffff5588尚未收集|r',
      label: '塑形外觀:',
    },
  },
  'tooltip-combat-hide': {
    title: '戰鬥中隱藏單位滑鼠提示',
    description: '戰鬥中滑鼠劃過場景裡的怪物和玩家時不再彈出提示框，避免擋住技能和地面效果。',
    details: '只隱藏場景中單位的提示，技能、物品和頭像框上的提示照常顯示。也可以讓場景單位的提示跟隨滑鼠，不再固定在螢幕右下角。',
    tag: '戰鬥清爽',
    options: {
      hideInCombat: { label: '戰鬥中隱藏場景單位提示' },
      shiftOverride: { label: '按住 Shift 時仍顯示' },
      anchorCursor: {
        label: '場景單位提示跟隨滑鼠',
        description: '提示框出現在滑鼠旁邊，而不是螢幕右下角',
      },
    },
    comments: {
      header: '[ 戰鬥中隱藏單位滑鼠提示 ]',
      worldMotionNote: '需要世界框架的滑鼠移動事件才能判斷滑鼠是否指在場景上 (與 Leatrix Plus 相同)',
    },
  },
};
