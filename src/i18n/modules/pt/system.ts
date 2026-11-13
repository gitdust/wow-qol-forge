import { ModuleTranslation } from '../../types';

export const systemPt: Record<string, ModuleTranslation> = {
  'mute-annoying-sounds': {
    title: 'Silenciar sons irritantes de montarias e do jogo',
    description: 'Silencia seletivamente apitos de trem, girocópteros, passos mecânicos, sinos horários e outros ruídos repetitivos.',
    details: 'Usa MuteSoundFile oficial com IDs do Leatrix Plus (Midnight) sem afetar o restante do áudio.',
    tag: 'Proteção auditiva',
    options: {
      muteTrains: { label: 'Emotes de trem', description: 'Apito do emote /trem' },
      muteGyrocopters: {
        label: 'Girocópteros e máquinas voadoras',
        description: 'Ruído de motor da Cabeça de Mimiron, Meca-magnata, etc.',
      },
      muteMechSteps: { label: 'Passos de montarias mecânicas', description: 'Passos metálicos de meca-avestruzes e mecas' },
      muteChimes: { label: 'Sinos de hora em hora', description: 'Sinos das capitais a cada hora' },
      muteFizzle: { label: 'Falha de feitiço', description: 'Chiado quando uma conjuração falha ou é interrompida' },
      muteSniffing: { label: 'Farejar de worgen', description: 'Farejadas repetitivas de personagens worgens' },
      muteYawns: { label: 'Bocejos de felinos', description: 'Bocejos de mascotes felinos de caçador' },
    },
    comments: {
      header: '[ Silenciar sons irritantes (Leatrix Plus Mute) ]',
      applyNote: 'Silenciar grupos marcados e reativar os desmarcados',
    },
  },
  'silence-rested-emotes': {
    title: 'Silenciar emotes em estalagens e áreas de descanso',
    description: 'Desativa sons repetitivos de /rir, /chorar e /galinha enquanto você descansa em estalagens ou capitais.',
    tag: 'Silêncio',
    comments: {
      header: '[ Silenciar emotes em áreas de descanso ]',
      cvarNote: 'Desativar Sound_EnableEmoteSounds ao descansar e restaurar ao sair',
      restoreNote: 'Restaurar antes de deslogar ou mudar de área pois a CVar é salva',
    },
  },
  'disable-screen-glow': {
    title: 'Desativar brilho de tela cheia e desfoque bêbado',
    description: 'Desliga o brilho FFX excessivo e o desfoque de câmera quando embriagado para uma imagem mais limpa.',
    tag: 'Conforto visual',
    comments: {
      header: '[ Desativar brilho de tela cheia e desfoque bêbado ]',
    },
  },
  'combat-nameplates': {
    title: 'Mostrar placas de nome inimigas apenas em combate',
    description: 'Ativa automaticamente as placas de vida inimigas ao entrar em combate e oculta fora dele.',
    tag: 'UI inteligente',
    comments: {
      header: '[ Mostrar placas de nome inimigas apenas em combate ]',
    },
  },
  'keep-audio-synced': {
    title: 'Sincronizar mudanças de dispositivo de áudio',
    description: 'Alterna automaticamente o áudio do jogo para o novo dispositivo padrão ao conectar fones ou Bluetooth.',
    tag: 'Sistema QoL',
    comments: {
      header: '[ Sincronizar mudanças de dispositivo de áudio ]',
      syncNote: 'Voltar ao dispositivo padrão do sistema e reiniciar o motor de áudio',
      cinematicNote: 'Evitar reiniciar o áudio durante cenas; aguardar o término',
    },
  },
  'flash-taskbar': {
    title: 'Piscar barra de tarefas em filas, pronto e sussurros',
    description: 'Faz o ícone da barra de tarefas piscar (com som opcional) quando filas, verificações de pronto ou sussurros chegarem em segundo plano.',
    tag: 'Anti-Alt-Tab',
    options: {
      playSound: {
        label: 'Tocar som de alerta',
        description: 'Toca o som de verificação de pronto no canal Principal ao piscar',
      },
      flashOnWhisper: {
        label: 'Piscar ao receber sussurros',
        description: 'Pisca em sussurros de personagem ou Battle.net sem som adicional',
      },
    },
    comments: {
      header: '[ Piscar barra de tarefas (FlashTaskBar) ]',
      whisperNote: 'Sussurros: detectar apenas o evento sem ler a mensagem',
      readyCheckNote: 'Verificação de pronto / Masmorra / Ressurreição / Evocação',
      battlefieldNote: 'Confirmação de entrada em campo de batalha / arena',
      lfgHookNote: 'Diálogo de convite de grupo pronto (FlashTaskBar)',
    },
  },
  'talent-ready-check': {
    title: 'Exibir configuração de talentos ao checar pronto',
    description: 'Mostra no chat sua configuração de talentos ativa durante verificações de pronto para evitar entrar em raide com talentos errados.',
    details: 'Você pode listar nomes esperados (separados por vírgula) para alertar em vermelho e tocar alarme se não bater.',
    tag: 'Checagem Raide',
    options: {
      expectedNames: {
        label: 'Nomes de configuração esperados',
        description: 'Deixe vazio para apenas mostrar a atual; separe vários nomes por vírgula',
      },
      playSound: { label: 'Tocar alarme se não corresponder' },
    },
    comments: {
      header: '[ Exibir configuração de talentos ao checar pronto ]',
    },
    strings: {
      starterBuild: 'Configuração inicial',
      unsavedBuild: 'Configuração não salva',
      currentMsg: '|cff00ff99[QoL]|r Configuração de talentos atual: |cffffd100%s|r',
      mismatchMsg: '|cffff5555[QoL] Talentos incorretos!|r Atual: %s, Esperado: %s',
    },
  },
  'cvar-tweaks': {
    title: 'Aplicar configurações ocultas de CVar ao entrar',
    description: 'Aplica automaticamente suas CVars favoritas ao entrar com cada personagem (desmontar voando, saque sob o cursor, etc.).',
    details: 'Opções desmarcadas deixam suas configurações atuais intactas.',
    tag: 'Sincronia',
    options: {
      autoDismountFlying: { label: 'Desmontar automaticamente ao lançar em voo' },
      noMapFade: { label: 'Não esmaecer o mapa-múndi ao se mover' },
      lootUnderMouse: { label: 'Abrir janela de saque sob o cursor' },
      noTutorials: { label: 'Desativar avisos de tutorial' },
      noErrorSpeech: { label: 'Desativar falas de erro do personagem' },
      alwaysCompare: { label: 'Sempre comparar itens nas dicas de tela' },
    },
    comments: {
      header: '[ Aplicar configurações ocultas de CVar ]',
      tableNote: '{ opção, CVar, valorSeMarcado }; opções desmarcadas não são alteradas',
    },
  },
  'great-vault-reminder': {
    title: 'Lembrete de recompensa do Grande Cofre',
    description: 'Avisa uma vez por entrada no chat (e opcionalmente no centro da tela) quando houver recompensas pendentes no Grande Cofre.',
    details: 'Alerta logo ao conectar em vez de apenas dentro da janela de Míticas+.',
    tag: 'Semanal',
    options: {
      showCenter: {
        label: 'Mostrar alerta no centro da tela',
        description: 'Exibe um aviso único estilo alerta de raide na tela',
      },
      playSound: { label: 'Tocar som de lembrete' },
    },
    comments: {
      header: '[ Lembrete de recompensa do Grande Cofre ]',
      skipShownNote: 'Ignorar se a janela do Grande Cofre já estiver aberta',
      delayNote: 'Os dados semanais chegam logo após o login; checar também em WEEKLY_REWARDS_UPDATE',
    },
    strings: {
      reminderMsg: 'Você tem recompensas esperando no Grande Cofre!',
    },
  },
};
