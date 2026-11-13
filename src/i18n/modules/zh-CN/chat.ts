import { ModuleTranslation } from '../../types';

export const chatZhCN: Record<string, ModuleTranslation> = {
  'chat-arrow-keys': {
    title: '方向键畅快光标移动 (无需按 Alt)',
    description: '在输入框打字修改文本时，直接使用键盘方向键左右移动光标，无需反人类地按住 Alt 键。',
    details: '魔兽原生设置下按方向键会翻动历史聊天，本功能让方向键回归正常光标导航，大幅改善打字聊天体验。',
    tag: '打字神器',
    comments: {
      header: '[ 聊天框方向键畅快光标移动 (无需按 Alt) ]',
      coverNote: '覆盖全部聊天框以及之后打开的临时密语窗口 (与 Leatrix Plus 一致)',
    },
  },
  'chat-copy': {
    title: '聊天内容一键复制',
    description: '按住 Shift 点击聊天标签页，在弹出窗口中显示该聊天框的全部记录，可直接选中复制。',
    details: '免去在魔兽中无法复制公会 YY 号、微信群号、大秘境打法宏、WA 导入字符串的痛苦。',
    tag: '核心必备',
    comments: {
      header: '[ 聊天内容一键复制 (BasicChatMods ChatCopy) ]',
      cleanerNote: '借助隐藏 FontString 展开 |4单数:复数; 等特殊转义',
      rtNote: '团队标记转为 {rt1} 形式',
    },
    strings: {
      windowTitle: '聊天记录复制',
    },
  },
  'chat-short-channels': {
    title: '频道前缀精简',
    description: '将冗长的聊天频道前缀如 [1. 综合 - 多恩诺嘉尔] 简化为 [综]，公会、队伍、团队等前缀同样缩写，让聊天框更清爽紧凑。',
    details: '前缀模式由暴雪本地化字符串派生，兼容简繁中文与英文客户端；自定义频道只保留编号。',
    tag: '界面清爽',
    comments: {
      header: '[ 聊天频道名称精简 (BasicChatMods ChannelNames) ]',
      historyNote: '频道前缀不在消息正文里，只能改写聊天框历史缓冲中已格式化的整行 (与 BasicChatMods 一致)',
      customRuleNote: '自定义频道只保留编号',
    },
    strings: {
      general: '[综]',
      trade: '[交]',
      worldDefense: '[防]',
      localDefense: '[本防]',
      lfg: '[组]',
      recruitment: '[招]',
      instanceLeader: '[副长]',
      instance: '[副]',
      guild: '[会]',
      partyLeader: '[队长]',
      party: '[队]',
      officer: '[官]',
      raidLeader: '[团长]',
      raidWarning: '[警]',
      raid: '[团]',
    },
  },
  'chat-timestamps': {
    title: '聊天时间戳显示',
    description: '在每条聊天信息最前面添加时间戳（如 [12:35]），掌握公会和密语的时效性。',
    details: '与 BasicChatMods 一致：会关闭暴雪自带的时间戳设置以免重复显示，系统消息与战斗外的所有聊天行都会加上时间。',
    tag: '基础便利',
    options: {
      showSeconds: {
        label: '显示秒数',
        description: '时间戳格式改为 [12:35:08]',
      },
    },
    comments: {
      header: '[ 聊天框时间戳显示 (BasicChatMods Timestamp) ]',
      disableNativeNote: '关闭暴雪原生时间戳，避免一行出现两个时间',
      prependNote: '时间戳要加在整行最前 (频道与名字之前)，因此改写聊天框历史缓冲中的最新一行',
    },
  },
  'chat-unclamp': {
    title: '聊天框解除屏幕边缘吸附',
    description: '允许将聊天框自由拖拽至屏幕的最边缘甚至贴紧屏幕边界，不再被暴雪原生边距限制。',
    tag: '布局自由',
    comments: {
      header: '[ 聊天框自由移动无限制 ]',
      hookNote: '暴雪界面会在调整布局时重设边距，hook 后再改回 0 (与 BasicChatMods 一致)',
    },
  },
  'disable-chat-fade': {
    title: '聊天文字不再自动淡出',
    description: '聊天框里的文字不再过一会儿就消失，随时抬眼都能看到最近的消息。',
    details: '也可以改成自定义秒数后再淡出。对普通聊天窗口和临时密语窗口都生效。',
    tag: '基础便利',
    options: {
      visibleSeconds: {
        label: '淡出前停留秒数',
        description: '0 表示永不淡出；暴雪默认为 120 秒',
      },
    },
    comments: {
      header: '[ 聊天文字不再自动淡出 ]',
      tempWindowNote: '临时密语窗口按需创建，编号排在固定窗口之后',
    },
  },
  'hide-chat-buttons': {
    title: '隐藏聊天侧边按钮与频道导航',
    description: '隐藏聊天窗口左侧冗余的表情按钮、频道切换按钮，让聊天区域呈现极致通透。',
    tag: '界面极简',
    comments: {
      header: '[ 隐藏聊天侧边按钮 ]',
      hookNote: '用 hook 在显示后立刻隐藏，不覆盖暴雪框体的方法 (避免污染)',
    },
  },
  'paste-text': {
    title: '长文本与多行宏粘贴 (/paste)',
    description: '输入 /paste 呼出轻量输入框，解除暴雪单行 255 字符限制；支持批量粘贴执行多行 /way 跑图坐标、长宏或队伍通报。',
    tag: '实用神器',
    comments: {
      header: '[ 长文本与多行宏批量粘贴 (Paste) ]',
    },
    strings: {
      title: '文本粘贴助手 (/paste)',
      runBtn: '一键粘贴执行',
      sentMsg: '|cff00ff00[Paste]|r 文本内容已成功执行/发送。',
      clearBtn: '清空',
    },
  },
  'chat-keyword-filter': {
    title: '聊天关键词屏蔽',
    description: '公共频道、说话和大喊里出现你填写的关键词时，整条消息直接不显示，专治金团、代练、收G 广告刷屏。',
    details: '关键词不区分大小写，多个用逗号分隔。受 12.0 起的插件限制，在副本、团本、大秘境和 PvP 对局中无法读取聊天内容，屏蔽只在野外和主城生效。',
    tag: '清爽防扰',
    options: {
      keywords: {
        label: '屏蔽关键词',
        description: '多个关键词用逗号分隔',
        default: '金团,代练,代打,带刷,收G,出G',
      },
      includeWhisper: {
        label: '同时屏蔽陌生人密语',
        description: '好友和公会成员的密语不受影响',
      },
    },
    comments: {
      header: '[ 聊天关键词屏蔽 ]',
      splitNote: '关键词按逗号 (中英文均可) 拆分，设置改动后自动重新解析',
      secretNote: '副本内聊天内容是 secret value，无法读取，直接放行',
    },
  },
  'tell-target': {
    title: '/tt 密语当前目标',
    description: '输入 /tt 消息内容 即可直接密语你当前选中的玩家，不用再手打对方名字。',
    details: '只输入 /tt 不带内容时，会打开一个已经填好对方名字的密语输入框。目标不是玩家时会在聊天框提示。',
    tag: '社交便利',
    comments: {
      header: '[ /tt 密语当前目标 ]',
    },
    strings: {
      noTargetMsg: '|cff00ff99[QoL]|r /tt 需要先选中一名玩家',
    },
  },
  'auto-leave-channels': {
    title: '登录时自动退出指定频道',
    description: '每次登录后自动退出你填写的聊天频道（如「寻求组队」），不用每个角色手动退。',
    details: '填写频道名，多个用逗号分隔，名字要和游戏里频道列表显示的一致。想重新加入时用 /join 频道名。',
    tag: '清爽防扰',
    options: {
      channels: {
        label: '要退出的频道',
        description: '多个频道用逗号分隔',
        default: '寻求组队',
      },
    },
    comments: {
      header: '[ 登录时自动退出指定频道 ]',
      delayNote: '游戏在登录后几秒内才陆续加入默认频道，分两次检查',
    },
  },
  'chat-editbox-top': {
    title: '聊天输入框移到聊天框上方',
    description: '把聊天输入框从聊天框下方移到上方，聊天框贴着屏幕底部摆放时输入框不会跑出屏幕。',
    tag: '布局自由',
    comments: {
      header: '[ 聊天输入框移到聊天框上方 ]',
      anchorNote: '与 Leatrix Plus 相同：贴在聊天框内侧顶部，避免和上方的标签页重叠',
    },
  },
};
