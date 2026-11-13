import { ModuleTranslation } from '../../types';
import { automationDe } from './automation';
import { chatDe } from './chat';
import { inspectDe } from './inspect';
import { inventoryDe } from './inventory';
import { lootingDe } from './looting';
import { mailDe } from './mail';
import { socialDe } from './social';
import { systemDe } from './system';
import { tooltipsDe } from './tooltips';
import { uiDe } from './ui';

export const modulesDe: Record<string, ModuleTranslation> = {
  ...automationDe,
  ...socialDe,
  ...chatDe,
  ...uiDe,
  ...inventoryDe,
  ...lootingDe,
  ...mailDe,
  ...inspectDe,
  ...tooltipsDe,
  ...systemDe,
};
