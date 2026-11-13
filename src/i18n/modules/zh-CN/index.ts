import { ModuleTranslation } from '../../types';
import { automationZhCN } from './automation';
import { chatZhCN } from './chat';
import { inspectZhCN } from './inspect';
import { inventoryZhCN } from './inventory';
import { lootingZhCN } from './looting';
import { mailZhCN } from './mail';
import { socialZhCN } from './social';
import { systemZhCN } from './system';
import { tooltipsZhCN } from './tooltips';
import { uiZhCN } from './ui';

export const modulesZhCN: Record<string, ModuleTranslation> = {
  ...automationZhCN,
  ...socialZhCN,
  ...chatZhCN,
  ...uiZhCN,
  ...inventoryZhCN,
  ...lootingZhCN,
  ...mailZhCN,
  ...inspectZhCN,
  ...tooltipsZhCN,
  ...systemZhCN,
};
