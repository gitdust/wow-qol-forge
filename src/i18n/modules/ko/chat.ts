import { ModuleTranslation } from '../../types';

export const chatKo: Record<string, ModuleTranslation> = {
  'chat-arrow-keys': {
    title: '채팅 입력창 방향키 커서 이동 (Alt 불필요)',
    description: '채팅 입력 중 Alt 키를 누르지 않고도 좌/우 방향키만으로 커서를 이동할 수 있습니다.',
    details: '모든 기본 채팅창과 이후 열리는 임시 귓속말 창에 모두 적용됩니다.',
    tag: '타이핑 편의',
    comments: {
      header: '[ 채팅 입력창 방향키 커서 이동 (Alt 불필요) ]',
      coverNote: '모든 채팅창과 이후 열리는 임시 귓속말 창에 적용 (Leatrix Plus)',
    },
  },
  'chat-copy': {
    title: '채팅 내용 원클릭 복사',
    description: '채팅 탭을 Shift+클릭하면 해당 창의 전체 채팅 로그가 복사 가능한 텍스트 창으로 열립니다.',
    details: '디스코드 주소, 공대 공략 매크로, WeakAuras 문자열 등을 간편하게 복사할 수 있습니다.',
    tag: '핵심 필수',
    comments: {
      header: '[ 채팅 내용 원클릭 복사 (BasicChatMods ChatCopy) ]',
      cleanerNote: '숨겨진 FontString을 이용해 |4단수:복수; 등의 특수 이스케이프 전개',
      rtNote: '공격대 징표 아이콘을 {rt1} 형식으로 변환',
    },
    strings: {
      windowTitle: '채팅 기록 복사',
    },
  },
  'chat-short-channels': {
    title: '채팅 채널 접두사 축약',
    description: '[1. 공개 - 도르노갈] 같은 긴 채널 이름을 [공]으로 줄이고 길드, 파티, 공격대 접두사도 간결하게 표시합니다.',
    details: '블리자드 현지화 문자열을 기반으로 동작하며 사용자 지정 채널은 번호만 남깁니다.',
    tag: '깔끔한 UI',
    comments: {
      header: '[ 채팅 채널 접두사 축약 (BasicChatMods ChannelNames) ]',
      historyNote: '채널 접두사는 메시지 본문 밖에 있으므로 historyBuffer의 완성된 줄을 수정',
      customRuleNote: '사용자 지정 채널은 번호만 유지',
    },
    strings: {
      general: '[공]',
      trade: '[거]',
      worldDefense: '[전]',
      localDefense: '[수]',
      lfg: '[파찾]',
      recruitment: '[모집]',
      instanceLeader: '[인장]',
      instance: '[인]',
      guild: '[길]',
      partyLeader: '[파장]',
      party: '[파]',
      officer: '[길관]',
      raidLeader: '[공장]',
      raidWarning: '[경보]',
      raid: '[공]',
    },
  },
  'chat-timestamps': {
    title: '채팅 시간 표시',
    description: '모든 채팅 줄 맨 앞에 깔끔한 회색 시간 표시([12:35])를 붙입니다.',
    details: '중복을 막기 위해 블리자드 기본 시간 표시 설정을 자동으로 끕니다.',
    tag: '기본 편의',
    options: {
      showSeconds: {
        label: '초 단위까지 표시',
        description: '시간 형식을 [12:35:08]로 변경합니다',
      },
    },
    comments: {
      header: '[ 채팅 시간 표시 (BasicChatMods Timestamp) ]',
      disableNativeNote: '이중 표시를 막기 위해 블리자드 기본 시간 표시 비활성화',
      prependNote: '채널명보다 앞에 시간을 붙이기 위해 historyBuffer의 최신 항목 수정',
    },
  },
  'chat-unclamp': {
    title: '채팅창 화면 가장자리 제한 해제',
    description: '블리자드 기본 여백 제한 없이 채팅창을 화면 끝까지 자유롭게 드래그할 수 있습니다.',
    tag: '자유 배치',
    comments: {
      header: '[ 채팅창 화면 가장자리 제한 해제 ]',
      hookNote: '블리자드가 레이아웃 갱신 시 여백을 재설정하므로 후킹하여 0으로 복원 (BasicChatMods)',
    },
  },
  'disable-chat-fade': {
    title: '채팅 글자 자동 사라짐 끄기',
    description: '시간이 지나도 채팅창 메시지가 흐려져 사라지지 않아 최근 대화를 언제든 확인할 수 있습니다.',
    details: '원하는 초 단위로 페이드 시간을 직접 설정할 수도 있습니다.',
    tag: '기본 편의',
    options: {
      visibleSeconds: {
        label: '사라지기 전 유지 시간(초)',
        description: '0이면 영구 유지; 블리자드 기본값은 120초',
      },
    },
    comments: {
      header: '[ 채팅 글자 자동 사라짐 끄기 ]',
      tempWindowNote: '임시 귓속말 창은 기본 창 번호 이후에 동적으로 생성됨',
    },
  },
  'hide-chat-buttons': {
    title: '채팅창 측면 및 채널 버튼 숨기기',
    description: '채팅창 옆의 빠른 참여, 채널, 채팅 메뉴 버튼을 숨겨 화면을 더 넓고 깔끔하게 만듭니다.',
    tag: '미니멀 UI',
    comments: {
      header: '[ 채팅창 측면 및 채널 버튼 숨기기 ]',
      hookNote: '오염 방지를 위해 블리자드 메서드를 덮어쓰지 않고 Show 후킹으로 숨김',
    },
  },
  'paste-text': {
    title: '긴 텍스트 및 여러 줄 매크로 붙여넣기 (/paste)',
    description: '/paste 명령으로 255자 제한을 넘는 여러 줄 텍스트 창을 열어 다수의 /way 좌표나 긴 매크로를 한 번에 실행합니다.',
    tag: '실용 도구',
    comments: {
      header: '[ 긴 텍스트 및 여러 줄 매크로 붙여넣기 (Paste) ]',
    },
    strings: {
      title: '붙여넣기 도우미 (/paste)',
      runBtn: '붙여넣기 실행',
      sentMsg: '|cff00ff00[Paste]|r 텍스트가 성공적으로 실행/전송되었습니다.',
      clearBtn: '지우기',
    },
  },
  'chat-keyword-filter': {
    title: '채팅 키워드 스팸 필터',
    description: '공개 채널, 일반 대화, 외치기에 지정한 키워드가 포함되면 해당 메시지를 숨겨 골드/버스 광고를 차단합니다.',
    details: '대소문자를 구분하지 않으며 쉼표로 구분합니다. 12.0+ 제한으로 인스턴스/쐐기/레이드/PvP 내부 채팅에는 적용되지 않습니다.',
    tag: '스팸 차단',
    options: {
      keywords: {
        label: '차단 키워드',
        description: '여러 키워드는 쉼표로 구분',
        default: '버스,손님,대리,골드판매',
      },
      includeWhisper: {
        label: '낯선 사람의 귓속말도 필터링',
        description: '친구와 길드원의 귓속말은 차단하지 않습니다',
      },
    },
    comments: {
      header: '[ 채팅 키워드 스팸 필터 ]',
      splitNote: '쉼표 기준으로 키워드 분리 및 설정 변경 시 자동 재파싱',
      secretNote: '인스턴스 내부 채팅은 비밀값이므로 읽지 않고 그대로 통과',
    },
  },
  'tell-target': {
    title: '/tt 현재 대상에게 귓속말',
    description: '/tt 메시지 형식으로 현재 선택한 대상 플레이어에게 이름을 입력하지 않고 바로 귓속말을 보냅니다.',
    details: '/tt만 입력하면 대상 이름이 채워진 귓속말 입력창이 열립니다.',
    tag: '소셜 편의',
    comments: {
      header: '[ /tt 현재 대상에게 귓속말 ]',
    },
    strings: {
      noTargetMsg: '|cff00ff99[QoL]|r /tt를 사용하려면 먼저 플레이어를 대상으로 선택해야 합니다',
    },
  },
  'auto-leave-channels': {
    title: '접속 시 지정 채널 자동 나가기',
    description: '접속할 때마다 지정한 채팅 채널(예: 파티찾기)에서 자동으로 나가 매번 수동으로 나갈 필요가 없습니다.',
    details: '정확한 채널 이름을 쉼표로 구분해 입력하세요. 다시 들어가려면 /join 채널명을 입력하면 됩니다.',
    tag: '스팸 차단',
    options: {
      channels: {
        label: '나갈 채널 이름',
        description: '여러 채널은 쉼표로 구분',
        default: '파티찾기',
      },
    },
    comments: {
      header: '[ 접속 시 지정 채널 자동 나가기 ]',
      delayNote: '접속 후 기본 채널 입장에 몇 초가 걸리므로 두 번 확인',
    },
  },
  'chat-editbox-top': {
    title: '채팅 입력창을 채팅창 위로 이동',
    description: '채팅 입력창을 채팅창 아래에서 위로 옮겨 화면 하단에 채팅창을 붙여도 입력창이 잘리지 않게 합니다.',
    tag: '자유 배치',
    comments: {
      header: '[ 채팅 입력창을 채팅창 위로 이동 ]',
      anchorNote: '위쪽 채팅 탭과 겹치지 않도록 채팅창 안쪽 상단에 고정 (Leatrix Plus)',
    },
  },
};
