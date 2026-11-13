import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
${L.c('hookNote')}
local applying = false
local function Unclamp(chatFrame)
    if applying then return end
    applying = true
    chatFrame:SetClampRectInsets(0, 0, 0, 0)
    applying = false
end
for i = 1, Constants.ChatFrameConstants.MaxChatWindows do
    local chatFrame = _G["ChatFrame" .. i]
    if chatFrame then
        Unclamp(chatFrame)
        hooksecurefunc(chatFrame, "SetClampRectInsets", Unclamp)
    end
end
`;
};
