import { ModuleTranslation } from '../../types';

export const mailZhTW: Record<string, ModuleTranslation> = {
  'postal-open-all': {
    title: '一鍵收取所有郵件 (Open All)',
    description: '在信箱介面新增「收取全部」按鈕，全自動依序批次收取所有信件中的金幣與附件物品。',
    details: '提純自經典 Postal 核心佇列邏輯，遇到背包已滿時智慧停止並播報收入彙總，可隨時再次點擊中斷。',
    tag: '第一梯隊剛需',
    options: {
      skipAH: {
        label: '略過拍賣場郵件',
        description: '僅收取一般玩家信件，保留拍賣場郵件',
      },
    },
    comments: {
      header: '[ 一鍵批次收信 (Postal OpenAll 核心精煉) ]',
      ahPatternNote: '拍賣場郵件依暴雪在地化標題識別 (與 Postal 一致)',
      retryNote: '同一封信內容連續未變化，代表取件失敗 (背包滿/唯一物品等)，停止而非無限重試',
    },
    strings: {
      btnOpenAll: '收取全部',
      btnStop: '停止收取',
      earnedPrefix: '，本次共收入 ',
      logPrefix: '|cff00ff99[QoL 郵件]|r ',
      stopFailed: '有郵件無法收取 (背包已滿或物品唯一)，已停止',
      stopMorePages: '目前頁已收完，還有 %d 封郵件未載入，請稍後重新開啟信箱',
      stopDone: '所有包含物品/金幣的郵件已收完',
      stopAborted: '已中止批次收信',
      stopClosed: '信箱已關閉，停止收取',
      stopBagFull: '背包已滿，已停止收取',
    },
  },
  'postal-express': {
    title: '極速郵寄與收件 (Shift/Alt 快捷操作)',
    description:
      '在信箱收件匣中按住 Shift 點擊郵件直接一鍵取走附件、按住 Ctrl 點擊退信；寄信時按住 Alt 點擊背包物品瞬間放入附件欄。',
    details: '批次給本尊/分身寄藥水、寶石、材料時無需反覆拖曳或右鍵慢慢移入。',
    tag: '操作極速',
    comments: {
      header: '[ 極速郵寄與取信快速鍵 (Postal Express) ]',
      inboxNote: '收件匣: 帶修飾鍵點擊走 InboxFrame_OnModifiedClick，一般點擊走 InboxFrame_OnClick',
      sendNote: '寄件: Alt+左鍵點擊背包物品放入附件欄 (正式版經由 HandleModifiedItemClick)',
    },
  },
  'postal-trade-block': {
    title: '開啟信箱時自動封鎖交易',
    description: '當你開啟信箱視窗處理郵件時，自動拒絕所有玩家發起的交易請求，關閉信箱後恢復。',
    details: '杜絕在主城信箱整理大量金幣物資時被路人故意彈出交易視窗騷擾或打斷。',
    tag: '清爽防擾',
    comments: {
      header: '[ 開啟信箱自動封鎖交易 (Postal TradeBlock) ]',
    },
  },
  'postal-wire': {
    title: '一鍵填入全身金幣寄出 (Wire)',
    description:
      '在寄信介面新增快捷填金按鈕，一鍵把目前角色的金幣（扣除郵資）填入匯款欄；主旨為空時自動寫入匯款金額。',
    details: '分身清金或跨服轉移金幣時代替手動輸入繁瑣數字；收件人一眼就能從主旨看出匯了多少錢。',
    tag: '轉金神器',
    options: {
      fillSubject: {
        label: '主旨自動寫入金額',
        description: '郵件主旨為空時，自動把匯款金額（如 [100金 0銀 0銅]）寫入主旨',
      },
    },
    comments: {
      header: '[ 一鍵填入所有金幣寄信 (Postal Wire) ]',
    },
    strings: {
      btnAll: '全部',
    },
  },
};
