import { ModuleTranslation } from '../../types';

export const systemZhTW: Record<string, ModuleTranslation> = {
  'mute-annoying-sounds': {
    title: '靜音遊戲刺耳與坐騎噪音',
    description: '依需求封鎖火車表情、旋翼機坐騎轟鳴、機械坐騎腳步、整點鐘聲等高頻刺耳音效。',
    details: '音效 ID 取自 Leatrix Plus（Midnight 版）的靜音表，採用暴雪官方的 MuteSoundFile 機制，不影響其他正常音效。',
    tag: '保護耳朵',
    options: {
      muteTrains: { label: '火車表情', description: '玩家 /train 火車表情的鳴笛聲' },
      muteGyrocopters: {
        label: '旋翼機與飛機坐騎',
        description: '彌米倫的頭部、機械大亨等旋翼機坐騎的引擎轟鳴與換檔聲',
      },
      muteMechSteps: { label: '機械坐騎腳步', description: '機械陸行鳥、機甲坐騎等金屬腳步聲' },
      muteChimes: { label: '整點鐘聲', description: '主城鐘樓每小時的報時鐘聲' },
      muteFizzle: { label: '施法失敗音效', description: '法術施放被打斷/失敗時的嘶嘶聲' },
      muteSniffing: { label: '狼人嗅聞', description: '狼人角色反覆的嗅聞聲' },
      muteYawns: { label: '獵人貓寵哈欠', description: '獵人貓科寵物的哈欠聲' },
    },
    comments: {
      header: '[ 靜音高頻刺耳音效 (Leatrix Plus Mute) ]',
      applyNote: '勾選的分組靜音，未勾選的恢復 (恢復從未靜音過的音效沒有副作用)',
    },
  },
  'silence-rested-emotes': {
    title: '旅店與休息區靜音大笑/哭泣表情',
    description:
      '當角色身處旅店、主城等休息區域時，自動靜音附近玩家反覆洗頻的 /laugh、/cry、/chicken 等語音表情。',
    tag: '清靜養神',
    comments: {
      header: '[ 休息區靜音表情聲音 ]',
      cvarNote: '進入休息區時關閉表情音效 (Sound_EnableEmoteSounds)，離開後恢復；只恢復由本模組更動的設定',
      restoreNote: '設定會寫入用戶端設定檔，登出/切換場景前先恢復，避免玩家的表情音效被永久關閉',
    },
  },
  'disable-screen-glow': {
    title: '停用全螢幕過飽和泛光與醉酒模糊',
    description: '關閉用戶端過度的全螢幕泛光（FFX Glow）以及角色飲酒後的晃動眩暈模糊效果，畫面清晰不刺眼。',
    tag: '護眼清晰',
    comments: {
      header: '[ 停用全螢幕過飽和泛光與醉酒模糊 ]',
    },
  },
  'combat-nameplates': {
    title: '戰鬥自動顯示敵方名條',
    description: '進入戰鬥時自動開啟敵方血條名條，脫離戰鬥後自動關閉，保持野外畫面清爽乾淨。',
    tag: '介面自適應',
    comments: {
      header: '[ 進戰鬥自動顯示血條 ]',
    },
  },
  'keep-audio-synced': {
    title: '音訊裝置熱切換自動同步',
    description:
      '在 Windows/macOS 系統中插拔耳機或切換藍牙音訊裝置時，遊戲內音訊輸出立即熱同步跟隨，免去重啟遊戲。',
    tag: '系統省心',
    comments: {
      header: '[ 音訊裝置熱切換同步 ]',
      syncNote: '系統音訊裝置變化時切回「系統預設裝置」並重啟遊戲音訊',
      cinematicNote: '播放過場動畫時重啟音訊會打斷動畫，等動畫結束後再處理',
    },
  },
  'flash-taskbar': {
    title: '排本就位背景強提醒',
    description:
      '切窗到背景看影片或網頁時，一旦地城/團隊就緒、戰場進組、戰鬥復活或被召喚，自動閃爍 Windows 工作列並發出響鈴；收到密語時也可閃爍工作列。',
    tag: '切窗必備',
    options: {
      playSound: {
        label: '同時播放提示音',
        description: '在工作列閃爍時，透過主聲道播放高穿透力就位音效',
      },
      flashOnWhisper: {
        label: '收到密語時也閃爍工作列',
        description: '收到角色密語或戰網密語時閃爍工作列（不額外播放聲音，遊戲本身已有密語提示音）',
      },
    },
    comments: {
      header: '[ 排本就位背景強提醒 (FlashTaskBar) ]',
      whisperNote: '密語：只看事件是否觸發，不讀取訊息內容 (副本內訊息內容對插件不可讀)',
      readyCheckNote: '團隊就位確認 / 隨機副本就位 / 戰鬥復活 / 召喚',
      battlefieldNote: '戰場 / 競技場進入確認',
      lfgHookNote: '預組隊伍邀請 (參考 FlashTaskBar 的 LFGListInviteDialog_Show 掛鉤)',
    },
  },
  'talent-ready-check': {
    title: '就位確認時提示目前天賦配置',
    description: '團隊或小隊發起就位確認時，在聊天視窗顯示你目前使用的天賦配置名稱，避免帶著野外天賦進本。',
    details: '可以填寫本次該用的配置名稱（多個用逗號分隔），不一致時會用紅字提示並播放警報音。',
    tag: '進本檢查',
    options: {
      expectedNames: {
        label: '應使用的配置名稱',
        description: '留空則只顯示目前配置；多個名字用逗號分隔，與任意一個相同即視為正確',
      },
      playSound: { label: '配置不一致時播放警報音' },
    },
    comments: {
      header: '[ 就位確認時提示目前天賦配置 ]',
    },
    strings: {
      starterBuild: '新手配置',
      unsavedBuild: '未儲存的配置',
      currentMsg: '|cff00ff99[QoL]|r 目前天賦配置: |cffffd100%s|r',
      mismatchMsg: '|cffff5555[QoL] 天賦配置不符！|r 目前: %s，應為: %s',
    },
  },
  'cvar-tweaks': {
    title: '常用隱藏設定一鍵套用',
    description:
      '登入時把勾選的遊戲設定自動套用到每個角色，例如飛行中施法自動下坐騎、拾取視窗出現在滑鼠處、關閉新手教學提示。',
    details:
      '不少介面設定依角色儲存，新建或切換角色都要重新調整；這裡勾選的項目會在每個角色登入時自動設好。沒勾選的項目維持你在遊戲裡的原設定不動。',
    tag: '全角色同步',
    options: {
      autoDismountFlying: { label: '飛行中施法自動下坐騎' },
      noMapFade: { label: '移動時世界地圖不變透明' },
      lootUnderMouse: { label: '拾取視窗出現在滑鼠位置' },
      noTutorials: { label: '關閉新手教學提示' },
      noErrorSpeech: { label: '關閉角色報錯語音（如「我辦不到」）' },
      alwaysCompare: { label: '滑鼠提示始終比較身上裝備' },
    },
    comments: {
      header: '[ 常用隱藏設定一鍵套用 ]',
      tableNote: '{ 設定項, CVar, 勾選時的值 }；未勾選的項目不更動，維持玩家在遊戲裡的設定',
    },
  },
  'great-vault-reminder': {
    title: '寶庫獎勵提醒',
    description:
      '登入或重新載入介面時，如果寶庫裡有本週可領取的獎勵，在聊天視窗提醒一次，還可在螢幕中央顯示提示。',
    details: '暴雪原生只在傳奇鑰石介面裡提示寶庫獎勵，這裡在登入時就提醒，避免忘領。每次登入只提醒一次。',
    tag: '每週不忘',
    options: {
      showCenter: {
        label: '同時在螢幕中央顯示',
        description: '以團隊警告的樣式在螢幕中央顯示一次提醒',
      },
      playSound: { label: '播放提示音' },
    },
    comments: {
      header: '[ 寶庫獎勵提醒 ]',
      skipShownNote: '已經站在寶庫前開啟了介面就不用提醒',
      delayNote: '寶庫資料在登入後才陸續到達：進入世界後稍等再查，資料更新時再補查一次',
    },
    strings: {
      reminderMsg: '寶庫有可領取的獎勵，記得去領取！',
    },
  },
};
