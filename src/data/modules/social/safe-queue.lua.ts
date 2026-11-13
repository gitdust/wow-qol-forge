import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local activeId

local function UpdateExpiresText()
    if not activeId or not PVPReadyDialog:IsShown() then return end
    local secs = GetBattlefieldPortExpiration(activeId)
    if secs <= 0 then secs = 1 end
    local color = secs > 20 and "20ff20" or (secs > 10 and "ffff00" or "ff0000")
    PVPReadyDialog.label:SetText(${L.s('remainingLabel')} .. "|cff" .. color .. SecondsToTime(secs) .. "|r")
end

if PVPReadyDialog and PVPReadyDialog_Display then
    hooksecurefunc("PVPReadyDialog_Display", function(self, id)
        local dialog = self or PVPReadyDialog
        activeId = id
        ${L.c('hideLeaveNote')}
        if dialog.leaveButton then dialog.leaveButton:Hide() end
        if dialog.enterButton then
            dialog.enterButton:ClearAllPoints()
            dialog.enterButton:SetPoint("BOTTOM", dialog, "BOTTOM", 0, 25)
        end
        UpdateExpiresText()
    end)
    PVPReadyDialog:HookScript("OnHide", function() activeId = nil end)
    C_Timer.NewTicker(1, UpdateExpiresText)
end

${L.c('waitTimeNote')}
local queueStart = {}
Core:RegisterEventCallback("UPDATE_BATTLEFIELD_STATUS", function()
    for i = 1, GetMaxBattlefieldID() do
        local status = GetBattlefieldStatus(i)
        if status == "queued" then
            queueStart[i] = GetTime() - (GetBattlefieldTimeWaited(i) / 1000)
        elseif status == "confirm" then
            if queueStart[i] and O.announceWaitTime then
                local secs = math.floor(GetTime() - queueStart[i])
                DEFAULT_CHAT_FRAME:AddMessage(string.format(${L.s('waitTimeMsg')}, math.floor(secs / 60), secs % 60))
                queueStart[i] = nil
            end
        else
            queueStart[i] = nil
        end
    end
end)
`;
};
