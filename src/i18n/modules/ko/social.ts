import { ModuleTranslation } from '../../types';

export const socialKo: Record<string, ModuleTranslation> = {
  'accept-party-friends': {
    title: '친구 및 길드 파티 초대 자동 수락',
    description: '배틀넷 친구, 게임 친구 또는 길드원의 파티 초대를 받으면 자동으로 수락합니다.',
    details: '다른 창을 보거나 전투 중일 때도 초대를 놓치지 않습니다. 던전 찾기 대기 중일 때는 일시 정지됩니다.',
    tag: '소셜 편의',
    comments: {
      header: '[ 친구 및 길드 파티 초대 자동 수락 ]',
      popupNote: '창을 닫기 전에 inviteAccepted를 표시해 OnHide가 초대를 거절하지 않도록 함',
    },
  },
  'alt-click-invite': {
    title: 'Alt+클릭으로 빠른 파티 초대',
    description: '채팅창에서 플레이어 이름을 Alt+좌클릭하면 즉시 파티 초대를 보냅니다.',
    details: '쐐기돌이나 공격대 파티를 모을 때 우클릭 메뉴를 열 필요가 없어 매우 빠릅니다.',
    tag: '파티 모집',
    comments: {
      header: '[ Alt+클릭으로 빠른 파티 초대 ]',
    },
  },
  'invite-from-whisper': {
    title: '귓속말 키워드 자동 파티 초대',
    description: '특정 암호(예: "111" 또는 "초대")로 귓속말이 오면 혼자이거나 파티장/부공격대장일 때 자동으로 초대합니다.',
    details: '길드 레이드, 필드 보스, 쐐기 모집 시 일일이 타이핑하지 않아도 됩니다.',
    tag: '공대장 필수',
    options: {
      keyword: { label: '초대 귓속말 키워드' },
    },
    comments: {
      header: '[ 귓속말 키워드 자동 파티 초대 ]',
    },
  },
  'block-duel-requests': {
    title: '낯선 사람 결투 요청 자동 거절',
    description: '친구와 길드원을 제외한 플레이어의 결투 신청을 자동으로 거절합니다.',
    details: '대도시에서 대기하거나 퀘스트 중 원치 않는 결투 팝업을 막아줍니다.',
    tag: '방해 차단',
    comments: {
      header: '[ 낯선 사람 결투 요청 자동 거절 ]',
    },
  },
  'block-pet-duels': {
    title: '애완동물 대전 신청 자동 거절',
    description: '친구와 길드원이 아닌 플레이어의 PvP 애완동물 대전 요청을 자동으로 거절합니다.',
    tag: '방해 차단',
    comments: {
      header: '[ 애완동물 대전 신청 자동 거절 ]',
    },
  },
  'block-party-invites': {
    title: '낯선 사람 파티 초대 차단',
    description: '친구 및 길드원이 아닌 플레이어가 보낸 파티 초대를 자동으로 거절해 스팸 초대를 막습니다.',
    tag: '스팸 필터',
    comments: {
      header: '[ 낯선 사람 파티 초대 차단 ]',
    },
  },
  'block-social-requests': {
    title: '배틀넷 친구 요청 및 길드 초대 자동 거절',
    description: '수신되는 배틀넷 친구 요청과 낯선 사람의 길드 초대를 자동 거절하고 채팅창에 처리 건수를 알립니다.',
    details: '게임 친구나 배틀넷 친구가 보낸 길드 초대는 거절하지 않습니다.',
    tag: '방해 차단',
    options: {
      friendRequests: { label: '배틀넷 친구 요청 거절' },
      guildInvites: { label: '길드 초대 거절 (친구 제외)' },
    },
    comments: {
      header: '[ 배틀넷 친구 요청 및 길드 초대 자동 거절 ]',
      guildPopupNote: '블리자드 초대 창이 뜬 뒤 닫기 (OnHide에서 DeclineGuild 호출)',
    },
    strings: {
      declinedFriendsMsg: '|cff00ff99[QoL]|r 배틀넷 친구 요청 %d건을 자동 거절했습니다',
      declinedGuildMsg: '|cff00ff99[QoL]|r 길드 초대를 자동 거절했습니다',
    },
  },
  'auto-confirm-role': {
    title: '던전 찾기 역할 자동 확인',
    description: '무작위 던전 또는 공격대 찾기 시 이전에 선택한 역할로 역할 확인 팝업을 자동 수락합니다.',
    details: '유효한 역할이 체크되어 있을 때만 동작하며 Shift를 누르면 건너뜁니다. 기본값은 친구/길드원 파티장일 때만 작동합니다.',
    tag: '매칭 가속',
    options: {
      friendLeaderOnly: {
        label: '파티장이 친구/길드원일 때만',
        description: '끄면 모든 파티장의 역할 확인을 자동으로 수락합니다',
      },
    },
    comments: {
      header: '[ 던전 찾기 역할 자동 확인 ]',
      delayNote: '버튼 활성화 상태가 갱신될 때까지 한 프레임 대기',
    },
  },
  'safe-queue': {
    title: 'PvP 대기열 안전 보호 및 타이머',
    description: '전장/투기장 입장 창에서 실수로 누르기 쉬운 "대기열 떠나기" 버튼을 숨기고 입장 버튼을 가운데 배치하며 남은 시간을 색상으로 표시합니다.',
    tag: 'PvP/인던',
    options: {
      announceWaitTime: {
        label: '채팅창에 대기 시간 출력',
        description: '매칭 완료 시 총 대기 시간을 채팅창에 표시합니다',
      },
    },
    comments: {
      header: '[ PvP 대기열 안전 보호 (SafeQueue) ]',
      hideLeaveNote: '실수로 대기열을 취소하지 않도록 떠나기 버튼 숨김',
      waitTimeNote: '서버가 기록한 대기 시간을 사용해 늦게 로드되어도 정확히 계산',
    },
    strings: {
      remainingLabel: '남은 시간: ',
      waitTimeMsg: '|cff33ff99[SafeQueue]|r 매칭 완료! 대기 시간: %02d분 %02d초',
    },
  },
  'copy-player-name': {
    title: '우클릭 메뉴로 플레이어 이름 복사',
    description: 'WoW 12.x 최신 Menu API를 사용해 채팅창 이름이나 유닛 프레임 우클릭 시 "이름 복사" 메뉴를 추가합니다.',
    tag: '조작 가속',
    comments: {
      header: '[ 우클릭 메뉴로 플레이어 이름 복사 (Menu API) ]',
    },
    strings: {
      copyPrefix: '|cff00ff00[이름 복사]|r ',
    },
  },
  'lfg-double-click-signup': {
    title: '파티 찾기 더블클릭 즉시 신청',
    description: '파티 찾기 목록에서 원하는 파티를 더블클릭하면 바로 신청됩니다.',
    details: '역할이 이미 선택되어 있으면 신청 대화상자를 건너뛸 수 있으며 Shift+더블클릭 시 대화상자가 열립니다.',
    tag: '매칭 가속',
    options: {
      skipDialog: {
        label: '역할 선택 시 신청 대화상자 건너뛰기',
        description: '체크된 역할로 즉시 신청 (Shift를 누르면 창 표시)',
      },
    },
    comments: {
      header: '[ 파티 찾기 더블클릭 즉시 신청 ]',
      skipNote: '신청 버튼이 활성 상태이면 Shift 키 미입력 시 즉시 제출',
    },
  },
  'guild-motd-login': {
    title: '접속 시 오늘의 길드 메시지 재출력',
    description: '로그인 몇 초 뒤 채팅창에 오늘의 길드 공지(MOTD)를 한 번 더 출력해 접속 스팸에 묻히지 않게 합니다.',
    tag: '길드 편의',
    comments: {
      header: '[ 접속 시 오늘의 길드 메시지 재출력 ]',
    },
    strings: {
      motdPrefix: '|cff40ff40[길드 공지]|r ',
    },
  },
};
