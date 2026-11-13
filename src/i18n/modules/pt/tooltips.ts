import { ModuleTranslation } from '../../types';

export const tooltipsPt: Record<string, ModuleTranslation> = {
  'id-tip': {
    title: 'Exibir IDs numéricos nas dicas (idTip)',
    description: 'Mostra IDs de feitiços, auras, itens, brinquedos, PNJs, missões, moedas, montarias, mascotes e conquistas no rodapé das dicas.',
    details: 'Baseado no TooltipDataProcessor moderno incluindo pinos de mapa e registro de missões.',
    tag: 'Avançado',
    options: {
      showSpell: { label: 'Mostrar IDs de feitiços (auras/mascotes incl.)' },
      showItem: { label: 'Mostrar IDs de itens (brinquedos incl.)' },
      showNpc: { label: 'Mostrar IDs de PNJs/criaturas' },
      showQuest: { label: 'Mostrar IDs de missões' },
      showCurrency: { label: 'Mostrar IDs de moedas' },
      showCollections: { label: 'Mostrar IDs de montarias/espécies/conquistas' },
    },
    comments: {
      header: '[ Exibir IDs numéricos nas dicas (idTip) ]',
      dedupNote: 'Evitar adicionar a mesma linha de ID duas vezes na mesma dica',
      questHookNote: 'Pinos de missão no mapa e botões do registro não passam pelo TooltipDataProcessor',
    },
  },
  'enhance-tooltips': {
    title: 'Cores de classe, posto da guilda e alvo',
    description: 'Colore nomes de jogadores por classe e exibe posto na guilda e alvo atual nas dicas de tela.',
    tag: 'Info clara',
    comments: {
      header: '[ Cores de classe, posto da guilda e alvo (Leatrix Plus) ]',
      secretSkipNote: 'Em contextos restritos 12.x o token de unidade pode ser secreto; pular',
      safeFilterNote: 'Consultas podem retornar valores secretos; filtrar com Safe()',
      classColorNote: 'Colorir nome do jogador pela classe',
      guildRankNote: 'Adicionar posto à linha da guilda',
      targetNote: 'Alvo atual',
    },
    strings: {
      youLabel: '>> VOCÊ <<',
      targetLabel: 'Alvo:',
    },
  },
  'transmog-status': {
    title: 'Status de coleção de transmog',
    description: 'Mostra na dica de armaduras ou armas se a aparência já faz parte da sua coleção de Bando de Guerra.',
    tag: 'Colecionadores',
    comments: {
      header: '[ Status de coleção de transmog (Can I Mog It Lite) ]',
      statusRuleNote: 'sourceID exato conhecido -> Coletado; mesma aparência de outro item -> Conhecida; senão Não coletado',
    },
    strings: {
      collected: '|cff88ff88Coletado|r',
      appearanceCollected: '|cffbbee88Aparência coletada (outro item)|r',
      notCollected: '|cffff5588Não coletado|r',
      label: 'Transmog:',
    },
  },
  'tooltip-combat-hide': {
    title: 'Ocultar dicas de unidades do mundo em combate',
    description: 'Oculta dicas ao passar o mouse sobre monstros ou jogadores no mundo 3D durante o combate.',
    details: 'Mantém visíveis dicas de feitiços, itens e quadros de unidade. Ancoragem ao cursor opcional.',
    tag: 'Combate limpo',
    options: {
      hideInCombat: { label: 'Ocultar dicas de unidades do mundo em combate' },
      shiftOverride: { label: 'Mostrar ao segurar Shift' },
      anchorCursor: {
        label: 'Fixar dicas do mundo no cursor',
        description: 'Exibe dicas de unidades do mundo perto do cursor em vez do canto inferior direito',
      },
    },
    comments: {
      header: '[ Ocultar dicas de unidades do mundo em combate ]',
      worldMotionNote: 'Habilitar movimento do mouse no WorldFrame para detectar unidades no mundo 3D',
    },
  },
};
