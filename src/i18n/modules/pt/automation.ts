import { ModuleTranslation } from '../../types';

export const automationPt: Record<string, ModuleTranslation> = {
  'auto-repair': {
    title: 'Reparo automático de equipamentos',
    description: 'Repara automaticamente todo o equipamento ao falar com um vendedor reparador (com prioridade opcional do banco da guilda).',
    details: 'Segure Shift ao abrir o vendedor para pular. Se faltar fundo da guilda, o restante usa seu ouro.',
    tag: 'Essencial',
    options: {
      guildRepair: {
        label: 'Preferir reparo do banco da guilda',
        description: 'Usa primeiro o fundo de reparo da guilda quando permitido',
      },
      showSummary: {
        label: 'Mostrar custo do reparo no chat',
        description: 'Imprime no chat o total de ouro gasto no reparo',
      },
    },
    comments: {
      header: '[ Reparo automático de equipamentos (Leatrix Plus) ]',
      guildFallbackNote: 'Usar fundo da guilda primeiro; o restante é coberto pelo ouro pessoal',
    },
    strings: {
      repairedMsg: '|cff00ff99[QoL]|r Equipamento reparado por: ',
    },
  },
  'auto-sell-junk': {
    title: 'Vender sucata cinza automaticamente',
    description: 'Vende instantaneamente todos os itens de qualidade pobre (cinza) ao visitar um mercador.',
    details: 'Segure Shift para pular. Varre as bolsas em etapas e mostra o total arrecadado no chat.',
    tag: 'Essencial',
    options: {
      showSummary: {
        label: 'Mostrar ouro obtido no chat',
        description: 'Imprime o total de ouro ganho vendendo itens cinza',
      },
    },
    comments: {
      header: '[ Vender sucata cinza automaticamente (Leatrix Plus) ]',
      multiRoundNote: 'Espaços mudam após vender; escanear a cada 0,2s até 6 rodadas',
      stopErrorNote: 'Parar imediatamente se o vendedor recusar ou atingir limite de ouro',
    },
    strings: {
      soldMsg: '|cff00ff99[QoL]|r Sucata cinza vendida por: ',
    },
  },
  'automate-quests': {
    title: 'Aceitar e entregar missões rapidamente',
    description: 'Aceita e entrega missões concluídas automaticamente ao falar com PNJs; pausa se houver múltiplas recompensas à escolha.',
    details: 'Segure Shift para pausar. Nunca entrega missões que custam ouro, moedas, reagentes ou itens vinculados à conta.',
    tag: 'Nivelamento',
    options: {
      autoAccept: {
        label: 'Aceitar missões automaticamente',
        description: 'Aceita missões diárias, semanais e normais automaticamente',
      },
      autoComplete: {
        label: 'Entregar missões automaticamente',
        description: 'Entrega missões concluídas com 0 ou 1 recompensa fixa',
      },
    },
    comments: {
      header: '[ Aceitar e entregar missões rapidamente ]',
      accountBoundNote: 'Verificar se o item exigido é vinculado ao bando/conta para não gastar sem querer',
      currencyNote: 'Nunca entregar automaticamente missões com moedas, reagentes ou itens da conta',
      noAcceptNote: 'Aceitação automática desativada',
      noCompleteNote: 'Entrega automática desativada',
    },
  },
  'automate-gossip': {
    title: 'Alt+Abrir: escolha única de diálogo',
    description: 'Segure Alt ao falar com um PNJ para selecionar automaticamente uma única opção de conversa quando não houver missões.',
    details: 'Útil para mestres de voo, estalajadeiros e PNJs de teleporte.',
    tag: 'Agilidade',
    comments: {
      header: '[ Alt+Abrir: escolha única de diálogo (Leatrix Plus) ]',
      onlyGossipNote: 'Selecionar apenas quando houver exatamente 1 opção e nenhuma missão',
      fallbackNote: 'Alternativa para opções sem gossipOptionID',
    },
  },
  'faster-movie-skip': {
    title: 'Pular cenas e vídeos rapidamente',
    description: 'Pressione Espaço, Esc ou Enter durante cenas do jogo ou vídeos para pular sem clicar na confirmação.',
    details: 'Agiliza masmorras e criação de personagens secundários.',
    tag: 'Fluidez',
    comments: {
      header: '[ Pular cenas e vídeos rapidamente (Space/Esc/Enter) ]',
    },
  },
  'easy-item-destroy': {
    title: 'Destruição fácil de itens (sem digitar APAGAR)',
    description: 'Remove a exigência de digitar "APAGAR" / "DELETE" ao destruir itens Raros ou Épicos.',
    details: 'Exibe o link do item (ou nome e nível do mascote) no diálogo de confirmação para segurança.',
    tag: 'UX mínima',
    comments: {
      header: '[ Destruição fácil de itens (Leatrix Plus EasyItemDestroy) ]',
      lineNote: 'A segunda linha de DELETE_GOOD_ITEM pede texto de confirmação; remover junto da caixa',
      petNote: 'Exibir mascotes enjaulados como "Nome (Nível N)"',
      dialogsNote: 'Buscar diálogo de exclusão por nome caso outros popups estejam visíveis',
      hideEditNote: 'Ocultar caixa de texto e habilitar botão Aceitar',
      appendLinkNote: 'Itens normais: anexar link do item ao texto de confirmação',
    },
  },
  'auto-release-pvp': {
    title: 'Liberar espírito automático em CB e JxJ aberto',
    description: 'Libera o espírito automaticamente ao morrer em campos de batalha e zonas JxJ abertas (Invérnia, Tol Barad, Ashran).',
    details: 'Pula se houver Pedra da Alma ou Reencarnação; segure Shift para cancelar.',
    tag: 'Auxílio JxJ',
    options: {
      excludeAlterac: {
        label: 'Excluir Vale Alterac',
        description: 'Não liberar automaticamente no Vale Alterac',
      },
    },
    comments: {
      header: '[ Liberar espírito automático em CB e JxJ (Leatrix Plus) ]',
      worldPvpNote: 'IDs de mapa JxJ aberto: Invérnia, Tol Barad, Ashran, Escudo Tonante, Lança de Guerra',
      alteracNote: 'Vale Alterac (clássico e contenda) pode ser excluído nas opções',
    },
    strings: {
      cancelledMsg: '|cff00ff99[QoL]|r Liberação automática cancelada',
    },
  },
  'auto-accept-res': {
    title: 'Aceitar ressurreição fora de combate',
    description: 'Aceita automaticamente ressurreições de aliados sem precisar clicar no aviso.',
    details: 'Nunca aceita em combate quando a proteção estiver ativa.',
    tag: 'Conforto',
    options: {
      combatCheck: {
        label: 'Proteção de combate',
        description: 'Aceita apenas quando nem você nem o conjurador estiverem em combate',
      },
    },
    comments: {
      header: '[ Aceitar ressurreição fora de combate ]',
    },
  },
  'auto-accept-summon': {
    title: 'Aceitar evocações automaticamente (10s)',
    description: 'Anuncia no chat ao receber evocação de bruxo ou pedra de encontro e aceita após 10 segundos fora de combate.',
    details: 'Pode ser cancelada no diálogo durante os 10 segundos e nunca age em combate.',
    tag: 'Grupo QoL',
    comments: {
      header: '[ Aceitar evocações automaticamente (Leatrix Plus, 10s) ]',
      confirmNote: 'Confirmar apenas se evocador e área continuarem iguais e fora de combate',
    },
    strings: {
      summonNoticeMsg: '|cff00ff99[QoL]|r Evocação de %s (%s) será aceita em 10s se não cancelada.',
    },
  },
  'dialog-key': {
    title: 'DialogKey (Espaço e 1-9 para diálogos de PNJ)',
    description: 'Pressione Espaço para avançar missões/diálogos e 1–9 (0 para 10.º) para escolher opções ou recompensas. Inativo em combate.',
    details: 'Ignorado com modificadores; proteção impede que Espaço aceite grupos, evocações, duelos ou libere espírito.',
    tag: 'MVP Missões',
    options: {
      enableNumKeys: {
        label: 'Teclas 1-9 para opções e recompensas',
        description: 'Escolha opções de conversa ou recompensas de missão pelo teclado numérico',
      },
      safePopups: {
        label: 'Proteção de diálogos sensíveis',
        description: 'Impede Espaço de aceitar grupos, evocações, duelos ou liberar espírito (prioriza autorressurreição)',
      },
    },
    comments: {
      header: '[ DialogKey (Espaço e 1-9 para diálogos de PNJ) ]',
      blacklistNote: 'Diálogos da lista negra do DialogKey que Espaço nunca clica',
      selfResNote: 'Preferir segundo botão para Pedra da Alma/Reencarnação; senão nunca liberar',
      gossipButtonsNote: 'Coletar botões clicáveis visíveis ordenados de cima para baixo',
      choiceNote: 'Lembrar recompensa selecionada manualmente quando há múltiplas escolhas',
      combatNote: 'Não é possível alterar propagação de teclas em combate; repassar',
      restorePropagateNote: 'Restaurar propagação de teclas antes de entrar em combate',
    },
  },
  'auto-insert-keystone': {
    title: 'Inserir pedra-chave Mítica+ automaticamente',
    description: 'Coloca automaticamente a pedra-chave correspondente das suas bolsas ao abrir a Fonte de Poder.',
    details: 'Ignora em combate ou se já houver pedra inserida.',
    tag: 'Mítica+',
    comments: {
      header: '[ Inserir pedra-chave Mítica+ automaticamente ]',
      openDelayNote: 'Aguardar um frame após abrir para atualizar afixos e ícone',
      clearCursorNote: 'Limpar o cursor se falhar para não deixar a pedra presa no mouse',
    },
  },
  'train-all-button': {
    title: 'Botão "Aprender Tudo" em instrutores',
    description: 'Adiciona um botão "Aprender Tudo" ao lado de Treinar nos instrutores de classe e profissão.',
    details: 'Passe o mouse para ver a quantidade de habilidades disponíveis e o custo total.',
    tag: 'Poupa tempo',
    comments: {
      header: '[ Botão "Aprender Tudo" em instrutores ]',
      reverseOrderNote: 'Aprender de baixo para cima para manter os índices válidos',
    },
    strings: {
      btnTrainAll: 'Aprender Tudo',
      tooltipFmt: 'Aprender %d habilidade(s) por %s',
    },
  },
  'auto-combat-log': {
    title: 'Registro de combate automático em Raides e M+',
    description: 'Inicia /combatlog automaticamente ao entrar em Raides ou Míticas+ e para ao sair.',
    details: 'Só interrompe o registro se tiver sido iniciado por este módulo.',
    tag: 'Essencial Raide',
    options: {
      raid: { label: 'Ativar em Raides' },
      mythicPlus: { label: 'Ativar em Míticas+' },
    },
    comments: {
      header: '[ Registro de combate automático em Raides e M+ ]',
      diffNote: 'Dificuldade 8 = Pedra-chave Mítica',
    },
    strings: {
      startedMsg: '|cff00ff99[QoL]|r Registro de combate iniciado automaticamente',
      stoppedMsg: '|cff00ff99[QoL]|r Registro de combate parado automaticamente',
    },
  },
};
