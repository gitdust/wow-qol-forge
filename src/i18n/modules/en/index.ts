import { ModuleTranslation } from '../../types';
import { automationEn } from './automation';
import { chatEn } from './chat';
import { inspectEn } from './inspect';
import { inventoryEn } from './inventory';
import { lootingEn } from './looting';
import { mailEn } from './mail';
import { socialEn } from './social';
import { systemEn } from './system';
import { tooltipsEn } from './tooltips';
import { uiEn } from './ui';

export const modulesEn: Record<string, ModuleTranslation> = {
  ...automationEn,
  ...socialEn,
  ...chatEn,
  ...uiEn,
  ...inventoryEn,
  ...lootingEn,
  ...mailEn,
  ...inspectEn,
  ...tooltipsEn,
  ...systemEn,
};
