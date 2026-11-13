import { ModuleTranslation } from '../../types';
import { automationEs } from './automation';
import { chatEs } from './chat';
import { inspectEs } from './inspect';
import { inventoryEs } from './inventory';
import { lootingEs } from './looting';
import { mailEs } from './mail';
import { socialEs } from './social';
import { systemEs } from './system';
import { tooltipsEs } from './tooltips';
import { uiEs } from './ui';

export const modulesEs: Record<string, ModuleTranslation> = {
  ...automationEs,
  ...socialEs,
  ...chatEs,
  ...uiEs,
  ...inventoryEs,
  ...lootingEs,
  ...mailEs,
  ...inspectEs,
  ...tooltipsEs,
  ...systemEs,
};
