import { ModuleTranslation } from '../../types';

export const lootingZhCN: Record<string, ModuleTranslation> = {
  'faster-loot': {
    title: '极速秒拾取 (Faster Loot)',
    description: '彻底抹平暴雪拾取窗口打开时的内部延迟，瞬间完成物品拾取入包。',
    details:
      '基于 SpeedyAutoLoot 的事件驱动机制，在 LOOT_READY 触发时倒序秒扫所有掉落槽位；队伍掷骰中的物品和背包放不下的物品会留在拾取窗口，背包满时播放提示音。',
    tag: '核心必备',
    options: {
      speedMode: {
        label: '拾取速度模式',
        choices: {
          instant: '极致瞬间秒捡 (推荐)',
          fast: '逐格微延迟 (0.033s，更稳)',
        },
      },
    },
    comments: {
      header: '[ 极速秒拾取 (SpeedyAutoLoot) ]',
      itemFits: '背包能否放下该物品: 先看已有堆叠的剩余空间，再看匹配袋族的空格 (参考 SpeedyAutoLoot)',
      lockedNote: '被锁定 (队伍掷骰中/不属于自己) 的物品交给暴雪拾取窗口处理',
      lootReadyNote: '连续点击时 LOOT_READY 会重复触发且 autoLoot 可能翻转，以第一次为准',
      invFullNote: '背包满时提示一次 (暴雪拾取窗口会保留未拾取的物品)',
    },
  },
  'skip-loot-confirm': {
    title: '跳过拾取绑定与需求确认弹窗',
    description: '拾取「拾取后绑定」物品、掷骰选需求或分解时，不再弹出「确定吗？」确认框，直接执行。',
    details: '只跳过你自己已经点下去的操作的二次确认，不会替你自动掷骰。',
    tag: '拾取提速',
    options: {
      lootBind: { label: '跳过拾取绑定物品确认' },
      lootRoll: { label: '跳过需求/分解掷骰确认' },
    },
    comments: {
      header: '[ 跳过拾取绑定与需求确认弹窗 ]',
      hidePopupNote: '先确认，再在下一帧关掉暴雪随后弹出的确认框',
    },
  },
  'loot-spec-by-boss': {
    title: '按首领或副本自动切换拾取专精',
    description:
      '首领战开始时，按规则自动切换拾取专精。没有匹配的规则或离开副本时，恢复切换前的拾取专精。',
    details:
      '规则可写首领名、副本名或首领战 ID，首领规则优先于副本规则。专精填当前职业的专精名，填「当前」表示跟随当前专精。切换前的设置只在本次登录内记住。',
    tag: '团本省心',
    options: {
      rules: {
        label: '切换规则',
        description: '填写「首领名或首领战 ID=专精名」或「副本名=专精名」。名称须与游戏内显示的一致，多条规则用逗号或分号分隔。',
      },
      announce: { label: '切换时在聊天框提示' },
    },
    comments: {
      header: '[ 按首领或副本自动切换拾取专精 (LootSpecSwapper) ]',
      originalNote: '第一次自动切换前的拾取专精；nil 表示还没切过',
      parseRulesNote: '解析「名称=专精」规则；只用等号拆分 (首领名里可能有冒号)，中文标点逐个替换 (Lua 字符类按字节匹配)',
      findSpecNote: '专精名 -> 拾取专精 ID；0 表示跟随当前专精',
      noRuleNote: '没设规则的首领：恢复成切换前的设置',
      leaveInstanceNote: '离开副本后恢复',
    },
    strings: {
      currentKeyword: '当前',
      currentSpecLabel: '当前专精',
      switchedMsg: '|cff00ff99[QoL]|r 拾取专精已切换为「%s」%s',
      restoredNoRule: '（首领：%s 未设规则，已恢复）',
      invalidSpecMsg: '|cffff5555[QoL]|r 拾取专精规则「%s=%s」中的专精名不属于当前职业，已跳过',
      restoredLeftInstance: '（已离开副本，已恢复）',
    },
  },
};
