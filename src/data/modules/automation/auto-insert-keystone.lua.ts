import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local function FindKeystone()
    for bag = BACKPACK_CONTAINER, NUM_TOTAL_EQUIPPED_BAG_SLOTS or NUM_BAG_SLOTS do
        for slot = 1, C_Container.GetContainerNumSlots(bag) do
            local itemID = C_Container.GetContainerItemID(bag, slot)
            if itemID and C_Item.IsItemKeystoneByID(itemID) then
                local location = ItemLocation:CreateFromBagAndSlot(bag, slot)
                if C_ChallengeMode.CanUseKeystoneInCurrentMap(location) then
                    return bag, slot
                end
            end
        end
    end
end

Core:RegisterEventCallback("CHALLENGE_MODE_KEYSTONE_RECEPTABLE_OPEN", function()
    ${L.c('openDelayNote')}
    C_Timer.After(0, function()
        if InCombatLockdown() or C_ChallengeMode.HasSlottedKeystone() or CursorHasItem() then return end
        local bag, slot = FindKeystone()
        if not bag then return end
        C_Container.PickupContainerItem(bag, slot)
        if CursorHasItem() then
            C_ChallengeMode.SlotKeystone()
        end
        ${L.c('clearCursorNote')}
        if CursorHasItem() then ClearCursor() end
    end)
end)
`;
};
