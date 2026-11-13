import { ModuleTranslation } from '../../types';
import { automationFr } from './automation';
import { chatFr } from './chat';
import { inspectFr } from './inspect';
import { inventoryFr } from './inventory';
import { lootingFr } from './looting';
import { mailFr } from './mail';
import { socialFr } from './social';
import { systemFr } from './system';
import { tooltipsFr } from './tooltips';
import { uiFr } from './ui';

export const modulesFr: Record<string, ModuleTranslation> = {
  ...automationFr,
  ...socialFr,
  ...chatFr,
  ...uiFr,
  ...inventoryFr,
  ...lootingFr,
  ...mailFr,
  ...inspectFr,
  ...tooltipsFr,
  ...systemFr,
};
