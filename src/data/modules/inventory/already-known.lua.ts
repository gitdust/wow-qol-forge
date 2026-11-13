import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local R, G, B = 0.1, 0.9, 0.2
local knownCache = {}

local function IsKnown(itemLink)
    if not itemLink then return false end
    if knownCache[itemLink] then return true end
    local itemID = C_Item.GetItemInfoInstant(itemLink)
    local known = false

    ${L.c('cagedPetNote')}
    local speciesID = itemLink:match("battlepet:(%d+)")
    if speciesID then
        known = C_PetJournal.GetNumCollectedInfo(tonumber(speciesID)) > 0
    elseif itemID then
        local mountID = C_MountJournal.GetMountFromItem(itemID)
        local petSpecies = select(13, C_PetJournal.GetPetInfoByItemID(itemID))
        if mountID then
            known = select(11, C_MountJournal.GetMountInfoByID(mountID)) and true or false
        elseif petSpecies then
            known = C_PetJournal.GetNumCollectedInfo(petSpecies) > 0
        elseif PlayerHasToy(itemID) then
            known = true
        else
            ${L.c('knownTooltipNote')}
            local data = C_TooltipInfo.GetHyperlink(itemLink)
            for _, line in ipairs(data and data.lines or {}) do
                if line.leftText == ITEM_SPELL_KNOWN then known = true break end
            end
        end
    end
    if known then knownCache[itemLink] = true end
    return known
end

${L.c('merchantNote')}
hooksecurefunc("MerchantFrame_UpdateMerchantInfo", function()
    for i = 1, MERCHANT_ITEMS_PER_PAGE do
        local index = (MerchantFrame.page - 1) * MERCHANT_ITEMS_PER_PAGE + i
        local itemButton = _G["MerchantItem" .. i .. "ItemButton"]
        local merchantButton = _G["MerchantItem" .. i]
        if itemButton and merchantButton and IsKnown(GetMerchantItemLink(index)) then
            SetItemButtonNameFrameVertexColor(merchantButton, R, G, B)
            SetItemButtonSlotVertexColor(merchantButton, R, G, B)
            SetItemButtonTextureVertexColor(itemButton, 0.9 * R, 0.9 * G, 0.9 * B)
            SetItemButtonNormalTextureVertexColor(itemButton, 0.9 * R, 0.9 * G, 0.9 * B)
        end
    end
end)

${L.c('ahNote')}
local function HookAuctionHouse()
    hooksecurefunc(AuctionHouseFrame.BrowseResultsFrame.ItemList.ScrollBox, "Update", function(scrollBox)
        for _, row in ipairs({ scrollBox.ScrollTarget:GetChildren() }) do
            local itemKey = row.rowData and row.rowData.itemKey
            local cell = row.cells and row.cells[2]
            if itemKey and itemKey.itemID and cell and cell.Icon then
                local link = itemKey.battlePetSpeciesID and itemKey.battlePetSpeciesID > 0
                    and ("|Hbattlepet:" .. itemKey.battlePetSpeciesID .. "::::::|h[x]|h")
                    or ("item:" .. itemKey.itemID)
                if IsKnown(link) then
                    cell.Icon:SetVertexColor(R, G, B)
                    if cell.IconBorder then cell.IconBorder:SetVertexColor(R, G, B) end
                else
                    cell.Icon:SetVertexColor(1, 1, 1)
                    if cell.IconBorder then cell.IconBorder:SetVertexColor(1, 1, 1) end
                end
            end
        end
    end)
end

${L.c('guildBankNote')}
${L.c('guildBankConstNote')}
local SLOTS_PER_TAB, SLOTS_PER_GROUP = 98, 14
local function HookGuildBank()
    hooksecurefunc(GuildBankFrame, "Update", function()
        local tab = GetCurrentGuildBankTab()
        for i = 1, SLOTS_PER_TAB do
            local index = i % SLOTS_PER_GROUP
            if index == 0 then index = SLOTS_PER_GROUP end
            local column = GuildBankFrame.Columns[math.ceil((i - 0.5) / SLOTS_PER_GROUP)]
            local button = column and column.Buttons[index]
            if button then
                if IsKnown(GetGuildBankItemLink(tab, i)) then
                    SetItemButtonTextureVertexColor(button, 0.9 * R, 0.9 * G, 0.9 * B)
                else
                    SetItemButtonTextureVertexColor(button, 1, 1, 1)
                end
            end
        end
    end)
end

local pending = { Blizzard_AuctionHouseUI = HookAuctionHouse, Blizzard_GuildBankUI = HookGuildBank }
for addon, hook in pairs(pending) do
    if C_AddOns.IsAddOnLoaded(addon) then
        hook()
        pending[addon] = nil
    end
end
Core:RegisterEventCallback("ADDON_LOADED", function(_, addon)
    if pending[addon] then
        pending[addon]()
        pending[addon] = nil
    end
end)
`;
};
