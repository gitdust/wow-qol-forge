import { ModuleTranslation } from '../../types';

export const lootingKo: Record<string, ModuleTranslation> = {
  'faster-loot': {
    title: '초고속 전리품 획득 (Faster Loot)',
    description: '블리자드 기본 전리품 창이 열릴 때의 내부 지연을 없애고 드롭 아이템을 즉시 가방에 획득합니다.',
    details:
      'SpeedyAutoLoot의 이벤트 기반 방식을 적용해 LOOT_READY 시 모든 슬롯을 역순으로 즉시 획득합니다. 주사위 굴림 중이거나 가방에 공간이 없는 아이템은 창에 남으며 가방이 가득 차면 알림음을 재생합니다.',
    tag: '핵심 필수',
    options: {
      speedMode: {
        label: '획득 속도 모드',
        choices: {
          instant: '즉시 일괄 획득 (추천)',
          fast: '슬롯별 미세 지연 (0.033초)',
        },
      },
    },
    comments: {
      header: '[ 초고속 전리품 획득 (SpeedyAutoLoot) ]',
      itemFits: '가방 수용 가능 여부: 기존 중첩의 남은 칸을 먼저 확인한 뒤 알맞은 가방 빈 칸 확인 (SpeedyAutoLoot)',
      lockedNote: '잠긴 아이템(주사위 진행/타인 귀속)은 블리자드 전리품 창에 맡김',
      lootReadyNote: '연타 시 LOOT_READY가 중복 발생하며 autoLoot 값이 바뀔 수 있어 첫 값을 유지',
      invFullNote: '가방이 가득 찼을 때 1회 경고음 재생 (미획득 아이템은 창에 유지)',
    },
  },
  'skip-loot-confirm': {
    title: '획득 시 귀속 및 주사위 확인 팝업 건너뛰기',
    description: '획득 시 귀속 아이템 줍기나 입찰/마력 추출 선택 시 "정말로 하시겠습니까?" 확인 창 없이 바로 실행합니다.',
    details: '플레이어가 직접 클릭한 동작의 2차 확인 창만 생략하며, 자동으로 주사위를 굴리지는 않습니다.',
    tag: '루팅 가속',
    options: {
      lootBind: { label: '획득 시 귀속 확인 건너뛰기' },
      lootRoll: { label: '입찰/마력 추출 확인 건너뛰기' },
    },
    comments: {
      header: '[ 획득 시 귀속 및 주사위 확인 팝업 건너뛰기 ]',
      hidePopupNote: '먼저 확인 처리한 뒤 다음 프레임에 블리자드가 띄우는 팝업을 닫음',
    },
  },
  'loot-spec-by-boss': {
    title: '우두머리/인스턴스별 전리품 전문화 자동 전환',
    description:
      '우두머리 전투가 시작되면 전리품 전문화를 자동으로 전환합니다. 일치하는 규칙이 없거나 인스턴스를 나가면 이전 전리품 전문화로 돌아갑니다.',
    details:
      '우두머리 이름, 인스턴스 이름 또는 전투 ID를 사용할 수 있으며 우두머리 규칙이 우선합니다. "현재"를 입력하면 현재 전문화를 따릅니다.',
    tag: '레이드 편의',
    options: {
      rules: {
        label: '전환 규칙',
        description: '"우두머리 이름 또는 전투 ID=전문화 이름"이나 "인스턴스 이름=전문화 이름"을 사용하세요. 이름은 게임에 표시되는 대로 입력하고 규칙은 쉼표나 세미콜론으로 구분하세요.',
      },
      announce: { label: '전환 시 채팅창에 알림' },
    },
    comments: {
      header: '[ 우두머리/인스턴스별 전리품 전문화 자동 전환 (LootSpecSwapper) ]',
      originalNote: '첫 자동 전환 이전의 전리품 전문화; nil이면 아직 변경하지 않음',
      parseRulesNote: '"이름=전문화" 규칙 파싱; "=" 기준으로만 분리하고 구두점 정규화',
      findSpecNote: '전문화 이름 -> 전리품 전문화 ID; 0은 현재 전문화 따르기',
      noRuleNote: '규칙이 없는 보스: 이전 설정으로 복원',
      leaveInstanceNote: '인스턴스 퇴장 시 복원',
    },
    strings: {
      currentKeyword: '현재',
      currentSpecLabel: '현재 전문화',
      switchedMsg: '|cff00ff99[QoL]|r 전리품 전문화가 "%s"(으)로 전환되었습니다%s',
      restoredNoRule: ' (보스: %s 규칙 없음, 복원됨)',
      invalidSpecMsg: '|cffff5555[QoL]|r 규칙 "%s=%s"의 전문화가 현재 직업에 속하지 않아 건너뛰었습니다',
      restoredLeftInstance: ' (인스턴스 퇴장, 복원됨)',
    },
  },
};
