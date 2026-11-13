import { ModuleTranslation } from '../../types';

export const automationZhTW: Record<string, ModuleTranslation> = {
  'auto-repair': {
    title: '自動修理裝備',
    description: '與支援修理的商人對話時自動修理全身裝備。支援優先使用公會銀行修理。',
    details: '按住 Shift 點擊商人可暫時略過自動修理。公會修理額度不足時，剩餘部分自動改用角色自身金幣。',
    tag: '高頻必備',
    options: {
      guildRepair: {
        label: '優先使用公會修理',
        description: '若所在公會開啟了修理額度，優先扣除公會修理金',
      },
      showSummary: {
        label: '聊天視窗播報修理花費',
        description: '在系統聊天視窗輸出本次修理消耗的金幣',
      },
    },
    comments: {
      header: '[ 自動修理裝備 (Leatrix Plus) ]',
      guildFallbackNote: '先用公會資金；超出公會日額度的部分由角色金幣補足',
    },
    strings: {
      repairedMsg: '|cff00ff99[QoL]|r 裝備已自動修理，花費: ',
    },
  },
  'auto-sell-junk': {
    title: '自動出售灰色垃圾',
    description: '與商人互動時瞬間出售背包內的所有灰色粗糙品質物品，釋放背包空間。',
    details: '按住 Shift 點擊商人可暫時停售。分多輪掃描所有背包（含材料包），商人拒收時自動停止，並在聊天視窗彙總獲得的金幣。',
    tag: '高頻必備',
    options: {
      showSummary: {
        label: '聊天視窗彙總金幣收入',
        description: '在聊天視窗輸出本次出售垃圾物品獲得的總金幣金額',
      },
    },
    comments: {
      header: '[ 自動出售灰色垃圾 (Leatrix Plus) ]',
      multiRoundNote: '賣出物品後格子會變化，用 0.2 秒間隔多輪掃描直到沒有可賣物品 (與 Leatrix Plus 一致)',
      stopErrorNote: '商人不收購物品或金幣已達上限時立即停止，避免持續刷紅字',
    },
    strings: {
      soldMsg: '|cff00ff99[QoL]|r 已自動出售灰色物品，獲得: ',
    },
  },
  'automate-quests': {
    title: '任務快速接交',
    description: '與 NPC 對話時自動承接任務並回報已完成任務。遇到需要自選多選一獎勵時自動暫停。',
    details: '按住 Shift 可暫時暫停自動化接交。需要支付金幣、貨幣、製造材料或帳號綁定物品的任務不會自動回報，防止意外損失。',
    tag: '升級提速',
    options: {
      autoAccept: {
        label: '自動接受任務',
        description: '自動承接 NPC 提供的每日、每週及一般任務',
      },
      autoComplete: {
        label: '自動完成回報',
        description: '當只有一種固定獎勵或無獎勵時自動點擊完成',
      },
    },
    comments: {
      header: '[ 任務快速接交 ]',
      accountBoundNote: '需要的物品是否為戰團/帳號綁定 (這類物品交出後無法再取得，不自動交)',
      currencyNote: '回報需要貨幣、製造材料或帳號綁定物品時不自動交 (參考 Leatrix Plus)',
      noAcceptNote: '不自動接任務',
      noCompleteNote: '不自動交任務',
    },
  },
  'automate-gossip': {
    title: 'NPC 對話快速選擇',
    description: '按住 Alt 鍵開啟 NPC 對話視窗時，若只有唯一的閒談/劇情選項且沒有可接或可交的任務，自動選擇該選項。',
    details: '省去日常反覆點擊固定鳥點、旅店老闆、副本傳送 NPC 的繁瑣操作。',
    tag: '便利提速',
    comments: {
      header: '[ NPC 對話快速選擇 (按住 Alt，Leatrix Plus) ]',
      onlyGossipNote: '只有唯一閒談選項且沒有可接/可交任務時才自動選擇，避免打斷接任務',
      fallbackNote: '部分選項沒有 gossipOptionID (如眾星之廷的可疑貴族)',
    },
  },
  'faster-movie-skip': {
    title: '快速跳過過場動畫',
    description: '播放動畫或即時演算動畫時，只需按一下空白鍵 (Space)、ESC 或 Enter 鍵即可直接跳過。',
    details: '無需在暴雪原生跳過彈窗中用滑鼠找「確定」按鈕二次確認，大幅提升刷本與分身升級節奏。',
    tag: '手感神器',
    comments: {
      header: '[ 快速跳過過場動畫 (Space/Esc/Enter 一鍵確認) ]',
    },
  },
  'easy-item-destroy': {
    title: '便捷摧毀稀有物品 (免輸 DELETE)',
    description: '摧毀精良（藍色）/史詩（紫色）物品時，無需在輸入框手動輸入「DELETE」，直接點擊確認即可。',
    details: '所有摧毀確認框都會顯示物品連結（戰鬥寵物顯示名字與等級），既去除了繁瑣的手動打字，又防止誤刪珍貴物品。',
    tag: '極簡體驗',
    comments: {
      header: '[ 便捷摧毀稀有物品 (Leatrix Plus EasyItemDestroy) ]',
      lineNote: 'DELETE_GOOD_ITEM 第二行是「請輸入 DELETE 確認」提示，隱藏輸入框後一併去掉',
      petNote: '戰鬥寵物顯示為「名字 (等級 N)」',
      dialogsNote: '摧毀確認框不一定是 StaticPopup1 (已有其他彈窗時會排到後面)，依名稱尋找',
      hideEditNote: '需要輸入 DELETE 的物品: 隱藏輸入框並直接允許確認',
      appendLinkNote: '一般物品: 在確認框裡補上物品連結',
    },
  },
  'auto-release-pvp': {
    title: '戰場/世界 PvP 自動釋放靈魂',
    description: '在戰場或冬握湖、托巴拉德、艾斯蘭等世界 PvP 區域陣亡時，自動釋放靈魂，無需手動點擊彈窗按鈕。',
    details: '有靈魂石、復生等自我復活手段時不會自動釋放；釋放瞬間按住 Shift 可取消。傳奇鑰石與團隊副本中不會生效。',
    tag: 'PVP利器',
    options: {
      excludeAlterac: {
        label: '奧特蘭克山谷除外',
        description: '在奧特蘭克山谷陣亡時不自動釋放（方便等待墓地或隊友復活）',
      },
    },
    comments: {
      header: '[ 戰場/世界 PvP 自動釋放靈魂 (Leatrix Plus AutoReleasePvP) ]',
      worldPvpNote: '世界 PvP 區域地圖 ID: 冬握湖、托巴拉德、艾斯蘭、暴風之盾、戰爭之矛',
      alteracNote: '奧特蘭克山谷 (經典/新版) 可在設定中排除',
    },
    strings: {
      cancelledMsg: '|cff00ff99[QoL]|r 已取消自動釋放靈魂',
    },
  },
  'auto-accept-res': {
    title: '非戰鬥狀態自動接受復活',
    description: '收到隊友的復活請求時自動接受，無需手動確認彈窗。',
    details: '戰鬥狀態中絕不自動接受，防止意外導致二次死亡。',
    tag: '貼心省心',
    options: {
      combatCheck: {
        label: '脫戰安全保護',
        description: '僅在非戰鬥狀態下自動接受復活',
      },
    },
    comments: {
      header: '[ 自動接受復活 ]',
    },
  },
  'auto-accept-summon': {
    title: '自動接受集合石/術士召喚',
    description: '收到術士召喚門或集合石拉人請求時，在聊天視窗提示並於 10 秒後自動接受，期間可在彈窗中取消。脫離戰鬥時生效。',
    details: '戰鬥中不會回應，安全可靠，免去打團或 M+ 切窗時錯過集合石拉人的尷尬。',
    tag: '組隊省心',
    comments: {
      header: '[ 自動接受召喚 (Leatrix Plus，10 秒後確認) ]',
      confirmNote: '召喚者和目的地都沒變 (玩家沒有取消或收到新的召喚) 才確認',
    },
    strings: {
      summonNoticeMsg: '|cff00ff99[QoL]|r 來自 %s (%s) 的召喚將在 10 秒後自動接受，可在彈窗中取消。',
    },
  },
  'dialog-key': {
    title: '空白鍵推進任務與 NPC 對話',
    description:
      '與 NPC 對話、接交任務時，支援按空白鍵（Space）快速推進/完成，按數字鍵 1-9（0 為第 10 項）挑選對話分支或任務獎勵。戰鬥中自動休眠。',
    details: '按住 Shift/Ctrl/Alt 時不攔截按鍵。彈窗保護開啟時，空白鍵不會替你接受組隊邀請、召喚、決鬥、復活或釋放靈魂。',
    tag: '跑圖神級',
    options: {
      enableNumKeys: {
        label: '開啟數字鍵選擇分支與獎勵',
        description: '對話列表中有多個任務或選項時按數字鍵直接選擇；任務有多個獎勵時按數字鍵挑選',
      },
      safePopups: {
        label: '彈窗保護',
        description: '空白鍵不點擊組隊邀請、召喚、決鬥、復活、釋放靈魂等彈窗；有靈魂石等自我復活時優先使用',
      },
    },
    comments: {
      header: '[ 空白鍵推進任務與 NPC 對話 (DialogKey) ]',
      blacklistNote: '這些彈窗按空白鍵也不點 (取消復活、物品升級、離開時間漫遊等，與 DialogKey 內建黑名單一致)',
      selfResNote: '有靈魂石/復生等自我復活時使用第二個按鈕，否則不替玩家釋放靈魂',
      gossipButtonsNote: '收集目前對話視窗中可點擊的選項按鈕，依顯示順序排列',
      choiceNote: '多選一獎勵: 記錄玩家手動點選的獎勵',
      combatNote: '戰鬥中不能修改按鍵傳遞，直接放行',
      restorePropagateNote: '進入戰鬥前恢復按鍵傳遞，避免戰鬥中空白鍵被吃掉',
    },
  },
  'auto-insert-keystone': {
    title: '傳奇鑰石自動放入鑰石',
    description: '在副本門口開啟能量泉源時，自動把背包裡本副本的鑰石放進去，只需再點「開始」。',
    details: '只放入可在目前副本使用的鑰石；基座裡已有鑰石或正在戰鬥中時不操作。',
    tag: '傳奇鑰石',
    comments: {
      header: '[ 傳奇鑰石自動放入鑰石 ]',
      openDelayNote: '等暴雪的基座介面開啟後再放入，介面才會重新整理詞綴和鑰石圖示',
      clearCursorNote: '放入失敗時把物品放回背包，避免鑰石留在滑鼠上',
    },
  },
  'train-all-button': {
    title: '訓練師「全部學習」按鈕',
    description: '在職業和專業訓練師視窗的「訓練」按鈕旁加一個「全部學習」按鈕，一鍵學會所有可學的技能。',
    details: '滑鼠懸停按鈕可看到可學數量和總花費；沒有可學技能時按鈕變灰。',
    tag: '省時省力',
    comments: {
      header: '[ 訓練師「全部學習」按鈕 ]',
      reverseOrderNote: '從後往前學，學會一項後列表變化不影響前面的序號',
    },
    strings: {
      btnTrainAll: '全部學習',
      tooltipFmt: '學習 %d 項技能，共 %s',
    },
  },
  'auto-combat-log': {
    title: '進團本與傳奇鑰石自動開啟戰鬥紀錄',
    description: '進入團隊副本或開始傳奇鑰石地城時自動開啟戰鬥紀錄（/combatlog），離開後自動關閉，方便上傳 Warcraft Logs。',
    details: '只會關閉由本功能開啟的紀錄，你手動開啟的不會被關掉。開啟和關閉時會在聊天視窗提示。',
    tag: '團本必備',
    options: {
      raid: { label: '團本中開啟' },
      mythicPlus: { label: '傳奇鑰石中開啟' },
    },
    comments: {
      header: '[ 進團本與傳奇鑰石自動開啟戰鬥紀錄 ]',
      diffNote: '難度 8 = 傳奇鑰石',
    },
    strings: {
      startedMsg: '|cff00ff99[QoL]|r 已自動開啟戰鬥紀錄',
      stoppedMsg: '|cff00ff99[QoL]|r 已自動關閉戰鬥紀錄',
    },
  },
};
