import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local initialAutoLoot = false
local lastNumLoot
local lootTicker
local fullWarned = false

${L.c('itemFits')}
local function ItemFitsInBags(itemLink, quantity)
    if not itemLink then return true end
    local stackCount, _, _, _, _, _, _, _, _, isCraftingReagent = select(8, C_Item.GetItemInfo(itemLink))
    if not stackCount then return true end
    local itemFamily = C_Item.GetItemFamily(itemLink)
    local owned = C_Item.GetItemCount(itemLink)
    if owned > 0 and stackCount > 1 and ((stackCount - owned) % stackCount) >= quantity then
        return true
    end
    for bag = BACKPACK_CONTAINER, NUM_TOTAL_EQUIPPED_BAG_SLOTS or NUM_BAG_SLOTS do
        local freeSlots, bagFamily = C_Container.GetContainerNumFreeSlots(bag)
        if freeSlots > 0 then
            if bag == Enum.BagIndex.ReagentBag then
                if isCraftingReagent then return true end
            elseif not bagFamily or bagFamily == 0 or (itemFamily and bit.band(itemFamily, bagFamily) > 0) then
                return true
            end
        end
    end
    return false
end

local function TryLootSlot(slot)
    local slotType = GetLootSlotType(slot)
    if slotType == Enum.LootSlotType.None then return end
    local quantity, _, _, locked, isQuestItem = select(3, GetLootSlotInfo(slot))
    ${L.c('lockedNote')}
    if locked then return end
    if slotType ~= Enum.LootSlotType.Item or isQuestItem or ItemFitsInBags(GetLootSlotLink(slot), quantity or 1) then
        LootSlot(slot)
    end
end

local function CancelTicker()
    if lootTicker then
        lootTicker:Cancel()
        lootTicker = nil
    end
end

Core:RegisterEventCallback("LOOT_READY", function(_, autoLoot)
    ${L.c('lootReadyNote')}
    if not initialAutoLoot then
        initialAutoLoot = autoLoot or (GetCVarBool("autoLootDefault") ~= IsModifiedClick("AUTOLOOTTOGGLE"))
    end
    if not initialAutoLoot then return end

    local numItems = GetNumLootItems()
    if numItems == 0 or numItems == lastNumLoot then return end
    lastNumLoot = numItems

    if O.speedMode ~= "fast" then
        for slot = numItems, 1, -1 do
            TryLootSlot(slot)
        end
    else
        CancelTicker()
        local slot = numItems
        lootTicker = C_Timer.NewTicker(0.033, function()
            if slot >= 1 then
                TryLootSlot(slot)
                slot = slot - 1
            else
                CancelTicker()
            end
        end, numItems + 1)
    end
end)

Core:RegisterEventCallback("LOOT_CLOSED", function()
    initialAutoLoot = false
    lastNumLoot = nil
    fullWarned = false
    CancelTicker()
end)

${L.c('invFullNote')}
Core:RegisterEventCallback("UI_ERROR_MESSAGE", function(_, _, message)
    if lastNumLoot and not fullWarned and (message == ERR_INV_FULL or message == ERR_ITEM_MAX_COUNT) then
        fullWarned = true
        PlaySound(44321, "Master")
    end
end)
`;
};
