import { ModuleTranslation } from '../../types';

export const socialZhTW: Record<string, ModuleTranslation> = {
  'accept-party-friends': {
    title: '自動接受好友/公會組隊邀請',
    description: '當收到來自戰網好友、遊戲內角色好友或同公會成員的組隊邀請時，自動同意入隊。',
    details: '避免切窗或戰鬥空檔錯過隊友邀請。已在地下城搜尋器佇列中時會自動暫停。',
    tag: '社交省心',
    comments: {
      header: '[ 自動接受好友/公會組隊邀請 ]',
      popupNote: '先標記已接受再關閉彈窗，否則彈窗的 OnHide 會自動拒絕邀請',
    },
  },
  'alt-click-invite': {
    title: 'Alt+點擊玩家名字快速組隊',
    description: '在聊天視窗中直接按住 Alt 鍵並左鍵點擊任何玩家名字，立即向其發送組隊邀請。',
    details: '組 M+、團本野團或喊人進組時無需右鍵選單二次選擇，極為敏捷。',
    tag: '組隊神器',
    comments: {
      header: '[ Alt+點擊聊天視窗名字快速組隊 ]',
    },
  },
  'invite-from-whisper': {
    title: '密語關鍵字自動組隊邀請',
    description: '當有玩家密語特定暗號（如「111」或「組」）時，若目前為隊長或未組隊，自動向其發出組隊邀請。',
    details: '公會活動、世界首領或傳奇鑰石開組時無需手動逐一打字組人。',
    tag: '開組利器',
    options: {
      keyword: { label: '組隊密語暗號' },
    },
    comments: {
      header: '[ 密語關鍵字自動組隊邀請 ]',
    },
  },
  'block-duel-requests': {
    title: '自動拒絕陌生人決鬥邀請',
    description: '自動拒絕路人發起的插旗決鬥請求，好友和公會成員除外。',
    details: '徹底解決在主城掛機或跑圖時被頻繁點決鬥騷擾的問題。',
    tag: '清爽防擾',
    comments: {
      header: '[ 自動拒絕決鬥邀請 ]',
    },
  },
  'block-pet-duels': {
    title: '自動拒絕寵物對戰決鬥',
    description: '自動封鎖野外或主城陌生玩家發起的寵物對戰邀請（好友和公會成員除外），避免誤觸進入對戰介面。',
    tag: '清爽防擾',
    comments: {
      header: '[ 自動拒絕寵物對戰決鬥 ]',
    },
  },
  'block-party-invites': {
    title: '封鎖陌生人組隊邀請',
    description: '自動拒絕非好友且非公會成員的組隊邀請，杜絕廣告與騷擾組隊彈窗。',
    tag: '防擾過濾',
    comments: {
      header: '[ 封鎖非好友組隊邀請 ]',
    },
  },
  'block-social-requests': {
    title: '自動拒絕戰網好友請求與公會邀請',
    description: '自動拒絕收到的戰網好友請求和陌生人公會邀請（好友除外），聊天視窗提示已處理筆數。',
    details: '公會邀請來自遊戲好友或戰網好友時不會被拒絕。兩項可分別開關。',
    tag: '清爽防擾',
    options: {
      friendRequests: { label: '拒絕戰網好友請求' },
      guildInvites: { label: '拒絕公會邀請 (好友除外)' },
    },
    comments: {
      header: '[ 自動拒絕戰網好友請求與公會邀請 ]',
      guildPopupNote: '等暴雪彈出邀請框後再關閉：邀請框的 OnHide 會呼叫 DeclineGuild 完成拒絕',
    },
    strings: {
      declinedFriendsMsg: '|cff00ff99[QoL]|r 已自動拒絕 %d 筆戰網好友請求',
      declinedGuildMsg: '|cff00ff99[QoL]|r 已自動拒絕一筆公會邀請',
    },
  },
  'auto-confirm-role': {
    title: '自動確認職責檢查',
    description: '隊長排隨機副本、團隊搜尋器時彈出的職責確認框，依你上次選好的職責自動點擊「確認」。',
    details: '只在已勾選有效職責時才會確認；按住 Shift 可暫時略過並手動選擇。預設只在隊長是好友或公會成員時自動確認。',
    tag: '排本提速',
    options: {
      friendLeaderOnly: {
        label: '僅限好友/公會成員當隊長時',
        description: '關閉後任何隊長發起的職責檢查都會自動確認',
      },
    },
    comments: {
      header: '[ 自動確認職責檢查 ]',
      delayNote: '等職責彈窗重新整理完按鈕狀態後再確認；未選有效職責時按鈕是停用的',
    },
  },
  'safe-queue': {
    title: '排本確認安全保護與倒數計時',
    description: '隱藏戰場/競技場就位框上的「離開佇列」按鈕，徹底防止手誤取消；確認按鈕置中，並以綠/黃/紅三色顯示剩餘倒數。',
    tag: '競技副本',
    options: {
      announceWaitTime: {
        label: '聊天視窗播報排隊耗時',
        description: '排隊成功彈窗時，在本地聊天視窗顯示本次排隊總共等待了多久',
      },
    },
    comments: {
      header: '[ 排本確認安全保護 (SafeQueue) ]',
      hideLeaveNote: '隱藏離開按鈕，防止誤觸取消排隊',
      waitTimeNote: '播報排隊耗時: 用伺服器記錄的已等待時間，插件晚於排隊開始載入也能正確統計',
    },
    strings: {
      remainingLabel: '剩餘時間 ',
      waitTimeMsg: '|cff33ff99[排本助手]|r 配對成功！本次排隊等待: %02d分%02d秒',
    },
  },
  'copy-player-name': {
    title: '右鍵選單快速複製名字',
    description: '採用魔獸 12.x 現代 Menu API 重構，右鍵點擊聊天視窗名字或隊伍框架時，在選單底部追加「複製名字」選項。',
    tag: '互動提速',
    comments: {
      header: '[ 右鍵選單快速複製名字 (現代 Menu API) ]',
    },
    strings: {
      copyPrefix: '|cff00ff00[複製名字]|r ',
    },
  },
  'lfg-double-click-signup': {
    title: '預組隊伍雙擊報名',
    description: '在「預組隊伍」搜尋列表裡雙擊一個隊伍即可報名，不用先選取再點右下角「報名」。',
    details: '職責已經勾選好時可直接跳過報名對話框；報名留言由遊戲自動保留（同一活動內不會清空）。按住 Shift 雙擊會照常彈出對話框。',
    tag: '排本提速',
    options: {
      skipDialog: {
        label: '職責已選好時跳過報名對話框',
        description: '直接用已勾選的職責送出報名；按住 Shift 可暫時彈出對話框',
      },
    },
    comments: {
      header: '[ 預組隊伍雙擊報名 ]',
      skipNote: '職責已勾選時 (報名按鈕可用) 直接送出，按住 Shift 保留對話框',
    },
  },
  'guild-motd-login': {
    title: '登入時顯示公會公告',
    description: '登入幾秒後在聊天視窗再顯示一次公會今日公告，避免被登入時的洗頻訊息淹沒。',
    tag: '公會便利',
    comments: {
      header: '[ 登入時顯示公會公告 ]',
    },
    strings: {
      motdPrefix: '|cff40ff40[公會公告]|r ',
    },
  },
};
