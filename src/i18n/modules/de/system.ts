import { ModuleTranslation } from '../../types';

export const systemDe: Record<string, ModuleTranslation> = {
  'mute-annoying-sounds': {
    title: 'Nervige Reittier- & Spielgeräusche stummschalten',
    description: 'Schaltet Zug-Emotes, Gyrokopter-Dröhnen, mechanische Schritte, Stadtglocken und weitere störende Geräusche gezielt stumm.',
    details: 'Nutzt Blizzards offizielles MuteSoundFile mit den IDs aus Leatrix Plus (Midnight).',
    tag: 'Ohrenschutz',
    options: {
      muteTrains: { label: 'Zug-Emotes', description: 'Pfeifen des /zug Emotes' },
      muteGyrocopters: {
        label: 'Gyrokopter & Flugmaschinen',
        description: 'Motorenlärm von Mimirons Kopf, Mecha-Mogul usw.',
      },
      muteMechSteps: { label: 'Mechanische Reittierschritte', description: 'Metallisches Klacken von Roboschreitern und Mechs' },
      muteChimes: { label: 'Stundenglocken', description: 'Stündliches Glockenläuten in Hauptstädten' },
      muteFizzle: { label: 'Zauber-Fehlschlag', description: 'Zischen bei unterbrochenen oder fehlgeschlagenen Zaubern' },
      muteSniffing: { label: 'Worgen-Schnüffeln', description: 'Wiederholtes Schnüffeln von Worgen-Charakteren' },
      muteYawns: { label: 'Jäger-Katzen-Gähnen', description: 'Gähnen von Katzenbegleitern' },
    },
    comments: {
      header: '[ Nervige Geräusche stummschalten (Leatrix Plus Mute) ]',
      applyNote: 'Aktivierte Gruppen stummschalten, deaktivierte wieder freigeben',
    },
  },
  'silence-rested-emotes': {
    title: 'Emote-Sounds in Ruhebereichen stummschalten',
    description: 'Deaktiviert wiederholte /lachen-, /weinen- und /huhn-Geräusche in Gasthäusern und Hauptstädten.',
    tag: 'Ruhe',
    comments: {
      header: '[ Emote-Sounds in Ruhebereichen stummschalten ]',
      cvarNote: 'Sound_EnableEmoteSounds im Ruhebereich deaktivieren und außerhalb wiederherstellen',
      restoreNote: 'Vor Ausloggen/Zonenwechsel zurücksetzen, da CVars gespeichert werden',
    },
  },
  'disable-screen-glow': {
    title: 'Vollbild-Glühen & Trunkenheits-Unschärfe aus',
    description: 'Deaktiviert übermäßiges FFX-Glow und die verschwommene Trunkenheits-Kamera für ein klares Bild.',
    tag: 'Augenfreundlich',
    comments: {
      header: '[ Vollbild-Glühen & Trunkenheits-Unschärfe aus ]',
    },
  },
  'combat-nameplates': {
    title: 'Gegner-Namensplaketten nur im Kampf',
    description: 'Schaltet gegnerische Namensplaketten bei Kampfbeginn automatisch ein und danach wieder aus.',
    tag: 'Schlaues UI',
    comments: {
      header: '[ Gegner-Namensplaketten nur im Kampf ]',
    },
  },
  'keep-audio-synced': {
    title: 'Audiogerät-Wechsel automatisch synchronisieren',
    description: 'Übernimmt beim Umstecken von Kopfhörern oder Bluetooth-Geräten sofort das neue Windows/macOS-Standardgerät.',
    tag: 'System-QoL',
    comments: {
      header: '[ Audiogerät-Wechsel automatisch synchronisieren ]',
      syncNote: 'Bei Änderung der Ausgabegeräte auf Standardgerät wechseln und Audio neu starten',
      cinematicNote: 'Audio nicht während Zwischensequenzen neu starten; bis zum Ende warten',
    },
  },
  'flash-taskbar': {
    title: 'Taskleisten-Blinken bei Einladungen & Flüstern',
    description: 'Lässt das Spielsymbol in der Taskleiste blinken (optional mit Ton), wenn im Hintergrund Warteschlangen, Bereitschaftschecks oder Flüsternachrichten eingehen.',
    tag: 'Tab-Schutz',
    options: {
      playSound: {
        label: 'Warnton abspielen',
        description: 'Spielt beim Blinken den Bereitschafts-Ton über den Master-Kanal ab',
      },
      flashOnWhisper: {
        label: 'Bei Flüsternachrichten blinken',
        description: 'Blinkt bei Charakter- oder Battle.net-Flüstern (ohne Zusatzton)',
      },
    },
    comments: {
      header: '[ Taskleisten-Blinken bei Einladungen & Flüstern (FlashTaskBar) ]',
      whisperNote: 'Flüstern: nur Ereignis prüfen, Nachrichtentext nicht lesen (in Instanzen geschützt)',
      readyCheckNote: 'Bereitschaftscheck / Dungeon-Einladung / Wiederbelebung / Beschwörung',
      battlefieldNote: 'Schlachtfeld- / Arena-Eintritt',
      lfgHookNote: 'Organisierte Gruppe Einladungsdialog (FlashTaskBar Hook)',
    },
  },
  'talent-ready-check': {
    title: 'Talent-Loadout beim Bereitschaftscheck anzeigen',
    description: 'Gibt bei einem Bereitschaftscheck dein aktives Talent-Loadout im Chat aus, um falsche Talente im Raid zu vermeiden.',
    details: 'Optional erwartete Loadout-Namen angeben (kommagetrennt), um bei Abweichung rot zu warnen.',
    tag: 'Raid-Check',
    options: {
      expectedNames: {
        label: 'Erwartete Loadout-Namen',
        description: 'Leer lassen für reine Anzeige; mehrere Namen durch Komma trennen',
      },
      playSound: { label: 'Warnton bei Abweichung abspielen' },
    },
    comments: {
      header: '[ Talent-Loadout beim Bereitschaftscheck anzeigen ]',
    },
    strings: {
      starterBuild: 'Starter-Build',
      unsavedBuild: 'Ungespeichertes Loadout',
      currentMsg: '|cff00ff99[QoL]|r Aktuelles Talent-Loadout: |cffffd100%s|r',
      mismatchMsg: '|cffff5555[QoL] Falsches Talent-Loadout!|r Aktiv: %s, Erwartet: %s',
    },
  },
  'cvar-tweaks': {
    title: 'Versteckte Standard-CVars anwenden',
    description: 'Wendet beim Einloggen ausgewählte CVar-Einstellungen automatisch auf jeden Charakter an (Absteigen im Flug, Beute am Mauszeiger usw.).',
    details: 'Nicht angehakte Punkte lassen deine bisherigen Ingame-Einstellungen unberührt.',
    tag: 'Twink-Sync',
    options: {
      autoDismountFlying: { label: 'Beim Zaubern im Flug automatisch absteigen' },
      noMapFade: { label: 'Weltkarte beim Laufen nicht verblassen lassen' },
      lootUnderMouse: { label: 'Beutefenster am Mauszeiger öffnen' },
      noTutorials: { label: 'Tutorial-Hinweise deaktivieren' },
      noErrorSpeech: { label: 'Charakter-Fehlersprache aus ("Das kann ich nicht tun")' },
      alwaysCompare: { label: 'Ausrüstung im Tooltip immer vergleichen' },
    },
    comments: {
      header: '[ Versteckte Standard-CVars anwenden ]',
      tableNote: '{ Option, CVar, WertWennAktiv }; deaktivierte Optionen bleiben unverändert',
    },
  },
  'great-vault-reminder': {
    title: 'Hinweis auf Große Schatzkammer',
    description: 'Erinnert beim Einloggen einmalig im Chat (und optional mittig auf dem Bildschirm), falls Belohnungen in der Großen Schatzkammer warten.',
    details: 'Informiert direkt nach dem Login statt erst im Mythisch+-Fenster.',
    tag: 'Wöchentlich',
    options: {
      showCenter: {
        label: 'Warnung auch mittig anzeigen',
        description: 'Zeigt einmalig eine Schlachtzugswarnung in der Bildschirmmitte',
      },
      playSound: { label: 'Hinweiston abspielen' },
    },
    comments: {
      header: '[ Hinweis auf Große Schatzkammer ]',
      skipShownNote: 'Überspringen, wenn das Fenster der Großen Schatzkammer bereits offen ist',
      delayNote: 'Belohnungsdaten treffen kurz nach Login ein; verzögert und bei Update prüfen',
    },
    strings: {
      reminderMsg: 'In der Großen Schatzkammer warten abholbereite Belohnungen!',
    },
  },
};
