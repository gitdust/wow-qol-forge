import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
${L.c('worldMotionNote')}
WorldFrame:EnableMouseMotion(true)

TooltipDataProcessor.AddTooltipPostCall(Enum.TooltipDataType.Unit, function(tooltip)
    if not O.hideInCombat or tooltip ~= GameTooltip or not WorldFrame:IsMouseMotionFocus() then return end
    if not UnitAffectingCombat("player") then return end
    if O.shiftOverride and IsShiftKeyDown() then return end
    tooltip:Hide()
end)

hooksecurefunc("GameTooltip_SetDefaultAnchor", function(tooltip, parent)
    if O.anchorCursor and tooltip and parent and WorldFrame:IsMouseMotionFocus() then
        tooltip:SetOwner(parent, "ANCHOR_CURSOR")
    end
end)
`;
};
