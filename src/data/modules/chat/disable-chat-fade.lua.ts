import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local function ApplyFade(chatFrame)
    if not chatFrame then return end
    local seconds = math.floor(tonumber(O.visibleSeconds) or 0)
    if seconds <= 0 then
        chatFrame:SetFading(false)
    else
        chatFrame:SetFading(true)
        chatFrame:SetTimeVisible(seconds)
    end
end

local function ApplyAll()
    for i = 1, 50 do
        local chatFrame = _G["ChatFrame" .. i]
        if chatFrame then ApplyFade(chatFrame) end
    end
end
ApplyAll()
${L.c('tempWindowNote')}
hooksecurefunc("FCF_OpenTemporaryWindow", ApplyAll)
Core:OnSettingsChanged(ApplyAll)
`;
};
