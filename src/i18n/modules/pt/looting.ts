import { ModuleTranslation } from '../../types';

export const lootingPt: Record<string, ModuleTranslation> = {
  'faster-loot': {
    title: 'Saque instantâneo (Faster Loot)',
    description: 'Elimina o atraso interno da janela de saque da Blizzard e coleta todos os itens imediatamente.',
    details:
      'Baseado no SpeedyAutoLoot: varre os espaços de trás para frente em LOOT_READY; itens em disputa ou sem espaço ficam na janela e tocam um alerta se a mochila encher.',
    tag: 'Essencial',
    options: {
      speedMode: {
        label: 'Modo de velocidade de saque',
        choices: {
          instant: 'Varredura instantânea (Recomendado)',
          fast: 'Em etapas (0,033s por item)',
        },
      },
    },
    comments: {
      header: '[ Saque instantâneo (SpeedyAutoLoot) ]',
      itemFits: 'Verificar se cabe nas bolsas: primeiro espaço em pilhas existentes, depois espaços livres compatíveis',
      lockedNote: 'Deixar itens bloqueados (rolagem de grupo / outro jogador) na janela da Blizzard',
      lootReadyNote: 'LOOT_READY pode disparar várias vezes em cliques rápidos; manter o primeiro estado',
      invFullNote: 'Tocar som de aviso uma vez quando as bolsas estiverem cheias',
    },
  },
  'skip-loot-confirm': {
    title: 'Pular confirmações de Vinculado ao Saquear e rolagens',
    description: 'Confirma automaticamente itens Vinculados ao Saquear (BoP) e rolagens de Necessidade/Desencantar sem diálogo de confirmação.',
    details: 'Pula apenas a segunda confirmação após seu clique; nunca rola dados automaticamente por você.',
    tag: 'Saque rápido',
    options: {
      lootBind: { label: 'Pular confirmação de saque BoP' },
      lootRoll: { label: 'Pular confirmação de Necessidade/Desencantar' },
    },
    comments: {
      header: '[ Pular confirmações de BoP e rolagens ]',
      hidePopupNote: 'Confirmar imediatamente e ocultar o diálogo exibido no próximo frame',
    },
  },
  'loot-spec-by-boss': {
    title: 'Especialização de saque automática por chefe ou masmorra',
    description:
      'Troca automaticamente sua especialização de saque ao iniciar um encontro conforme suas regras (ex.: "Chefe=Gelo") e restaura a original depois.',
    details:
      'Aceita nome de chefe, instância ou ID de encontro. Use "atual" para acompanhar sua especialização ativa.',
    tag: 'Ajuda Raide',
    options: {
      rules: {
        label: 'Regras de troca',
        description: 'Formato "ChefeOuInstância=Espec", separados por vírgula/ponto e vírgula, ex.: Chefe=Gelo',
      },
      announce: { label: 'Anunciar trocas no chat' },
    },
    comments: {
      header: '[ Especialização de saque automática (LootSpecSwapper) ]',
      originalNote: 'Especialização de saque antes da primeira troca automática; nil = intocado',
      parseRulesNote: 'Analisar regras "Nome=Espec"; dividir apenas em "=" e normalizar pontuação',
      findSpecNote: 'Nome da espec -> ID de saque; 0 significa especialização atual',
      noRuleNote: 'Chefe sem regra: restaurar configuração anterior',
      leaveInstanceNote: 'Restaurar ao sair da instância',
    },
    strings: {
      currentKeyword: 'atual',
      currentSpecLabel: 'Espec. atual',
      switchedMsg: '|cff00ff99[QoL]|r Especialização de saque alterada para "%s"%s',
      restoredNoRule: ' (Chefe: %s sem regra, restaurado)',
      invalidSpecMsg: '|cffff5555[QoL]|r A especialização em "%s=%s" não pertence à sua classe; ignorado',
      restoredLeftInstance: ' (Saiu da instância, restaurado)',
    },
  },
};
