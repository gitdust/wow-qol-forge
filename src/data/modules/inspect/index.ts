import { QoLModule } from '../../../types';
import trueStatValuesLua from './true-stat-values.lua';

export const inspectModules: QoLModule[] = [
  {
    id: 'true-stat-values',
    title: '绿字副属性真实递减分析',
    category: 'inspect',
    description: '在人物面板悬停暴击、急速、精通、全能（及吸血、闪避、加速）时，显示扣除收益递减后的真实绿字、递减损失与当前所处档位。',
    details: '算法与转换系数取自 TrueStatValues（simc 数据），适用于 81~90 级；属性被设为保密值（如部分战斗/大秘境场景）时自动跳过。',
    tag: '大秘必备',
    icon: 'Percent',
    defaultEnabled: true,
    sourceAddon: 'TrueStatValues',
    options: [
      {
        id: 'showNextBracket',
        label: '显示当前档位进度',
        description: '在鼠标提示底部显示本档已用绿字 / 本档上限，以及下一档的递减比例',
        type: 'boolean',
        default: true,
        live: true,
      },
    ],
    generateLua: trueStatValuesLua,
  },
];
