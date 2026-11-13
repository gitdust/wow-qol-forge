import { ModuleTranslation } from '../../types';

export const inspectRu: Record<string, ModuleTranslation> = {
  'true-stat-values': {
    title: 'Реальная убывающая доходность вторичных статов',
    description:
      'Показывает эффективный рейтинг, потерю от убывающей доходности (DR) и текущий порог при наведении на Крит, Скорость, Искусность, Универсальность, Самоисцеление, Избежание и Скорость передвижения.',
    details:
      'Формулы и коэффициенты взяты из TrueStatValues (simc) для уровней 81–90; автоматически пропускается, если статы скрыты как секретные.',
    tag: 'Для М+',
    options: {
      showNextBracket: {
        label: 'Показывать прогресс текущего порога',
        description: 'Отображает в подсказке использованный рейтинг / лимит порога и штраф следующего уровня',
      },
    },
    comments: {
      header: '[ Реальная убывающая доходность вторичных статов (TrueStatValues) ]',
      conversionNote: 'Рейтинг за 1% характеристики для уровней 81-90 (источник: TrueStatValues / simc)',
      bracketsNote: 'Пороги DR: size — процентный интервал, penalty — потеря эффективности в пороге',
      tooltipNote: 'Первая строка подсказки Blizzard выглядит как «Критический удар: 25.3%»',
    },
    strings: {
      trueRating: 'Эффективный рейтинг',
      lostRating: 'Потеряно от DR',
      currentPenalty: 'Штраф текущего порога',
      bracketProgress: 'Прогресс порога',
      bracketFormat: '%d / %d (След. -%d%%)',
    },
  },
};
