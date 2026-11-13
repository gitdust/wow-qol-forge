import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local COLORS = {
    amber = { 1, 0.75, 0.1 }, white = { 1, 1, 1 }, red = { 1, 0.2, 0.2 },
    green = { 0.2, 1, 0.3 }, blue = { 0.25, 0.6, 1 },
}
local ring = CreateFrame("Frame", nil, UIParent)
ring:SetFrameStrata("TOOLTIP")
ring:EnableMouse(false)

local texture = ring:CreateTexture(nil, "OVERLAY")
texture:SetAllPoints()
texture:SetTexture("Interface\\\\Common\\\\RingBorder")
texture:SetDesaturated(true)
texture:SetBlendMode("ADD")

local inCombat = false
local function Apply()
    local size = math.floor(tonumber(O.size) or 48)
    local rgb = COLORS[O.color] or COLORS.amber
    ring:SetSize(size, size)
    texture:SetVertexColor(rgb[1], rgb[2], rgb[3], 0.9)
    ring:SetShown(not O.combatOnly or inCombat)
end

ring:SetScript("OnUpdate", function(self)
    local x, y = GetCursorPosition()
    local scale = UIParent:GetEffectiveScale()
    self:ClearAllPoints()
    self:SetPoint("CENTER", UIParent, "BOTTOMLEFT", x / scale, y / scale)
end)

Core:RegisterEventCallback("PLAYER_REGEN_DISABLED", function() inCombat = true Apply() end)
Core:RegisterEventCallback("PLAYER_REGEN_ENABLED", function() inCombat = false Apply() end)
Apply()
Core:OnSettingsChanged(Apply)
`;
};
