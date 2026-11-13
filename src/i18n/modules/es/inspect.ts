import { ModuleTranslation } from '../../types';

export const inspectEs: Record<string, ModuleTranslation> = {
  'true-stat-values': {
    title: 'Rendimientos decrecientes reales de estadísticas secundarias',
    description:
      'Muestra el índice efectivo real, el índice perdido por rendimiento decreciente (DR) y el tramo actual al pasar el cursor sobre Crítico, Celeridad, Maestría, Versatilidad, Parasitar, Evasión o Velocidad.',
    details:
      'Fórmulas y factores tomados de TrueStatValues (simc) para niveles 81–90; se omite automáticamente cuando las estadísticas son secretas.',
    tag: 'Esencial M+',
    options: {
      showNextBracket: {
        label: 'Mostrar progreso del tramo actual',
        description: 'Muestra el índice usado / límite del tramo y la penalización del siguiente tramo en la descripción emergente',
      },
    },
    comments: {
      header: '[ Rendimientos decrecientes reales de estadísticas secundarias (TrueStatValues) ]',
      conversionNote: 'Índice necesario por 1% de estadística entre nivel 81 y 90 (TrueStatValues / simc)',
      bracketsNote: 'Tramos DR: size = rango en %, penalty = pérdida de rendimiento en ese tramo',
      tooltipNote: 'La primera línea de Blizzard tiene forma «Golpe crítico: 25.3%»',
    },
    strings: {
      trueRating: 'Índice efectivo real',
      lostRating: 'Índice perdido (DR)',
      currentPenalty: 'DR del tramo actual',
      bracketProgress: 'Progreso de tramo',
      bracketFormat: '%d / %d (Sig. -%d%%)',
    },
  },
};
