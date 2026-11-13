import { ModuleTranslation } from '../../types';

export const uiPt: Record<string, ModuleTranslation> = {
  'hide-error-messages': {
    title: 'Ocultar erros vermelhos de combate',
    description: 'Suprime mensagens de erro vermelhas no centro da tela ("Fora de alcance", "Mana insuficiente", etc.).',
    details: 'Usa a lista de permissões do Leatrix Plus para manter alertas importantes como Inventário cheio.',
    tag: 'Tela limpa',
    comments: {
      header: '[ Ocultar erros vermelhos de combate (Leatrix Plus) ]',
      whitelistNote: 'Manter avisos críticos (lista branca Leatrix Plus)',
      pingNote: 'Suprimir também erros do sistema de Ping (12.x GameEvent escreve no UIErrorsFrame)',
    },
  },
  'hide-talking-head': {
    title: 'Ocultar quadro Talking Head (cabeça falante)',
    description: 'Oculta o grande quadro de diálogo de PNJ durante Míticas+, raides e missões mundiais.',
    details: 'Usa hooksecurefunc seguro sem silenciar vozes nem travar missões.',
    tag: 'Essencial M+',
    comments: {
      header: '[ Ocultar quadro Talking Head ]',
    },
  },
  'max-camera-zoom': {
    title: 'Desbloquear zoom máximo da câmera',
    description: 'Define automaticamente cameraDistanceMaxZoomFactor no máximo da Blizzard (2.6) a cada login.',
    details: 'Evita que o jogo redefina o afastamento máximo entre sessões.',
    tag: 'Visão ampla',
    comments: {
      header: '[ Desbloquear zoom máximo da câmera ]',
    },
  },
  'hide-actionbar-elements': {
    title: 'Ocultar atalhos e nomes de macros nas barras',
    description: 'Oculta textos de atalho e títulos de macros nas barras de ação para um visual minimalista.',
    details: 'As duas opções são independentes e mantêm recargas visíveis.',
    tag: 'UI minimalista',
    options: {
      hideHotKey: {
        label: 'Ocultar texto dos atalhos',
        description: 'Oculta textos como 1, 2, Q, E, s-F',
      },
      hideMacroName: {
        label: 'Ocultar nomes de macros',
        description: 'Oculta títulos amarelos na base dos botões',
      },
    },
    comments: {
      header: '[ Ocultar atalhos e nomes de macros ]',
    },
  },
  'hide-boss-banner': {
    title: 'Ocultar faixa de chefe derrotado (Boss Banner)',
    description: 'Suprime a grande faixa central e o resumo de saque após derrotar um chefe de masmorra ou raide.',
    details: 'Mantém sua visão limpa em puxadas rápidas de M+.',
    tag: 'Essencial M+',
    comments: {
      header: '[ Ocultar faixa de chefe derrotado (Leatrix Plus) ]',
      keepIntroNote: 'Suprimir apenas faixa de abate e saque; manter início do encontro',
    },
  },
  'hide-alerts': {
    title: 'Ocultar notificações de conquistas e saques',
    description: 'Oculta toasts de conquistas, montarias e receitas na parte inferior (e opcionalmente avisos de nível/chefe).',
    tag: 'UI limpa',
    options: {
      hideEventToasts: {
        label: 'Ocultar também toasts de eventos',
        description: 'Oculta faixas superiores de subida de nível, objetivos de chefe e batalhas de mascotes',
      },
    },
    comments: {
      header: '[ Ocultar notificações (Leatrix Plus NoAlerts) ]',
      preventReregisterNote: 'Impedir que a Blizzard registre eventos de alerta novamente depois',
      eventToastNote: 'Toasts de eventos (Leatrix Plus HideEventToasts)',
    },
  },
  'hide-zone-text': {
    title: 'Ocultar texto grande ao trocar de zona',
    description: 'Oculta o título gigante do nome da zona/subzona no centro da tela ao entrar em uma área.',
    tag: 'UI minimalista',
    comments: {
      header: '[ Ocultar texto ao trocar de zona ]',
      keepEventsNote: 'Manter eventos e ocultar apenas ao exibir (igual ao Leatrix Plus)',
    },
  },
  'show-ready-timer': {
    title: 'Barra de contagem regressiva do LFG',
    description: 'Exibe uma barra de progresso com o tempo restante abaixo da janela de convite de masmorra/raide.',
    tag: 'Útil',
    comments: {
      header: '[ Barra de contagem regressiva LFG (Leatrix Plus ShowReadyTimer) ]',
    },
  },
  'blizz-move': {
    title: 'Janelas da Blizzard móveis e escaláveis (BlizzMove)',
    description:
      'Desbloqueia cerca de 60 janelas padrão (Personagem, Missões, Feitiços, Profissões, Leilão, Mapa, etc.) para arrastar e redimensionar com Ctrl+Roda. Shift+Clique direito restaura a posição; Ctrl+Clique direito a escala.',
    tag: 'Indispensável',
    options: {
      enableScale: {
        label: 'Permitir Ctrl + Roda do mouse para escala',
        description: 'Segure Ctrl e role o mouse sobre qualquer janela para redimensionar',
      },
    },
    comments: {
      header: '[ Janelas móveis e escaláveis (BlizzMove) ]',
      framesNote: 'Janelas principais do Retail extraídas do BlizzMove 3.8.5',
      addonFramesNote: 'Addons de UI da Blizzard sob demanda -> janelas',
      subFramesNote: 'Subquadros grandes que capturam o mouse e também movem a janela raiz',
      stateNote: 'Salvar estado internamente apenas na sessão sem escrever campos em quadros Blizzard',
      rootsComment: 'quadro -> nomeQuadro',
      handleComment: 'alça -> quadroRaiz',
      posComment: 'quadro -> { x, y } (canto sup. esquerdo na escala 1)',
      scaleComment: 'quadro -> escala',
      pointsComment: 'quadro -> âncoras originais antes do primeiro arraste',
      pendingApplyComment: 'quadros protegidos em combate aguardando reposicionamento',
      pendingHookComment: 'quadros protegidos carregados em combate aguardando hook',
      unpackNote: 'relativeTo pode ser nil; evitar unpack()',
      panelManagerNote: 'Devolver quadro ao gerenciador UIPanelWindows ao restaurar posição',
      userPlacedNote: 'Manter UserPlaced original para não sujar layout-cache',
      repositionNote: 'Reaplicar posição arrastada quando o gerenciador reposicionar',
      wheelNote1: 'Ctrl + Roda: capturar rolagem apenas enquanto Ctrl estiver pressionado sobre um quadro',
      wheelNote2: 'usando uma camada transparente, liberando assim que Ctrl for solto',
      anchorScaleNote: 'Escalar pelo canto superior esquerdo para evitar saltos',
    },
  },
  'slash-way-native': {
    title: 'Comando nativo de marcador no mapa (/way)',
    description: 'Use /way 45.2 60.1 para colocar um pino nativo da Blizzard com feixe guia, ou digite /way para ver suas coordenadas atuais.',
    tag: 'Melhoria nativa',
    comments: {
      header: '[ Comando nativo de marcador no mapa (/way) ]',
    },
    strings: {
      noMapMsg: '|cffff3333[Way]|r Não foi possível obter o mapa atual.',
      currentMapFallback: 'Mapa atual',
      coordMsg: '|cff00ff00[Coords]|r %s: %.1f, %.1f',
      usageMsg: '|cffffaa00[Way]|r Uso: /way 45.2 62.8 (ou /way para ver coordenadas atuais)',
      invalidCoordMsg: '|cffff3333[Way]|r Coordenadas inválidas; digite números entre 0 e 100.',
      pinSetMsg: '|cff00ff00[Way]|r Marcador nativo definido em %s (%.1f, %.1f)!',
    },
  },
  'cursor-ring': {
    title: 'Anel de destaque no cursor',
    description: 'Desenha um anel colorido ao redor do ponteiro do mouse para nunca perdê-lo em lutas cheias de efeitos.',
    details: 'Tamanho, cor e exibição apenas em combate configuráveis. Nunca bloqueia cliques.',
    tag: 'Auxílio combate',
    options: {
      size: { label: 'Tamanho do anel (px)' },
      color: {
        label: 'Cor do anel',
        choices: {
          amber: 'Âmbar',
          white: 'Branco',
          red: 'Vermelho',
          green: 'Verde',
          blue: 'Azul',
        },
      },
      combatOnly: { label: 'Mostrar apenas em combate' },
    },
    comments: {
      header: '[ Anel de destaque no cursor ]',
    },
  },
  'hide-micro-menu-bags': {
    title: 'Ocultar micromenu e barra de bolsas',
    description: 'Oculta o micromenu e a barra de bolsas no canto inferior direito (com exibição opcional ao passar o mouse).',
    details: 'Atalhos (C, P, B, etc.) continuam funcionando normalmente.',
    tag: 'UI minimalista',
    options: {
      hideMicroMenu: { label: 'Ocultar micromenu' },
      hideBagsBar: { label: 'Ocultar barra de bolsas' },
      mouseover: {
        label: 'Mostrar ao passar o mouse',
        description: 'Se desativado, os quadros abrem apenas por atalhos de teclado',
      },
    },
    comments: {
      header: '[ Ocultar micromenu e barra de bolsas ]',
      mouseoverNote: 'Ocultar por opacidade até passar o mouse (sempre visível no Modo de Edição)',
    },
  },
  'hide-portrait-numbers': {
    title: 'Ocultar números de combate nos retratos',
    description: 'Oculta os números flutuantes de dano e cura sobre os retratos do jogador e do mascote.',
    tag: 'UI minimalista',
    comments: {
      header: '[ Ocultar números nos retratos ]',
    },
  },
  'quest-font-size': {
    title: 'Tamanho da fonte de missões',
    description: 'Ajusta o tamanho do texto nos diálogos e registro de missões para leitura mais confortável.',
    tag: 'Legibilidade',
    options: {
      fontSize: {
        label: 'Tamanho do texto da missão',
        description: 'O padrão da Blizzard é ~13; os títulos ficam +2 maiores',
      },
    },
    comments: {
      header: '[ Tamanho da fonte de missões ]',
    },
  },
};
