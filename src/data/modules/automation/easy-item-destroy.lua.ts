import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
${L.c('lineNote')}
local typeDeleteLine = select(2, strsplit("\\n", (DELETE_GOOD_ITEM:gsub("\\r", "")), 2))

local function RemovePlain(text, part)
    if not part or part == "" then return text end
    local s, e = text:find(part, 1, true)
    if not s then return text end
    return text:sub(1, s - 1) .. text:sub(e + 1)
end

local function GetCursorLink()
    local link = select(3, GetCursorInfo())
    if not link then return nil end
    ${L.c('petNote')}
    local linkType, linkOptions, name = LinkUtil.ExtractLink(link)
    if linkType == "battlepet" then
        local _, level, quality = strsplit(":", linkOptions)
        local color = BAG_ITEM_QUALITY_COLORS[tonumber(quality)]
        if color then return color:WrapTextInColorCode(name .. " (" .. LEVEL .. " " .. level .. ")") end
    end
    return link
end

${L.c('dialogsNote')}
local DELETE_DIALOGS = { "DELETE_GOOD_ITEM", "DELETE_GOOD_QUEST_ITEM", "DELETE_ITEM", "DELETE_QUEST_ITEM" }

Core:RegisterEventCallback("DELETE_ITEM_CONFIRM", function()
    local dialog
    for _, which in ipairs(DELETE_DIALOGS) do
        dialog = StaticPopup_FindVisible(which)
        if dialog then break end
    end
    if not dialog then return end

    local link = GetCursorLink()
    local editBox = dialog:GetEditBox()
    if editBox and editBox:IsShown() then
        ${L.c('hideEditNote')}
        editBox:Hide()
        dialog:GetButton1():Enable()
        if link then
            dialog.Text:SetText(RemovePlain(dialog.Text:GetText() or "", typeDeleteLine) .. link)
        end
    elseif link then
        ${L.c('appendLinkNote')}
        dialog.Text:SetText((dialog.Text:GetText() or "") .. "|n" .. link)
    end
end)
`;
};
