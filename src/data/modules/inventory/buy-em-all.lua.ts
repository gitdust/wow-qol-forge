import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
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
    return canFit, stackSize
end

local function PurchaseInBatches(index, total)
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

StaticPopupDialogs["QOL_BUY_EM_ALL"] = {
    text = ${L.s('popupText')},
    button1 = PURCHASE,
    button2 = CANCEL,
    hasEditBox = true,
    OnShow = function(self, data)
        local editBox = self:GetEditBox()
        editBox:SetNumeric(true)
        editBox:SetText(tostring(math.min(data.stackSize, data.max)))
        editBox:HighlightText()
    end,
    OnAccept = function(self, data)
        local amount = math.min(tonumber(self:GetEditBox():GetText()) or 0, data.max)
        if amount > 0 then PurchaseInBatches(data.index, amount) end
    end,
    EditBoxOnEnterPressed = function(editBox, data)
        local dialog = editBox:GetParent()
        StaticPopupDialogs["QOL_BUY_EM_ALL"].OnAccept(dialog, data)
        dialog:Hide()
    end,
    EditBoxOnEscapePressed = function(editBox) editBox:GetParent():Hide() end,
    timeout = 0,
    whileDead = true,
    hideOnEscape = true,
}

hooksecurefunc("MerchantItemButton_OnModifiedClick", function(button, mouseButton)
    if mouseButton ~= "RightButton" or not IsShiftKeyDown() or MerchantFrame.selectedTab ~= 1 then return end
    local index = button:GetID()
    local info = C_MerchantFrame.GetItemInfo(index)
    local itemID = GetMerchantItemID(index)
    ${L.c('goldOnlyNote')}
    if not info or not itemID or info.hasExtendedCost or (info.stackCount or 1) ~= 1 or not info.price or info.price <= 0 then return end

    local fit, stackSize = GetFreeBagSpace(itemID)
    local max = math.min(math.floor(GetMoney() / info.price), fit)
    if info.numAvailable and info.numAvailable >= 0 then max = math.min(max, info.numAvailable) end

    if StackSplitFrame then StackSplitFrame:Hide() end
    if max <= 0 then
        UIErrorsFrame:AddMessage(${L.s('insufficientMsg')}, 1, 0.1, 0.1)
        return
    end
    StaticPopup_Show("QOL_BUY_EM_ALL", info.name, max, { index = index, max = max, stackSize = stackSize })
end)
`;
};
