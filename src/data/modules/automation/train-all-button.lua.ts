import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local function AvailableServices()
    local count, cost = 0, 0
    for i = 1, GetNumTrainerServices() do
        local _, serviceType = GetTrainerServiceInfo(i)
        if serviceType == "available" then
            count = count + 1
            cost = cost + (GetTrainerServiceCost(i) or 0)
        end
    end
    return count, cost
end

EventUtil.ContinueOnAddOnLoaded("Blizzard_TrainerUI", function()
    local button = CreateFrame("Button", nil, ClassTrainerFrame, "UIPanelButtonTemplate")
    button:SetHeight(22)
    button:SetText(${L.s('btnTrainAll')})
    button:SetWidth(math.max(80, button:GetFontString():GetStringWidth() + 20))
    button:SetPoint("RIGHT", ClassTrainerTrainButton, "LEFT", -1, 0)

    button:SetScript("OnClick", function()
        ${L.c('reverseOrderNote')}
        for i = GetNumTrainerServices(), 1, -1 do
            local _, serviceType = GetTrainerServiceInfo(i)
            if serviceType == "available" then BuyTrainerService(i) end
        end
    end)
    button:SetScript("OnEnter", function(self)
        local count, cost = AvailableServices()
        if count == 0 then return end
        GameTooltip:SetOwner(self, "ANCHOR_TOP", 0, 4)
        GameTooltip:SetText((${L.s('tooltipFmt')}):format(count, C_CurrencyInfo.GetCoinTextureString(cost)))
        GameTooltip:Show()
    end)
    button:SetScript("OnLeave", GameTooltip_Hide)

    hooksecurefunc("ClassTrainerFrame_Update", function()
        button:SetEnabled(AvailableServices() > 0)
    end)
end)
`;
};
