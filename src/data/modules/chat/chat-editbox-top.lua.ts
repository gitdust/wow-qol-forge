import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local function MoveEditBox(chatFrame)
    local editBox = chatFrame and _G[chatFrame:GetName() .. "EditBox"]
    if not editBox then return end
    editBox:ClearAllPoints()
    ${L.c('anchorNote')}
    editBox:SetPoint("TOP", chatFrame, "TOP", 0, 0)
    editBox:SetPoint("LEFT", chatFrame, "LEFT", 0, 0)
    editBox:SetPoint("RIGHT", chatFrame, "RIGHT", 0, 0)
end

for i = 1, Constants.ChatFrameConstants.MaxChatWindows do MoveEditBox(_G["ChatFrame" .. i]) end
hooksecurefunc("FCF_OpenTemporaryWindow", function()
    for i = Constants.ChatFrameConstants.MaxChatWindows + 1, 50 do
        local chatFrame = _G["ChatFrame" .. i]
        if not chatFrame then break end
        MoveEditBox(chatFrame)
    end
end)
`;
};
