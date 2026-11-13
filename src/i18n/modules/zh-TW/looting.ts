import { ModuleTranslation } from '../../types';

export const lootingZhTW: Record<string, ModuleTranslation> = {
  'faster-loot': {
    title: '極速秒拾取 (Faster Loot)',
    description: '徹底抹平暴雪拾取視窗開啟時的內部延遲，瞬間完成物品拾取入包。',
    details:
      '基於 SpeedyAutoLoot 的事件驅動機制，在 LOOT_READY 觸發時倒序秒掃所有掉落欄位；隊伍擲骰中的物品和背包放不下的物品會留在拾取視窗，背包滿時播放提示音。',
    tag: '核心必備',
    options: {
      speedMode: {
        label: '拾取速度模式',
        choices: {
          instant: '極致瞬間秒撿 (推薦)',
          fast: '逐格微延遲 (0.033s，更穩)',
        },
      },
    },
    comments: {
      header: '[ 極速秒拾取 (SpeedyAutoLoot) ]',
      itemFits: '背包能否放下該物品: 先看已有堆疊的剩餘空間，再看符合袋族的空格 (參考 SpeedyAutoLoot)',
      lockedNote: '被鎖定 (隊伍擲骰中/不屬於自己) 的物品交給暴雪拾取視窗處理',
      lootReadyNote: '連續點擊時 LOOT_READY 會重複觸發且 autoLoot 可能反轉，以第一次為準',
      invFullNote: '背包滿時提示一次 (暴雪拾取視窗會保留未拾取的物品)',
    },
  },
  'skip-loot-confirm': {
    title: '跳過拾取綁定與需求確認彈窗',
    description: '拾取「拾取後綁定」物品、擲骰選需求或分解時，不再彈出「確定嗎？」確認框，直接執行。',
    details: '只跳過你自己已經點下去的操作的二次確認，不會替你自動擲骰。',
    tag: '拾取提速',
    options: {
      lootBind: { label: '跳過拾取綁定物品確認' },
      lootRoll: { label: '跳過需求/分解擲骰確認' },
    },
    comments: {
      header: '[ 跳過拾取綁定與需求確認彈窗 ]',
      hidePopupNote: '先確認，再於下一影格關閉暴雪隨後彈出的確認框',
    },
  },
  'loot-spec-by-boss': {
    title: '依首領或副本自動切換拾取專精',
    description:
      '首領戰開始時，依你設定的規則自動把拾取專精切換到指定專精（如「奈克薩斯=冰霜」）；遇到未設規則的首領、或離開副本時，恢復成切換前的設定。',
    details:
      '規則可寫首領名、副本名或首領戰 ID，首領規則優先於副本規則。專精填目前職業的專精名稱，填「目前」表示跟隨目前專精。切換前的設定只在本次登入內記住。',
    tag: '團本省心',
    options: {
      rules: {
        label: '切換規則',
        description: '格式「首領名或副本名=專精名」，多筆用逗號或分號隔開，例如：奈克薩斯=冰霜, 法力熔爐=火焰',
      },
      announce: { label: '切換時在聊天視窗提示' },
    },
    comments: {
      header: '[ 依首領或副本自動切換拾取專精 (LootSpecSwapper) ]',
      originalNote: '第一次自動切換前的拾取專精；nil 表示還沒切過',
      parseRulesNote: '解析「名稱=專精」規則；只用等號拆分 (首領名裡可能有冒號)，全形標點逐一替換 (Lua 字元類依位元組比對)',
      findSpecNote: '專精名 -> 拾取專精 ID；0 表示跟隨目前專精',
      noRuleNote: '未設規則的首領：恢復成切換前的設定',
      leaveInstanceNote: '離開副本後恢復',
    },
    strings: {
      currentKeyword: '目前',
      currentSpecLabel: '目前專精',
      switchedMsg: '|cff00ff99[QoL]|r 拾取專精已切換為「%s」%s',
      restoredNoRule: '（首領：%s 未設規則，已恢復）',
      invalidSpecMsg: '|cffff5555[QoL]|r 拾取專精規則「%s=%s」中的專精名不屬於目前職業，已略過',
      restoredLeftInstance: '（已離開副本，已恢復）',
    },
  },
};
