import { ModuleTranslation } from '../../types';

export const inventoryPt: Record<string, ModuleTranslation> = {
  'buy-em-all': {
    title: 'Compra em lote em mercadores (BuyEmAll)',
    description:
      'Shift+Clique direito em um item do vendedor abre um campo de quantidade com o máximo possível e compra automaticamente em lotes.',
    details: 'Considera ouro, espaços livres (incluindo bolsa de reagentes) e estoque do vendedor.',
    tag: 'Profissões',
    comments: {
      header: '[ Compra em lote em mercadores (BuyEmAll) ]',
      freeBagSpaceNote: 'Capacidade livre: espaços vazios * tamanho da pilha + espaço em pilhas parciais',
      goldOnlyNote: 'Tratar apenas itens unitários em ouro; manter custos especiais e pacotes intactos',
    },
    strings: {
      popupText: 'Comprar %s\nMáximo disponível: %d (limitado por ouro, bolsas e estoque)',
      insufficientMsg: 'Ouro ou espaço na bolsa insuficiente para comprar',
    },
  },
  'already-known': {
    title: 'Destacar receitas e colecionáveis já aprendidos',
    description: 'Tinge de verde receitas, moldes, montarias, mascotes e brinquedos conhecidos em mercadores, Leilão e Banco da Guilda.',
    details: 'Evita compras duplicadas acidentais de relance.',
    tag: 'Colecionadores',
    comments: {
      header: '[ Destacar receitas e colecionáveis já aprendidos (AlreadyKnown) ]',
      cagedPetNote: 'Mascotes de batalha enjaulados',
      knownTooltipNote: 'Receitas/moldes: buscar ITEM_SPELL_KNOWN na dica',
      merchantNote: 'Mercador',
      ahNote: 'Lista da Casa de Leilões',
      guildBankNote: 'Banco da Guilda',
      guildBankConstNote: 'Constantes internas do Banco da Guilda (98 espaços por aba, 14 por coluna)',
    },
  },
  'durability-status': {
    title: 'Resumo de durabilidade no painel do personagem',
    description: 'Mostra a porcentagem total de durabilidade no canto inferior direito do painel do personagem com detalhes ao passar o mouse e aviso ao morrer.',
    tag: 'QoL básico',
    comments: {
      header: '[ Resumo de durabilidade no painel do personagem (Leatrix Plus) ]',
      getDurabilityNote: 'Retornar porcentagem total e detalhamento por espaço; nil se não houver durabilidade',
      buttonNote: 'Rótulo de durabilidade no canto inferior direito de PaperDollFrame',
      deathNoticeNote: 'Imprimir no chat ao morrer (limitado a 1x a cada 2s)',
    },
    strings: {
      labelPrefix: 'Durab. ',
      tooltipTitle: 'Durabilidade do equipamento',
      tooltipTotal: 'Total',
      deathMsg: '|cffff9900[QoL]|r Durabilidade atual do equipamento: ',
    },
  },
  'hide-cleanup-buttons': {
    title: 'Ocultar botões de organizar bolsas e banco',
    description: 'Oculta os ícones de vassoura de limpeza automática nas bolsas e no banco para evitar bagunçar sua organização.',
    tag: 'Proteção',
    comments: {
      header: '[ Ocultar botões de organizar bolsas e banco ]',
      hideNote: 'Ocultar ao exibir; no Retail 12.x o botão do banco é BankPanel.AutoSortButton',
    },
  },
  'quest-item-destroy-info': {
    title: 'Info de missão antes de destruir itens de missão',
    description: 'Mostra no chat a missão relacionada e se ela já foi aceita ao tentar destruir um item de missão.',
    details: 'Ajuda a evitar excluir acidentalmente itens de missões ativas ou iniciadores de missão.',
    tag: 'Proteção',
    comments: {
      header: '[ Info de missão antes de destruir itens de missão ]',
    },
    strings: {
      questFallback: 'Missão ',
      stateActive: 'no seu registro de missões',
      stateStarter: 'ainda não aceita — este item inicia uma missão',
      warnRelated: '|cffff5555[QoL] Aviso:|r Este item está ligado à missão "%s" (%s)',
      warnGeneric: '|cffff5555[QoL] Aviso:|r Este é um item de missão e pode precisar ser obtido novamente se destruído',
    },
  },
  'auto-restock': {
    title: 'Reabastecimento automático em mercadores',
    description: 'Compra consumíveis ou reagentes automaticamente até as quantidades desejadas ao abrir um mercador (ex.: "Água=40").',
    details: 'Aceita nomes exatos ou IDs; compra apenas itens unitários em ouro respeitando ouro, bolsas e estoque.',
    tag: 'Poupa tempo',
    options: {
      items: {
        label: 'Lista de reabastecimento',
        description: 'Formato "NomeOuID=QuantidadeAlvo", separados por vírgula/ponto e vírgula, ex.: 113509=20',
      },
      showSummary: { label: 'Mostrar resumo no chat' },
    },
    comments: {
      header: '[ Reabastecimento automático em mercadores (Restocker) ]',
      parseListNote: 'Analisar lista "ItemOuID=Quantidade"; dividir em "=" ASCII',
      freeBagSpaceNote: 'Calcular espaço livre nas bolsas',
      goldOnlyNote: 'Comprar apenas itens unitários pagos em ouro',
      delayNote: 'Dados do mercador terminam de carregar um frame após MERCHANT_SHOW',
    },
    strings: {
      summaryMsg: '|cff00ff99[QoL]|r Reabastecido automaticamente: %s (gasto %s)',
      listSep: ', ',
    },
  },
};
