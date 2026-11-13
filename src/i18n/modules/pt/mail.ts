import { ModuleTranslation } from '../../types';

export const mailPt: Record<string, ModuleTranslation> = {
  'postal-open-all': {
    title: 'Abrir todo o correio (Open All)',
    description: 'Adiciona um botão "Abrir tudo" à caixa de correio para coletar automaticamente ouro e anexos de todas as mensagens.',
    details: 'Baseado no Postal: para com segurança se as bolsas encherem, exibe o resumo de ouro e pode ser interrompido a qualquer momento.',
    tag: 'Indispensável',
    options: {
      skipAH: {
        label: 'Pular correio da Casa de Leilões',
        description: 'Coleta apenas mensagens de jogadores e mantém as da Casa de Leilões',
      },
    },
    comments: {
      header: '[ Abrir todo o correio (Postal OpenAll) ]',
      ahPatternNote: 'Detectar correio de leilão via assuntos localizados da Blizzard (como Postal)',
      retryNote: 'Se o mesmo item parar de mudar (bolsas cheias/item único), interromper em vez de repetir',
    },
    strings: {
      btnOpenAll: 'Abrir tudo',
      btnStop: 'Parar',
      earnedPrefix: ', coletado: ',
      logPrefix: '|cff00ff99[QoL Correio]|r ',
      stopFailed: 'Não foi possível coletar o correio restante (bolsas cheias ou item único), parado',
      stopMorePages: 'Página limpa; mais %d mensagens ainda não carregadas — reabra a caixa em breve',
      stopDone: 'Todo o correio com ouro ou itens foi coletado',
      stopAborted: 'Coleta de correio cancelada',
      stopClosed: 'Caixa de correio fechada, parado',
      stopBagFull: 'Inventário cheio, coleta interrompida',
    },
  },
  'postal-express': {
    title: 'Atalhos expressos de correio (Shift/Alt)',
    description:
      'Shift+Clique na caixa de entrada coleta anexos na hora, Ctrl+Clique devolve a carta e Alt+Clique nos itens da bolsa os anexa ao compor.',
    details: 'Ideal para enviar consumíveis, gemas e reagentes entre personagens secundários.',
    tag: 'Ação rápida',
    comments: {
      header: '[ Atalhos expressos de correio (Postal Express) ]',
      inboxNote: 'Entrada: cliques modificados via InboxFrame_OnModifiedClick, normais via InboxFrame_OnClick',
      sendNote: 'Envio: Alt+Clique esquerdo anexa itens da bolsa (via HandleModifiedItemClick)',
    },
  },
  'postal-trade-block': {
    title: 'Bloquear trocas na caixa de correio',
    description: 'Recusa automaticamente pedidos de troca enquanto sua caixa de correio estiver aberta e restaura a configuração anterior ao fechar a caixa de correio.',
    details: 'Evita interrupções ao organizar ouro e correio em capitais movimentadas.',
    tag: 'Antispam',
    comments: {
      header: '[ Bloquear trocas na caixa de correio (Postal TradeBlock) ]',
    },
  },
  'postal-wire': {
    title: 'Enviar todo o ouro em um clique (Wire)',
    description:
      'Adiciona o botão "Tudo" na aba de envio para preencher todo o seu ouro (menos a taxa postal) e completa assuntos vazios com o valor.',
    details: 'Poupa digitação ao transferir ouro entre personagens.',
    tag: 'Ajuda Ouro',
    options: {
      fillSubject: {
        label: 'Preencher assunto com o valor',
        description: 'Preenche automaticamente o valor enviado quando o assunto estiver vazio',
      },
    },
    comments: {
      header: '[ Enviar todo o ouro em um clique (Postal Wire) ]',
    },
    strings: {
      btnAll: 'Tudo',
    },
  },
};
