import { QoLModule } from '../../../types';
import postalOpenAllLua from './postal-open-all.lua';
import postalExpressLua from './postal-express.lua';
import postalTradeBlockLua from './postal-trade-block.lua';
import postalWireLua from './postal-wire.lua';

export const mailModules: QoLModule[] = [
  {
    id: 'postal-open-all',
    title: '一键收取所有邮件 (Open All)',
    category: 'mail',
    description: '在邮箱界面增加“收取全部”按钮，全自动按序批量收取所有信件中的金币与附件物品。',
    details: '提纯自经典 Postal 核心队列逻辑，遇到背包已满时智能停止并播报收入汇总，可随时再次点击中断。',
    tag: '第一梯队刚需',
    icon: 'Inbox',
    defaultEnabled: true,
    sourceAddon: 'Postal',
    options: [
      {
        id: 'skipAH',
        label: '跳过拍卖行邮件',
        description: '仅收取普通玩家信件，保留拍卖行邮件',
        type: 'boolean',
        default: false,
        live: true,
      },
    ],
    generateLua: postalOpenAllLua,
  },
  {
    id: 'postal-express',
    title: '极速邮寄与收件 (Shift/Alt 快捷操作)',
    category: 'mail',
    description: '在邮箱收件箱中按住 Shift 点击邮件直接一键取走附件、按住 Ctrl 点击退信；发信时按住 Alt 点击背包物品瞬间塞入附件栏。',
    details: '批量给大号/小号寄药水、宝石、材料时无需反复拖拽或右键慢慢移入。',
    tag: '操作极速',
    icon: 'Send',
    defaultEnabled: true,
    sourceAddon: 'Postal',
    generateLua: postalExpressLua,
  },
  {
    id: 'postal-trade-block',
    title: '开启邮箱时自动屏蔽交易',
    category: 'mail',
    description: '当你打开邮箱窗口处理邮件时，自动拒绝所有玩家发起的交易请求，关闭邮箱后恢复。',
    details: '杜绝在主城邮箱整理大量金币物资时被路人故意弹交易窗口骚扰或打断。',
    tag: '清爽防扰',
    icon: 'Ban',
    defaultEnabled: true,
    sourceAddon: 'Postal',
    generateLua: postalTradeBlockLua,
  },
  {
    id: 'postal-wire',
    title: '一键填入全身金币寄出 (Wire)',
    category: 'mail',
    description: '在发信界面添加快捷填金按钮，一键把当前角色的金币（扣除邮费）填入汇款栏；标题为空时自动写入汇款金额。',
    details: '小号清金或换服转移金币时代替手动输入繁琐数字；收件人一眼就能从标题看出汇了多少钱。',
    tag: '倒金神器',
    icon: 'Coins',
    defaultEnabled: false,
    sourceAddon: 'Postal',
    options: [
      {
        id: 'fillSubject',
        label: '标题自动写入金额',
        description: '邮件标题为空时，自动把汇款金额（如 [100金 0银 0铜]）写入标题',
        type: 'boolean',
        default: true,
        live: true,
      },
    ],
    generateLua: postalWireLua,
  },
];
