import { ModuleTranslation } from '../../types';

export const tooltipsKo: Record<string, ModuleTranslation> = {
  'id-tip': {
    title: '툴팁 숫자 ID 표시 (idTip)',
    description: '주문, 오라, 아이템, 장난감, NPC, 퀘스트, 화폐, 탈것, 애완동물, 업적 툴팁 하단에 내부 ID를 표시합니다.',
    details: '최신 본섭 TooltipDataProcessor 구조로 작성되었으며 지도 퀘스트 핀과 퀘스트 목록까지 지원해 매크로 및 WeakAuras 제작에 유용합니다.',
    tag: '고급 유틸',
    options: {
      showSpell: { label: '주문 ID 표시 (오라/소환수 기술 포함)' },
      showItem: { label: '아이템 ID 표시 (장난감 포함)' },
      showNpc: { label: 'NPC/몬스터 ID 표시' },
      showQuest: { label: '퀘스트 ID 표시' },
      showCurrency: { label: '화폐 ID 표시' },
      showCollections: { label: '탈것/애완동물/업적 ID 표시' },
    },
    comments: {
      header: '[ 툴팁 숫자 ID 표시 (idTip) ]',
      dedupNote: '같은 툴팁에 동일 ID 줄이 중복 표시되지 않도록 방지',
      questHookNote: '지도 퀘스트 핀과 퀘스트 목록은 TooltipDataProcessor를 거치지 않음',
    },
  },
  'enhance-tooltips': {
    title: '툴팁 직업 색상, 길드 등급 및 대상 표시',
    description: '유닛 툴팁에서 플레이어 이름을 직업 색상으로 표시하고 길드 등급과 현재 대상을 추가로 표시합니다.',
    tag: '직관적 정보',
    comments: {
      header: '[ 툴팁 직업 색상, 길드 등급 및 대상 표시 (Leatrix Plus) ]',
      secretSkipNote: '12.x 제한 상황(전투 등)에서는 유닛 값이 비밀값일 수 있으므로 안전하게 건너뜀',
      safeFilterNote: '제한 상황 조회 결과도 비밀값일 수 있어 Safe()로 필터링',
      classColorNote: '플레이어 이름에 직업 색상 적용',
      guildRankNote: '길드 줄에 길드 등급 추가',
      targetNote: '현재 대상',
    },
    strings: {
      youLabel: '>> 나 <<',
      targetLabel: '대상:',
    },
  },
  'transmog-status': {
    title: '형상변환 수집 여부 표시',
    description: '방어구나 무기에 마우스를 올리면 해당 외형이 전투부대 형상변환에 수집되었는지 툴팁 하단에 표시합니다.',
    tag: '수집가 필수',
    comments: {
      header: '[ 형상변환 수집 여부 표시 (Can I Mog It 경량판) ]',
      statusRuleNote: '정확한 sourceID 수집됨 -> 수집 완료; 동일 외형 다른 출처 수집됨 -> 외형 수집됨; 아니면 미수집',
    },
    strings: {
      collected: '|cff88ff88수집됨|r',
      appearanceCollected: '|cffbbee88외형 수집됨 (다른 아이템)|r',
      notCollected: '|cffff5588미수집|r',
      label: '형상변환:',
    },
  },
  'tooltip-combat-hide': {
    title: '전투 중 필드 유닛 툴팁 숨기기',
    description: '전투 중 화면 속 몬스터나 플레이어 위에 마우스가 지나갈 때 툴팁이 떠서 시야를 가리지 않게 숨깁니다.',
    details: '주문, 아이템, 개체창 툴팁은 정상 표시됩니다. 필드 유닛 툴팁이 마우스 커서를 따라오게 설정할 수도 있습니다.',
    tag: '쾌적한 전투',
    options: {
      hideInCombat: { label: '전투 중 필드 유닛 툴팁 숨기기' },
      shiftOverride: { label: 'Shift 키를 누르면 계속 표시' },
      anchorCursor: {
        label: '필드 유닛 툴팁 커서 따라다니기',
        description: '오른쪽 아래 고정 대신 마우스 커서 옆에 툴팁을 표시합니다',
      },
    },
    comments: {
      header: '[ 전투 중 필드 유닛 툴팁 숨기기 ]',
      worldMotionNote: '필드 유닛 위 마우스 감지를 위해 WorldFrame 마우스 이동 활성화 (Leatrix Plus와 동일)',
    },
  },
};
