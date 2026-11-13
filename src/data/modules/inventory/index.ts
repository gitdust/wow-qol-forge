import { QoLModule } from '../../../types';
import buyEmAllLua from './buy-em-all.lua';
import alreadyKnownLua from './already-known.lua';
import durabilityStatusLua from './durability-status.lua';
import hideCleanupButtonsLua from './hide-cleanup-buttons.lua';
import questItemDestroyInfoLua from './quest-item-destroy-info.lua';
import autoRestockLua from './auto-restock.lua';

export const inventoryModules: QoLModule[] = [
  {
    id: 'buy-em-all',
    title: '突破商人批量购买上限 (BuyEmAll)',
    category: 'inventory',
    description: '在商人处 Shift+右键点击商品时，弹出数量输入框并显示最多可买数量，突破原版单次一组的上限，自动分批购买。',
    details: '可买数量同时受金币、背包空间（含材料包）与商人库存限制；需要额外货币或打包出售的商品保持暴雪原生行为。',
    tag: '制造必备',
    icon: 'ShoppingCart',
    defaultEnabled: true,
    sourceAddon: 'BuyEmAll',
    generateLua: buyEmAllLua,
  },
  {
    id: 'already-known',
    title: '已学会配方/图纸绿色高亮 (AlreadyKnown)',
    category: 'inventory',
    description: '在商人、拍卖行与公会银行中，为当前角色已经学会的图纸、配方以及已收集的坐骑、宠物、玩具图标染成绿色。',
    details: '直接在商人界面一目了然分辨哪些配方已经学会，彻底告别手滑买错重复图纸。',
    tag: '收集防坑',
    icon: 'BookOpenCheck',
    defaultEnabled: true,
    sourceAddon: 'AlreadyKnown',
    generateLua: alreadyKnownLua,
  },
  {
    id: 'durability-status',
    title: '角色面板装备耐久度一览',
    category: 'inventory',
    description: '在人物装备面板右下角显示全身装备耐久百分比，悬停可查看逐件耐久；角色死亡时在聊天框提示当前耐久。',
    tag: '基础便利',
    icon: 'Wrench',
    defaultEnabled: true,
    sourceAddon: 'Leatrix Plus',
    generateLua: durabilityStatusLua,
  },
  {
    id: 'hide-cleanup-buttons',
    title: '隐藏背包与银行一键整理按钮',
    description: '隐藏背包与银行界面右上角的暴雪原生“整理背包”小扫把按钮，防止误点打乱自己的分类排布。',
    category: 'inventory',
    tag: '防误触',
    icon: 'Package',
    defaultEnabled: false,
    sourceAddon: 'Leatrix Plus',
    generateLua: hideCleanupButtonsLua,
  },
  {
    id: 'quest-item-destroy-info',
    title: '摧毁任务物品前提示相关任务',
    category: 'inventory',
    description: '准备摧毁与任务有关的物品（包括能开启任务的物品）时，在聊天框提示它对应哪个任务、任务是否已接。',
    details: '避免误删还没交的任务物品或能开启任务的物品。',
    tag: '防误操作',
    icon: 'ShieldAlert',
    defaultEnabled: true,
    sourceAddon: 'Plumber',
    generateLua: questItemDestroyInfoLua,
  },
  {
    id: 'auto-restock',
    title: '商人处自动补货',
    category: 'inventory',
    description: '打开商人时，按你设定的清单把材料或消耗品自动买到目标数量，例如「魔法水=40」：背包里已有 15 个，就只买 25 个。',
    details: '物品可填名称（需与商人列表中的名称完全一致）或物品 ID。只购买用金币、单件出售的商品；需要其他货币或打包出售的商品会跳过。购买数量同时受金币、背包空间与商人库存限制。',
    tag: '省时省力',
    icon: 'PackageCheck',
    defaultEnabled: false,
    sourceAddon: 'Restocker',
    options: [
      {
        id: 'items',
        label: '补货清单',
        description: '格式「物品名或物品ID=目标数量」，多条用逗号或分号隔开，例如：魔法水=40, 113509=20',
        type: 'string',
        default: '',
        live: true,
      },
      {
        id: 'showSummary',
        label: '在聊天框显示补货明细',
        type: 'boolean',
        default: true,
        live: true,
      },
    ],
    generateLua: autoRestockLua,
  },
];
