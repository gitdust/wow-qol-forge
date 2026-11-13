import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
Core:RegisterEventCallback("DELETE_ITEM_CONFIRM", function()
    local location = C_Cursor.GetCursorItem()
    if not location or not location:IsBagAndSlot() then return end
    local bag, slot = location:GetBagAndSlot()
    local info = C_Container.GetContainerItemQuestInfo(bag, slot)
    if not info or not (info.isQuestItem or info.questID) then return end
    if info.questID then
        local title = C_QuestLog.GetTitleForQuestID(info.questID) or (${L.s('questFallback')} .. info.questID)
        local state = info.isActive and ${L.s('stateActive')} or ${L.s('stateStarter')}
        print((${L.s('warnRelated')}):format(title, state))
    else
        print(${L.s('warnGeneric')})
    end
end)
`;
};
