import { ModuleTranslation } from '../../types';

export const mailZhCN: Record<string, ModuleTranslation> = {
  'postal-open-all': {
    title: '一键收取所有邮件 (Open All)',
    description: '在邮箱界面增加“收取全部”按钮，全自动按序批量收取所有信件中的金币与附件物品。',
    details: '提纯自经典 Postal 核心队列逻辑，遇到背包已满时智能停止并播报收入汇总，可随时再次点击中断。',
    tag: '第一梯队刚需',
    options: {
      skipAH: {
        label: '跳过拍卖行邮件',
        description: '仅收取普通玩家信件，保留拍卖行邮件',
      },
    },
    comments: {
      header: '[ 一键批量收信 (Postal OpenAll 核心精炼) ]',
      ahPatternNote: '拍卖行邮件按暴雪本地化标题识别 (与 Postal 一致)',
      retryNote: '同一封信内容连续未变化，说明取件失败 (背包满/唯一物品等)，停止而不是无限重试',
    },
    strings: {
      btnOpenAll: '收取全部',
      btnStop: '停止收取',
      earnedPrefix: '，本次共收入 ',
      logPrefix: '|cff00ff99[QoL 邮件]|r ',
      stopFailed: '有邮件无法收取 (背包已满或物品唯一)，已停止',
      stopMorePages: '当前页已收完，还有 %d 封邮件未加载，请稍后重新打开邮箱',
      stopDone: '所有包含物品/金币的邮件已收完',
      stopAborted: '已中止批量收信',
      stopClosed: '邮箱已关闭，停止收取',
      stopBagFull: '背包已满，已停止收取',
    },
  },
  'postal-express': {
    title: '极速邮寄与收件 (Shift/Alt 快捷操作)',
    description:
      '在邮箱收件箱中按住 Shift 点击邮件直接一键取走附件、按住 Ctrl 点击退信；发信时按住 Alt 点击背包物品瞬间塞入附件栏。',
    details: '批量给大号/小号寄药水、宝石、材料时无需反复拖拽或右键慢慢移入。',
    tag: '操作极速',
    comments: {
      header: '[ 极速邮寄与取信快捷键 (Postal Express) ]',
      inboxNote: '收件箱: 带修饰键点击走 InboxFrame_OnModifiedClick，普通点击走 InboxFrame_OnClick',
      sendNote: '发件: Alt+左键点击背包物品放入附件栏 (正式服经由 HandleModifiedItemClick)',
    },
  },
  'postal-trade-block': {
    title: '开启邮箱时自动屏蔽交易',
    description: '当你打开邮箱窗口处理邮件时，自动拒绝所有玩家发起的交易请求，关闭邮箱后恢复。',
    details: '杜绝在主城邮箱整理大量金币物资时被路人故意弹交易窗口骚扰或打断。',
    tag: '清爽防扰',
    comments: {
      header: '[ 打开邮箱自动屏蔽交易 (Postal TradeBlock) ]',
    },
  },
  'postal-wire': {
    title: '一键填入全身金币寄出 (Wire)',
    description:
      '在发信界面添加快捷填金按钮，一键把当前角色的金币（扣除邮费）填入汇款栏；标题为空时自动写入汇款金额。',
    details: '小号清金或换服转移金币时代替手动输入繁琐数字；收件人一眼就能从标题看出汇了多少钱。',
    tag: '倒金神器',
    options: {
      fillSubject: {
        label: '标题自动写入金额',
        description: '邮件标题为空时，自动把汇款金额（如 [100金 0银 0铜]）写入标题',
      },
    },
    comments: {
      header: '[ 一键填入所有金币发信 (Postal Wire) ]',
    },
    strings: {
      btnAll: '全部',
    },
  },
};
