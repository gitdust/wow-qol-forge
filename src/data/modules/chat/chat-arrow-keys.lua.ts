import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
${L.c('coverNote')}
for i = 1, 50 do
    local editBox = _G["ChatFrame" .. i .. "EditBox"]
    if editBox then editBox:SetAltArrowKeyMode(false) end
end
hooksecurefunc("FCF_OpenTemporaryWindow", function()
    local chatFrame = FCF_GetCurrentChatFrame()
    local name = chatFrame and chatFrame:GetName()
    local editBox = name and _G[name .. "EditBox"]
    if editBox then editBox:SetAltArrowKeyMode(false) end
end)
`;
};
