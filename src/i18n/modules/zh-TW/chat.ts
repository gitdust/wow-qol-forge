import { ModuleTranslation } from '../../types';

export const chatZhTW: Record<string, ModuleTranslation> = {
  'chat-arrow-keys': {
    title: '方向鍵流暢移動游標 (無需按 Alt)',
    description: '在輸入框打字修改文字時，直接使用鍵盤方向鍵左右移動游標，無需反人類地按住 Alt 鍵。',
    details: '魔獸原生設定下按方向鍵會翻動歷史聊天，本功能讓方向鍵回歸正常游標導覽，大幅改善打字聊天體驗。',
    tag: '打字神器',
    comments: {
      header: '[ 聊天視窗方向鍵流暢移動游標 (無需按 Alt) ]',
      coverNote: '涵蓋全部聊天視窗以及之後開啟的臨時密語視窗 (與 Leatrix Plus 一致)',
    },
  },
  'chat-copy': {
    title: '聊天內容一鍵複製',
    description: '按住 Shift 點擊聊天分頁，在彈出視窗中顯示該聊天視窗的全部紀錄，可直接選取複製。',
    details: '免去在魔獸中無法複製 Discord 連結、團本巨集或 WeakAuras 匯入字串的困擾。',
    tag: '核心必備',
    comments: {
      header: '[ 聊天內容一鍵複製 (BasicChatMods ChatCopy) ]',
      cleanerNote: '借助隱藏 FontString 展開 |4單數:複數; 等特殊轉義',
      rtNote: '團隊標記轉為 {rt1} 形式',
    },
    strings: {
      windowTitle: '聊天紀錄複製',
    },
  },
  'chat-short-channels': {
    title: '頻道前綴精簡',
    description: '將冗長的聊天頻道前綴如 [1. 綜合 - 多恩諾加] 簡化為 [綜]，公會、隊伍、團隊等前綴同樣縮寫，讓聊天視窗更清爽緊湊。',
    details: '前綴模式由暴雪在地化字串衍生，相容繁簡中文與英文用戶端；自訂頻道只保留編號。',
    tag: '介面清爽',
    comments: {
      header: '[ 聊天頻道名稱精簡 (BasicChatMods ChannelNames) ]',
      historyNote: '頻道前綴不在訊息正文裡，只能改寫聊天視窗歷史緩衝中已格式化的整行 (與 BasicChatMods 一致)',
      customRuleNote: '自訂頻道只保留編號',
    },
    strings: {
      general: '[綜]',
      trade: '[交]',
      worldDefense: '[防]',
      localDefense: '[本防]',
      lfg: '[組]',
      recruitment: '[招]',
      instanceLeader: '[副長]',
      instance: '[副]',
      guild: '[會]',
      partyLeader: '[隊長]',
      party: '[隊]',
      officer: '[官]',
      raidLeader: '[團長]',
      raidWarning: '[警]',
      raid: '[團]',
    },
  },
  'chat-timestamps': {
    title: '聊天時間戳記顯示',
    description: '在每條聊天訊息最前面加上時間戳記（如 [12:35]），掌握公會和密語的時效性。',
    details: '與 BasicChatMods 一致：會關閉暴雪內建的時間戳記設定以免重複顯示，系統訊息與戰鬥外的所有聊天行都會加上時間。',
    tag: '基礎便利',
    options: {
      showSeconds: {
        label: '顯示秒數',
        description: '時間戳記格式改為 [12:35:08]',
      },
    },
    comments: {
      header: '[ 聊天視窗時間戳記顯示 (BasicChatMods Timestamp) ]',
      disableNativeNote: '關閉暴雪原生時間戳記，避免一行出現兩個時間',
      prependNote: '時間戳記要加在整行最前 (頻道與名字之前)，因此改寫聊天視窗歷史緩衝中的最新一行',
    },
  },
  'chat-unclamp': {
    title: '解除聊天視窗的螢幕邊緣限制',
    description: '允許將聊天視窗自由拖曳至螢幕的最邊緣甚至貼緊螢幕邊界，不再被暴雪原生邊距限制。',
    tag: '版面自由',
    comments: {
      header: '[ 聊天視窗自由移動無限制 ]',
      hookNote: '暴雪介面會在調整版面時重設邊距，掛鉤後再改回 0 (與 BasicChatMods 一致)',
    },
  },
  'disable-chat-fade': {
    title: '聊天文字不再自動淡出',
    description: '聊天視窗裡的文字不再過一會兒就消失，隨時抬眼都能看到最近的訊息。',
    details: '也可以改成自訂秒數後再淡出。對一般聊天視窗和臨時密語視窗都生效。',
    tag: '基礎便利',
    options: {
      visibleSeconds: {
        label: '淡出前停留秒數',
        description: '0 表示永不淡出；暴雪預設為 120 秒',
      },
    },
    comments: {
      header: '[ 聊天文字不再自動淡出 ]',
      tempWindowNote: '臨時密語視窗依需求建立，編號排在固定視窗之後',
    },
  },
  'hide-chat-buttons': {
    title: '隱藏聊天側邊按鈕與頻道導覽',
    description: '隱藏聊天視窗左側多餘的表情按鈕、頻道切換按鈕，讓聊天區域呈現極致通透。',
    tag: '介面極簡',
    comments: {
      header: '[ 隱藏聊天側邊按鈕 ]',
      hookNote: '用 hook 在顯示後立刻隱藏，不覆寫暴雪框架的方法 (避免污染)',
    },
  },
  'paste-text': {
    title: '長文字與多行巨集貼上 (/paste)',
    description: '輸入 /paste 呼出輕量輸入框，解除暴雪單行 255 字元限制；支援批次貼上執行多行 /way 跑圖座標、長巨集或隊伍通報。',
    tag: '實用神器',
    comments: {
      header: '[ 長文字與多行巨集批次貼上 (Paste) ]',
    },
    strings: {
      title: '文字貼上助手 (/paste)',
      runBtn: '一鍵貼上執行',
      sentMsg: '|cff00ff00[Paste]|r 文字內容已成功執行/送出。',
      clearBtn: '清空',
    },
  },
  'chat-keyword-filter': {
    title: '聊天關鍵字封鎖',
    description: '公共頻道、說話和大喊裡出現你填寫的關鍵字時，整條訊息直接不顯示，專治代練、廣告洗頻。',
    details: '關鍵字不區分大小寫，多個用逗號分隔。受 12.0 起的插件限制，在副本、團本、傳奇鑰石和 PvP 對戰中無法讀取聊天內容，封鎖只在野外和主城生效。',
    tag: '清爽防擾',
    options: {
      keywords: {
        label: '封鎖關鍵字',
        description: '多個關鍵字用逗號分隔',
        default: '代練,代打,帶刷,收G,出G,金團',
      },
      includeWhisper: {
        label: '同時封鎖陌生人密語',
        description: '好友和公會成員的密語不受影響',
      },
    },
    comments: {
      header: '[ 聊天關鍵字封鎖 ]',
      splitNote: '關鍵字依逗號 (全形/半形皆可) 拆分，設定更動後自動重新解析',
      secretNote: '副本內聊天內容是 secret value，無法讀取，直接放行',
    },
  },
  'tell-target': {
    title: '/tt 密語目前目標',
    description: '輸入 /tt 訊息內容 即可直接密語你目前選取的玩家，不用再手打對方名字。',
    details: '只輸入 /tt 不帶內容時，會開啟一個已經填好對方名字的密語輸入框。目標不是玩家時會在聊天視窗提示。',
    tag: '社交便利',
    comments: {
      header: '[ /tt 密語目前目標 ]',
    },
    strings: {
      noTargetMsg: '|cff00ff99[QoL]|r /tt 需要先選取一名玩家',
    },
  },
  'auto-leave-channels': {
    title: '登入時自動退出指定頻道',
    description: '每次登入後自動退出你填寫的聊天頻道（如「尋求組隊」），不用每個角色手動退出。',
    details: '填寫頻道名稱，多個用逗號分隔，名字要和遊戲裡頻道列表顯示的一致。想重新加入時用 /join 頻道名。',
    tag: '清爽防擾',
    options: {
      channels: {
        label: '要退出的頻道',
        description: '多個頻道用逗號分隔',
        default: '尋求組隊',
      },
    },
    comments: {
      header: '[ 登入時自動退出指定頻道 ]',
      delayNote: '遊戲在登入後幾秒內才陸續加入預設頻道，分兩次檢查',
    },
  },
  'chat-editbox-top': {
    title: '聊天輸入框移到聊天視窗上方',
    description: '把聊天輸入框從聊天視窗下方移到上方，聊天視窗貼著螢幕底部擺放時輸入框不會跑出螢幕。',
    tag: '版面自由',
    comments: {
      header: '[ 聊天輸入框移到聊天視窗上方 ]',
      anchorNote: '與 Leatrix Plus 相同：貼在聊天視窗內側頂部，避免和上方的分頁重疊',
    },
  },
};
