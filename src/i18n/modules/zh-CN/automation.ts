import { ModuleTranslation } from '../../types';

export const automationZhCN: Record<string, ModuleTranslation> = {
  'auto-repair': {
    title: '自动修理装备',
    description: '与支持修理的商人对话时自动修理全身装备。支持优先使用公会银行修理。',
    details: '按住 Shift 点击商人可临时跳过自动修理。公会修理额度不足时，剩余部分自动改用角色自身金币。',
    tag: '高频必备',
    options: {
      guildRepair: {
        label: '优先使用公会修理',
        description: '若所在公会开启了修理额度，优先扣除公会修理金',
      },
      showSummary: {
        label: '聊天框播报修理花费',
        description: '在系统聊天框输出本次修理消耗的金币',
      },
    },
    comments: {
      header: '[ 自动修理装备 (Leatrix Plus) ]',
      guildFallbackNote: '先用公会资金；超出公会日额度的部分由角色金币补足',
    },
    strings: {
      repairedMsg: '|cff00ff99[QoL]|r 装备已自动修理，花费: ',
    },
  },
  'auto-sell-junk': {
    title: '自动出售灰色垃圾',
    description: '与商人互动时瞬间出售背包内的所有灰色粗糙品质物品，释放背包空间。',
    details: '按住 Shift 点击商人可临时暂停出售。分多轮扫描所有背包（含材料包），商人拒收时自动停止，并在聊天框汇总获得的金币。',
    tag: '高频必备',
    options: {
      showSummary: {
        label: '聊天框汇总金币收入',
        description: '在聊天框输出本次出售垃圾物品获得的总金币金额',
      },
    },
    comments: {
      header: '[ 自动出售灰色垃圾 (Leatrix Plus) ]',
      multiRoundNote: '卖出物品后格子会变化，用 0.2 秒间隔多轮扫描直到没有可卖物品 (与 Leatrix Plus 一致)',
      stopErrorNote: '商人不收购物品或金币已达上限时立即停止，避免持续刷红字',
    },
    strings: {
      soldMsg: '|cff00ff99[QoL]|r 已自动出售灰色物品，获得: ',
    },
  },
  'automate-quests': {
    title: '任务快速交接',
    description: '与 NPC 对话时自动接取任务并提交已完成任务。遇到需要自选多选一奖励时自动暂停。',
    details: '按住 Shift 可临时暂停自动化交接。需要支付金币、货币、制造材料或账号绑定物品的任务不会自动提交，防止意外损失。',
    tag: '升级提速',
    options: {
      autoAccept: {
        label: '自动接受任务',
        description: '自动接取 NPC 提供的日常、周常及常规任务',
      },
      autoComplete: {
        label: '自动完成交接',
        description: '当只有一种固定奖励或无奖励时自动点完成',
      },
    },
    comments: {
      header: '[ 任务快速交接 ]',
      accountBoundNote: '需要的物品是否为战团/账号绑定 (这类物品交出后无法再获得，不自动交)',
      currencyNote: '提交需要货币、制造材料或账号绑定物品时不自动交 (参考 Leatrix Plus)',
      noAcceptNote: '不自动接任务',
      noCompleteNote: '不自动交任务',
    },
  },
  'automate-gossip': {
    title: 'NPC 对话快速选择',
    description: '按住 Alt 键打开 NPC 对话窗口时，若只有唯一的闲谈/剧情选项且没有可接或可交的任务，自动选择该选项。',
    details: '省去日常反复点击固定飞行点、旅店老板、副本传送 NPC 的繁琐操作。',
    tag: '便利提速',
    comments: {
      header: '[ NPC 对话快速选择 (按住 Alt，Leatrix Plus) ]',
      onlyGossipNote: '只有唯一闲谈选项且没有可接/可交任务时才自动选择，避免打断接任务',
      fallbackNote: '部分选项没有 gossipOptionID (如群星庭院的可疑贵族)',
    },
  },
  'faster-movie-skip': {
    title: '快速跳过过场动画',
    description: '播放动画或即时演算动画时，只需按一下空格 (Space)、ESC 或回车键即可直接跳过。',
    details: '无需在暴雪原生跳过弹窗中用鼠标找“确定”按钮二次确认，大幅提升刷本与大号升级节奏。',
    tag: '手感神器',
    comments: {
      header: '[ 快速跳过过场动画 (Space/Esc/Enter 一键确认) ]',
    },
  },
  'easy-item-destroy': {
    title: '便捷摧毁稀有物品 (免输 DELETE)',
    description: '摧毁精良（蓝色）/史诗（紫色）物品时，无需在输入框手动敲入“DELETE”，直接点击确认即可。',
    details: '所有摧毁确认框都会显示物品链接（战斗宠物显示名字与等级），既去除了繁琐的手动打字，又防止误删珍贵物品。',
    tag: '极简体验',
    comments: {
      header: '[ 便捷摧毁稀有物品 (Leatrix Plus EasyItemDestroy) ]',
      lineNote: 'DELETE_GOOD_ITEM 第二行是「请输入 DELETE 确认」提示，隐藏输入框后一并去掉',
      petNote: '战斗宠物显示为「名字 (等级 N)」',
      dialogsNote: '摧毁确认框不一定是 StaticPopup1 (已有其他弹窗时会排到后面)，按名称查找',
      hideEditNote: '需要输入 DELETE 的物品: 隐藏输入框并直接允许确认',
      appendLinkNote: '普通物品: 在确认框里补上物品链接',
    },
  },
  'auto-release-pvp': {
    title: '战场/世界 PvP 自动释放灵魂',
    description: '在战场或冬拥湖、托尔巴拉德、阿什兰等世界 PvP 区域阵亡时，自动释放灵魂，无需手动点击弹窗按钮。',
    details: '有灵魂石、复生等自我复活手段时不会自动释放；释放瞬间按住 Shift 可取消。大秘境与团本中不会生效。',
    tag: 'PVP利器',
    options: {
      excludeAlterac: {
        label: '奥特兰克山谷除外',
        description: '在奥特兰克山谷阵亡时不自动释放（方便等待墓地或队友复活）',
      },
    },
    comments: {
      header: '[ 战场/世界 PvP 自动释放灵魂 (Leatrix Plus AutoReleasePvP) ]',
      worldPvpNote: '世界 PvP 区域地图 ID: 冬拥湖、托尔巴拉德、阿什兰、暴风之盾、战争之矛',
      alteracNote: '奥特兰克山谷 (经典/新版) 可在设置中排除',
    },
    strings: {
      cancelledMsg: '|cff00ff99[QoL]|r 已取消自动释放灵魂',
    },
  },
  'auto-accept-res': {
    title: '非战斗状态自动接受复活',
    description: '收到队友的复活请求时自动接受，无需手动确认弹窗。',
    details: '战斗状态中绝不自动接受，防止意外导致二次死亡。',
    tag: '贴心省心',
    options: {
      combatCheck: {
        label: '脱战安全保护',
        description: '仅在非战斗状态下自动接受复活',
      },
    },
    comments: {
      header: '[ 自动接受复活 ]',
    },
  },
  'auto-accept-summon': {
    title: '自动接受集合石/术士召唤',
    description: '收到术士召唤门或集合石拉人请求时，在聊天框提示并于 10 秒后自动接受，期间可在弹窗中取消。脱离战斗时生效。',
    details: '战斗中不会响应，安全可靠，免去打团或大米切屏时错过集合石拉人的尴尬。',
    tag: '组队省心',
    comments: {
      header: '[ 自动接受召唤 (Leatrix Plus，10 秒后确认) ]',
      confirmNote: '召唤者和目的地都没变 (玩家没有取消或收到新的召唤) 才确认',
    },
    strings: {
      summonNoticeMsg: '|cff00ff99[QoL]|r 来自 %s (%s) 的召唤将在 10 秒后自动接受，可在弹窗中取消。',
    },
  },
  'dialog-key': {
    title: '空格键推进任务与NPC对话',
    description:
      '与 NPC 对话、接交任务时，支持按空格键（Space）快速推进/完成，按数字键 1-9（0 为第 10 项）挑选对话分支或任务奖励。战斗中自动休眠。',
    details: '按住 Shift/Ctrl/Alt 时不拦截按键。弹窗保护开启时，空格不会替你接受组队邀请、召唤、决斗、复活或释放灵魂。',
    tag: '跑图神级',
    options: {
      enableNumKeys: {
        label: '开启数字键选择分支与奖励',
        description: '对话列表中有多个任务或选项时按数字键直接选择；任务有多个奖励时按数字键挑选',
      },
      safePopups: {
        label: '弹窗保护',
        description: '空格不点击组队邀请、召唤、决斗、复活、释放灵魂等弹窗；有灵魂石等自我复活时优先使用',
      },
    },
    comments: {
      header: '[ 空格键推进任务与NPC对话 (DialogKey) ]',
      blacklistNote: '这些弹窗按空格也不点 (取消复活、物品升级、离开时空漫游等，与 DialogKey 内置黑名单一致)',
      selfResNote: '有灵魂石/复生等自我复活时使用第二个按钮，否则不替玩家释放灵魂',
      gossipButtonsNote: '收集当前对话窗口中可点击的选项按钮，按显示顺序排列',
      choiceNote: '多选一奖励: 记录玩家手动点选的奖励',
      combatNote: '战斗中不能修改按键传递，直接放行',
      restorePropagateNote: '进入战斗前恢复按键传递，避免战斗中空格被吞',
    },
  },
  'auto-insert-keystone': {
    title: '大秘境自动放入钥石',
    description: '在副本门口打开大秘境基座时，自动把背包里本副本的钥石放进去，只需再点「开始」。',
    details: '只放入可在当前副本使用的钥石；基座里已有钥石或正在战斗中时不操作。',
    tag: '大秘境',
    comments: {
      header: '[ 大秘境自动放入钥石 ]',
      openDelayNote: '等暴雪的基座界面打开后再放入，界面才会刷新词缀和钥石图标',
      clearCursorNote: '放入失败时把物品放回背包，避免钥石留在鼠标上',
    },
  },
  'train-all-button': {
    title: '训练师「全部学习」按钮',
    description: '在职业和专业训练师窗口的「训练」按钮旁加一个「全部学习」按钮，一键学会所有可学的技能。',
    details: '鼠标悬停按钮可看到可学数量和总花费；没有可学技能时按钮变灰。',
    tag: '省时省力',
    comments: {
      header: '[ 训练师「全部学习」按钮 ]',
      reverseOrderNote: '从后往前学，学会一项后列表变化不影响前面的序号',
    },
    strings: {
      btnTrainAll: '全部学习',
      tooltipFmt: '学习 %d 项技能，共 %s',
    },
  },
  'auto-combat-log': {
    title: '进团本与大秘境自动开启战斗记录',
    description: '进入团本或开始大秘境时自动开启战斗记录（/combatlog），离开后自动关闭，方便上传 Warcraft Logs。',
    details: '只会关闭由本功能开启的记录，你手动开启的不会被关掉。开启和关闭时会在聊天框提示。',
    tag: '团本必备',
    options: {
      raid: { label: '团本中开启' },
      mythicPlus: { label: '大秘境中开启' },
    },
    comments: {
      header: '[ 进团本与大秘境自动开启战斗记录 ]',
      diffNote: '难度 8 = 史诗钥石',
    },
    strings: {
      startedMsg: '|cff00ff99[QoL]|r 已自动开启战斗记录',
      stoppedMsg: '|cff00ff99[QoL]|r 已自动关闭战斗记录',
    },
  },
};
