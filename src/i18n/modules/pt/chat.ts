import { ModuleTranslation } from '../../types';

export const chatPt: Record<string, ModuleTranslation> = {
  'chat-arrow-keys': {
    title: 'Setas no chat sem segurar Alt',
    description: 'Use as setas esquerda/direita diretamente para mover o cursor na caixa de texto do chat sem precisar segurar Alt.',
    details: 'Funciona em todas as janelas de chat e futuras janelas temporárias de sussurro.',
    tag: 'Digitação QoL',
    comments: {
      header: '[ Setas no chat sem segurar Alt ]',
      coverNote: 'Aplicar a todas as janelas e futuros sussurros temporários (Leatrix Plus)',
    },
  },
  'chat-copy': {
    title: 'Copiar histórico do chat em um clique',
    description: 'Shift+Clique em qualquer aba de chat abre uma janela selecionável com todo o histórico para copiar.',
    details: 'Ótimo para copiar links do Discord, macros de raide ou strings de WeakAuras.',
    tag: 'Essencial',
    comments: {
      header: '[ Copiar histórico do chat (BasicChatMods ChatCopy) ]',
      cleanerNote: 'Usar FontString oculta para expandir escapes |4singular:plural;',
      rtNote: 'Converter ícones de alvo de raide para notação {rt1}',
    },
    strings: {
      windowTitle: 'Copiar registro do chat',
    },
  },
  'chat-short-channels': {
    title: 'Encurtar prefixos dos canais de chat',
    description: 'Abrevia prefixos longos como [1. Geral - Dornogal] para [G], além de Guilda, Grupo, Raide e Instância.',
    details: 'Derivado das strings localizadas da Blizzard; canais personalizados mantêm apenas o número.',
    tag: 'UI limpa',
    comments: {
      header: '[ Encurtar prefixos de canais (BasicChatMods ChannelNames) ]',
      historyNote: 'Prefixos ficam fora da mensagem; reescrever linha formatada no historyBuffer',
      customRuleNote: 'Manter apenas o número em canais personalizados',
    },
    strings: {
      general: '[G]',
      trade: '[C]',
      worldDefense: '[DG]',
      localDefense: '[DL]',
      lfg: '[PG]',
      recruitment: '[Rec]',
      instanceLeader: '[LI]',
      instance: '[I]',
      guild: '[Gui]',
      partyLeader: '[LG]',
      party: '[Gr]',
      officer: '[O]',
      raidLeader: '[LR]',
      raidWarning: '[AR]',
      raid: '[R]',
    },
  },
  'chat-timestamps': {
    title: 'Horários no chat',
    description: 'Adiciona um horário discreto em cinza ([12:35]) antes de cada linha no chat.',
    details: 'Desativa a CVar nativa de horário da Blizzard para evitar duplicação.',
    tag: 'QoL básico',
    options: {
      showSeconds: {
        label: 'Mostrar segundos',
        description: 'Muda o formato para [12:35:08]',
      },
    },
    comments: {
      header: '[ Horários no chat (BasicChatMods Timestamp) ]',
      disableNativeNote: 'Desativar horários nativos da Blizzard para evitar duplicatas',
      prependNote: 'Inserir horário antes do canal/nome na entrada mais recente do historyBuffer',
    },
  },
  'chat-unclamp': {
    title: 'Soltar quadros de chat das bordas da tela',
    description: 'Permite arrastar as janelas de chat até a borda exata da tela sem margem imposta.',
    tag: 'Layout livre',
    comments: {
      header: '[ Soltar quadros de chat das bordas ]',
      hookNote: 'Blizzard redefine margens ao atualizar layout; interceptar e restaurar 0',
    },
  },
  'disable-chat-fade': {
    title: 'Desativar esmaecimento do texto do chat',
    description: 'Impede que mensagens do chat desapareçam após inatividade para continuarem sempre legíveis.',
    details: 'Opcionalmente defina um tempo personalizado em segundos.',
    tag: 'QoL básico',
    options: {
      visibleSeconds: {
        label: 'Segundos antes de esmaecer',
        description: '0 = nunca esmaecer; padrão da Blizzard é 120 segundos',
      },
    },
    comments: {
      header: '[ Desativar esmaecimento do texto do chat ]',
      tempWindowNote: 'Janelas temporárias de sussurro são criadas após os índices fixos',
    },
  },
  'hide-chat-buttons': {
    title: 'Ocultar botões laterais e de canal do chat',
    description: 'Oculta os botões Entrada Rápida, Canais e Menu ao lado do quadro de chat.',
    tag: 'UI minimalista',
    comments: {
      header: '[ Ocultar botões laterais do chat ]',
      hookNote: 'Ocultar via hook Show sem sobrescrever métodos da Blizzard (sem taint)',
    },
  },
  'paste-text': {
    title: 'Colar texto longo e macros multilinha (/paste)',
    description: 'Digite /paste para abrir uma caixa multilinha sem o limite de 255 caracteres—ótimo para listas /way e macros.',
    tag: 'Ferramenta',
    comments: {
      header: '[ Colar texto longo e macros multilinha (Paste) ]',
    },
    strings: {
      title: 'Assistente de Colagem (/paste)',
      runBtn: 'Colar e Executar',
      sentMsg: '|cff00ff00[Paste]|r Linhas de texto executadas/enviadas.',
      clearBtn: 'Limpar',
    },
  },
  'chat-keyword-filter': {
    title: 'Filtro de spam por palavras-chave',
    description: 'Oculta mensagens em canais públicos, Dizer e Gritar contendo suas palavras bloqueadas.',
    details: 'Ignora maiúsculas/minúsculas, separadas por vírgula. Inativo em instâncias/M+/raide/JxJ por restrição 12.0+.',
    tag: 'Antispam',
    options: {
      keywords: {
        label: 'Palavras bloqueadas',
        description: 'Separe várias palavras com vírgulas',
        default: 'wts,boost,carry,ouro',
      },
      includeWhisper: {
        label: 'Filtrar também sussurros de desconhecidos',
        description: 'Sussurros de amigos e guilda nunca são filtrados',
      },
    },
    comments: {
      header: '[ Filtro de spam por palavras-chave ]',
      splitNote: 'Dividir palavras por vírgula e reanalisar ao alterar ajustes',
      secretNote: 'Texto em instâncias é secreto; deixar passar sem alterar',
    },
  },
  'tell-target': {
    title: '/tt Sussurrar para o alvo atual',
    description: 'Digite /tt <mensagem> para sussurrar diretamente ao jogador selecionado sem digitar o nome.',
    details: 'Digitar apenas /tt abre uma caixa de sussurro já preenchida.',
    tag: 'Social QoL',
    comments: {
      header: '[ /tt Sussurrar para o alvo atual ]',
    },
    strings: {
      noTargetMsg: '|cff00ff99[QoL]|r /tt requer selecionar um jogador primeiro',
    },
  },
  'auto-leave-channels': {
    title: 'Sair automaticamente de canais ao entrar',
    description: 'Sai automaticamente dos canais listados (ex.: ProcurandoGrupo) após conectar.',
    details: 'Separe nomes exatos com vírgulas. Entre novamente quando quiser com /join Nome.',
    tag: 'Antispam',
    options: {
      channels: {
        label: 'Canais para sair',
        description: 'Separe vários canais por vírgula',
        default: 'ProcurandoGrupo',
      },
    },
    comments: {
      header: '[ Sair automaticamente de canais ao entrar ]',
      delayNote: 'Canais padrões entram segundos após o login; verificar duas vezes',
    },
  },
  'chat-editbox-top': {
    title: 'Mover caixa de digitação do chat para o topo',
    description: 'Move a caixa de entrada de baixo para o topo do quadro de chat para nunca sair da tela.',
    tag: 'Layout livre',
    comments: {
      header: '[ Mover caixa de digitação do chat para o topo ]',
      anchorNote: 'Ancorar por dentro da borda superior sem cobrir as abas (Leatrix Plus)',
    },
  },
};
