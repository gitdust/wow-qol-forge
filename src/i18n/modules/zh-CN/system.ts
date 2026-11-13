import { ModuleTranslation } from '../../types';

export const systemZhCN: Record<string, ModuleTranslation> = {
  'mute-annoying-sounds': {
    title: '静音游戏刺耳与坐骑噪音',
    description: '按需屏蔽火车表情、旋翼机坐骑轰鸣、机械坐骑脚步、整点钟声等高频刺耳音效。',
    details: '音效 ID 取自 Leatrix Plus（Midnight 版）的静音表，采用暴雪官方的 MuteSoundFile 机制，不影响其他正常音效。',
    tag: '保护耳朵',
    options: {
      muteTrains: { label: '火车表情', description: '玩家 /train 火车表情的鸣笛声' },
      muteGyrocopters: {
        label: '旋翼机与飞机坐骑',
        description: '米米尔隆的头部、机械大亨等旋翼机坐骑的引擎轰鸣与换挡声',
      },
      muteMechSteps: { label: '机械坐骑脚步', description: '机械陆行鸟、机甲坐骑等金属脚步声' },
      muteChimes: { label: '整点钟声', description: '主城钟楼每小时的报时钟声' },
      muteFizzle: { label: '施法失败音效', description: '法术施放被打断/失败时的嘶嘶声' },
      muteSniffing: { label: '狼人嗅闻', description: '狼人角色反复的嗅闻声' },
      muteYawns: { label: '猎人猫宠哈欠', description: '猎人猫科宠物的哈欠声' },
    },
    comments: {
      header: '[ 静音高频刺耳音效 (Leatrix Plus Mute) ]',
      applyNote: '勾选的分组静音，未勾选的恢复 (恢复从未静音过的音效没有副作用)',
    },
  },
  'silence-rested-emotes': {
    title: '旅店与休息区静音大笑/哭泣表情',
    description:
      '当角色身处旅店、主城等休息区域时，自动静音附近玩家反复刷屏的 /laugh、/cry、/chicken 等语音表情。',
    tag: '清静养神',
    comments: {
      header: '[ 休息区静音表情声音 ]',
      cvarNote: '进入休息区时关闭表情音效 (Sound_EnableEmoteSounds)，离开后恢复；只恢复由本模块改动的设置',
      restoreNote: '设置会写入客户端配置，下线/切换场景前先恢复，避免玩家的表情音效被永久关闭',
    },
  },
  'disable-screen-glow': {
    title: '禁用全屏过饱和泛光与醉酒模糊',
    description: '关闭客户端过度的全屏泛光（FFX Glow）以及角色饮酒后的晃动眩晕模糊效果，画面清晰不刺眼。',
    tag: '护眼清晰',
    comments: {
      header: '[ 禁用全屏过饱和泛光与醉酒模糊 ]',
    },
  },
  'combat-nameplates': {
    title: '战斗自动显示敌方姓名板',
    description: '进入战斗时自动打开敌方血条姓名板，脱离战斗后自动关闭，保持野外画面清爽干净。',
    tag: '界面自适应',
    comments: {
      header: '[ 进战斗自动显示血条 ]',
    },
  },
  'keep-audio-synced': {
    title: '音频设备热切换自动同步',
    description:
      '在 Windows/macOS 系统中插拔耳机或切换蓝牙音频设备时，游戏内音频输出立即热同步跟随，免去重启游戏。',
    tag: '系统省心',
    comments: {
      header: '[ 音频设备热切换同步 ]',
      syncNote: '系统音频设备变化时切回「系统默认设备」并重启游戏音频',
      cinematicNote: '播放过场动画时重启音频会打断动画，等动画结束后再处理',
    },
  },
  'flash-taskbar': {
    title: '排本就位后台强提醒',
    description:
      '切屏到后台看视频或网页时，一旦地下城/团队就绪、战场进组、战斗复活或被召唤，自动闪烁 Windows 任务栏并发出响铃；收到密语时也可闪烁任务栏。',
    tag: '切屏必备',
    options: {
      playSound: {
        label: '同时播放提示音',
        description: '在任务栏闪烁时，通过主声道播放高穿透力就位音效',
      },
      flashOnWhisper: {
        label: '收到密语时也闪烁任务栏',
        description: '收到角色密语或战网密语时闪烁任务栏（不额外播放声音，游戏本身已有密语提示音）',
      },
    },
    comments: {
      header: '[ 排本就位后台强提醒 (FlashTaskBar) ]',
      whisperNote: '密语：只看事件是否触发，不读取消息内容 (副本内消息内容对插件不可读)',
      readyCheckNote: '团队就位确认 / 随机副本就位 / 战斗复活 / 召唤',
      battlefieldNote: '战场 / 竞技场进入确认',
      lfgHookNote: '预组队伍邀请 (参考 FlashTaskBar 的 LFGListInviteDialog_Show 钩子)',
    },
  },
  'talent-ready-check': {
    title: '就位确认时提示当前天赋方案',
    description: '团队或小队发起就位确认时，在聊天框打印你当前使用的天赋方案名，避免带着野外天赋进本。',
    details: '可以填写本次该用的方案名（多个用逗号分隔），不一致时会用红字提示并播放警报音。',
    tag: '进本检查',
    options: {
      expectedNames: {
        label: '应使用的方案名',
        description: '留空则只打印当前方案；多个名字用逗号分隔，与任意一个相同即视为正确',
      },
      playSound: { label: '方案不一致时播放警报音' },
    },
    comments: {
      header: '[ 就位确认时提示当前天赋方案 ]',
    },
    strings: {
      starterBuild: '新手配置',
      unsavedBuild: '未保存的方案',
      currentMsg: '|cff00ff99[QoL]|r 当前天赋方案: |cffffd100%s|r',
      mismatchMsg: '|cffff5555[QoL] 天赋方案不对！|r 当前: %s，应为: %s',
    },
  },
  'cvar-tweaks': {
    title: '常用隐藏设置一键应用',
    description:
      '登录时把勾选的游戏设置自动应用到每个角色，例如飞行中施法自动下坐骑、拾取窗口出现在鼠标处、关闭新手教学提示。',
    details:
      '至暗之夜起不少界面设置按角色保存，新建或切换角色都要重新调；这里勾选的项目会在每个角色登录时自动设好。没勾选的项目保持你在游戏里的原设置不动。',
    tag: '全角色同步',
    options: {
      autoDismountFlying: { label: '飞行中施法自动下坐骑' },
      noMapFade: { label: '移动时世界地图不变透明' },
      lootUnderMouse: { label: '拾取窗口出现在鼠标位置' },
      noTutorials: { label: '关闭新手教学提示' },
      noErrorSpeech: { label: '关闭角色报错语音（如「我做不到」）' },
      alwaysCompare: { label: '鼠标提示始终对比身上装备' },
    },
    comments: {
      header: '[ 常用隐藏设置一键应用 ]',
      tableNote: '{ 设置项, CVar, 勾选时的值 }；未勾选的项目不改动，保持玩家在游戏里的设置',
    },
  },
  'great-vault-reminder': {
    title: '宏伟宝库奖励提醒',
    description:
      '登录或重载界面时，如果宏伟宝库里有本周可领取的奖励，在聊天框提醒一次，还可在屏幕中央显示提示。',
    details: '暴雪原生只在大秘境界面里提示宝库奖励，这里在登录时就提醒，避免忘领。每次登录只提醒一次。',
    tag: '每周不忘',
    options: {
      showCenter: {
        label: '同时在屏幕中央显示',
        description: '以团队警告的样式在屏幕中央显示一次提醒',
      },
      playSound: { label: '播放提示音' },
    },
    comments: {
      header: '[ 宏伟宝库奖励提醒 ]',
      skipShownNote: '已经站在宝库前打开了界面就不用提醒',
      delayNote: '宝库数据在登录后才陆续到达：进入世界后稍等再查，数据更新时再补查一次',
    },
    strings: {
      reminderMsg: '宏伟宝库有可领取的奖励，记得去领取！',
    },
  },
};
