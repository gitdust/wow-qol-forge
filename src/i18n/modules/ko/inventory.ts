import { ModuleTranslation } from '../../types';

export const inventoryKo: Record<string, ModuleTranslation> = {
  'buy-em-all': {
    title: '상인 대량 구매 한도 해제 (BuyEmAll)',
    description:
      '상인 물품을 Shift+우클릭하면 소지 골드와 가방 빈 칸 기준 최대 구매 가능 수량을 표시하고 자동으로 분할 구매합니다.',
    details: '골드, 재료 가방을 포함한 빈 칸, 상인 재고를 모두 고려하며 특수 화폐나 묶음 판매 상품은 기본 동작을 유지합니다.',
    tag: '전문기술',
    comments: {
      header: '[ 상인 대량 구매 한도 해제 (BuyEmAll) ]',
      freeBagSpaceNote: '수용 가능 수량: 빈 칸 * 최대 중첩 + 기존 부분 중첩의 여유 공간 (BuyEmAll GetFreeBagSpace)',
      goldOnlyNote: '단품 골드 구매 품목만 처리; 특수 화폐 또는 묶음 품목은 기본 동작 유지',
    },
    strings: {
      popupText: '%s 구매\n최대 구매 가능: %d개 (골드, 가방 공간, 재고 반영)',
      insufficientMsg: '골드 또는 가방 공간이 부족해 구매할 수 없습니다',
    },
  },
  'already-known': {
    title: '이미 배운 도안 및 수집품 녹색 강조 (AlreadyKnown)',
    description: '상인, 경매장, 길드 은행에서 이미 배운 도안/조제법과 수집한 탈것, 애완동물, 장난감 아이콘을 녹색으로 표시합니다.',
    details: '중복 구매 실수를 한눈에 방지할 수 있습니다.',
    tag: '수집 실수 방지',
    comments: {
      header: '[ 이미 배운 도안 및 수집품 녹색 강조 (AlreadyKnown) ]',
      cagedPetNote: '우리에 담긴 전투 애완동물',
      knownTooltipNote: '도안/조제법: 툴팁에서 ITEM_SPELL_KNOWN 확인',
      merchantNote: '상인',
      ahNote: '경매장 검색 목록',
      guildBankNote: '길드 은행',
      guildBankConstNote: '길드 은행 UI 내부 상수 (탭당 98칸, 열당 14칸)',
    },
  },
  'durability-status': {
    title: '캐릭터 창 장비 내구도 요약',
    description: '캐릭터 창 오른쪽 아래에 전체 장비 내구도(%)를 표시하고 마우스를 올리면 부위별 내구도를 보여줍니다. 사망 시 채팅창에도 출력합니다.',
    tag: '기본 편의',
    comments: {
      header: '[ 캐릭터 창 장비 내구도 요약 (Leatrix Plus) ]',
      getDurabilityNote: '전체 내구도 백분율과 부위별 내역 반환; 내구도 장비가 없으면 nil',
      buttonNote: 'PaperDollFrame 오른쪽 아래 내구도 표시 버튼 (마우스 오버 시 상세 표시)',
      deathNoticeNote: '사망 시 채팅창에 내구도 알림 (2초 내 1회 제한)',
    },
    strings: {
      labelPrefix: '내구도 ',
      tooltipTitle: '장비 내구도',
      tooltipTotal: '전체',
      deathMsg: '|cffff9900[QoL]|r 현재 착용 장비 내구도: ',
    },
  },
  'hide-cleanup-buttons': {
    title: '가방 및 은행 정리 버튼 숨기기',
    description: '실수로 눌러 가방 배치가 뒤섞이지 않도록 가방과 은행 창의 빗자루 정리 버튼을 숨깁니다.',
    tag: '오클릭 방지',
    comments: {
      header: '[ 가방 및 은행 정리 버튼 숨기기 ]',
      hideNote: '표시 즉시 숨김 (Leatrix Plus); 본섭 12.x 은행 정리 버튼은 BankPanel.AutoSortButton',
    },
  },
  'quest-item-destroy-info': {
    title: '퀘스트 아이템 파괴 전 관련 퀘스트 알림',
    description: '퀘스트 관련 아이템(퀘스트 시작 아이템 포함)을 삭제하려 할 때 연결된 퀘스트 이름과 수락 여부를 채팅창에 알립니다.',
    details: '아직 완료하지 않은 퀘스트 아이템을 실수로 파괴하는 일을 막아줍니다.',
    tag: '실수 방지',
    comments: {
      header: '[ 퀘스트 아이템 파괴 전 관련 퀘스트 알림 ]',
    },
    strings: {
      questFallback: '퀘스트 ',
      stateActive: '퀘스트 목록에 있음',
      stateStarter: '미수락 — 이 아이템으로 퀘스트 시작 가능',
      warnRelated: '|cffff5555[QoL] 주의:|r 이 아이템은 퀘스트 "%s"와 관련 있습니다 (%s)',
      warnGeneric: '|cffff5555[QoL] 주의:|r 퀘스트 아이템입니다. 파괴 시 다시 구해야 할 수 있습니다',
    },
  },
  'auto-restock': {
    title: '상인 자동 보급',
    description: '상인을 열면 소모품이나 재료를 지정한 목표 수량(예: "마법 물=40")까지 자동으로 채워 구매합니다.',
    details: '정확한 아이템 이름 또는 아이템 ID를 입력할 수 있으며 골드, 가방 공간, 상인 재고 범위 내에서 단품 골드 상품만 구매합니다.',
    tag: '시간 절약',
    options: {
      items: {
        label: '보급 목록',
        description: '형식 "아이템명 또는 ID=목표 수량", 쉼표/세미콜론으로 구분 (예: 113509=20)',
      },
      showSummary: { label: '채팅창에 보급 내역 출력' },
    },
    comments: {
      header: '[ 상인 자동 보급 (Restocker) ]',
      parseListNote: '"아이템명 또는 ID=수량" 목록 파싱; ASCII "="로 분리하고 구분자 정규화',
      freeBagSpaceNote: '가방 여유 공간 계산: 빈 칸 * 최대 중첩 + 부분 중첩 남은 칸',
      goldOnlyNote: '단품 골드 구매 상품만 구매',
      delayNote: '상인 상품 정보는 MERCHANT_SHOW 직후 한 프레임 뒤에 완전히 로드됨',
    },
    strings: {
      summaryMsg: '|cff00ff99[QoL]|r 자동 보급 완료: %s (지출 %s)',
      listSep: ', ',
    },
  },
};
