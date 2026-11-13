import { ModuleTranslation } from '../../types';

export const lootingEs: Record<string, ModuleTranslation> = {
  'faster-loot': {
    title: 'Botín instantáneo (Faster Loot)',
    description: 'Elimina el retardo interno de la ventana de despojo de Blizzard y recoge todo el botín al instante.',
    details:
      'Basado en SpeedyAutoLoot: recorre las ranuras en orden inverso en LOOT_READY; los objetos en tirada o sin espacio quedan en la ventana con sonido de aviso si llenas bolsas.',
    tag: 'Esencial',
    options: {
      speedMode: {
        label: 'Modo de velocidad de botín',
        choices: {
          instant: 'Barrido instantáneo (Recomendado)',
          fast: 'Escalonado (0.033s por objeto)',
        },
      },
    },
    comments: {
      header: '[ Botín instantáneo (SpeedyAutoLoot) ]',
      itemFits: 'Comprobar si cabe en bolsas: primero resto en pilas existentes y luego huecos compatibles',
      lockedNote: 'Dejar objetos bloqueados (tirada de grupo / ajeno) para la ventana de Blizzard',
      lootReadyNote: 'LOOT_READY puede dispararse varias veces al hacer clic rápido; conservar el primer estado',
      invFullNote: 'Reproducir un sonido de aviso si las bolsas están llenas',
    },
  },
  'skip-loot-confirm': {
    title: 'Omitir confirmaciones de BoP y tiradas',
    description: 'Confirma automáticamente objetos Ligados al recoger (BoP) y tiradas de Necesidad/Desencantar sin preguntar «¿Estás seguro?».',
    details: 'Solo omite la segunda confirmación tras tu clic; nunca tira dados por ti automáticamente.',
    tag: 'Botín rápido',
    options: {
      lootBind: { label: 'Omitir confirmación al recoger BoP' },
      lootRoll: { label: 'Omitir confirmación de Necesidad/Desencantar' },
    },
    comments: {
      header: '[ Omitir confirmaciones de BoP y tiradas ]',
      hidePopupNote: 'Confirmar al instante y ocultar el diálogo emergente en el siguiente frame',
    },
  },
  'loot-spec-by-boss': {
    title: 'Especialización de botín automática por jefe o estancia',
    description:
      'Cambia tu especialización de botín al comenzar un encuentro con un jefe. Restaura la anterior si no hay una regla aplicable o si sales de la estancia.',
    details:
      'Acepta el nombre del jefe, el de la estancia o el ID del encuentro. Las reglas de jefe tienen prioridad. Usa «actual» para seguir tu especialización activa.',
    tag: 'Ayuda Banda',
    options: {
      rules: {
        label: 'Reglas de cambio',
        description: 'Usa «NombreDeJefeOIdDeEncuentro=Especialización» o «NombreDeEstancia=Especialización». Escribe los nombres tal como aparecen en el juego y separa las reglas con comas o puntos y coma.',
      },
      announce: { label: 'Anunciar cambios en el chat' },
    },
    comments: {
      header: '[ Especialización de botín automática (LootSpecSwapper) ]',
      originalNote: 'Especialización de botín antes del primer cambio automático; nil = sin tocar',
      parseRulesNote: 'Analizar reglas «Nombre=Espec»; dividir solo por «=» y normalizar signos',
      findSpecNote: 'Nombre de especialización -> ID de botín; 0 = especialización actual',
      noRuleNote: 'Jefe sin regla: restaurar configuración anterior',
      leaveInstanceNote: 'Restaurar al salir de la estancia',
    },
    strings: {
      currentKeyword: 'actual',
      currentSpecLabel: 'Espec. actual',
      switchedMsg: '|cff00ff99[QoL]|r Especialización de botín cambiada a «%s»%s',
      restoredNoRule: ' (Jefe: %s sin regla, restaurado)',
      invalidSpecMsg: '|cffff5555[QoL]|r La especialización de «%s=%s» no pertenece a tu clase; omitido',
      restoredLeftInstance: ' (Saliste de la estancia, restaurado)',
    },
  },
};
