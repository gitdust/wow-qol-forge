import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
if LFGDungeonReadyPopup then
    local duration = 40
    local remaining, sinceUpdate = duration, -1

    local bar = CreateFrame("StatusBar", nil, LFGDungeonReadyPopup)
    bar:SetPoint("TOPLEFT", LFGDungeonReadyPopup, "BOTTOMLEFT", 0, -5)
    bar:SetPoint("TOPRIGHT", LFGDungeonReadyPopup, "BOTTOMRIGHT", 0, -5)
    bar:SetHeight(5)
    bar:SetStatusBarTexture("Interface\\\\TargetingFrame\\\\UI-StatusBar")
    bar:SetStatusBarColor(1.0, 0.85, 0.0)
    bar:SetMinMaxValues(0, duration)
    bar:Hide()

    local text = bar:CreateFontString(nil, "ARTWORK", "GameFontNormalLarge")
    text:SetTextColor(1.0, 0.85, 0.0)
    text:SetPoint("TOP", 0, -10)

    bar:SetScript("OnUpdate", function(self, elapsed)
        remaining = remaining - elapsed
        if sinceUpdate >= 1 or sinceUpdate == -1 then
            self:SetValue(remaining)
            text:SetText(SecondsToTime(math.max(0, math.floor(remaining + 0.5))))
            sinceUpdate = 0
        end
        sinceUpdate = sinceUpdate + elapsed
    end)

    Core:RegisterEventCallback("LFG_PROPOSAL_SHOW", function()
        remaining, sinceUpdate = duration, -1
        bar:Show()
    end)
    Core:RegisterEventCallback("LFG_PROPOSAL_FAILED", function() bar:Hide() end)
    Core:RegisterEventCallback("LFG_PROPOSAL_SUCCEEDED", function() bar:Hide() end)
end
`;
};
