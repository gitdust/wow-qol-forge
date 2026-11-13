import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
do
    local pasteFrame = CreateFrame("Frame", nil, UIParent, "BackdropTemplate")
    pasteFrame:SetSize(420, 260)
    pasteFrame:SetPoint("CENTER", UIParent, "CENTER", 0, 80)
    pasteFrame:SetFrameStrata("DIALOG")
    pasteFrame:SetMovable(true)
    pasteFrame:EnableMouse(true)
    pasteFrame:RegisterForDrag("LeftButton")
    pasteFrame:SetScript("OnDragStart", pasteFrame.StartMoving)
    pasteFrame:SetScript("OnDragStop", pasteFrame.StopMovingOrSizing)
    pasteFrame:SetBackdrop({
        bgFile = "Interface\\\\DialogFrame\\\\UI-DialogBox-Background",
        edgeFile = "Interface\\\\DialogFrame\\\\UI-DialogBox-Border",
        tile = true, tileSize = 32, edgeSize = 16,
        insets = { left = 4, right = 4, top = 4, bottom = 4 }
    })
    pasteFrame:Hide()

    local title = pasteFrame:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
    title:SetPoint("TOPLEFT", 16, -12)
    title:SetText(ADDON_NAME .. " " .. ${L.s('title')})

    local closeBtn = CreateFrame("Button", nil, pasteFrame, "UIPanelCloseButton")
    closeBtn:SetPoint("TOPRIGHT", -4, -4)

    local scroll = CreateFrame("ScrollFrame", nil, pasteFrame, "UIPanelScrollFrameTemplate")
    scroll:SetPoint("TOPLEFT", 16, -36)
    scroll:SetPoint("BOTTOMRIGHT", -36, 44)

    local editBox = CreateFrame("EditBox", nil, scroll)
    editBox:SetMultiLine(true)
    editBox:SetFontObject(ChatFontNormal)
    editBox:SetWidth(360)
    editBox:SetAutoFocus(false)
    editBox:SetScript("OnEscapePressed", function() pasteFrame:Hide() end)
    scroll:SetScrollChild(editBox)

    local runBtn = CreateFrame("Button", nil, pasteFrame, "UIPanelButtonTemplate")
    runBtn:SetHeight(26)
    runBtn:SetPoint("BOTTOMRIGHT", -16, 10)
    runBtn:SetText(${L.s('runBtn')})
    runBtn:SetWidth(math.max(110, runBtn:GetFontString():GetStringWidth() + 24))
    runBtn:SetScript("OnClick", function()
        local text = editBox:GetText()
        if not text or text:trim() == "" then return end

        for rawLine in string.gmatch(text .. "\\n", "(.-)\\r?\\n") do
            local line = rawLine:match("^%s*(.-)%s*$")
            if line ~= "" then
                ChatFrameUtil.OpenChat("")
                local activeEdit = ChatFrameUtil.GetActiveWindow()
                if activeEdit then
                    activeEdit:SetText(line)
                    activeEdit:SendText(1)
                    ChatFrameUtil.DeactivateChat(activeEdit)
                end
            end
        end
        pasteFrame:Hide()
        DEFAULT_CHAT_FRAME:AddMessage(${L.s('sentMsg')})
    end)

    local clearBtn = CreateFrame("Button", nil, pasteFrame, "UIPanelButtonTemplate")
    clearBtn:SetHeight(26)
    clearBtn:SetPoint("RIGHT", runBtn, "LEFT", -6, 0)
    clearBtn:SetText(${L.s('clearBtn')})
    clearBtn:SetWidth(math.max(80, clearBtn:GetFontString():GetStringWidth() + 20))
    clearBtn:SetScript("OnClick", function() editBox:SetText("") end)

    SLASH_MYQOLPASTE1 = "/paste"
    SlashCmdList["MYQOLPASTE"] = function()
        if pasteFrame:IsShown() then
            pasteFrame:Hide()
        else
            pasteFrame:Show()
            editBox:SetFocus()
        end
    end
end
`;
};
