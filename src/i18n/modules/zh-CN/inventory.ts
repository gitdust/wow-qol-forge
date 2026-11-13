import { ModuleTranslation } from '../../types';

export const inventoryZhCN: Record<string, ModuleTranslation> = {
  'buy-em-all': {
    title: '突破商人批量购买上限 (BuyEmAll)',
    description:
      '在商人处 Shift+右键点击商品时，弹出数量输入框并显示最多可买数量，突破原版单次一组的上限，自动分批购买。',
    details:
      '可买数量同时受金币、背包空间（含材料包）与商人库存限制；需要额外货币或打包出售的商品保持暴雪原生行为。',
    tag: '制造必备',
    comments: {
      header: '[ 突破商人批量购买上限 (BuyEmAll) ]',
      freeBagSpaceNote: '背包能装下的数量: 空格 x 堆叠上限 + 已有同类堆叠的剩余空间 (参考 BuyEmAll GetFreeBagSpace)',
      goldOnlyNote: '仅处理单件金币商品；需要额外货币或打包出售的商品保留暴雪原生行为',
    },
    strings: {
      popupText: '购买 %s\n最多可买 %d 个 (受金币、背包空间与库存限制)',
      insufficientMsg: '金币不足或背包已满，无法购买',
    },
  },
  'already-known': {
    title: '用绿色标记已学配方与已收藏物品 (AlreadyKnown)',
    description:
      '在商人、拍卖行与公会银行中，为当前角色已经学会的图纸、配方以及已收集的坐骑、宠物、玩具图标染成绿色。',
    details: '直接在商人界面一目了然分辨哪些配方已经学会，彻底告别手滑买错重复图纸。',
    tag: '收集防坑',
    comments: {
      header: '[ 已学会配方/坐骑/宠物/玩具高亮 (AlreadyKnown) ]',
      cagedPetNote: '笼中战斗宠物',
      knownTooltipNote: '配方/图纸等: Tooltip 中出现「已经学会」',
      merchantNote: '商人',
      ahNote: '拍卖行浏览列表',
      guildBankNote: '公会银行',
      guildBankConstNote: '公会银行 UI 内部的 local 常量 (每页 98 格，每列 14 格)，插件无法读取，这里写死',
    },
  },
  'durability-status': {
    title: '角色面板装备耐久度一览',
    description: '在人物装备面板右下角显示全身装备耐久百分比，悬停可查看逐件耐久；角色死亡时在聊天框提示当前耐久。',
    tag: '基础便利',
    comments: {
      header: '[ 装备耐久度一览 (Leatrix Plus DurabilityStatus) ]',
      getDurabilityNote: '返回总体耐久百分比与逐件明细；没有带耐久的装备时返回 nil',
      buttonNote: '角色面板右下角的耐久按钮，悬停显示逐件耐久',
      deathNoticeNote: '死亡时在聊天框提示 (2 秒内只提示一次)',
    },
    strings: {
      labelPrefix: '耐久 ',
      tooltipTitle: '装备耐久度',
      tooltipTotal: '总体',
      deathMsg: '|cffff9900[QoL]|r 当前全身装备耐久度: ',
    },
  },
  'hide-cleanup-buttons': {
    title: '隐藏背包与银行一键整理按钮',
    description: '隐藏背包与银行界面右上角的暴雪原生“整理背包”小扫把按钮，防止误点打乱自己的分类排布。',
    tag: '防误触',
    comments: {
      header: '[ 隐藏整理背包小扫把按钮 ]',
      hideNote: '显示时立刻隐藏 (与 Leatrix Plus 一致)；正式服 12.x 银行整理按钮位于 BankPanel.AutoSortButton',
    },
  },
  'quest-item-destroy-info': {
    title: '摧毁任务物品前提示相关任务',
    description:
      '准备摧毁与任务有关的物品（包括能开启任务的物品）时，在聊天框提示它对应哪个任务、任务是否已接。',
    details: '避免误删还没交的任务物品或能开启任务的物品。',
    tag: '防误操作',
    comments: {
      header: '[ 摧毁任务物品前提示相关任务 ]',
    },
    strings: {
      questFallback: '任务 ',
      stateActive: '已在任务日志中',
      stateStarter: '尚未接取，这个物品可以开启任务',
      warnRelated: '|cffff5555[QoL] 注意：|r这个物品与任务「%s」相关（%s）',
      warnGeneric: '|cffff5555[QoL] 注意：|r这是任务物品，摧毁后可能需要重新获取',
    },
  },
  'auto-restock': {
    title: '商人处自动补货',
    description:
      '打开商人时，按你设定的清单把材料或消耗品自动买到目标数量，例如「魔法水=40」：背包里已有 15 个，就只买 25 个。',
    details:
      '物品可填名称（需与商人列表中的名称完全一致）或物品 ID。只购买用金币、单件出售的商品；需要其他货币或打包出售的商品会跳过。购买数量同时受金币、背包空间与商人库存限制。',
    tag: '省时省力',
    options: {
      items: {
        label: '补货清单',
        description: '格式「物品名或物品ID=目标数量」，多条用逗号或分号隔开，例如：魔法水=40, 113509=20',
      },
      showSummary: { label: '在聊天框显示补货明细' },
    },
    comments: {
      header: '[ 商人处自动补货 (Restocker) ]',
      parseListNote: '解析「物品名或ID=数量」清单；只用 ASCII 等号拆分，中文标点逐个替换成逗号 (Lua 字符类按字节匹配，不能把中文标点放进 [])',
      freeBagSpaceNote: '背包能装下的数量: 空格 x 堆叠上限 + 已有同类堆叠的剩余空间',
      goldOnlyNote: '只买金币购买、单件出售的商品',
      delayNote: '商品信息在打开商人后的下一帧才齐全，稍等再补货',
    },
    strings: {
      summaryMsg: '|cff00ff99[QoL]|r 已自动补货: %s，花费 %s',
      listSep: '、',
    },
  },
};
