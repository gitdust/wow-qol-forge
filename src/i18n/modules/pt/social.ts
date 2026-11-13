import { ModuleTranslation } from '../../types';

export const socialPt: Record<string, ModuleTranslation> = {
  'accept-party-friends': {
    title: 'Aceitar automaticamente convites de amigos/guilda',
    description: 'Aceita automaticamente convites de grupo de amigos da Battle.net, amigos do jogo e membros da guilda.',
    details: 'Pausa automaticamente se você já estiver na fila do localizador.',
    tag: 'Social QoL',
    comments: {
      header: '[ Aceitar convites de amigos/guilda ]',
      popupNote: 'Marcar inviteAccepted antes de ocultar para que OnHide não recuse o convite',
    },
  },
  'alt-click-invite': {
    title: 'Alt+Clique no nome para convidar ao grupo',
    description: 'Segure Alt e clique com o botão esquerdo no nome de qualquer jogador no chat para convidá-lo na hora.',
    details: 'Dispensa o menu de contexto ao montar grupos de M+ ou raide.',
    tag: 'Grupos',
    comments: {
      header: '[ Alt+Clique no nome para convidar ]',
    },
  },
  'invite-from-whisper': {
    title: 'Convite automático por palavra-chave no sussurro',
    description: 'Convida automaticamente quem sussurrar uma palavra-chave (ex.: "111" ou "inv") quando você estiver solo ou líder/assistente.',
    details: 'Ótimo para raides de guilda, chefes mundiais ou grupos de Pedra-chave Mítica.',
    tag: 'Líder de grupo',
    options: {
      keyword: { label: 'Palavra-chave do convite' },
    },
    comments: {
      header: '[ Convite automático por palavra-chave ]',
    },
  },
  'block-duel-requests': {
    title: 'Recusar automaticamente duelos de desconhecidos',
    description: 'Recusa pedidos de duelo de jogadores fora da lista de amigos e da guilda.',
    details: 'Evita spam de duelos nas capitais ou durante missões.',
    tag: 'Antispam',
    comments: {
      header: '[ Recusar duelos de desconhecidos ]',
    },
  },
  'block-pet-duels': {
    title: 'Recusar duelos de mascotes',
    description: 'Recusa automaticamente desafios de duelo JxJ de mascotes vindos de desconhecidos.',
    tag: 'Antispam',
    comments: {
      header: '[ Recusar duelos de mascotes ]',
    },
  },
  'block-party-invites': {
    title: 'Bloquear convites de grupo de desconhecidos',
    description: 'Recusa automaticamente convites de grupo de jogadores que não são amigos nem membros da guilda.',
    tag: 'Filtro spam',
    comments: {
      header: '[ Bloquear convites de desconhecidos ]',
    },
  },
  'block-social-requests': {
    title: 'Recusar pedidos B.net e convites de guilda',
    description: 'Recusa automaticamente pedidos de amizade da Battle.net e convites de guilda de desconhecidos e mostra o total no chat.',
    details: 'Convites de guilda enviados por amigos continuam permitidos.',
    tag: 'Antispam',
    options: {
      friendRequests: { label: 'Recusar pedidos de amizade Battle.net' },
      guildInvites: { label: 'Recusar convites de guilda (exceto amigos)' },
    },
    comments: {
      header: '[ Recusar pedidos B.net e convites de guilda ]',
      guildPopupNote: 'Aguardar exibição do quadro e ocultá-lo (OnHide chama DeclineGuild)',
    },
    strings: {
      declinedFriendsMsg: '|cff00ff99[QoL]|r %d pedido(s) de amizade da Battle.net recusado(s) automaticamente',
      declinedGuildMsg: '|cff00ff99[QoL]|r Convite de guilda recusado automaticamente',
    },
  },
  'auto-confirm-role': {
    title: 'Confirmar função automaticamente no LFG',
    description: 'Confirma automaticamente a verificação de função no localizador com suas funções escolhidas anteriormente.',
    details: 'Só age quando houver uma função válida marcada; segure Shift para pular.',
    tag: 'Fila rápida',
    options: {
      friendLeaderOnly: {
        label: 'Apenas se o líder for amigo/guilda',
        description: 'Desative para confirmar com qualquer líder de grupo',
      },
    },
    comments: {
      header: '[ Confirmar função automaticamente no LFG ]',
      delayNote: 'Aguardar um frame para atualizar o estado do botão aceitar',
    },
  },
  'safe-queue': {
    title: 'SafeQueue e cronômetro de fila JxJ',
    description: 'Oculta o botão "Sair da fila" nos avisos de campo de batalha/arena, centraliza Entrar e colore o tempo restante.',
    tag: 'JxJ e Instância',
    options: {
      announceWaitTime: {
        label: 'Mostrar tempo de espera no chat',
        description: 'Anuncia quanto tempo levou a fila quando a partida aparece',
      },
    },
    comments: {
      header: '[ SafeQueue e cronômetro de fila JxJ (SafeQueue) ]',
      hideLeaveNote: 'Ocultar botão sair para evitar cliques acidentais',
      waitTimeNote: 'Usar tempo registrado pelo servidor para manter precisão',
    },
    strings: {
      remainingLabel: 'Tempo restante: ',
      waitTimeMsg: '|cff33ff99[SafeQueue]|r Partida pronta! Espera: %02dm %02ds',
    },
  },
  'copy-player-name': {
    title: 'Copiar nome pelo menu de clique direito',
    description: 'Usa a moderna Menu API do WoW 12.x para adicionar "Copiar nome" ao menu de contexto dos jogadores.',
    tag: 'Ação rápida',
    comments: {
      header: '[ Copiar nome pelo menu de clique direito (Menu API) ]',
    },
    strings: {
      copyPrefix: '|cff00ff00[Copiar nome]|r ',
    },
  },
  'lfg-double-click-signup': {
    title: 'Duplo clique para inscrever-se em Grupos Prontos',
    description: 'Dê duplo clique em qualquer grupo na lista de busca de Grupos Prontos para se inscrever direto.',
    details: 'Pula o diálogo caso suas funções já estejam marcadas; Shift+Duplo clique abre o diálogo normalmente.',
    tag: 'Fila rápida',
    options: {
      skipDialog: {
        label: 'Pular diálogo se funções estiverem marcadas',
        description: 'Envia a inscrição na hora (Shift mostra o diálogo)',
      },
    },
    comments: {
      header: '[ Duplo clique para inscrever-se em Grupos Prontos ]',
      skipNote: 'Enviar automaticamente quando SignUpButton estiver ativo sem Shift',
    },
  },
  'guild-motd-login': {
    title: 'Reexibir mensagem do dia da guilda ao entrar',
    description: 'Reexibe a mensagem do dia da guilda (MOTD) alguns segundos após entrar no jogo.',
    tag: 'Guilda QoL',
    comments: {
      header: '[ Reexibir mensagem do dia da guilda ]',
    },
    strings: {
      motdPrefix: '|cff40ff40[Mensagem da guilda]|r ',
    },
  },
};
