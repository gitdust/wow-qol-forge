import { ModuleTranslation } from '../../types';

export const mailKo: Record<string, ModuleTranslation> = {
  'postal-open-all': {
    title: '모든 우편 한 번에 받기 (Open All)',
    description: '우체통 창에 "모두 받기" 버튼을 추가하여 모든 우편의 골드와 첨부 아이템을 자동으로 순서대로 수령합니다.',
    details: 'Postal의 핵심 큐 로직을 정제해 가방이 차면 안전하게 멈추고 총 수입을 출력하며, 언제든 다시 클릭해 중단할 수 있습니다.',
    tag: '필수 기능',
    options: {
      skipAH: {
        label: '경매장 우편 건너뛰기',
        description: '일반 플레이어 우편만 수령하고 경매장 우편은 남깁니다',
      },
    },
    comments: {
      header: '[ 모든 우편 한 번에 받기 (Postal OpenAll) ]',
      ahPatternNote: '블리자드 현지화 제목 문자열로 경매장 우편 판별 (Postal과 동일)',
      retryNote: '같은 칸 내용이 변하지 않으면 수령 실패(가방 가득 참/고유 아이템)이므로 중단',
    },
    strings: {
      btnOpenAll: '모두 받기',
      btnStop: '중단',
      earnedPrefix: ', 총 획득: ',
      logPrefix: '|cff00ff99[QoL 우편]|r ',
      stopFailed: '일부 우편을 받을 수 없어(가방 가득 참 또는 고유 아이템) 중단되었습니다',
      stopMorePages: '현재 페이지를 모두 받았습니다. 남은 우편 %d통을 불러오려면 우체통을 다시 여세요',
      stopDone: '아이템/골드가 포함된 모든 우편을 받았습니다',
      stopAborted: '우편 일괄 수령이 취소되었습니다',
      stopClosed: '우체통이 닫혀 수령을 중단했습니다',
      stopBagFull: '가방이 가득 차 수령을 중단했습니다',
    },
  },
  'postal-express': {
    title: '빠른 우편 수령 및 첨부 (Shift/Alt)',
    description:
      '받은 편지함에서 Shift+클릭으로 첨부물을 즉시 수령하고 Ctrl+클릭으로 반송하며, 우편 작성 중 가방 아이템을 Alt+클릭해 바로 첨부합니다.',
    details: '부캐릭터에 물약, 보석, 재료를 대량으로 보낼 때 일일이 드래그할 필요가 없습니다.',
    tag: '조작 가속',
    comments: {
      header: '[ 빠른 우편 수령 및 첨부 (Postal Express) ]',
      inboxNote: '받은 편지함: 보조키 클릭은 InboxFrame_OnModifiedClick, 일반 클릭은 InboxFrame_OnClick 처리',
      sendNote: '우편 발송: Alt+좌클릭으로 가방 아이템 첨부 (본섭 HandleModifiedItemClick 경유)',
    },
  },
  'postal-trade-block': {
    title: '우체통 이용 중 거래 자동 차단',
    description: '우체통 창을 열어 우편을 정리하는 동안 다른 플레이어의 거래 요청을 자동으로 거절하고 닫으면 복원합니다.',
    details: '대도시 우체통에서 골드나 아이템을 옮길 때 실수로 거래 창이 열리는 방해를 막아줍니다.',
    tag: '방해 차단',
    comments: {
      header: '[ 우체통 이용 중 거래 자동 차단 (Postal TradeBlock) ]',
    },
  },
  'postal-wire': {
    title: '전 재산 골드 한 번에 입력 (Wire)',
    description:
      '우편 보내기 창에 "전체" 버튼을 추가해 우편 요금을 제외한 모든 골드를 입력하고, 제목이 비어 있으면 송금 금액을 자동 입력합니다.',
    details: '부캐릭터 골드를 본캐로 모을 때 숫자를 일일이 칠 필요가 없습니다.',
    tag: '골드 편의',
    options: {
      fillSubject: {
        label: '제목에 금액 자동 입력',
        description: '제목이 비어 있을 때 송금 금액(예: [100골드 0실버 0코퍼])을 자동 기입합니다',
      },
    },
    comments: {
      header: '[ 전 재산 골드 한 번에 입력 (Postal Wire) ]',
    },
    strings: {
      btnAll: '전체',
    },
  },
};
