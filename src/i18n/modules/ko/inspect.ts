import { ModuleTranslation } from '../../types';

export const inspectKo: Record<string, ModuleTranslation> = {
  'true-stat-values': {
    title: '2차 능력치 실제 점감 분석',
    description:
      '캐릭터 창에서 치명타, 가속, 특화, 유연성(및 생기흡수, 회피, 이동 속도)에 마우스를 올리면 점감 적용 후 실제 유효 수치, 손실 수치, 현재 구간을 표시합니다.',
    details:
      'TrueStatValues(simc 데이터)의 공식과 변환 계수를 사용하며 81~90레벨에 적용됩니다. 능력치가 비밀값으로 보호되는 상황에서는 자동으로 건너뜁니다.',
    tag: '쐐기 필수',
    options: {
      showNextBracket: {
        label: '현재 구간 진행률 표시',
        description: '툴팁 하단에 현재 구간 사용량 / 상한 및 다음 구간 페널티 비율을 표시합니다',
      },
    },
    comments: {
      header: '[ 2차 능력치 실제 점감 분석 (TrueStatValues) ]',
      conversionNote: '81~90레벨 기준 능력치 1%당 필요한 평점 (TrueStatValues / simc 출처)',
      bracketsNote: '점감 구간: size는 해당 구간의 백분율 폭, penalty는 수익 감소율',
      tooltipNote: '블리자드 능력치 툴팁 첫 줄 형식("치명타 및 극대화: 25.3%")에서 라벨로 능력치 식별',
    },
    strings: {
      trueRating: '실제 유효 평점',
      lostRating: '점감 손실 평점',
      currentPenalty: '현재 구간 점감',
      bracketProgress: '구간 진행률',
      bracketFormat: '%d / %d (다음 구간 -%d%%)',
    },
  },
};
