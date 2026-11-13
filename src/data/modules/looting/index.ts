import { QoLModule } from '../../../types';
import fasterLootLua from './faster-loot.lua';
import skipLootConfirmLua from './skip-loot-confirm.lua';
import lootSpecByBossLua from './loot-spec-by-boss.lua';

export const lootingModules: QoLModule[] = [
  {
    id: 'faster-loot',
    title: '极速秒拾取 (Faster Loot)',
    category: 'looting',
    description: '彻底抹平暴雪拾取窗口打开时的内部延迟，瞬间完成物品拾取入包。',
    details: '基于 SpeedyAutoLoot 的事件驱动机制，在 LOOT_READY 触发时倒序秒扫所有掉落槽位；队伍掷骰中的物品和背包放不下的物品会留在拾取窗口，背包满时播放提示音。',
    tag: '核心必备',
    icon: 'Zap',
    defaultEnabled: true,
    sourceAddon: 'SpeedyAutoLoot',
    options: [
      {
        id: 'speedMode',
        label: '拾取速度模式',
        type: 'select',
        default: 'instant',
        live: true,
        choices: [
          { label: '极致瞬间秒捡 (推荐)', value: 'instant' },
          { label: '逐格微延迟 (0.033s，更稳)', value: 'fast' },
        ],
      },
    ],
    generateLua: fasterLootLua,
  },
  {
    id: 'skip-loot-confirm',
    title: '跳过拾取绑定与需求确认弹窗',
    category: 'looting',
    description: '拾取「拾取后绑定」物品、掷骰选需求或分解时，不再弹出「确定吗？」确认框，直接执行。',
    details: '只跳过你自己已经点下去的操作的二次确认，不会替你自动掷骰。',
    tag: '拾取提速',
    icon: 'CheckCircle2',
    defaultEnabled: true,
    sourceAddon: 'Leatrix Plus',
    options: [
      {
        id: 'lootBind',
        label: '跳过拾取绑定物品确认',
        type: 'boolean',
        default: true,
        live: true,
      },
      {
        id: 'lootRoll',
        label: '跳过需求/分解掷骰确认',
        type: 'boolean',
        default: true,
        live: true,
      },
    ],
    generateLua: skipLootConfirmLua,
  },
  {
    id: 'loot-spec-by-boss',
    title: '按首领或副本自动切换拾取专精',
    category: 'looting',
    description: '首领战开始时，按你设定的规则自动把拾取专精切换到指定专精（如「奈克萨斯=冰霜」）；遇到没设规则的首领、或离开副本时，恢复成切换前的设置。',
    details: '规则可写首领名、副本名或首领战 ID，首领规则优先于副本规则。专精填当前职业的专精名，填「当前」表示跟随当前专精。切换前的设置只在本次登录内记住。',
    tag: '团本省心',
    icon: 'Repeat',
    defaultEnabled: false,
    sourceAddon: 'LootSpecSwapper',
    options: [
      {
        id: 'rules',
        label: '切换规则',
        description: '格式「首领名或副本名=专精名」，多条用逗号或分号隔开，例如：奈克萨斯=冰霜, 法力熔炉：欧米伽=火焰',
        type: 'string',
        default: '',
        live: true,
      },
      {
        id: 'announce',
        label: '切换时在聊天框提示',
        type: 'boolean',
        default: true,
        live: true,
      },
    ],
    generateLua: lootSpecByBossLua,
  },
];
