import { ModuleTranslation } from '../../types';

export const uiZhCN: Record<string, ModuleTranslation> = {
  'hide-error-messages': {
    title: '过滤屏幕红字战斗报错',
    description: '屏蔽屏幕中央高频刷屏的红字错误（如“距离太远”、“法力不足”、“目标不在视野中”等）。',
    details: '白名单与 Leatrix Plus 一致，保留“背包已满”、“任务日志已满”、副本投票踢人限制、已被偷窃等关键提示；黄色信息提示不受影响。',
    tag: '强力清爽',
    comments: {
      header: '[ 过滤红字战斗报错 (Leatrix Plus) ]',
      whitelistNote: '这些重要提示始终保留 (与 Leatrix Plus 白名单一致)',
      pingNote: '同时隐藏标记 (Ping) 系统的报错 (正式服 12.x 由 GameEvent 内部框体直接写入 UIErrorsFrame)',
    },
  },
  'hide-talking-head': {
    title: '隐藏 NPC 剧情对话框 (Talking Head)',
    description: '在大秘境、团本和野外世界任务中，彻底屏蔽弹出遮挡视线的巨大 NPC 语音对话框。',
    details: '通过官方安全的 hooksecurefunc 实现，仅拦截弹窗界面的展示，绝不破坏 NPC 音频播放与剧情触发。',
    tag: '大秘境必备',
    comments: {
      header: '[ 隐藏 NPC 语音对话框 ]',
    },
  },
  'max-camera-zoom': {
    title: '最大远视角解锁 (Max Camera Zoom)',
    description: '自动将最大镜头距离缩放因子设定为暴雪允许的上限 2.6，提供更广阔的团本与大秘境视野。',
    details: '解决魔兽客户端每次重新登录可能重置视角因子的烦恼，登录即生效。',
    tag: '视野开阔',
    comments: {
      header: '[ 解锁最大镜头视角 ]',
    },
  },
  'hide-actionbar-elements': {
    title: '精简动作条按键文字',
    description: '隐藏动作条技能图标上的宏名称文字与快捷键绑定文字，让技能栏呈现极简艺术风格。',
    details: '可单独开启隐藏快捷键提示或宏名称，保留技能 CD 与高亮，界面更清爽。',
    tag: '视觉极简',
    options: {
      hideHotKey: {
        label: '隐藏按键绑定快捷键文字',
        description: '隐藏类似 1, 2, Q, E, s-F 等按键文字',
      },
      hideMacroName: {
        label: '隐藏宏图标下方的名称文字',
        description: '隐藏制作的宏在按键底部显示的黄色标题',
      },
    },
    comments: {
      header: '[ 精简动作条按键文字 ]',
    },
  },
  'hide-boss-banner': {
    title: '隐藏首领击杀横幅 (Boss Banner)',
    description: '击败大秘境或团本首领时，屏蔽屏幕中央弹出的大面积击杀横幅及掉落汇报。',
    details: '避免战斗尾声或连环拉怪时视野被巨大金光横幅遮挡。',
    tag: '大秘境必备',
    comments: {
      header: '[ 隐藏首领击杀横幅 (Leatrix Plus) ]',
      keepIntroNote: '只屏蔽击杀与掉落横幅，保留进本时的首领开场提示',
    },
  },
  'hide-alerts': {
    title: '隐藏成就与战利品弹窗 (Alert Toast)',
    description: '隐藏屏幕下方弹出的成就达成、新坐骑收集、配方解锁等 Toast 弹窗动画；可选同时隐藏升级、首领目标等事件提示。',
    tag: '视觉清爽',
    options: {
      hideEventToasts: {
        label: '同时隐藏事件提示',
        description: '隐藏屏幕中上方的升级、首领战目标、宠物对战奖励等事件提示（带关闭按钮的除外）',
      },
    },
    comments: {
      header: '[ 隐藏成就与战利品弹窗 (Leatrix Plus NoAlerts) ]',
      preventReregisterNote: '防止暴雪代码之后重新注册事件让弹窗复现',
      eventToastNote: '事件提示 (Leatrix Plus HideEventToasts)',
    },
  },
  'hide-zone-text': {
    title: '隐藏进出地图区域提示文字',
    description: '进入新地图或新区域时，屏蔽屏幕正中央浮现的巨幅区域名称（如“奥格瑞玛”、“多恩诺嘉尔”）。',
    tag: '视觉极简',
    comments: {
      header: '[ 隐藏地图区域提示文字 ]',
      keepEventsNote: '保留事件、只在显示瞬间隐藏 (与 Leatrix Plus 一致，不影响其他插件读取区域变化)',
    },
  },
  'show-ready-timer': {
    title: '地下城就位确认倒计时',
    description: '在地下城/团队查找器的就位确认窗口下方显示倒计时进度条，清楚掌握还剩多少时间进本。战场/竞技场倒计时由「排本确认安全保护」提供。',
    tag: '实用贴心',
    comments: {
      header: '[ 地下城/团队就位确认倒计时 (Leatrix Plus ShowReadyTimer) ]',
    },
  },
  'blizz-move': {
    title: '原生窗口自由拖拽与缩放',
    description:
      '解锁约 60 个暴雪原生窗口（角色、任务、天赋法术、专业、商人、拍卖行、成就、收藏、地下城手册、大秘境、世界地图等），按住窗口任意空白处即可拖拽，按住 Ctrl 滚轮缩放；本次登录内记住位置和缩放，打开其他窗口也不会被拉回原位。Shift+右键复位位置，Ctrl+右键复位缩放。',
    tag: 'T0神器',
    options: {
      enableScale: {
        label: '允许 Ctrl + 滚轮缩放窗口',
        description: '鼠标悬停在窗口上按住 Ctrl 键滚动滚轮即可调整窗口缩放比例',
      },
    },
    comments: {
      header: '[ 原生窗口自由拖拽与缩放 (BlizzMove) ]',
      framesNote: '窗口清单取自 BlizzMove 3.8.5 中适用于正式服的顶层窗口 (剔除已过时系统、教程与背包)',
      addonFramesNote: '按需加载的界面: 插件名 -> 窗口',
      subFramesNote: '本身会接收鼠标、盖住窗口大片区域的子框体，按住它们也能拖动整个窗口 (取自 BlizzMove 的 SubFrames)',
      stateNote: '状态记在模块内部表里，不往暴雪框体上写字段；位置与缩放只保存在本次登录内',
      rootsComment: '窗口 -> 窗口名',
      handleComment: '可按住拖动的框体 -> 所属窗口',
      posComment: '窗口 -> { x, y } (缩放为 1 时相对屏幕左下角的左上角坐标)',
      scaleComment: '窗口 -> 缩放',
      pointsComment: '窗口 -> 第一次拖动前的锚点，用于复位',
      pendingApplyComment: '战斗中无法摆放的受保护窗口，脱战后补上',
      pendingHookComment: '战斗中加载、暂时无法设置的受保护窗口',
      unpackNote: 'relativeTo 可能为 nil，不能用 unpack',
      panelManagerNote: '由面板管理器摆放的窗口交还给它重新排位',
      userPlacedNote: '保持原有的 UserPlaced 状态，避免位置被写进 layout-cache 跨登录残留',
      repositionNote: '面板管理器或暴雪代码重新摆放窗口时，按回玩家拖动后的位置',
      wheelNote1: 'Ctrl + 滚轮缩放：窗口里的列表本身会吃掉滚轮，所以只在按住 Ctrl 且鼠标在窗口上时，',
      wheelNote2: '用一个全屏透明层临时接管滚轮；松开 Ctrl 立即归还，平时不影响列表滚动和镜头缩放',
      anchorScaleNote: '以窗口左上角为基准缩放，避免窗口跳位',
    },
  },
  'slash-way-native': {
    title: '原生图钉导航指令 (/way)',
    description:
      '利用暴雪现代原生图钉与超级追踪系统，在聊天框输入 /way 45.2 60.1 快速设置原生导航图钉并开启屏幕引路光柱；直接输入 /way 查看当前坐标。',
    tag: '原生增强',
    comments: {
      header: '[ 原生图钉导航指令 (/way) ]',
    },
    strings: {
      noMapMsg: '|cffff3333[导航]|r 无法获取当前地图信息。',
      currentMapFallback: '当前地图',
      coordMsg: '|cff00ff00[坐标]|r %s: %.1f, %.1f',
      usageMsg: '|cffffaa00[导航]|r 用法: /way 45.2 62.8 (直接输入 /way 查询当前坐标)',
      invalidCoordMsg: '|cffff3333[导航]|r 坐标数值有误，请输入 0 到 100 之间的有效数字。',
      pinSetMsg: '|cff00ff00[导航]|r 已在 %s (%.1f, %.1f) 设置原生导航图钉！',
    },
  },
  'cursor-ring': {
    title: '鼠标光标光圈',
    description: '在鼠标指针周围画一个彩色光圈，团战技能特效满屏时也能一眼找到鼠标。',
    details: '可设置大小、颜色，以及是否只在战斗中显示。光圈不会挡住点击。',
    tag: '战斗辅助',
    options: {
      size: { label: '光圈大小（像素）' },
      color: {
        label: '光圈颜色',
        choices: {
          amber: '琥珀',
          white: '白',
          red: '红',
          green: '绿',
          blue: '蓝',
        },
      },
      combatOnly: { label: '只在战斗中显示' },
    },
    comments: {
      header: '[ 鼠标光标光圈 ]',
    },
  },
  'hide-micro-menu-bags': {
    title: '隐藏微型菜单与背包栏',
    description: '隐藏屏幕右下角的微型菜单（角色、法术书、天赋等按钮）和背包栏，让界面更干净。',
    details: '可以设为鼠标移到原位置时再显示。快捷键（C、P、B 等）照常可用。快速加入按钮已由「隐藏聊天侧边按钮」处理。',
    tag: '界面极简',
    options: {
      hideMicroMenu: { label: '隐藏微型菜单' },
      hideBagsBar: { label: '隐藏背包栏' },
      mouseover: {
        label: '鼠标移到原位置时显示',
        description: '关闭后彻底隐藏，只能用快捷键打开对应界面',
      },
    },
    comments: {
      header: '[ 隐藏微型菜单与背包栏 ]',
      mouseoverNote: '透明隐藏：鼠标移到框体范围内时恢复显示 (编辑模式下始终显示)',
    },
  },
  'hide-portrait-numbers': {
    title: '隐藏头像上的伤害治疗数字',
    description: '隐藏玩家和宠物头像上跳动的受伤、治疗数字，头像更清爽。',
    tag: '界面极简',
    comments: {
      header: '[ 隐藏头像上的伤害治疗数字 ]',
    },
  },
  'quest-font-size': {
    title: '任务文字字号',
    description: '放大或缩小任务对话框、任务日志里的文字，看任务剧情不再费眼。',
    tag: '阅读舒适',
    options: {
      fontSize: {
        label: '任务正文字号',
        description: '暴雪默认约为 13；标题会比正文大 2 号',
      },
    },
    comments: {
      header: '[ 任务文字字号 ]',
    },
  },
};
