import { ModuleTranslation } from '../../types';

export const inventoryZhTW: Record<string, ModuleTranslation> = {
  'buy-em-all': {
    title: '突破商人批次購買上限 (BuyEmAll)',
    description:
      '在商人處 Shift+右鍵點擊商品時，彈出數量輸入框並顯示最多可買數量，突破原版單次一組的上限，自動分批購買。',
    details:
      '可買數量同時受金幣、背包空間（含材料包）與商人庫存限制；需要額外貨幣或打包出售的商品維持暴雪原生行為。',
    tag: '製造必備',
    comments: {
      header: '[ 突破商人批次購買上限 (BuyEmAll) ]',
      freeBagSpaceNote: '背包能裝下的數量: 空格 x 堆疊上限 + 已有同類堆疊的剩餘空間 (參考 BuyEmAll GetFreeBagSpace)',
      goldOnlyNote: '僅處理單件金幣商品；需要額外貨幣或打包出售的商品維持暴雪原生行為',
    },
    strings: {
      popupText: '購買 %s\n最多可買 %d 個 (受金幣、背包空間與庫存限制)',
      insufficientMsg: '金幣不足或背包已滿，無法購買',
    },
  },
  'already-known': {
    title: '已學會配方/圖紙綠色高亮 (AlreadyKnown)',
    description:
      '在商人、拍賣場與公會銀行中，為目前角色已經學會的圖紙、配方以及已收集的坐騎、寵物、玩具圖示染成綠色。',
    details: '直接在商人介面一目瞭然分辨哪些配方已經學會，徹底告別手滑買錯重複圖紙。',
    tag: '收集防坑',
    comments: {
      header: '[ 已學會配方/坐騎/寵物/玩具高亮 (AlreadyKnown) ]',
      cagedPetNote: '籠中戰鬥寵物',
      knownTooltipNote: '配方/圖紙等: Tooltip 中出現「已經學會」',
      merchantNote: '商人',
      ahNote: '拍賣場瀏覽列表',
      guildBankNote: '公會銀行',
      guildBankConstNote: '公會銀行 UI 內部的 local 常數 (每頁 98 格，每欄 14 格)，插件無法讀取，此處寫死',
    },
  },
  'durability-status': {
    title: '角色面板裝備耐久度一覽',
    description: '在角色裝備面板右下角顯示全身裝備耐久百分比，懸停可檢視逐件耐久；角色死亡時在聊天視窗提示目前耐久。',
    tag: '基礎便利',
    comments: {
      header: '[ 裝備耐久度一覽 (Leatrix Plus DurabilityStatus) ]',
      getDurabilityNote: '回傳整體耐久百分比與逐件明細；沒有帶耐久的裝備時回傳 nil',
      buttonNote: '角色面板右下角的耐久按鈕，懸停顯示逐件耐久',
      deathNoticeNote: '死亡時在聊天視窗提示 (2 秒內只提示一次)',
    },
    strings: {
      labelPrefix: '耐久 ',
      tooltipTitle: '裝備耐久度',
      tooltipTotal: '整體',
      deathMsg: '|cffff9900[QoL]|r 目前全身裝備耐久度: ',
    },
  },
  'hide-cleanup-buttons': {
    title: '隱藏背包與銀行一鍵整理按鈕',
    description: '隱藏背包與銀行介面右上角的暴雪原生「整理背包」小掃把按鈕，防止誤點打亂自己的分類排布。',
    tag: '防誤觸',
    comments: {
      header: '[ 隱藏整理背包小掃把按鈕 ]',
      hideNote: '顯示時立刻隱藏 (與 Leatrix Plus 一致)；正式版 12.x 銀行整理按鈕位於 BankPanel.AutoSortButton',
    },
  },
  'quest-item-destroy-info': {
    title: '摧毀任務物品前提示相關任務',
    description:
      '準備摧毀與任務有關的物品（包括能開啟任務的物品）時，在聊天視窗提示它對應哪個任務、任務是否已接。',
    details: '避免誤刪還沒交的任務物品或能開啟任務的物品。',
    tag: '防誤操作',
    comments: {
      header: '[ 摧毀任務物品前提示相關任務 ]',
    },
    strings: {
      questFallback: '任務 ',
      stateActive: '已在任務日誌中',
      stateStarter: '尚未承接，這個物品可以開啟任務',
      warnRelated: '|cffff5555[QoL] 注意：|r這個物品與任務「%s」相關（%s）',
      warnGeneric: '|cffff5555[QoL] 注意：|r這是任務物品，摧毀後可能需要重新取得',
    },
  },
  'auto-restock': {
    title: '商人處自動補貨',
    description:
      '開啟商人時，依你設定的清單把材料或消耗品自動買到目標數量，例如「魔法水=40」：背包裡已有 15 個，就只買 25 個。',
    details:
      '物品可填名稱（需與商人列表中的名稱完全一致）或物品 ID。只購買用金幣、單件出售的商品；需要其他貨幣或打包出售的商品會略過。購買數量同時受金幣、背包空間與商人庫存限制。',
    tag: '省時省力',
    options: {
      items: {
        label: '補貨清單',
        description: '格式「物品名或物品ID=目標數量」，多筆用逗號或分號隔開，例如：魔法水=40, 113509=20',
      },
      showSummary: { label: '在聊天視窗顯示補貨明細' },
    },
    comments: {
      header: '[ 商人處自動補貨 (Restocker) ]',
      parseListNote: '解析「物品名或ID=數量」清單；只用 ASCII 等號拆分，全形標點逐一替換成逗號',
      freeBagSpaceNote: '背包能裝下的數量: 空格 x 堆疊上限 + 已有同類堆疊的剩餘空間',
      goldOnlyNote: '只買金幣購買、單件出售的商品',
      delayNote: '商品資訊在開啟商人後的下一影格才齊全，稍等再補貨',
    },
    strings: {
      summaryMsg: '|cff00ff99[QoL]|r 已自動補貨: %s，花費 %s',
      listSep: '、',
    },
  },
};
