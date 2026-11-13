import { ModuleTranslation } from '../../types';

export const lootingDe: Record<string, ModuleTranslation> = {
  'faster-loot': {
    title: 'Sofortiges Plündern (Faster Loot)',
    description: 'Beseitigt Blizzards interne Plünder-Verzögerung und sammelt alle Beutegegenstände augenblicklich ein.',
    details:
      'Ereignisgesteuert wie SpeedyAutoLoot: durchläuft alle Slots bei LOOT_READY rückwärts; gesperrte Würfel-Items bleiben im Fenster, bei vollen Taschen ertönt ein Warnsignal.',
    tag: 'Unverzichtbar',
    options: {
      speedMode: {
        label: 'Plünder-Geschwindigkeit',
        choices: {
          instant: 'Sofort komplett (Empfohlen)',
          fast: 'Schrittweise (0,033s je Slot)',
        },
      },
    },
    comments: {
      header: '[ Sofortiges Plündern (SpeedyAutoLoot) ]',
      itemFits: 'Prüfen, ob Item in Taschen passt: erst Stapelreste, dann passende Taschenplätze',
      lockedNote: 'Gesperrte Items (Gruppenwurf/fremde Beute) dem Blizzard-Fenster überlassen',
      lootReadyNote: 'Bei Mehrfachklicks kann LOOT_READY erneut feuern; ersten Zustand beibehalten',
      invFullNote: 'Einmaliges Tonsignal bei vollen Taschen',
    },
  },
  'skip-loot-confirm': {
    title: 'BoP- & Würfelbestätigungen überspringen',
    description: 'Bestätigt "Beim Aufheben gebunden"-Beute und Bedarf-/Entzaubern-Würfe sofort ohne Rückfrage.',
    details: 'Überspringt nur die zweite Rückfrage nach deinem Klick; würfelt niemals automatisch.',
    tag: 'Schnellplündern',
    options: {
      lootBind: { label: 'BoP-Plünderbestätigung überspringen' },
      lootRoll: { label: 'Bedarf-/Entzaubern-Bestätigung überspringen' },
    },
    comments: {
      header: '[ BoP- & Würfelbestätigungen überspringen ]',
      hidePopupNote: 'Sofort bestätigen und das anschließend gezeigte Popup im nächsten Frame schließen',
    },
  },
  'loot-spec-by-boss': {
    title: 'Beutespezialisierung nach Boss oder Instanz',
    description:
      'Wechselt bei Kampfbeginn anhand deiner Regeln automatisch die Beutespezialisierung (z. B. "Boss=Frost") und stellt sie bei anderen Bossen oder nach Verlassen der Instanz wieder her.',
    details:
      'Regeln akzeptieren Bossname, Instanzname oder Encounter-ID. Mit "aktuell" folgt die Beute der aktiven Spezialisierung.',
    tag: 'Raid-Helfer',
    options: {
      rules: {
        label: 'Wechselregeln',
        description: 'Format "BossOderInstanz=Spezialisierung", getrennt durch Komma/Semikolon, z. B. Boss=Frost',
      },
      announce: { label: 'Wechsel im Chat ankündigen' },
    },
    comments: {
      header: '[ Beutespezialisierung nach Boss oder Instanz (LootSpecSwapper) ]',
      originalNote: 'Beutespezialisierung vor dem ersten automatischen Wechsel; nil = unverändert',
      parseRulesNote: '"Name=Spez"-Regeln parsen; nur am "=" trennen und Satzzeichen normalisieren',
      findSpecNote: 'Spezialisierungsname -> ID; 0 bedeutet aktuelle Spezialisierung',
      noRuleNote: 'Boss ohne Regel: ursprüngliche Einstellung wiederherstellen',
      leaveInstanceNote: 'Beim Verlassen der Instanz wiederherstellen',
    },
    strings: {
      currentKeyword: 'aktuell',
      currentSpecLabel: 'Aktuelle Spez.',
      switchedMsg: '|cff00ff99[QoL]|r Beutespezialisierung gewechselt zu "%s"%s',
      restoredNoRule: ' (Boss: %s ohne Regel, wiederhergestellt)',
      invalidSpecMsg: '|cffff5555[QoL]|r Spezialisierung in Regel "%s=%s" gehört nicht zu deiner Klasse; übersprungen',
      restoredLeftInstance: ' (Instanz verlassen, wiederhergestellt)',
    },
  },
};
