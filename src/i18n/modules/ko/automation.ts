import { ModuleTranslation } from '../../types';

export const automationKo: Record<string, ModuleTranslation> = {
  'auto-repair': {
    title: '장비 자동 수리',
    description: '수리 상인에게 말을 걸면 착용 장비를 자동으로 수리합니다. 길드 금고 수리를 우선 사용할 수 있습니다.',
    details: '상인을 열 때 Shift를 누르면 건너뜁니다. 길드 수리 한도가 부족하면 개인 골드로 나머지를 수리합니다.',
    tag: '고빈도 필수',
    options: {
      guildRepair: {
        label: '길드 수리 우선 사용',
        description: '길드 수리 권한이 있으면 길드 금고를 먼저 사용합니다',
      },
      showSummary: {
        label: '채팅창에 수리 비용 표시',
        description: '수리에 사용된 골드를 채팅창에 출력합니다',
      },
    },
    comments: {
      header: '[ 장비 자동 수리 (Leatrix Plus) ]',
      guildFallbackNote: '길드 자금을 먼저 사용하고 부족분은 개인 골드로 보충',
    },
    strings: {
      repairedMsg: '|cff00ff99[QoL]|r 장비가 자동 수리되었습니다. 비용: ',
    },
  },
  'auto-sell-junk': {
    title: '회색 잡템 자동 판매',
    description: '상인과 거래할 때 가방의 모든 회색(하급) 아이템을 자동으로 판매해 공간을 확보합니다.',
    details: 'Shift를 누르면 일시 중지됩니다. 여러 번 나누어 가방을 스캔하고 판매 총액을 채팅창에 안내합니다.',
    tag: '고빈도 필수',
    options: {
      showSummary: {
        label: '채팅창에 판매 수익 표시',
        description: '잡템 판매로 얻은 총 골드를 출력합니다',
      },
    },
    comments: {
      header: '[ 회색 잡템 자동 판매 (Leatrix Plus) ]',
      multiRoundNote: '판매 후 슬롯이 변하므로 0.2초 간격으로 최대 6회 스캔 (Leatrix Plus)',
      stopErrorNote: '상인이 매입하지 않거나 골드 상한에 도달하면 즉시 중단',
    },
    strings: {
      soldMsg: '|cff00ff99[QoL]|r 회색 아이템을 자동 판매했습니다. 획득: ',
    },
  },
  'automate-quests': {
    title: '퀘스트 빠른 수락 및 완료',
    description: 'NPC와 대화 시 퀘스트를 자동 수락하고 완료 가능한 퀘스트를 자동 보고합니다. 선택 보상이 여러 개면 멈춥니다.',
    details: 'Shift를 누르면 일시 정지됩니다. 골드, 화폐, 제작 재료 또는 계정 귀속 아이템을 요구하는 퀘스트는 자동 완료하지 않습니다.',
    tag: '레벨업 가속',
    options: {
      autoAccept: {
        label: '퀘스트 자동 수락',
        description: '일일, 주간 및 일반 퀘스트를 자동으로 수락합니다',
      },
      autoComplete: {
        label: '퀘스트 자동 완료',
        description: '보상이 0~1개일 때 자동으로 완료합니다',
      },
    },
    comments: {
      header: '[ 퀘스트 빠른 수락 및 완료 ]',
      accountBoundNote: '요구 아이템이 전투부대/계정 귀속인지 확인해 실수로 소모하지 않음',
      currencyNote: '화폐, 제작 재료, 계정 귀속 아이템이 필요한 퀘스트는 자동 완료 제외 (Leatrix Plus)',
      noAcceptNote: '자동 수락 꺼짐',
      noCompleteNote: '자동 완료 꺼짐',
    },
  },
  'automate-gossip': {
    title: 'Alt+대화로 단일 선택지 빠른 진행',
    description: 'Alt 키를 누른 채 NPC와 대화할 때 수락/완료할 퀘스트가 없고 대화 선택지가 1개뿐이면 자동으로 선택합니다.',
    details: '비행 조련사, 여관주인, 던전 이동 NPC에게 매우 편리합니다.',
    tag: '진행 가속',
    comments: {
      header: '[ Alt+대화로 단일 선택지 빠른 진행 (Leatrix Plus) ]',
      onlyGossipNote: '퀘스트가 없고 대화 선택지가 정확히 1개일 때만 자동 선택',
      fallbackNote: 'gossipOptionID가 없는 일부 선택지 대비',
    },
  },
  'faster-movie-skip': {
    title: '시네마틱 및 동영상 빠른 건너뛰기',
    description: '영상 재생 중 Space, Esc 또는 Enter 키를 한 번 누르면 확인 창 클릭 없이 즉시 건너뜁니다.',
    details: '던전 반복 파밍과 부캐 육성 속도를 크게 높여줍니다.',
    tag: '쾌적한 조작',
    comments: {
      header: '[ 시네마틱 및 동영상 빠른 건너뛰기 (Space/Esc/Enter) ]',
    },
  },
  'easy-item-destroy': {
    title: '희귀 아이템 간편 파괴 (DELETE 입력 생략)',
    description: '희귀/영웅 등급 아이템을 버릴 때 "삭제" 또는 "DELETE"를 입력하지 않고 바로 확인 버튼을 누를 수 있습니다.',
    details: '확인 창에 아이템 링크(전투 애완동물은 이름과 레벨)를 함께 표시해 실수를 방지합니다.',
    tag: '미니멀 UX',
    comments: {
      header: '[ 희귀 아이템 간편 파괴 (Leatrix Plus EasyItemDestroy) ]',
      lineNote: 'DELETE_GOOD_ITEM 둘째 줄의 입력 안내 문구를 입력창과 함께 제거',
      petNote: '전투 애완동물은 "이름 (레벨 N)" 형식으로 표시',
      dialogsNote: '다른 팝업이 떠 있을 수 있으므로 이름으로 삭제 팝업 검색',
      hideEditNote: '입력이 필요한 아이템: 입력창을 숨기고 확인 버튼 활성화',
      appendLinkNote: '일반 아이템: 확인 문구에 아이템 링크 추가',
    },
  },
  'auto-release-pvp': {
    title: '전장 및 필드 PvP 자동 영혼 해방',
    description: '전장이나 겨울손아귀, 톨 바라드, 아쉬란 등 필드 PvP 지역에서 사망 시 자동으로 영혼을 해방합니다.',
    details: '영혼석이나 윤회 등 자가 부활 수단이 있을 때는 작동하지 않으며 Shift 키로 취소할 수 있습니다.',
    tag: 'PvP 필수',
    options: {
      excludeAlterac: {
        label: '알터랙 계곡 제외',
        description: '알터랙 계곡에서는 자동 영혼 해방을 하지 않습니다',
      },
    },
    comments: {
      header: '[ 전장 및 필드 PvP 자동 영혼 해방 (Leatrix Plus) ]',
      worldPvpNote: '필드 PvP 지도 ID: 겨울손아귀, 톨 바라드, 아쉬란, 폭풍방패, 전쟁의 창',
      alteracNote: '알터랙 계곡(클래식/난투)은 설정에서 제외 가능',
    },
    strings: {
      cancelledMsg: '|cff00ff99[QoL]|r 자동 영혼 해방이 취소되었습니다',
    },
  },
  'auto-accept-res': {
    title: '비전투 중 부활 자동 수락',
    description: '아군의 부활 요청을 받으면 팝업을 누르지 않고 자동으로 수락합니다.',
    details: '전투 보호 기능이 켜져 있으면 전투 중에는 절대 수락하지 않습니다.',
    tag: '편의 기능',
    options: {
      combatCheck: {
        label: '전투 중 안전 보호',
        description: '본인과 시전자 모두 비전투 상태일 때만 자동 수락합니다',
      },
    },
    comments: {
      header: '[ 비전투 중 부활 자동 수락 ]',
    },
  },
  'auto-accept-summon': {
    title: '소환 자동 수락 (10초 대기)',
    description: '흑마법사 소환이나 만남의 돌 소환을 받으면 채팅창에 알리고 10초 뒤 비전투 상태에서 자동 수락합니다.',
    details: '전투 중에는 작동하지 않으며 도중에 팝업에서 취소할 수 있습니다.',
    tag: '파티 편의',
    comments: {
      header: '[ 소환 자동 수락 (Leatrix Plus, 10초 후 확인) ]',
      confirmNote: '소환자와 목적지가 바뀌지 않았고 비전투일 때만 수락',
    },
    strings: {
      summonNoticeMsg: '|cff00ff99[QoL]|r %s(%s)의 소환이 10초 후 자동 수락됩니다. 팝업에서 취소할 수 있습니다.',
    },
  },
  'dialog-key': {
    title: 'DialogKey (스페이스바 & 1-9 키 대화/퀘스트)',
    description: 'NPC 대화 및 퀘스트 창에서 스페이스바로 진행/완료하고, 숫자 키 1~9(0은 10번째)로 선택지나 보상을 고릅니다.',
    details: '전투 중 및 보조키(Shift/Ctrl/Alt) 입력 시 비활성화되며 안전 보호가 초대/소환/결투/부활 오클릭을 막아줍니다.',
    tag: '퀘스트 필수',
    options: {
      enableNumKeys: {
        label: '숫자 키(1-9)로 선택지 및 보상 고르기',
        description: '대화 목록이나 다중 퀘스트 보상을 숫자 키로 바로 선택합니다',
      },
      safePopups: {
        label: '팝업 안전 보호',
        description: '파티 초대, 소환, 결투, 부활, 영혼 해방 팝업은 스페이스바로 누르지 않습니다 (자가 부활 우선)',
      },
    },
    comments: {
      header: '[ DialogKey (스페이스바 & 1-9 키 대화/퀘스트) ]',
      blacklistNote: '스페이스바로 절대 누르지 않을 팝업 목록 (DialogKey 내장 블랙리스트)',
      selfResNote: '영혼석/윤회 등 자가 부활이 가능하면 두 번째 버튼 사용, 아니면 영혼 해방 안 함',
      gossipButtonsNote: '표시된 클릭 가능 대화/퀘스트 버튼을 위에서 아래 순서로 수집',
      choiceNote: '여러 보상 중 플레이어가 직접 클릭한 보상 추적',
      combatNote: '전투 중에는 키 입력 전파를 변경할 수 없으므로 즉시 통과',
      restorePropagateNote: '전투 시작 전 키 입력 전파를 복원해 스페이스바가 먹히지 않도록 방지',
    },
  },
  'auto-insert-keystone': {
    title: '쐐기돌 마력의 샘 자동 삽입',
    description: '인스턴스 입구의 마력의 샘을 열면 가방에서 현재 던전에 맞는 쐐기돌을 자동으로 넣어줍니다.',
    details: '이미 삽입되어 있거나 전투 중일 때는 동작하지 않습니다.',
    tag: '쐐기돌',
    comments: {
      header: '[ 쐐기돌 마력의 샘 자동 삽입 ]',
      openDelayNote: 'UI가 완전히 열린 뒤 삽입해야 어픽스와 쐐기돌 아이콘이 정상 갱신됨',
      clearCursorNote: '삽입 실패 시 커서에 쐐기돌이 남지 않도록 정리',
    },
  },
  'train-all-button': {
    title: '상급자 "모두 배우기" 버튼',
    description: '직업 및 전문기술 상급자 창의 "배움" 버튼 옆에 "모두 배우기" 버튼을 추가합니다.',
    details: '마우스를 올리면 배울 수 있는 기술 수와 총 비용을 볼 수 있습니다.',
    tag: '시간 절약',
    comments: {
      header: '[ 상급자 "모두 배우기" 버튼 ]',
      reverseOrderNote: '목록 인덱스가 밀리지 않도록 뒤에서부터 순서대로 학습',
    },
    strings: {
      btnTrainAll: '모두 배우기',
      tooltipFmt: '%d개 기술 습득 (비용: %s)',
    },
  },
  'auto-combat-log': {
    title: '공격대 및 쐐기돌 자동 전투 기록',
    description: '공격대 또는 쐐기돌 던전에 들어가면 전투 기록(/combatlog)을 자동으로 켜고 나가면 자동으로 끕니다.',
    details: '이 모듈이 켠 기록만 자동으로 종료하며 수동 기록은 건드리지 않습니다.',
    tag: '레이드 필수',
    options: {
      raid: { label: '공격대에서 켜기' },
      mythicPlus: { label: '쐐기돌에서 켜기' },
    },
    comments: {
      header: '[ 공격대 및 쐐기돌 자동 전투 기록 ]',
      diffNote: '난이도 8 = 신화 쐐기돌',
    },
    strings: {
      startedMsg: '|cff00ff99[QoL]|r 전투 기록이 자동으로 시작되었습니다',
      stoppedMsg: '|cff00ff99[QoL]|r 전투 기록이 자동으로 중지되었습니다',
    },
  },
};
