import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
${L.c('parseListNote')}
local function ParseList(text)
    text = (text or ""):gsub("；", ","):gsub("，", ","):gsub("、", ","):gsub("＝", "="):gsub(";", ",")
    local list = {}
    for entry in text:gmatch("[^,]+") do
        local key, count = entry:match("^%s*(.-)%s*=%s*(%d+)%s*$")
        if key and key ~= "" then list[key] = tonumber(count) end
    end
    return list
end

${L.c('freeBagSpaceNote')}
local function GetFreeBagSpace(itemID)
    local stackSize = select(8, C_Item.GetItemInfo(itemID)) or 1
    local itemFamily = C_Item.GetItemFamily(itemID) or 0
    local isReagent = select(17, C_Item.GetItemInfo(itemID))
    local canFit = 0
    for bag = BACKPACK_CONTAINER, NUM_TOTAL_EQUIPPED_BAG_SLOTS or NUM_BAG_SLOTS do
        local freeSlots, bagFamily = C_Container.GetContainerNumFreeSlots(bag)
        local usable
        if bag == Enum.BagIndex.ReagentBag then
            usable = isReagent
        else
            usable = not bagFamily or bagFamily == 0 or bit.band(itemFamily, bagFamily) > 0
        end
        if usable then
            canFit = canFit + freeSlots * stackSize
            for slot = 1, C_Container.GetContainerNumSlots(bag) do
                local info = C_Container.GetContainerItemInfo(bag, slot)
                if info and info.itemID == itemID then
                    canFit = canFit + math.max(0, stackSize - (info.stackCount or 0))
                end
            end
        end
    end
    return canFit
end

local function BuyInBatches(index, total)
    local batch = math.max(1, GetMerchantItemMaxStack(index))
    local remaining = total
    local function Step()
        if remaining <= 0 or not MerchantFrame:IsShown() then return end
        local amount = math.min(batch, remaining)
        BuyMerchantItem(index, amount)
        remaining = remaining - amount
        if remaining > 0 then C_Timer.After(0.25, Step) end
    end
    Step()
end

local function Restock()
    local list = ParseList(O.items)
    if not next(list) then return end
    local money = GetMoney()
    local bought, spent = {}, 0
    for index = 1, GetMerchantNumItems() do
        local info = C_MerchantFrame.GetItemInfo(index)
        local itemID = GetMerchantItemID(index)
        local target = info and itemID and (list[info.name or ""] or list[tostring(itemID)])
        ${L.c('goldOnlyNote')}
        if target and not info.hasExtendedCost and (info.stackCount or 1) == 1 and (info.price or 0) > 0 then
            local need = target - C_Item.GetItemCount(itemID)
            if info.numAvailable and info.numAvailable >= 0 then need = math.min(need, info.numAvailable) end
            need = math.min(need, math.floor(money / info.price), GetFreeBagSpace(itemID))
            if need > 0 then
                BuyInBatches(index, need)
                money = money - need * info.price
                spent = spent + need * info.price
                table.insert(bought, (info.name or itemID) .. " x" .. need)
            end
        end
    end
    if #bought > 0 and O.showSummary then
        print(string.format(${L.s('summaryMsg')}, table.concat(bought, ${L.s('listSep')}), C_CurrencyInfo.GetCoinText(spent)))
    end
end

${L.c('delayNote')}
Core:RegisterEventCallback("MERCHANT_SHOW", function()
    C_Timer.After(0.3, function()
        if MerchantFrame:IsShown() then Restock() end
    end)
end)
`;
};
