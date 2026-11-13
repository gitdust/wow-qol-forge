import { ModuleTranslation } from '../../types';

export const uiKo: Record<string, ModuleTranslation> = {
  'hide-error-messages': {
    title: '화면 붉은 전투 오류 메시지 숨기기',
    description: '화면 중앙에 반복해서 뜨는 붉은 오류 문구("사정거리에서 벗어났습니다", "마나가 부족합니다" 등)를 숨깁니다.',
    details: 'Leatrix Plus 화이트리스트를 따라 "가방이 가득 찼습니다", "퀘스트 목록이 가득 찼습니다" 같은 중요 경고는 유지합니다.',
    tag: '깔끔한 화면',
    comments: {
      header: '[ 화면 붉은 전투 오류 메시지 숨기기 (Leatrix Plus) ]',
      whitelistNote: '중요한 알림은 항상 유지 (Leatrix Plus 화이트리스트)',
      pingNote: '핑(Ping) 시스템 오류도 숨김 (본섭 12.x는 GameEvent가 직접 UIErrorsFrame에 출력)',
    },
  },
  'hide-talking-head': {
    title: 'NPC 말머리 대화창 숨기기 (Talking Head)',
    description: '쐐기돌, 레이드, 전역 퀘스트 진행 중 시야를 가리는 거대한 NPC 말머리 팝업 창을 숨깁니다.',
    details: '음성 재생이나 퀘스트 진행을 망가뜨리지 않고 hooksecurefunc로 안전하게 창 표시만 숨깁니다.',
    tag: '쐐기 필수',
    comments: {
      header: '[ NPC 말머리 대화창 숨기기 ]',
    },
  },
  'max-camera-zoom': {
    title: '최대 카메라 시야 거리 잠금 해제',
    description: '접속 및 UI 재시작 시 cameraDistanceMaxZoomFactor를 블리자드 최대치인 2.6으로 자동 설정합니다.',
    details: '재접속할 때마다 최대 시야 배율이 초기화되는 불편함을 없애줍니다.',
    tag: '넓은 시야',
    comments: {
      header: '[ 최대 카메라 시야 거리 잠금 해제 ]',
    },
  },
  'hide-actionbar-elements': {
    title: '행동 단축바 단축키 및 매크로 이름 숨기기',
    description: '행동 단축바 버튼 위의 단축키 글자와 매크로 이름을 숨겨 깔끔한 미니멀 스타일로 만듭니다.',
    details: '단축키와 매크로 이름을 각각 켜고 끌 수 있으며 재사용 대기시간과 강조 효과는 유지됩니다.',
    tag: '미니멀 UI',
    options: {
      hideHotKey: {
        label: '단축키 글자 숨기기',
        description: '1, 2, Q, E, s-F 같은 키 바인딩 문자를 숨깁니다',
      },
      hideMacroName: {
        label: '매크로 이름 숨기기',
        description: '버튼 하단에 표시되는 노란색 매크로 제목을 숨깁니다',
      },
    },
    comments: {
      header: '[ 행동 단축바 단축키 및 매크로 이름 숨기기 ]',
    },
  },
  'hide-boss-banner': {
    title: '우두머리 처치 배너 숨기기 (Boss Banner)',
    description: '던전 또는 공격대 우두머리 처치 시 화면 중앙에 크게 뜨는 처치 배너와 전리품 알림을 숨깁니다.',
    details: '연속 풀링이나 전투 종료 직후 시야가 가려지는 것을 방지합니다.',
    tag: '쐐기 필수',
    comments: {
      header: '[ 우두머리 처치 배너 숨기기 (Leatrix Plus) ]',
      keepIntroNote: '처치 및 전리품 배너만 숨기고 전투 시작 안내는 유지',
    },
  },
  'hide-alerts': {
    title: '업적 및 전리품 팝업 알림 숨기기',
    description: '화면 하단에 뜨는 업적 달성, 탈것 획득, 도안 습득 알림을 숨기며 레벨업/우두머리 이벤트 토스트도 함께 숨길 수 있습니다.',
    tag: '깔끔한 UI',
    options: {
      hideEventToasts: {
        label: '이벤트 토스트도 함께 숨기기',
        description: '화면 상단 중앙의 레벨업, 우두머리 목표, 애완동물 대전 보상 배너를 숨깁니다 (닫기 버튼 있는 창 제외)',
      },
    },
    comments: {
      header: '[ 업적 및 전리품 팝업 알림 숨기기 (Leatrix Plus NoAlerts) ]',
      preventReregisterNote: '블리자드 코드가 나중에 이벤트를 다시 등록하지 못하도록 방지',
      eventToastNote: '이벤트 토스트 (Leatrix Plus HideEventToasts)',
    },
  },
  'hide-zone-text': {
    title: '지역 이동 화면 중앙 텍스트 숨기기',
    description: '새로운 지역이나 하위 지역으로 이동할 때 화면 중앙에 크게 뜨는 지명 텍스트를 숨깁니다.',
    tag: '미니멀 UI',
    comments: {
      header: '[ 지역 이동 화면 중앙 텍스트 숨기기 ]',
      keepEventsNote: '이벤트는 유지하고 표시 순간에만 숨김 (다른 애드온에 영향 없음)',
    },
  },
  'show-ready-timer': {
    title: '던전 찾기 수락 대기 타이머 바',
    description: '던전 및 공격대 찾기 입장 확인 창 아래에 남은 시간을 보여 주는 진행 바를 표시합니다.',
    tag: '실용 편의',
    comments: {
      header: '[ 던전 찾기 수락 대기 타이머 바 (Leatrix Plus ShowReadyTimer) ]',
    },
  },
  'blizz-move': {
    title: '기본 창 자유 드래그 및 크기 조절 (BlizzMove)',
    description:
      '약 60개의 블리자드 기본 창(캐릭터, 퀘스트, 특성/마법책, 전문기술, 상인, 경매장, 업적, 수집품, 모험 안내서, 세계 지도 등)의 빈 영역을 드래그해 이동하고 Ctrl+휠로 크기를 조절합니다. Shift+우클릭으로 위치 초기화, Ctrl+우클릭으로 크기 초기화.',
    tag: '핵심 필수',
    options: {
      enableScale: {
        label: 'Ctrl + 마우스 휠로 크기 조절 허용',
        description: '창 위에서 Ctrl 키를 누른 채 휠을 굴려 크기를 조절합니다',
      },
    },
    comments: {
      header: '[ 기본 창 자유 드래그 및 크기 조절 (BlizzMove) ]',
      framesNote: 'BlizzMove 3.8.5에서 추출한 본섭 최상위 기본 창 목록',
      addonFramesNote: '필요 시 로드되는 블리자드 UI 애드온 -> 창',
      subFramesNote: '마우스를 가로채는 넓은 하위 프레임도 함께 드래그 핸들로 등록',
      stateNote: '블리자드 프레임에 필드를 쓰지 않고 내부 테이블에 세션 동안만 저장',
      rootsComment: '창 -> 창 이름',
      handleComment: '드래그 핸들 -> 루트 창',
      posComment: '창 -> { x, y } (배율 1 기준 좌상단 좌표)',
      scaleComment: '창 -> 배율',
      pointsComment: '창 -> 첫 드래그 이전 원래 앵커 포인트',
      pendingApplyComment: '전투 중 보호되어 탈전 후 재배치할 창',
      pendingHookComment: '전투 중 로드되어 탈전 후 후킹할 창',
      unpackNote: 'relativeTo가 nil일 수 있으므로 unpack() 대신 직접 전달',
      panelManagerNote: '위치 초기화 시 UIPanelWindows 관리자에게 재배치 위임',
      userPlacedNote: 'layout-cache에 영구 저장되지 않도록 원래 UserPlaced 상태 유지',
      repositionNote: '패널 관리자가 창을 다시 배치할 때 사용자가 옮긴 위치로 복원',
      wheelNote1: 'Ctrl + 휠 크기 조절: 목록 스크롤을 방해하지 않도록 Ctrl을 누른 동안만',
      wheelNote2: '투명 오버레이로 휠 입력을 받아 처리하고 키를 떼면 즉시 해제',
      anchorScaleNote: '창이 튀지 않도록 좌상단 기준으로 크기 조절',
    },
  },
  'slash-way-native': {
    title: '기본 지도 핀 웨이포인트 명령 (/way)',
    description: '/way 45.2 60.1을 입력해 블리자드 기본 지도 핀과 길 안내 광선을 바로 생성하며, /way만 입력하면 현재 좌표를 출력합니다.',
    tag: '기본 기능 강화',
    comments: {
      header: '[ 기본 지도 핀 웨이포인트 명령 (/way) ]',
    },
    strings: {
      noMapMsg: '|cffff3333[Way]|r 현재 지도 정보를 가져올 수 없습니다.',
      currentMapFallback: '현재 지도',
      coordMsg: '|cff00ff00[좌표]|r %s: %.1f, %.1f',
      usageMsg: '|cffffaa00[Way]|r 사용법: /way 45.2 62.8 (/way만 입력하면 현재 좌표 표시)',
      invalidCoordMsg: '|cffff3333[Way]|r 좌표가 올바르지 않습니다. 0에서 100 사이의 숫자를 입력하세요.',
      pinSetMsg: '|cff00ff00[Way]|r %s (%.1f, %.1f)에 기본 지도 핀을 설정했습니다!',
    },
  },
  'cursor-ring': {
    title: '마우스 커서 강조 링',
    description: '마우스 포인터 주위에 컬러 링을 그려 화려한 전투 이펙트 속에서도 커서를 쉽게 찾게 해줍니다.',
    details: '크기, 색상, 전투 중 전용 표시를 설정할 수 있으며 클릭을 방해하지 않습니다.',
    tag: '전투 보조',
    options: {
      size: { label: '링 크기 (px)' },
      color: {
        label: '링 색상',
        choices: {
          amber: '호박색',
          white: '흰색',
          red: '빨간색',
          green: '초록색',
          blue: '파란색',
        },
      },
      combatOnly: { label: '전투 중에만 표시' },
    },
    comments: {
      header: '[ 마우스 커서 강조 링 ]',
    },
  },
  'hide-micro-menu-bags': {
    title: '마이크로 메뉴 및 가방 바 숨기기',
    description: '오른쪽 아래 마이크로 메뉴와 가방 바를 숨겨 화면을 깔끔하게 정리하며, 마우스를 올릴 때만 보이게 할 수 있습니다.',
    details: '단축키(C, P, B 등)는 정상 작동합니다.',
    tag: '미니멀 UI',
    options: {
      hideMicroMenu: { label: '마이크로 메뉴 숨기기' },
      hideBagsBar: { label: '가방 바 숨기기' },
      mouseover: {
        label: '마우스를 올릴 때만 표시',
        description: '끄면 완전히 숨겨지며 단축키로만 열 수 있습니다',
      },
    },
    comments: {
      header: '[ 마이크로 메뉴 및 가방 바 숨기기 ]',
      mouseoverNote: '마우스 오버 시 표시 (편집 모드에서는 항상 표시)',
    },
  },
  'hide-portrait-numbers': {
    title: '초상화 피해/치유 숫자 숨기기',
    description: '플레이어 및 소환수 초상화 위에 뜨는 피해/치유 숫자를 숨겨 초상화를 깔끔하게 유지합니다.',
    tag: '미니멀 UI',
    comments: {
      header: '[ 초상화 피해/치유 숫자 숨기기 ]',
    },
  },
  'quest-font-size': {
    title: '퀘스트 글자 크기 조절',
    description: '퀘스트 대화창과 퀘스트 목록의 글꼴 크기를 키워 편하게 읽을 수 있습니다.',
    tag: '가독성',
    options: {
      fontSize: {
        label: '퀘스트 본문 글자 크기',
        description: '블리자드 기본값은 약 13이며 제목은 +2 크게 표시됩니다',
      },
    },
    comments: {
      header: '[ 퀘스트 글자 크기 조절 ]',
    },
  },
};
