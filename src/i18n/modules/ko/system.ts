import { ModuleTranslation } from '../../types';

export const systemKo: Record<string, ModuleTranslation> = {
  'mute-annoying-sounds': {
    title: '거슬리는 탈것 및 게임 효과음 음소거',
    description: '기차 감정표현, 회전날개 탈것 굉음, 기계 탈것 발소리, 정각 종소리 등 시끄러운 효과음을 선택적으로 음소거합니다.',
    details: 'Leatrix Plus(Midnight)의 음소거 목록을 기반으로 블리자드 공식 MuteSoundFile API를 사용합니다.',
    tag: '청력 보호',
    options: {
      muteTrains: { label: '기차 감정표현', description: '/기차 감정표현의 기적 소리' },
      muteGyrocopters: {
        label: '회전날개 및 비행기 탈것',
        description: '미미론의 머리, 메카 거물 등의 엔진 소음',
      },
      muteMechSteps: { label: '기계 탈것 발소리', description: '기계타조, 기계 슈트 등의 금속 발소리' },
      muteChimes: { label: '정각 종소리', description: '대도시 시계탑 매시 정각 종소리' },
      muteFizzle: { label: '시전 실패 효과음', description: '주문 시전 취소/실패 시 치직거리는 소리' },
      muteSniffing: { label: '늑대인간 킁킁거림', description: '늑대인간 대기 중 반복되는 냄새 맡는 소리' },
      muteYawns: { label: '사냥꾼 살쾡이 하품', description: '사냥꾼 고양이과 야수의 하품 소리' },
    },
    comments: {
      header: '[ 거슬리는 효과음 음소거 (Leatrix Plus Mute) ]',
      applyNote: '선택한 그룹은 음소거, 해제한 그룹은 음소거 해제',
    },
  },
  'silence-rested-emotes': {
    title: '여관 및 휴식 지역 감정표현 음성 음소거',
    description: '여관이나 대도시 등 휴식 지역에 있을 때 주변 플레이어의 /웃음, /울음 등 반복 감정표현 음성을 자동으로 끕니다.',
    tag: '조용한 휴식',
    comments: {
      header: '[ 휴식 지역 감정표현 음성 음소거 ]',
      cvarNote: '휴식 중 Sound_EnableEmoteSounds 비활성화 후 이탈 시 복원 (본 모듈이 바꾼 경우만)',
      restoreNote: 'CVar는 클라이언트에 저장되므로 로그아웃/지역 이동 전 복원',
    },
  },
  'disable-screen-glow': {
    title: '전체 화면 빛 번짐과 음주 시 화면 흐림 끄기',
    description: '과도한 FFX Glow 화면 번짐과 음주 시 화면 흔들림/흐림 효과를 꺼서 선명한 화면을 유지합니다.',
    tag: '눈 보호',
    comments: {
      header: '[ 전체 화면 빛 번짐과 음주 시 화면 흐림 끄기 ]',
    },
  },
  'combat-nameplates': {
    title: '전투 시 적 이름표 자동 표시',
    description: '전투에 돌입하면 적 이름표를 자동으로 켜고, 비전투 상태가 되면 자동으로 꺼서 필드 화면을 깔끔하게 유지합니다.',
    tag: '스마트 UI',
    comments: {
      header: '[ 전투 시 적 이름표 자동 표시 ]',
    },
  },
  'keep-audio-synced': {
    title: '오디오 출력 장치 변경 자동 동기화',
    description: '게임 중 이어폰을 꽂거나 블루투스 장치를 바꿀 때 재시작 없이 기본 오디오 장치로 즉시 동기화합니다.',
    tag: '시스템 편의',
    comments: {
      header: '[ 오디오 출력 장치 변경 자동 동기화 ]',
      syncNote: '시스템 오디오 장치 변경 시 기본 출력 장치로 전환하고 사운드 시스템 재시작',
      cinematicNote: '동영상 재생 중에는 끊김 방지를 위해 재생 종료 후 처리',
    },
  },
  'flash-taskbar': {
    title: '대기열/전투 준비/귓속말 작업 표시줄 알림',
    description: '다른 창을 보고 있을 때 던전/전장 매칭, 전투 준비, 부활, 소환 또는 귓속말이 오면 작업 표시줄을 깜빡이고 알림음을 울립니다.',
    tag: '알트탭 필수',
    options: {
      playSound: {
        label: '알림음 함께 재생',
        description: '작업 표시줄 깜빡임 시 주 채널로 전투 준비 효과음을 재생합니다',
      },
      flashOnWhisper: {
        label: '귓속말 수신 시에도 깜빡이기',
        description: '일반/배틀넷 귓속말 수신 시 작업 표시줄을 깜빡입니다 (추가 소리 없음)',
      },
    },
    comments: {
      header: '[ 대기열/전투 준비/귓속말 작업 표시줄 알림 (FlashTaskBar) ]',
      whisperNote: '귓속말: 메시지 내용은 읽지 않고 이벤트 도착만 감지 (인스턴스 제한 대응)',
      readyCheckNote: '전투 준비 / 던전 매칭 / 부활 / 소환',
      battlefieldNote: '전장 / 투기장 입장 확인',
      lfgHookNote: '파티 찾기 초대 창 (FlashTaskBar LFGListInviteDialog_Show 훅)',
    },
  },
  'talent-ready-check': {
    title: '전투 준비 시 현재 특성 구성 알림',
    description: '공격대나 파티 전투 준비 시 채팅창에 현재 활성화된 특성 구성 이름을 출력해 필드 특성으로 들어가는 실수를 막아줍니다.',
    details: '사용할 특성 구성 이름을 지정하면(쉼표 구분) 불일치 시 빨간 글씨와 경보음으로 알려줍니다.',
    tag: '던전 점검',
    options: {
      expectedNames: {
        label: '예상 특성 구성 이름',
        description: '비워 두면 현재 구성만 출력; 여러 개일 경우 쉼표로 구분',
      },
      playSound: { label: '불일치 시 경보음 재생' },
    },
    comments: {
      header: '[ 전투 준비 시 현재 특성 구성 알림 ]',
    },
    strings: {
      starterBuild: '초보자 빌드',
      unsavedBuild: '저장되지 않은 구성',
      currentMsg: '|cff00ff99[QoL]|r 현재 특성 구성: |cffffd100%s|r',
      mismatchMsg: '|cffff5555[QoL] 특성 구성이 다릅니다!|r 현재: %s, 필요: %s',
    },
  },
  'cvar-tweaks': {
    title: '자주 쓰는 숨겨진 설정 일괄 적용',
    description: '접속 시 비행 중 시전 자동 탈것 내리기, 커서 위치 루팅, 튜토리얼 끄기 등 선택한 CVar를 모든 캐릭터에 자동 적용합니다.',
    details: '체크하지 않은 항목은 게임 내 기존 설정을 그대로 유지합니다.',
    tag: '전 캐릭터 동기화',
    options: {
      autoDismountFlying: { label: '비행 중 시전 시 자동 탈것 해제' },
      noMapFade: { label: '이동 중 세계 지도 반투명 비활성화' },
      lootUnderMouse: { label: '마우스 커서 위치에 전리품 창 열기' },
      noTutorials: { label: '초보자 튜토리얼 도움말 끄기' },
      noErrorSpeech: { label: '캐릭터 오류 음성 끄기 ("할 수 없습니다" 등)' },
      alwaysCompare: { label: '툴팁에서 항상 착용 장비 비교' },
    },
    comments: {
      header: '[ 자주 쓰는 숨겨진 설정 일괄 적용 ]',
      tableNote: '{ 옵션키, CVar, 체크 시 값 }; 미체크 항목은 기존 게임 설정 유지',
    },
  },
  'great-vault-reminder': {
    title: '위대한 금고 보상 알림',
    description: '로그인 또는 UI 재시작 시 수령하지 않은 위대한 금고 보상이 있으면 채팅창에 한 번 알려줍니다. 화면 중앙에도 알림을 표시할 수 있습니다.',
    details: '쐐기 UI를 열기 전에 접속 직후 바로 확인해 보상을 놓치지 않도록 도와줍니다.',
    tag: '주간 필수',
    options: {
      showCenter: {
        label: '화면 중앙에도 표시',
        description: '공격대 경보 스타일로 화면 중앙에 1회 알림을 표시합니다',
      },
      playSound: { label: '알림음 재생' },
    },
    comments: {
      header: '[ 위대한 금고 보상 알림 ]',
      skipShownNote: '이미 위대한 금고 창이 열려 있으면 알림 생략',
      delayNote: '보상 데이터는 로그인 직후 순차 도착하므로 지연 확인 및 WEEKLY_REWARDS_UPDATE에서 재확인',
    },
    strings: {
      reminderMsg: '위대한 금고에 수령 가능한 보상이 있습니다!',
    },
  },
};
