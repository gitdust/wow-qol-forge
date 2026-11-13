import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
Core:RegisterEventCallback("MERCHANT_SHOW", function()
    if IsShiftKeyDown() or not CanMerchantRepair() then return end
    local cost, canRepair = GetRepairAllCost()
    if not canRepair or not cost or cost <= 0 then return end
    if O.guildRepair and IsInGuild() and CanGuildBankRepair() then
        ${L.c('guildFallbackNote')}
        RepairAllItems(1)
    end
    RepairAllItems()
    if O.showSummary then
        print(${L.s('repairedMsg')} .. C_CurrencyInfo.GetCoinText(cost))
    end
end)
`;
};
