import { ModuleTranslation } from '../../types';

export const inspectPt: Record<string, ModuleTranslation> = {
  'true-stat-values': {
    title: 'Retornos decrescentes reais de atributos secundários',
    description:
      'Exibe a taxa efetiva real, a perda por retornos decrescentes (DR) e a faixa atual ao passar o mouse em Crítico, Aceleração, Maestria, Versatilidade, Sorver, Evasão ou Velocidade.',
    details:
      'Fórmulas e fatores extraídos de TrueStatValues (simc) para os níveis 81–90; ignorado automaticamente quando atributos estiverem secretos.',
    tag: 'Essencial M+',
    options: {
      showNextBracket: {
        label: 'Mostrar progresso da faixa atual',
        description: 'Exibe taxa usada / limite da faixa e a penalidade da próxima faixa na dica de tela',
      },
    },
    comments: {
      header: '[ Retornos decrescentes reais de atributos secundários (TrueStatValues) ]',
      conversionNote: 'Taxa necessária para 1% de atributo dos níveis 81-90 (fonte: TrueStatValues / simc)',
      bracketsNote: 'Faixas de DR: size = intervalo percentual, penalty = perda de eficiência nesta faixa',
      tooltipNote: 'A primeira linha da Blizzard segue o padrão "Acerto Crítico: 25,3%"',
    },
    strings: {
      trueRating: 'Taxa efetiva real',
      lostRating: 'Taxa perdida (DR)',
      currentPenalty: 'DR da faixa atual',
      bracketProgress: 'Progresso da faixa',
      bracketFormat: '%d / %d (Próx. -%d%%)',
    },
  },
};
