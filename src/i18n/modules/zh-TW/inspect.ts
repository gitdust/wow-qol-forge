import { ModuleTranslation } from '../../types';

export const inspectZhTW: Record<string, ModuleTranslation> = {
  'true-stat-values': {
    title: '綠字副屬性真實遞減分析',
    description:
      '在角色面板懸停致命一擊、加速、精通、臨機應變（及汲取、閃避、加速）時，顯示扣除收益遞減後的真實綠字、遞減損失與目前所處檔位。',
    details:
      '演算法與轉換係數取自 TrueStatValues（simc 資料），適用於 81~90 級；屬性被設為機密值（如部分戰鬥/傳奇鑰石場景）時自動略過。',
    tag: 'M+ 必備',
    options: {
      showNextBracket: {
        label: '顯示目前檔位進度',
        description: '在滑鼠提示底部顯示本檔已用綠字 / 本檔上限，以及下一檔的遞減比例',
      },
    },
    comments: {
      header: '[ 綠字副屬性真實遞減分析 (TrueStatValues) ]',
      conversionNote: '每 1% 屬性所需的綠字，依等級 81~90 排列 (資料來自 TrueStatValues / simc)',
      bracketsNote: '遞減檔位: size 為該檔涵蓋的百分比區間，penalty 為該檔收益折損',
      tooltipNote: '暴雪屬性面板的 Tooltip 第一行形如「致命一擊: 25.3%」，依標籤識別屬性',
    },
    strings: {
      trueRating: '真實有效綠字',
      lostRating: '遞減損失綠字',
      currentPenalty: '目前檔位遞減',
      bracketProgress: '本檔進度',
      bracketFormat: '%d / %d (下一檔 -%d%%)',
    },
  },
};
