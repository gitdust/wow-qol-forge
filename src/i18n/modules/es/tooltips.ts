import { ModuleTranslation } from '../../types';

export const tooltipsEs: Record<string, ModuleTranslation> = {
  'id-tip': {
    title: 'Mostrar IDs numéricos en tooltips (idTip)',
    description: 'Muestra los IDs de hechizos, auras, objetos, juguetes, PNJ, misiones, monedas, monturas, mascotas y logros en los tooltips.',
    details: 'Implementado con TooltipDataProcessor moderno incluyendo pines de mapa y registro de misiones.',
    tag: 'Avanzado',
    options: {
      showSpell: { label: 'Mostrar IDs de hechizos (incl. auras/mascotas)' },
      showItem: { label: 'Mostrar IDs de objetos (incl. juguetes)' },
      showNpc: { label: 'Mostrar IDs de PNJ/criaturas' },
      showQuest: { label: 'Mostrar IDs de misiones' },
      showCurrency: { label: 'Mostrar IDs de monedas' },
      showCollections: { label: 'Mostrar IDs de monturas/especies/logros' },
    },
    comments: {
      header: '[ Mostrar IDs numéricos en tooltips (idTip) ]',
      dedupNote: 'Evitar añadir dos veces la misma línea de ID en un tooltip',
      questHookNote: 'Los puntos de misión en el mapa y botones del registro no pasan por TooltipDataProcessor',
    },
  },
  'enhance-tooltips': {
    title: 'Colores de clase, rango de hermandad y objetivo',
    description: 'Colorea los nombres de jugadores según su clase y añade el rango de hermandad y su objetivo actual al tooltip.',
    tag: 'Info clara',
    comments: {
      header: '[ Colores de clase, rango de hermandad y objetivo (Leatrix Plus) ]',
      secretSkipNote: 'En contextos restringidos 12.x el token de unidad puede ser secreto; omitir',
      safeFilterNote: 'Las consultas pueden devolver valores secretos; filtrar con Safe()',
      classColorNote: 'Colorear el nombre del jugador por clase',
      guildRankNote: 'Añadir el rango a la línea de hermandad',
      targetNote: 'Objetivo actual',
    },
    strings: {
      youLabel: '>> TÚ <<',
      targetLabel: 'Objetivo:',
    },
  },
  'transmog-status': {
    title: 'Estado de colección de transfiguración',
    description: 'Indica al pie del tooltip de armadura o arma si esa apariencia ya está en tu colección de banda guerrera.',
    tag: 'Coleccionistas',
    comments: {
      header: '[ Estado de colección de transfiguración (Can I Mog It Lite) ]',
      statusRuleNote: 'sourceID exacto conocido -> Coleccionado; misma apariencia de otro objeto -> Conocida; si no, No coleccionado',
    },
    strings: {
      collected: '|cff88ff88Coleccionado|r',
      appearanceCollected: '|cffbbee88Apariencia coleccionada (otro objeto)|r',
      notCollected: '|cffff5588No coleccionado|r',
      label: 'Transfig.:',
    },
  },
  'tooltip-combat-hide': {
    title: 'Ocultar tooltips de unidades en combate',
    description: 'Oculta los tooltips que aparecen al pasar el ratón sobre criaturas o jugadores del mundo 3D durante el combate.',
    details: 'Mantiene visibles los tooltips de hechizos, objetos y marcos de unidad. Permite anclar al cursor opcionalmente.',
    tag: 'Combate limpio',
    options: {
      hideInCombat: { label: 'Ocultar tooltips del mundo en combate' },
      shiftOverride: { label: 'Mostrar manteniendo Shift' },
      anchorCursor: {
        label: 'Anclar tooltips del mundo al cursor',
        description: 'Muestra los tooltips de unidades del mundo junto al cursor en vez de abajo a la derecha',
      },
    },
    comments: {
      header: '[ Ocultar tooltips de unidades en combate ]',
      worldMotionNote: 'Activar movimiento del ratón en WorldFrame para detectar unidades en el mundo 3D',
    },
  },
};
