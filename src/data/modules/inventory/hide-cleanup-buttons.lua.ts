import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
${L.c('hideNote')}
BagItemAutoSortButton:HookScript("OnShow", BagItemAutoSortButton.Hide)
BankPanel.AutoSortButton:HookScript("OnShow", BankPanel.AutoSortButton.Hide)
`;
};
