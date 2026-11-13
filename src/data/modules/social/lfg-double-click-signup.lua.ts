import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local panel = LFGListFrame and LFGListFrame.SearchPanel
if not panel or not panel.ScrollBox then return end

local function OnEntryDoubleClick(entry, button)
    if button ~= "LeftButton" or not entry.resultID then return end
    if panel.selectedResult ~= entry.resultID then return end
    if panel.SignUpButton:IsEnabled() then
        panel.SignUpButton:Click()
    end
end

local hooked = {}
ScrollUtil.AddInitializedFrameCallback(panel.ScrollBox, function(_, entry)
    if hooked[entry] then return end
    hooked[entry] = true
    entry:HookScript("OnDoubleClick", OnEntryDoubleClick)
end, nil, true)

${L.c('skipNote')}
hooksecurefunc("LFGListApplicationDialog_Show", function(dialog)
    if not O.skipDialog or IsShiftKeyDown() then return end
    if dialog.SignUpButton and dialog.SignUpButton:IsEnabled() then
        dialog.SignUpButton:Click()
    end
end)
`;
};
