import { UiDictionary } from '../types';

export const pt: UiDictionary = {
  seo: {
    title: 'WoW QoL Forge - Gerador minimalista de addons para WoW Retail',
    description:
      'Gerador online de addons QoL personalizados para World of Warcraft Retail. Escolha apenas os módulos úteis sem código desnecessário e baixe seu ZIP.',
    ogTitle: 'WoW QoL Forge - Gerador minimalista de addons para WoW Retail',
    ogDescription:
      'Gerador de addons QoL para WoW Retail. Combine {count} módulos leves sem excessos e baixe seu addon sob medida.',
    ogImageAlt: 'Ícone modular WoW QoL Forge',
    siteSubtitle: 'Oficina de addons minimalistas',
    gameType: 'Retail',
  },
  nav: {
    backToModules: 'Voltar aos módulos',
    changelog: 'Histórico',
    githubRepo: 'Repositório GitHub',
    languageAria: 'Mudar idioma',
  },
  toolbar: {
    totalModules: '{count} módulos incluídos',
    showingCount: 'Mostrando {count} módulos',
    selectedCount: 'Selecionados: {selected} / {total}',
    searchPlaceholder: 'Buscar nome ou descrição do módulo...',
    clearSearch: 'Limpar busca',
    selectAllCurrent: 'Selecionar visíveis',
    unselectAllCurrent: 'Desmarcar visíveis',
    tableHeaderModule: 'Módulos e detalhes',
    tableHeaderAction: 'Ações',
    emptyTitle: 'Nenhum módulo encontrado',
    emptyHint: 'Tente trocar a categoria ou limpar a busca',
  },
  moduleRow: {
    downloadsCount: '{count} downloads',
    downloadsTenThousand: '{value}0 mil',
    downloadsUnavailable: 'Contagem indisponível',
    downloadsTitle: '{count} downloads totais',
    optionsButton: 'Opções',
    optionsPreviewTitle: '{title} · Prévia das opções',
    optionsReadonlyHint: 'Somente leitura · Marque este módulo para configurar na gaveta lateral',
    optionOn: 'Ativo',
    optionOff: 'Inativo',
    sourceButton: 'Código',
    sourceButtonTitle: 'Ver código Lua independente',
  },
  drawer: {
    title: 'Módulos selecionados e config',
    itemCount: '{count} itens',
    defaultsHintPrefix: 'Estes valores são padrões. Digite',
    defaultsHintSuffix: 'no jogo para ativar/desativar módulos ou ajustar opções',
    clearAll: 'Limpar tudo',
    clearAllTitle: 'Remover todos os módulos selecionados',
    closeDrawer: 'Fechar painel',
    addonNameLabel: 'Nome da pasta do addon',
    addonNameHint: '(Apenas letras em inglês, qualquer tamanho)',
    addonNameDefault: 'Padrão: {name}',
    charsCount: '{count} car.',
    addonNameError: 'O nome do addon não pode ficar vazio e só aceita letras (A-Z, a-z)',
    emptyTitle: 'Nenhum módulo selecionado',
    emptyDesc:
      'Marque os recursos desejados na lista à esquerda para configurá-los aqui.',
    expandOptions: 'Expandir opções',
    collapseOptions: 'Recolher opções',
    optionsButton: 'Opções',
    removeTitle: 'Remover da seleção',
    selectedLabel: '{count} selecionados',
    codePreview: 'Ver código',
    downloading: 'Gerando ZIP...',
    downloadButton: 'Baixar addon ({count})',
  },
  floating: {
    buttonTitle: 'Abrir módulos selecionados para configurar e baixar',
    buttonLabel: 'Configurar e Baixar',
  },
  codeModal: {
    subtitle: 'Código Lua limpo e sem dependências para WoW Retail moderno',
    copyFile: 'Copiar arquivo',
    copied: 'Copiado!',
    close: 'Fechar',
    lineCount: 'Linhas: {count}',
    closeWindow: 'Fechar janela',
    moduleSourceTitle: '{title} ({id}) - Código do módulo',
    bundlePreviewTitle: '{name} - Prévia completa ({count} módulos ativos)',
  },
  changelog: {
    title: 'Histórico de alterações',
    currentVersion: 'Versão atual',
    backToModules: 'Voltar aos módulos',
    currentBadge: 'Atual',
    types: {
      added: 'Adicionado',
      improved: 'Melhorado',
      fixed: 'Corrigido',
      removed: 'Removido',
    },
    entries: {
      '1.3.1': {
        groups: [
          { type: 'added', items: ['Contador de downloads por módulo', 'Suporte a 9 idiomas (incluindo interface no jogo e comentários em Lua)'] },
          { type: 'improved', items: ['Suporte às versões de interface 12.1.5 / 12.1.7'] },
          { type: 'removed', items: ['Removidos 11 módulos pouco usados ou redundantes'] },
        ],
      },
      '1.3.0': {
        groups: [
          {
            type: 'added',
            items: [
              'Troca automática de especialização de saque por chefe/masmorra',
              'Lembrete de recompensa do Grande Cofre',
              'Reabastecimento automático em vendedores',
            ],
          },
          { type: 'improved', items: ['Piscar barra de tarefas também em sussurros e verificação de pronto'] },
        ],
      },
      '1.2.0': {
        groups: [
          {
            type: 'added',
            items: [
              'Painel de configurações no jogo (/nomeaddon)',
              '25 novos módulos incluindo confirmação de função e inserção de pedra-chave',
            ],
          },
          {
            type: 'improved',
            items: ['Marcações BoE/Bando de Guerra', 'Arrastar janelas padrão e lembrar posição'],
          },
          { type: 'removed', items: ['Removidos ocultar efeitos de glifos e rolagem do chat com o mouse'] },
        ],
      },
      '1.1.0': {
        groups: [
          {
            type: 'added',
            items: ['Ícone exclusivo incluído no ZIP', 'Subopções adicionadas em vários módulos'],
          },
          {
            type: 'improved',
            items: ['Compatibilidade total com Retail 12.1.5', 'Carregamento isolado via pcall por módulo'],
          },
          { type: 'fixed', items: ['Corrigidos 11 problemas conhecidos incluindo texto longo e correio'] },
          { type: 'removed', items: ['Removido auxiliar 3D de transmog'] },
        ],
      },
      '1.0.0': {
        groups: [
          {
            type: 'added',
            items: ['Lançamento inicial: 64 módulos em 10 categorias com busca, opções e download ZIP'],
          },
        ],
      },
    },
  },
  footer: {
    sourcesLabel: 'Inspirado em',
    taintTitle: 'Zero contaminação (Zero Taint)',
    taintDesc:
      'Segue rigorosamente o sandbox moderno da Blizzard (hooksecurefunc, TooltipDataProcessor) sem sobrescrever funções globais protegidas.',
    kernelTitle: 'Micro-núcleo único de eventos',
    kernelDesc:
      'Escolha 3 ou 30 módulos: um único Frame leve distribui todos os eventos com isolamento pcall e consumo mínimo de memória.',
    installTitle: 'Guia rápido de instalação',
    step1Title: '1. Escolher e baixar',
    step1Desc:
      'Marque os módulos desejados, abra o painel flutuante no canto inferior direito e baixe o ZIP.',
    step2Title: '2. Extrair para AddOns',
    step2Desc: 'Copie a pasta extraída (padrão MyQol) para o diretório AddOns do WoW:',
    step3Title: '3. Jogar imediatamente',
    step3DescPrefix:
      'Os recursos ativos funcionam ao entrar no jogo. Para ajustar opções no jogo, digite',
    step3DescCmd: ' /nomeaddon',
    step3DescSuffix: ' (ex.: /myqol) no chat.',
    friendlyLinks: 'Links:',
    wowApiLabel: 'World of Warcraft API (Warcraft Wiki)',
    wowUiSourceLabel: 'WoW UI Source (GitHub)',
  },
  alerts: {
    invalidAddonName: 'Digite um nome de addon apenas com letras em inglês (ex.: MyQol)',
    selectOneModule: 'Selecione pelo menos um módulo',
    downloadFailed: 'Falha ao gerar o pacote, tente novamente',
    defaultAddonNotes:
      'Addon QoL minimalista e personalizado para World of Warcraft Retail',
  },
  categories: {
    all: {
      label: 'Todos os módulos',
      description: 'Veja todos os módulos QoL leves e testados',
    },
    automation: {
      label: 'Automação',
      description: 'Reparo automático, vender lixo, missões rápidas, pular cenas, destruir fácil',
    },
    social: {
      label: 'Social e Grupo',
      description: 'Aceitar convites de amigos/guilda, convite por sussurro, bloquear duelos e spam',
    },
    chat: {
      label: 'Chat',
      description: 'Setas no cursor, copiar texto e links, nomes compactos de canais',
    },
    ui: {
      label: 'Interface e Visual',
      description: 'Ocultar erros vermelhos e cabeças falantes, zoom máximo, barras limpas',
    },
    inventory: {
      label: 'Bolsas e Mercador',
      description: 'Compra em massa sem limite, destacar receitas conhecidas, durabilidade',
    },
    looting: {
      label: 'Saque rápido',
      description: 'Elimina o atraso interno de saque para coletar itens instantaneamente',
    },
    mail: {
      label: 'Correio',
      description: 'Abrir todo o correio em um clique, envio rápido, bloquear troca na caixa',
    },
    inspect: {
      label: 'Atributos',
      description: 'Análise real de retornos decrescentes de atributos secundários no personagem',
    },
    tooltips: {
      label: 'Dicas de tela',
      description: 'Exibir IDs de feitiços/itens/PNJs/missões e colorir alvo e guilda',
    },
    system: {
      label: 'Sistema e Áudio',
      description: 'Silenciar sons irritantes de montarias, brilho da tela, piscar barra de tarefas',
    },
  },
  presets: {
    'all-in-one': {
      name: 'Tudo em um diário (Recomendado)',
      description:
        '19 essenciais confiáveis: reparo, vender lixo, saque instantâneo, pular cenas, correio rápido, janelas móveis e mais.',
    },
    'dungeon-raid': {
      name: 'Mítica+ e Raide',
      description:
        'Ocultar cabeças falantes e erros, zoom máximo, saque instantâneo, contador de pronto e análise de atributos.',
    },
    'pvp-combat': {
      name: 'Combate JxJ',
      description:
        'Liberação instantânea em campo de batalha, filtro de erros, zoom máximo, placas de combate e fila JxJ segura.',
    },
    'merchant-life': {
      name: 'Comércio e Profissões',
      description:
        'Compra em lote, reparo automático, vender lixo, receitas aprendidas, correio rápido e envio de ouro.',
    },
  },
  generator: {
    luaHeaderGeneratedBy: 'Gerado por WoW QoL Forge',
    luaHeaderTargetInterface: 'Interface alvo',
    luaHeaderSelectedModules: 'Módulos selecionados',
    luaHeaderNote:
      'Nota: As opções web são padrões. Digite /{slash} no jogo para alternar módulos e editar opções.',
    commentErrorReport: 'Relatório de erros (imprimir cada erro único apenas uma vez)',
    runtimeErrorPrint: 'Módulo ',
    commentEventBus:
      'Barramento de eventos leve (um único Frame distribui tudo sem taint)',
    commentUnknownEvent:
      'Eventos desconhecidos geram erro em clientes modernos; capturar e ignorar',
    runtimeEventError: 'Não foi possível registrar o evento ',
    commentFeatureList: 'Registro de módulos: categorias, módulos e opções padrão',
    commentSavedVars:
      'SavedVariables ({savedVar}): salva apenas diferenças em relação aos padrões',
    commentDefaultEnabled: 'Ativado por padrão; salvar apenas estado desativado',
    commentOptionProxy:
      'Módulos leem O.<key> obtendo sempre o valor salvo ou padrão mais recente',
    commentSettingsCallbacks:
      'Módulos podem registrar OnSettingsChanged para aplicar mudanças sem /reload',
    commentModuleLoader:
      'Aguardar ADDON_LOADED e iniciar cada módulo ativo em um bloco pcall isolado',
    commentModuleLoaderStates: 'started: tentativa de carga; loaded: carregado sem erros',
    commentModuleLabel: 'Módulo',
    commentSourceLabel: 'Referência',
    commentWelcome: 'Mensagem de boas-vindas ao entrar',
    runtimeWelcomeLoaded: ' carregou ',
    runtimeWelcomeOpenCmd: ' módulos. Digite ',
    tocDefaultNotes: 'Addon QoL leve e personalizado feito com WoW QoL Forge',
    readmeTitle: '# {name} - Addon minimalista personalizado para WoW',
    readmeGeneratedBy: 'Gerado no navegador com **WoW QoL Forge**.',
    readmeImportantTitle: '## 💡 Notas importantes',
    readmeImportantBody:
      'Os módulos escolhidos no site ficam ativos ao entrar no jogo com os valores padrões definidos.\nDigite `/{slash}` no chat para abrir o painel: escolha a categoria à esquerda, marque para ativar/desativar,\ne clique na seta à direita para expandir subopções. Tudo é salvo automaticamente.\nTambém disponível em Opções -> AddOns.',
    readmeInstallTitle: '## 📦 Instalação',
    readmeInstallStep1: '1. Extraia o arquivo baixado para obter a pasta `{name}`.',
    readmeInstallStep2:
      '2. Copie `{name}` para a pasta AddOns de World of Warcraft:\n   - Caminho padrão: `World of Warcraft\\_retail_\\Interface\\AddOns\\{name}`',
    readmeInstallStep3: '3. Inicie o WoW ou digite `/reload` no chat.',
    readmeSelectedTitle: '## ⚙️ Módulos incluídos ({count})',
    panel: {
      headerComment: 'Painel de configurações no jogo',
      loadedStateComment:
        'Registra o estado inicial para detectar quando é necessário recarregar a interface',
      needsReloadComment:
        'Ativar ou desativar módulos exige recarregar a UI pois hooks não podem ser desfeitos',
      needsReloadStatus: '|cffff8040Algumas alterações exigem recarregar a UI|r',
      setValueComment: 'Salvar imediatamente e notificar o módulo ativo se houver callback live',
      optionLineComment: 'Linha de opção: caixa / número / texto / menu',
      needsReloadTag: ' |cff888888(Recarregar)|r',
      rowComment: 'Linha do módulo: caixa + título + descrição + seta de opções',
      collapseOptions: 'Recolher opções',
      expandOptions: 'Expandir opções',
      windowTitleSuffix: ' Configurações',
      allCategory: 'Todos',
      bottomHint: 'Marque para ativar · Seta para opções · Salvo automaticamente',
      reloadButton: 'Recarregar UI',
      settingsTabComment: 'Adicionar atalho em Opções -> AddOns',
      settingsTabText: ' usa uma janela dedicada. Você também pode digitar ',
      openPanelButton: 'Abrir configurações',
    },
  },
};
