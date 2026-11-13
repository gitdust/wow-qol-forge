import { ModuleTranslation } from '../../types';
import { automationPt } from './automation';
import { chatPt } from './chat';
import { inspectPt } from './inspect';
import { inventoryPt } from './inventory';
import { lootingPt } from './looting';
import { mailPt } from './mail';
import { socialPt } from './social';
import { systemPt } from './system';
import { tooltipsPt } from './tooltips';
import { uiPt } from './ui';

export const modulesPt: Record<string, ModuleTranslation> = {
  ...automationPt,
  ...socialPt,
  ...chatPt,
  ...uiPt,
  ...inventoryPt,
  ...lootingPt,
  ...mailPt,
  ...inspectPt,
  ...tooltipsPt,
  ...systemPt,
};
