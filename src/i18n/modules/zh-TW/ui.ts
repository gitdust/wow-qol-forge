import { ModuleTranslation } from '../../types';

export const uiZhTW: Record<string, ModuleTranslation> = {
  'hide-error-messages': {
    title: '過濾螢幕紅字戰鬥錯誤',
    description: '屏蔽螢幕中央高頻洗頻的紅字錯誤（如「距離太遠」、「法力不足」、「目標不在視野中」等）。',
    details: '白名單與 Leatrix Plus 一致，保留「背包已滿」、「任務日誌已滿」、副本投票踢人限制、已被偷竊等關鍵提示；黃色資訊提示不受影響。',
    tag: '強力清爽',
    comments: {
      header: '[ 過濾紅字戰鬥錯誤 (Leatrix Plus) ]',
      whitelistNote: '這些重要提示始終保留 (與 Leatrix Plus 白名單一致)',
      pingNote: '同時隱藏標記 (Ping) 系統的錯誤 (正式版 12.x 由 GameEvent 內部框架直接寫入 UIErrorsFrame)',
    },
  },
  'hide-talking-head': {
    title: '隱藏 NPC 劇情對話框 (Talking Head)',
    description: '在傳奇鑰石、團本和野外世界任務中，徹底屏蔽彈出遮擋視線的巨大 NPC 語音對話框。',
    details: '透過官方安全的 hooksecurefunc 實現，僅攔截彈窗介面的展示，絕不破壞 NPC 音訊播放與劇情觸發。',
    tag: 'M+ 必備',
    comments: {
      header: '[ 隱藏 NPC 語音對話框 ]',
    },
  },
  'max-camera-zoom': {
    title: '最大遠視角解鎖 (Max Camera Zoom)',
    description: '自動將最大鏡頭距離縮放因子設定為暴雪允許的上限 2.6，提供更廣闊的團本與傳奇鑰石視野。',
    details: '解決魔獸用戶端每次重新登入可能重設視角因子的煩惱，登入即生效。',
    tag: '視野開闊',
    comments: {
      header: '[ 解鎖最大鏡頭視角 ]',
    },
  },
  'hide-actionbar-elements': {
    title: '精簡快捷列按鍵文字',
    description: '隱藏快捷列技能圖示上的巨集名稱文字與快捷鍵綁定文字，讓技能列呈現極簡藝術風格。',
    details: '可單獨開啟隱藏快捷鍵提示或巨集名稱，保留技能 CD 與高亮，介面更清爽。',
    tag: '視覺極簡',
    options: {
      hideHotKey: {
        label: '隱藏按鍵綁定快捷鍵文字',
        description: '隱藏類似 1, 2, Q, E, s-F 等按鍵文字',
      },
      hideMacroName: {
        label: '隱藏巨集圖示下方的名稱文字',
        description: '隱藏製作的巨集在按鍵底部顯示的黃色標題',
      },
    },
    comments: {
      header: '[ 精簡快捷列按鍵文字 ]',
    },
  },
  'hide-boss-banner': {
    title: '隱藏首領擊殺橫幅 (Boss Banner)',
    description: '擊敗傳奇鑰石或團本首領時，屏蔽螢幕中央彈出的大面積擊殺橫幅及戰利品回報。',
    details: '避免戰鬥尾聲或連環拉怪時視野被巨大金光橫幅遮擋。',
    tag: 'M+ 必備',
    comments: {
      header: '[ 隱藏首領擊殺橫幅 (Leatrix Plus) ]',
      keepIntroNote: '只屏蔽擊殺與戰利品橫幅，保留進本時的首領開場提示',
    },
  },
  'hide-alerts': {
    title: '隱藏成就與戰利品彈窗 (Alert Toast)',
    description: '隱藏螢幕下方彈出的成就達成、新坐騎收集、配方解鎖等 Toast 彈窗動畫；可選同時隱藏升級、首領目標等事件提示。',
    tag: '視覺清爽',
    options: {
      hideEventToasts: {
        label: '同時隱藏事件提示',
        description: '隱藏螢幕中上方的升級、首領戰目標、寵物對戰獎勵等事件提示（帶關閉按鈕的除外）',
      },
    },
    comments: {
      header: '[ 隱藏成就與戰利品彈窗 (Leatrix Plus NoAlerts) ]',
      preventReregisterNote: '防止暴雪程式碼之後重新註冊事件讓彈窗復現',
      eventToastNote: '事件提示 (Leatrix Plus HideEventToasts)',
    },
  },
  'hide-zone-text': {
    title: '隱藏進出地圖區域提示文字',
    description: '進入新地圖或新區域時，屏蔽螢幕正中央浮現的巨幅區域名稱（如「奧格瑪」、「多恩諾加」）。',
    tag: '視覺極簡',
    comments: {
      header: '[ 隱藏地圖區域提示文字 ]',
      keepEventsNote: '保留事件、只在顯示瞬間隱藏 (與 Leatrix Plus 一致，不影響其他插件讀取區域變化)',
    },
  },
  'show-ready-timer': {
    title: '地城就位確認倒數計時',
    description: '在地城/團隊搜尋器的就位確認視窗下方顯示倒數進度條，清楚掌握還剩多少時間進本。戰場/競技場倒數由「排本確認安全保護」提供。',
    tag: '實用貼心',
    comments: {
      header: '[ 地城/團隊就位確認倒數計時 (Leatrix Plus ShowReadyTimer) ]',
    },
  },
  'blizz-move': {
    title: '原生視窗自由拖曳與縮放',
    description:
      '解鎖約 60 個暴雪原生視窗（角色、任務、天賦法術、專業、商人、拍賣場、成就、收藏、地城手冊、傳奇鑰石、世界地圖等），按住視窗任意空白處即可拖曳，按住 Ctrl 滾輪縮放；本次登入內記住位置和縮放，開啟其他視窗也不會被拉回原位。Shift+右鍵復位位置，Ctrl+右鍵復位縮放。',
    tag: 'T0神器',
    options: {
      enableScale: {
        label: '允許 Ctrl + 滾輪縮放視窗',
        description: '滑鼠懸停在視窗上按住 Ctrl 鍵捲動滾輪即可調整視窗縮放比例',
      },
    },
    comments: {
      header: '[ 原生視窗自由拖曳與縮放 (BlizzMove) ]',
      framesNote: '視窗清單取自 BlizzMove 3.8.5 中適用於正式版的頂層視窗 (剔除已過時系統、教學與背包)',
      addonFramesNote: '依需求載入的介面: 插件名 -> 視窗',
      subFramesNote: '本身會接收滑鼠、蓋住視窗大片區域的子框架，按住它們也能拖動整個視窗 (取自 BlizzMove 的 SubFrames)',
      stateNote: '狀態記在模組內部表裡，不往暴雪框架上寫欄位；位置與縮放只儲存在本次登入內',
      rootsComment: '視窗 -> 視窗名',
      handleComment: '可按住拖動的框架 -> 所屬視窗',
      posComment: '視窗 -> { x, y } (縮放為 1 時相對螢幕左下角的左上角座標)',
      scaleComment: '視窗 -> 縮放',
      pointsComment: '視窗 -> 第一次拖動前的錨點，用於復位',
      pendingApplyComment: '戰鬥中無法擺放的受保護視窗，脫戰後補上',
      pendingHookComment: '戰鬥中載入、暫時無法設定的受保護視窗',
      unpackNote: 'relativeTo 可能為 nil，不能用 unpack',
      panelManagerNote: '由面板管理器擺放的視窗交還給它重新排位',
      userPlacedNote: '維持原有的 UserPlaced 狀態，避免位置被寫進 layout-cache 跨登入殘留',
      repositionNote: '面板管理器或暴雪程式碼重新擺放視窗時，依回玩家拖動後的位置',
      wheelNote1: 'Ctrl + 滾輪縮放：視窗裡的列表本身會吃掉滾輪，所以只在按住 Ctrl 且滑鼠在視窗上時，',
      wheelNote2: '用一個全螢幕透明層臨時接管滾輪；放開 Ctrl 立即歸還，平時不影響列表捲動和鏡頭縮放',
      anchorScaleNote: '以視窗左上角為基準縮放，避免視窗跳位',
    },
  },
  'slash-way-native': {
    title: '原生圖釘導覽指令 (/way)',
    description:
      '利用暴雪現代原生圖釘與超級追蹤系統，在聊天視窗輸入 /way 45.2 60.1 快速設定原生導覽圖釘並開啟螢幕引路光柱；直接輸入 /way 檢視目前座標。',
    tag: '原生增強',
    comments: {
      header: '[ 原生圖釘導覽指令 (/way) ]',
    },
    strings: {
      noMapMsg: '|cffff3333[導覽]|r 無法取得目前地圖資訊。',
      currentMapFallback: '目前地圖',
      coordMsg: '|cff00ff00[座標]|r %s: %.1f, %.1f',
      usageMsg: '|cffffaa00[導覽]|r 用法: /way 45.2 62.8 (直接輸入 /way 查詢目前座標)',
      invalidCoordMsg: '|cffff3333[導覽]|r 座標數值有誤，請輸入 0 到 100 之間的有效數字。',
      pinSetMsg: '|cff00ff00[導覽]|r 已在 %s (%.1f, %.1f) 設定原生導覽圖釘！',
    },
  },
  'cursor-ring': {
    title: '滑鼠游標光圈',
    description: '在滑鼠指標周圍畫一個彩色光圈，團戰技能特效滿螢幕時也能一眼找到滑鼠。',
    details: '可設定大小、顏色，以及是否只在戰鬥中顯示。光圈不會擋住點擊。',
    tag: '戰鬥輔助',
    options: {
      size: { label: '光圈大小（像素）' },
      color: {
        label: '光圈顏色',
        choices: {
          amber: '琥珀',
          white: '白',
          red: '紅',
          green: '綠',
          blue: '藍',
        },
      },
      combatOnly: { label: '只在戰鬥中顯示' },
    },
    comments: {
      header: '[ 滑鼠游標光圈 ]',
    },
  },
  'hide-micro-menu-bags': {
    title: '隱藏微型選單與背包列',
    description: '隱藏螢幕右下角的微型選單（角色、法術書、天賦等按鈕）和背包列，讓介面更乾淨。',
    details: '可以設為滑鼠移到原位置時再顯示。快捷鍵（C、P、B 等）照常可用。快速加入按鈕已由「隱藏聊天側邊按鈕」處理。',
    tag: '介面極簡',
    options: {
      hideMicroMenu: { label: '隱藏微型選單' },
      hideBagsBar: { label: '隱藏背包列' },
      mouseover: {
        label: '滑鼠移到原位置時顯示',
        description: '關閉後徹底隱藏，只能用快捷鍵開啟對應介面',
      },
    },
    comments: {
      header: '[ 隱藏微型選單與背包列 ]',
      mouseoverNote: '透明隱藏：滑鼠移到框架範圍內時恢復顯示 (編輯模式下始終顯示)',
    },
  },
  'hide-portrait-numbers': {
    title: '隱藏頭像上的傷害治療數字',
    description: '隱藏玩家和寵物頭像上跳動的受傷、治療數字，頭像更清爽。',
    tag: '介面極簡',
    comments: {
      header: '[ 隱藏頭像上的傷害治療數字 ]',
    },
  },
  'quest-font-size': {
    title: '任務文字字級',
    description: '放大或縮小任務對話框、任務日誌裡的文字，看任務劇情不再費眼。',
    tag: '閱讀舒適',
    options: {
      fontSize: {
        label: '任務正文字級',
        description: '暴雪預設約為 13；標題會比正文大 2 級',
      },
    },
    comments: {
      header: '[ 任務文字字級 ]',
    },
  },
};
