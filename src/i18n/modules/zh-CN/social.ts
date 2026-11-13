import { ModuleTranslation } from '../../types';

export const socialZhCN: Record<string, ModuleTranslation> = {
  'accept-party-friends': {
    title: '自动接受好友/公会组队邀请',
    description: '当收到来自战网好友、游戏内角色好友或同公会成员的组队邀请时，自动同意入队。',
    details: '避免切屏或战斗间隙错过队友邀请。已在地下城查找器队列中时会自动暂停。',
    tag: '社交省心',
    comments: {
      header: '[ 自动接受好友/公会组队邀请 ]',
      popupNote: '先标记已接受再关闭弹窗，否则弹窗的 OnHide 会自动拒绝邀请',
    },
  },
  'alt-click-invite': {
    title: 'Alt+点击玩家名字快速组队',
    description: '在聊天框中直接按住 Alt 键并左键点击任何玩家名字，立即向其发送组队邀请。',
    details: '组大米、团本野队或喊人进组时无需右键菜单二次选择，极其敏捷。',
    tag: '组队神器',
    comments: {
      header: '[ Alt+点击聊天框名字快速组队 ]',
    },
  },
  'invite-from-whisper': {
    title: '密语关键字自动组队邀请',
    description: '当有玩家密语特定暗号（如“111”或“组”）时，若当前为队长或未组队，自动向其发出组队邀请。',
    details: '公会活动、世界首领或大秘境开组时无需手动挨个打字组人。',
    tag: '开组利器',
    options: {
      keyword: { label: '组队密语暗号' },
    },
    comments: {
      header: '[ 密语关键字自动组队邀请 ]',
    },
  },
  'block-duel-requests': {
    title: '自动拒绝陌生人决斗邀请',
    description: '自动拒绝路人发起的插旗决斗请求，好友和公会成员除外。',
    details: '彻底解决在主城挂机或跑图时被频繁点决斗骚扰的问题。',
    tag: '清爽防扰',
    comments: {
      header: '[ 自动拒绝决斗邀请 ]',
    },
  },
  'block-pet-duels': {
    title: '自动拒绝宠物对战决斗',
    description: '自动屏蔽野外或主城陌生玩家发起的宠物对战邀请（好友和公会成员除外），避免误触进入对战界面。',
    tag: '清爽防扰',
    comments: {
      header: '[ 自动拒绝宠物对战决斗 ]',
    },
  },
  'block-party-invites': {
    title: '屏蔽陌生人组队邀请',
    description: '自动拒绝非好友且非公会成员的组队邀请，杜绝小广告和骚扰组队弹窗。',
    tag: '防扰过滤',
    comments: {
      header: '[ 屏蔽非好友组队邀请 ]',
    },
  },
  'block-social-requests': {
    title: '自动拒绝战网好友请求与公会邀请',
    description: '自动拒绝收到的战网好友请求和陌生人公会邀请（好友除外），聊天框提示已处理条数。',
    details: '公会邀请来自游戏好友或战网好友时不会被拒绝。两项可分别开关。',
    tag: '清爽防扰',
    options: {
      friendRequests: { label: '拒绝战网好友请求' },
      guildInvites: { label: '拒绝公会邀请 (好友除外)' },
    },
    comments: {
      header: '[ 自动拒绝战网好友请求与公会邀请 ]',
      guildPopupNote: '等暴雪弹出邀请框后再关闭：邀请框的 OnHide 会调用 DeclineGuild 完成拒绝',
    },
    strings: {
      declinedFriendsMsg: '|cff00ff99[QoL]|r 已自动拒绝 %d 条战网好友请求',
      declinedGuildMsg: '|cff00ff99[QoL]|r 已自动拒绝一条公会邀请',
    },
  },
  'auto-confirm-role': {
    title: '自动确认职责检查',
    description: '队长排随机本、团队查找器时弹出的职责确认框，按你上次选好的职责自动点击「确认」。',
    details: '只在已勾选有效职责时才会确认；按住 Shift 可临时跳过，手动选择。默认只在队长是好友或公会成员时自动确认。',
    tag: '排本提速',
    options: {
      friendLeaderOnly: {
        label: '仅限好友/公会成员当队长时',
        description: '关闭后任何队长发起的职责检查都会自动确认',
      },
    },
    comments: {
      header: '[ 自动确认职责检查 ]',
      delayNote: '等职责弹窗刷新完按钮状态后再确认；未选有效职责时按钮是禁用的',
    },
  },
  'safe-queue': {
    title: 'PvP 排队确认保护与倒计时',
    description: '隐藏战场/竞技场就位框上的「离开队列」按钮，防止误点取消排队；确认按钮居中，并以绿/黄/红三色显示剩余时间。',
    tag: '竞技副本',
    options: {
      announceWaitTime: {
        label: '聊天框播报排队耗时',
        description: '排队成功弹窗时，在本地聊天框打印本次排队总共等待了多长时间',
      },
    },
    comments: {
      header: '[ PvP 排队确认保护 (SafeQueue) ]',
      hideLeaveNote: '隐藏离开按钮，防止误触取消排队',
      waitTimeNote: '播报排队耗时: 用服务器记录的已等待时间，插件晚于排队开始加载也能正确统计',
    },
    strings: {
      remainingLabel: '剩余时间 ',
      waitTimeMsg: '|cff33ff99[PvP 排队助手]|r 匹配成功！本次排队等待: %02d分%02d秒',
    },
  },
  'copy-player-name': {
    title: '右键菜单快速复制名字',
    description: '采用魔兽 12.x 现代 Menu API 重构，右键点击聊天框名字或队伍框架时，在菜单底部追加“复制名字”选项。',
    tag: '交互提速',
    comments: {
      header: '[ 右键菜单快速复制名字 (现代 Menu API) ]',
    },
    strings: {
      copyPrefix: '|cff00ff00[复制名字]|r ',
    },
  },
  'lfg-double-click-signup': {
    title: '预创建队伍双击报名',
    description: '在「预创建队伍」搜索列表里双击一个队伍即可报名，不用先选中再点右下角「报名」。',
    details: '职责已经勾选好时可直接跳过报名对话框；报名留言由游戏自动保留（同一活动内不会清空）。按住 Shift 双击会照常弹出对话框。',
    tag: '排本提速',
    options: {
      skipDialog: {
        label: '职责已选好时跳过报名对话框',
        description: '直接用已勾选的职责提交报名；按住 Shift 可临时弹出对话框',
      },
    },
    comments: {
      header: '[ 预创建队伍双击报名 ]',
      skipNote: '职责已勾选时 (报名按钮可用) 直接提交，按住 Shift 保留对话框',
    },
  },
  'guild-motd-login': {
    title: '登录时打印公会公告',
    description: '登录几秒后在聊天框再打印一次公会今日公告，避免被登录时的刷屏信息淹没。',
    tag: '公会便利',
    comments: {
      header: '[ 登录时打印公会公告 ]',
    },
    strings: {
      motdPrefix: '|cff40ff40[公会公告]|r ',
    },
  },
};
