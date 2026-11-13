import { ModuleTranslation } from '../../types';

export const lootingEn: Record<string, ModuleTranslation> = {
  'faster-loot': {
    title: 'Faster Loot',
    description: 'Eliminates Blizzard’s internal loot window delay and loots all drops into your bags instantaneously.',
    details:
      'Event-driven from SpeedyAutoLoot: scans all loot slots in reverse on LOOT_READY; locked roll items and items that cannot fit stay in the loot window and play a sound if bags are full.',
    tag: 'Essential',
    options: {
      speedMode: {
        label: 'Loot speed mode',
        choices: {
          instant: 'Instant sweep (Recommended)',
          fast: 'Stepped (0.033s per slot)',
        },
      },
    },
    comments: {
      header: '[ Faster Loot (SpeedyAutoLoot) ]',
      itemFits: 'Check if item fits in bags: remaining space in existing stacks first, then matching bag slots (SpeedyAutoLoot)',
      lockedNote: 'Leave locked items (group roll / not yours) for the Blizzard loot frame',
      lootReadyNote: 'LOOT_READY can fire repeatedly on spam clicks and flip autoLoot; keep the first state',
      invFullNote: 'Play one warning sound when bags are full (unlooted items stay in window)',
    },
  },
  'skip-loot-confirm': {
    title: 'Skip BoP & Roll Confirmation Popups',
    description: 'Automatically confirms Bind on Pickup loot and Need/Disenchant roll popups without showing "Are you sure?".',
    details: 'Only skips the secondary confirmation for actions you explicitly clicked; never rolls automatically for you.',
    tag: 'Fast Loot',
    options: {
      lootBind: { label: 'Skip BoP loot confirmation' },
      lootRoll: { label: 'Skip Need/Disenchant roll confirmation' },
    },
    comments: {
      header: '[ Skip BoP & Roll Confirmation Popups ]',
      hidePopupNote: 'Confirm immediately, then hide the popup Blizzard shows on the next frame',
    },
  },
  'loot-spec-by-boss': {
    title: 'Auto Loot Spec by Boss or Instance',
    description:
      'Automatically switches your loot specialization at encounter start using rules like "Nexus-Princess=Frost", and restores your original spec on unlisted bosses or when leaving an instance.',
    details:
      'Rules accept boss name, instance name, or encounter ID (boss rules override instance rules). Use "current" to follow your active spec. Original spec is remembered per session.',
    tag: 'Raid Helper',
    options: {
      rules: {
        label: 'Switch rules',
        description: 'Format "BossOrInstance=Spec", separated by commas or semicolons, e.g. Nexus-Princess=Frost, Forge=Fire',
      },
      announce: { label: 'Announce switches in chat' },
    },
    comments: {
      header: '[ Auto Loot Spec by Boss or Instance (LootSpecSwapper) ]',
      originalNote: 'Loot spec before first automatic switch; nil means untouched',
      parseRulesNote: 'Parse "Name=Spec" rules; split only on "=" (boss names may contain colons) and normalize punctuation',
      findSpecNote: 'Spec name -> Loot Spec ID; 0 means follow current specialization',
      noRuleNote: 'Unlisted boss: restore previous loot spec',
      leaveInstanceNote: 'Restore when leaving an instance',
    },
    strings: {
      currentKeyword: 'current',
      currentSpecLabel: 'Current Spec',
      switchedMsg: '|cff00ff99[QoL]|r Loot spec switched to "%s"%s',
      restoredNoRule: ' (Boss: %s unlisted, restored)',
      invalidSpecMsg: '|cffff5555[QoL]|r Spec in rule "%s=%s" does not belong to your class; skipped',
      restoredLeftInstance: ' (Left instance, restored)',
    },
  },
};
