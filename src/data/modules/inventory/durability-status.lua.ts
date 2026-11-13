import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local SLOTS = {
    { "HeadSlot", INVTYPE_HEAD }, { "ShoulderSlot", INVTYPE_SHOULDER }, { "ChestSlot", INVTYPE_CHEST },
    { "WristSlot", INVTYPE_WRIST }, { "HandsSlot", INVTYPE_HAND }, { "WaistSlot", INVTYPE_WAIST },
    { "LegsSlot", INVTYPE_LEGS }, { "FeetSlot", INVTYPE_FEET },
    { "MainHandSlot", INVTYPE_WEAPONMAINHAND }, { "SecondaryHandSlot", INVTYPE_WEAPONOFFHAND },
}

local function ColorFor(pct)
    if pct >= 80 then return "|cff00ff00" elseif pct >= 60 then return "|cff99ff00"
    elseif pct >= 40 then return "|cffffff00" elseif pct >= 20 then return "|cffff9900" end
    return "|cffff2000"
end

${L.c('getDurabilityNote')}
local function GetDurability()
    local current, maximum, details = 0, 0, {}
    for _, slot in ipairs(SLOTS) do
        local value, max = GetInventoryItemDurability(GetInventorySlotInfo(slot[1]))
        if value and max and max > 0 then
            current, maximum = current + value, maximum + max
            table.insert(details, { slot[2], math.floor(value / max * 100 + 0.5) })
        end
    end
    if maximum == 0 then return nil end
    return math.floor(current / maximum * 100 + 0.5), details
end

${L.c('buttonNote')}
local button = CreateFrame("Button", nil, PaperDollFrame)
button:SetSize(140, 18)
button:SetPoint("BOTTOMRIGHT", CharacterFrameInset, "BOTTOMRIGHT", -6, 4)
local label = button:CreateFontString(nil, "OVERLAY", "GameFontNormalSmall")
label:SetPoint("RIGHT")

local function UpdateLabel()
    local pct = GetDurability()
    label:SetText(pct and (${L.s('labelPrefix')} .. ColorFor(pct) .. pct .. "%|r") or "")
    button:SetWidth(math.max(80, label:GetStringWidth() + 8))
end

button:SetScript("OnEnter", function(self)
    local pct, details = GetDurability()
    if not pct then return end
    GameTooltip:SetOwner(self, "ANCHOR_RIGHT")
    GameTooltip:AddLine(${L.s('tooltipTitle')})
    for _, item in ipairs(details) do
        GameTooltip:AddDoubleLine(item[1], ColorFor(item[2]) .. item[2] .. "%|r", 1, 1, 1)
    end
    GameTooltip:AddDoubleLine(${L.s('tooltipTotal')}, ColorFor(pct) .. pct .. "%|r", 1, 0.82, 0)
    GameTooltip:Show()
end)
button:SetScript("OnLeave", GameTooltip_Hide)
PaperDollFrame:HookScript("OnShow", UpdateLabel)
Core:RegisterEventCallback("UPDATE_INVENTORY_DURABILITY", UpdateLabel)

${L.c('deathNoticeNote')}
local lastNotice = 0
Core:RegisterEventCallback("PLAYER_DEAD", function()
    if GetTime() - lastNotice < 2 then return end
    lastNotice = GetTime()
    local pct = GetDurability()
    if pct then print(${L.s('deathMsg')} .. ColorFor(pct) .. pct .. "%|r") end
end)
`;
};
