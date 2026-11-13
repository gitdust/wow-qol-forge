import { AddonMetadata } from '../types';

export interface SavedPresetPayload {
  v: number; // schema version
  meta: AddonMetadata;
  modules: string[];
  options: Record<string, Record<string, any>>;
}

const STORAGE_KEY = 'wow_qol_forge_preset';

/**
 * 自动保存当前配置到 LocalStorage。
 * 玩家下次打开页面时由 loadFromLocalStorage 恢复。
 */
export function saveToLocalStorage(
  metadata: AddonMetadata,
  selectedModuleIds: string[],
  moduleOptions: Record<string, Record<string, any>>
) {
  try {
    const payload: SavedPresetPayload = {
      v: 1,
      meta: metadata,
      modules: selectedModuleIds,
      options: moduleOptions,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (e) {
    console.warn('LocalStorage save failed', e);
  }
}

/**
 * 读取上次自动保存的配置；无存档或数据损坏时返回 null。
 */
export function loadFromLocalStorage(): SavedPresetPayload | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && Array.isArray(parsed.modules)) {
      return parsed;
    }
  } catch (e) {
    console.warn('LocalStorage load failed', e);
  }
  return null;
}