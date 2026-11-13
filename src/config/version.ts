/**
 * 魔兽世界版本与项目全局配置
 * 当魔兽世界正式服更新大版本或补丁时，只需在此文件修改对应版本号即可全局生效。
 */
export const WOW_VERSION_CONFIG = {
  // 游戏版本类型
  gameType: '正式服',
  // 游戏客户端版本号（例如 12.1.5）
  gameVersion: '12.1.5',
  // 生成插件的 TOC 同时声明当前和即将上线的客户端版本（优先读取 .env 中的 VITE_WOW_INTERFACE）
  interfaceVersion: import.meta.env.VITE_WOW_INTERFACE?.trim() || '120105, 120107',
  // 默认插件名称（只可输入英文字母）
  defaultAddonName: 'MyQol',
  // 网站作者
  author: 'iCH4O',
  // 网站名称与副标题
  siteName: 'WoW QoL Forge',
  siteSubtitle: '魔兽极简插件工坊',
};
