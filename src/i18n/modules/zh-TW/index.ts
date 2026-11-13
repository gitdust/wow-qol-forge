import { ModuleTranslation } from '../../types';
import { automationZhTW } from './automation';
import { chatZhTW } from './chat';
import { inspectZhTW } from './inspect';
import { inventoryZhTW } from './inventory';
import { lootingZhTW } from './looting';
import { mailZhTW } from './mail';
import { socialZhTW } from './social';
import { systemZhTW } from './system';
import { tooltipsZhTW } from './tooltips';
import { uiZhTW } from './ui';

export const modulesZhTW: Record<string, ModuleTranslation> = {
  ...automationZhTW,
  ...socialZhTW,
  ...chatZhTW,
  ...uiZhTW,
  ...inventoryZhTW,
  ...lootingZhTW,
  ...mailZhTW,
  ...inspectZhTW,
  ...tooltipsZhTW,
  ...systemZhTW,
};
