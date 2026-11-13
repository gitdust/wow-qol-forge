import { ModuleTranslation } from '../../types';
import { automationRu } from './automation';
import { chatRu } from './chat';
import { inspectRu } from './inspect';
import { inventoryRu } from './inventory';
import { lootingRu } from './looting';
import { mailRu } from './mail';
import { socialRu } from './social';
import { systemRu } from './system';
import { tooltipsRu } from './tooltips';
import { uiRu } from './ui';

export const modulesRu: Record<string, ModuleTranslation> = {
  ...automationRu,
  ...socialRu,
  ...chatRu,
  ...uiRu,
  ...inventoryRu,
  ...lootingRu,
  ...mailRu,
  ...inspectRu,
  ...tooltipsRu,
  ...systemRu,
};
