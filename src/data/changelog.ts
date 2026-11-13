// 更新日志：只记录网站与生成插件的功能变化，不写工程架构改动。
// 新的改动追加到与 package.json version 相同的版本条目下，不自行新增版本号。

import { ChangeType } from '../types';

export type { ChangeType };

export interface ChangeGroup {
  type: ChangeType;
  items: string[];
}

export interface ChangelogEntry {
  version: string;
  date: string;
  summary?: string;
  groups: ChangeGroup[];
}

export const CHANGE_TYPE_LABELS: Record<ChangeType, string> = {
  added: '新增',
  improved: '优化',
  fixed: '修复',
  removed: '移除',
};

export const changelog: ChangelogEntry[] = [
  {
    version: '1.3.1',
    date: '2026-10-28',
    groups: [
      { type: 'added', items: ['功能下载次数统计', '多语言支持（英/简中/繁中/韩/德/俄/法/西/葡，含插件界面与源码注释）'] },
      { type: 'improved', items: ['支持 12.1.5 / 12.1.7 版本标识'] },
      { type: 'removed', items: ['下线 11 个低频与冗余功能'] },
    ],
  },
  {
    version: '1.3.0',
    date: '2026-10-25',
    groups: [
      {
        type: 'added',
        items: ['按首领/副本切换拾取专精', '宏伟宝库奖励提醒', '商人自动补货'],
      },
      { type: 'improved', items: ['排本就位提醒支持密语闪烁任务栏'] },
    ],
  },
  {
    version: '1.2.0',
    date: '2026-10-24',
    groups: [
      {
        type: 'added',
        items: ['游戏内设置面板（/插件名）', '自动确认职责、自动放钥石等 25 项功能'],
      },
      {
        type: 'improved',
        items: ['装绑/战绑标识', '原生窗口任意空白处拖拽与记忆位置'],
      },
      { type: 'removed', items: ['下线雕纹隐藏、聊天框滚轮翻页'] },
    ],
  },
  {
    version: '1.1.0',
    date: '2026-10-23',
    groups: [
      {
        type: 'added',
        items: ['下载插件自带专属图标', '多项功能补充子设置选项'],
      },
      {
        type: 'improved',
        items: ['全面适配正式服 12.1.5', '单功能独立沙盒加载，互不影响'],
      },
      { type: 'fixed', items: ['修复长文本粘贴、邮件助手等 11 项已知问题'] },
      { type: 'removed', items: ['移除 3D 试穿幻化'] },
    ],
  },
  {
    version: '1.0.0',
    date: '2026-10-22',
    groups: [
      {
        type: 'added',
        items: ['首个版本上线：10 大分类 64 项功能，支持搜索、参数配置与一键打包下载'],
      },
    ],
  },
];
