export type ChangeType = 'added' | 'improved' | 'fixed' | 'removed';

export type Category =
  | 'all'
  | 'automation'
  | 'social'
  | 'chat'
  | 'ui'
  | 'inventory'
  | 'looting'
  | 'mail'
  | 'inspect'
  | 'tooltips'
  | 'system';

export type OptionType = 'boolean' | 'number' | 'string' | 'select';

export interface ModuleOption {
  id: string;
  label: string;
  description?: string;
  type: OptionType;
  default: boolean | number | string;
  min?: number;
  max?: number;
  step?: number;
  choices?: { label: string; value: string | number }[];
  // 模块运行时每次使用时都重新读取该值：游戏内保存后立即生效，无需重载界面
  live?: boolean;
}

export interface QoLModule {
  id: string;
  title: string;
  category: Exclude<Category, 'all'>;
  description: string;
  details?: string;
  tag?: string;
  icon: string;
  defaultEnabled: boolean;
  sourceAddon: string;
  options?: ModuleOption[];
  // 生成的 Lua 在运行时通过 O.<选项 id> 读取选项 (游戏内设置界面可修改)，网页参数只作为默认值
  generateLua: (options: Record<string, any>, L?: {
    c: (key: string) => string;
    s: (key: string) => string;
    t: (key: string) => string;
  }) => string;
}

export interface CategoryInfo {
  id: Category;
  label: string;
  icon: string;
  description: string;
}

export interface Preset {
  id: string;
  name: string;
  description: string;
  icon: string;
  moduleIds: string[];
}

export interface AddonMetadata {
  name: string;
  title: string;
  author: string;
  notes: string;
  interfaceVersion: string;
}
