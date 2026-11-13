import { ModuleTranslation } from '../../types';
import { automationKo } from './automation';
import { chatKo } from './chat';
import { inspectKo } from './inspect';
import { inventoryKo } from './inventory';
import { lootingKo } from './looting';
import { mailKo } from './mail';
import { socialKo } from './social';
import { systemKo } from './system';
import { tooltipsKo } from './tooltips';
import { uiKo } from './ui';

export const modulesKo: Record<string, ModuleTranslation> = {
  ...automationKo,
  ...socialKo,
  ...chatKo,
  ...uiKo,
  ...inventoryKo,
  ...lootingKo,
  ...mailKo,
  ...inspectKo,
  ...tooltipsKo,
  ...systemKo,
};
