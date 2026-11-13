import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
${L.c('disableNativeNote')}
if C_CVar.GetCVar("showTimestamps") ~= "none" then
    C_CVar.SetCVar("showTimestamps", "none")
end


${L.c('prependNote')}
local function StampNewestLine(buffer)
    local index = type(buffer.headIndex) == "table" and buffer.headIndex.value or buffer.headIndex
    if index == 0 then
        index = type(buffer.maxElements) == "table" and buffer.maxElements.value or buffer.maxElements
    end
    local entry = buffer.elements[index]
    local text = entry and entry.message
    if text and not issecretvalue(text) then
        local format = O.showSeconds and "[%H:%M:%S] " or "[%H:%M] "
        entry.message = "|cff888888" .. date(format) .. "|r" .. tostring(text)
    end
end

local hooked = {}
local function HookFrame(chatFrame)
    if chatFrame and chatFrame.historyBuffer and not hooked[chatFrame] and chatFrame ~= ChatFrame2 then
        hooked[chatFrame] = true
        hooksecurefunc(chatFrame.historyBuffer, "PushFront", StampNewestLine)
    end
end

for i = 1, Constants.ChatFrameConstants.MaxChatWindows do HookFrame(_G["ChatFrame" .. i]) end
hooksecurefunc("FCF_OpenTemporaryWindow", function()
    for i = Constants.ChatFrameConstants.MaxChatWindows + 1, 50 do
        local chatFrame = _G["ChatFrame" .. i]
        if not chatFrame then break end
        HookFrame(chatFrame)
    end
end)
`;
};
