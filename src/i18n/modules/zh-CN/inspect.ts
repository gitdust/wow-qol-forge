import { ModuleTranslation } from '../../types';

export const inspectZhCN: Record<string, ModuleTranslation> = {
  'true-stat-values': {
    title: '绿字副属性真实递减分析',
    description:
      '在人物面板悬停暴击、急速、精通、全能（及吸血、闪避、加速）时，显示扣除收益递减后的真实绿字、递减损失与当前所处档位。',
    details:
      '算法与转换系数取自 TrueStatValues（simc 数据），适用于 81~90 级；属性被设为保密值（如部分战斗/大秘境场景）时自动跳过。',
    tag: '大秘必备',
    options: {
      showNextBracket: {
        label: '显示当前档位进度',
        description: '在鼠标提示底部显示本档已用绿字 / 本档上限，以及下一档的递减比例',
      },
    },
    comments: {
      header: '[ 绿字副属性真实递减分析 (TrueStatValues) ]',
      conversionNote: '每 1% 属性所需的绿字，按等级 81~90 排列 (数据来自 TrueStatValues / simc)',
      bracketsNote: '递减档位: size 为该档覆盖的百分比区间，penalty 为该档收益折损',
      tooltipNote: '暴雪属性面板的 Tooltip 第一行形如「暴击: 25.3%」，按标签识别属性',
    },
    strings: {
      trueRating: '真实有效绿字',
      lostRating: '递减损失绿字',
      currentPenalty: '当前档位递减',
      bracketProgress: '本档进度',
      bracketFormat: '%d / %d (下一档 -%d%%)',
    },
  },
};
