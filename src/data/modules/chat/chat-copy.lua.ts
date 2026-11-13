import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local copyFrame = CreateFrame("Frame", nil, UIParent, "SettingsFrameTemplate")
copyFrame:SetSize(700, 500)
copyFrame:SetPoint("CENTER")
copyFrame:SetFrameStrata("DIALOG")
copyFrame:Hide()
if copyFrame.NineSlice and copyFrame.NineSlice.Text then copyFrame.NineSlice.Text:SetText(${L.s('windowTitle')}) end

local scroll = CreateFrame("ScrollFrame", nil, copyFrame, "ScrollFrameTemplate")
scroll:SetPoint("TOPLEFT", 8, -30)
scroll:SetPoint("BOTTOMRIGHT", -25, 5)

local editBox = CreateFrame("EditBox", nil, copyFrame)
editBox:SetMultiLine(true)
editBox:SetMaxLetters(0)
editBox:SetAutoFocus(false)
editBox:SetFontObject(ChatFontNormal)
editBox:SetSize(670, 495)
editBox:SetScript("OnEscapePressed", function(self) copyFrame:Hide() self:SetText("") end)
scroll:SetScrollChild(editBox)

${L.c('cleanerNote')}
local cleaner = copyFrame:CreateFontString(nil, nil, "GameFontNormal")
cleaner:Hide()

local function CopyChatFrame(chatFrame)
    local lines = {}
    for i = 1, chatFrame:GetNumMessages() do
        local line = chatFrame:GetMessageInfo(i)
        if line and not issecretvalue(line) then
            cleaner:SetFormattedText("%s", line)
            table.insert(lines, cleaner:GetText() or "")
        end
    end
    local text = table.concat(lines, "\\n")
    text = text:gsub("|T13700([1-8])[^|]+|t", "{rt%1}")  ${L.c('rtNote')}
    text = text:gsub("|T[^|]+|t", ""):gsub("|A[^|]+|a", "")
    editBox:SetText(text)
    copyFrame:Show()
    C_Timer.After(0, function() scroll:SetVerticalScroll(scroll:GetVerticalScrollRange() or 0) end)
end

for i = 1, Constants.ChatFrameConstants.MaxChatWindows do
    local tab = _G["ChatFrame" .. i .. "Tab"]
    if tab then
        tab:HookScript("OnClick", function(self)
            if IsShiftKeyDown() then CopyChatFrame(_G["ChatFrame" .. self:GetID()]) end
        end)
    end
end
`;
};
