import { luaString } from '../data/modules/luaUtil';
import { DEFAULT_LOCALE, getUi, Locale } from '../i18n';

// 生成插件内置的游戏内设置界面 (/<插件名>)：左侧分类、右侧功能列表，勾选即启用，带子设置的功能可展开修改。
// 每次改动立即写入存档并通知模块重新应用；与本次加载时相比有需要重载才能生效的差异时，显示「重载界面」按钮。
// 依赖生成器头部定义的 Core.modules / Core.categories / Core:GetOptions / Core:SetOption 等接口。
export function buildConfigPanelLua(locale: Locale = DEFAULT_LOCALE): string {
  const p = getUi(locale).generator.panel;

  return `-- ===========================================================================
-- ${p.headerComment}
-- ===========================================================================
do
    local PANEL_W, PANEL_H = 860, 560
    local LEFT_W = 190
    local CONTENT_W = PANEL_W - LEFT_W - 70
    local ARROW_TEXTURE = "Interface\\\\Buttons\\\\UI-SpellbookIcon-NextPage-Up"

    local frame, scrollFrame, scrollChild, statusText, reloadButton
    local selectedCategory = "all"
    local categoryButtons, rows = {}, {}

    -- ${p.loadedStateComment}
    local loadedState = {}
    local function SnapshotLoadedState()
        for _, mod in ipairs(Core.modules) do
            local O = Core:GetOptions(mod.id)
            local opts = {}
            for _, opt in ipairs(mod.options) do opts[opt.id] = O[opt.id] end
            loadedState[mod.id] = { started = Core.started[mod.id] and true or false, opts = opts }
        end
    end

    local function NeedsReload()
        for _, mod in ipairs(Core.modules) do
            local state = loadedState[mod.id]
            -- ${p.needsReloadComment}
            if Core:IsModuleEnabled(mod.id) ~= state.started then return true end
            if state.started then
                local O = Core:GetOptions(mod.id)
                for _, opt in ipairs(mod.options) do
                    if not opt.live and O[opt.id] ~= state.opts[opt.id] then return true end
                end
            end
        end
        return false
    end

    local function UpdateStatus()
        local reload = NeedsReload()
        reloadButton:SetShown(reload)
        statusText:SetText(reload and ${luaString(p.needsReloadStatus)} or "")
    end

    local function SetEnabled(mod, enabled)
        Core:SetModuleEnabled(mod.id, enabled)
        UpdateStatus()
    end

    -- ${p.setValueComment}
    local function SetValue(mod, opt, value)
        if Core:GetOptions(mod.id)[opt.id] == value then return end
        Core:SetOption(mod.id, opt.id, value)
        local callback = Core.settingsCallbacks[mod.id]
        if callback and Core.loaded[mod.id] then
            local ok, err = pcall(callback)
            if not ok then Core:ReportError(mod.id, err) end
        end
        UpdateStatus()
    end

    -- ${p.optionLineComment}
    local function CreateOptionLine(parent, mod, opt)
        local line = CreateFrame("Frame", nil, parent)
        line:SetHeight(28)
        local O = Core:GetOptions(mod.id)
        local function Changed(value) SetValue(mod, opt, value) end

        local label = line:CreateFontString(nil, "OVERLAY", "GameFontHighlightSmall")
        label:SetJustifyH("LEFT")
        label:SetText(opt.label .. (opt.live and "" or ${luaString(p.needsReloadTag)}))

        if opt.desc then
            line:EnableMouse(true)
            line:SetScript("OnEnter", function(self)
                GameTooltip:SetOwner(self, "ANCHOR_TOPLEFT")
                GameTooltip:SetText(opt.label, 1, 1, 1)
                GameTooltip:AddLine(opt.desc, nil, nil, nil, true)
                GameTooltip:Show()
            end)
            line:SetScript("OnLeave", GameTooltip_Hide)
        end

        if opt.type == "boolean" then
            local check = CreateFrame("CheckButton", nil, line, "UICheckButtonTemplate")
            check:SetSize(22, 22)
            check:SetPoint("LEFT", 0, 0)
            label:SetPoint("LEFT", check, "RIGHT", 4, 0)
            check:SetScript("OnClick", function(self) Changed(self:GetChecked() and true or false) end)
            line.Refresh = function() check:SetChecked(O[opt.id] and true or false) end
        elseif opt.type == "number" or opt.type == "string" then
            label:SetPoint("LEFT", 4, 0)
            label:SetWidth(240)
            local box = CreateFrame("EditBox", nil, line, "InputBoxTemplate")
            box:SetAutoFocus(false)
            box:SetHeight(20)
            box:SetPoint("LEFT", label, "RIGHT", 10, 0)
            if opt.type == "number" then
                box:SetWidth(70)
                local hint = line:CreateFontString(nil, "OVERLAY", "GameFontDisableSmall")
                hint:SetPoint("LEFT", box, "RIGHT", 8, 0)
                hint:SetText(("(%s - %s)"):format(opt.min or "", opt.max or ""))
                local function Commit(self)
                    local value = tonumber(self:GetText())
                    if not value then
                        value = O[opt.id]
                    else
                        if opt.min then value = math.max(opt.min, value) end
                        if opt.max then value = math.min(opt.max, value) end
                    end
                    self:SetText(tostring(value))
                    Changed(value)
                end
                box:SetScript("OnEnterPressed", function(self) Commit(self) self:ClearFocus() end)
                box:SetScript("OnEditFocusLost", Commit)
            else
                box:SetWidth(CONTENT_W - 320)
                box:SetScript("OnTextChanged", function(self, userInput)
                    if userInput then Changed(self:GetText()) end
                end)
                box:SetScript("OnEnterPressed", box.ClearFocus)
            end
            box:SetScript("OnEscapePressed", box.ClearFocus)
            line.Refresh = function() box:SetText(tostring(O[opt.id] or "")) box:SetCursorPosition(0) end
        elseif opt.type == "select" then
            label:SetPoint("LEFT", 4, 0)
            label:SetWidth(240)
            local dropdown = CreateFrame("DropdownButton", nil, line, "WowStyle1DropdownTemplate")
            dropdown:SetWidth(180)
            dropdown:SetPoint("LEFT", label, "RIGHT", 10, 0)
            dropdown:SetupMenu(function(_, root)
                for _, choice in ipairs(opt.choices or {}) do
                    root:CreateRadio(choice[1],
                        function() return O[opt.id] == choice[2] end,
                        function() Changed(choice[2]) end)
                end
            end)
            line.Refresh = function() dropdown:GenerateMenu() end
        end
        return line
    end

    local Relayout

    -- ${p.rowComment}
    local function CreateRow(mod)
        local row = CreateFrame("Frame", nil, scrollChild)
        row:SetWidth(CONTENT_W)
        row.lines = {}

        local check = CreateFrame("CheckButton", nil, row, "UICheckButtonTemplate")
        check:SetSize(26, 26)
        check:SetPoint("TOPLEFT", 0, 0)
        check:SetScript("OnClick", function(self) SetEnabled(mod, self:GetChecked() and true or false) end)

        local title = row:CreateFontString(nil, "OVERLAY", "GameFontNormal")
        title:SetPoint("TOPLEFT", check, "TOPRIGHT", 4, -5)
        title:SetPoint("RIGHT", row, "RIGHT", -36, 0)
        title:SetJustifyH("LEFT")
        title:SetText(mod.title)

        local desc = row:CreateFontString(nil, "OVERLAY", "GameFontHighlightSmall")
        desc:SetPoint("TOPLEFT", title, "BOTTOMLEFT", 0, -4)
        desc:SetWidth(CONTENT_W - 70)
        desc:SetJustifyH("LEFT")
        desc:SetTextColor(0.72, 0.72, 0.72)
        desc:SetText(mod.desc)

        local divider = row:CreateTexture(nil, "BACKGROUND")
        divider:SetColorTexture(1, 1, 1, 0.06)
        divider:SetHeight(1)
        divider:SetPoint("BOTTOMLEFT", 0, -4)
        divider:SetPoint("BOTTOMRIGHT", 0, -4)

        if #mod.options > 0 then
            local arrow = CreateFrame("Button", nil, row)
            arrow:SetSize(26, 26)
            arrow:SetPoint("TOPRIGHT", -4, 0)
            arrow:SetNormalTexture(ARROW_TEXTURE)
            arrow:SetHighlightTexture("Interface\\\\Buttons\\\\UI-Common-MouseHilight", "ADD")
            arrow:SetScript("OnClick", function()
                row.expanded = not row.expanded
                arrow:GetNormalTexture():SetRotation(row.expanded and -math.pi / 2 or 0)
                Relayout()
            end)
            arrow:SetScript("OnEnter", function(self)
                GameTooltip:SetOwner(self, "ANCHOR_LEFT")
                GameTooltip:SetText(row.expanded and ${luaString(p.collapseOptions)} or ${luaString(p.expandOptions)})
                GameTooltip:Show()
            end)
            arrow:SetScript("OnLeave", GameTooltip_Hide)
            for _, opt in ipairs(mod.options) do
                table.insert(row.lines, CreateOptionLine(row, mod, opt))
            end
        end

        row.Refresh = function()
            check:SetChecked(Core:IsModuleEnabled(mod.id))
            for _, line in ipairs(row.lines) do line.Refresh() end
        end

        row.Layout = function()
            local height = 10 + title:GetStringHeight() + desc:GetStringHeight()
            for _, line in ipairs(row.lines) do
                if row.expanded then
                    line:ClearAllPoints()
                    line:SetPoint("TOPLEFT", row, "TOPLEFT", 30, -height)
                    line:SetPoint("RIGHT", row, "RIGHT", -10, 0)
                    line:Show()
                    height = height + 28
                else
                    line:Hide()
                end
            end
            return math.max(height, 30)
        end
        return row
    end

    Relayout = function()
        local y = -6
        for _, mod in ipairs(Core.modules) do
            local row = rows[mod.id]
            if selectedCategory == "all" or mod.category == selectedCategory then
                row:ClearAllPoints()
                row:SetPoint("TOPLEFT", 8, y)
                local height = row.Layout()
                row:SetHeight(height)
                row:Show()
                y = y - height - 10
            else
                row:Hide()
            end
        end
        scrollChild:SetHeight(math.max(-y + 10, 1))
    end

    local function SelectCategory(id)
        selectedCategory = id
        for _, button in ipairs(categoryButtons) do
            button.selected:SetShown(button.categoryId == id)
        end
        Relayout()
        scrollFrame:SetVerticalScroll(0)
    end

    local function CreateCategoryButton(index, id, label, count)
        local button = CreateFrame("Button", nil, frame)
        button:SetSize(LEFT_W - 12, 26)
        button:SetPoint("TOPLEFT", 12, -32 - (index - 1) * 28)
        button.categoryId = id
        button.selected = button:CreateTexture(nil, "BACKGROUND")
        button.selected:SetAllPoints()
        button.selected:SetColorTexture(1, 0.75, 0.1, 0.18)
        button.selected:Hide()
        button:SetHighlightTexture("Interface\\\\QuestFrame\\\\UI-QuestTitleHighlight", "ADD")
        local countText = button:CreateFontString(nil, "OVERLAY", "GameFontDisableSmall")
        countText:SetPoint("RIGHT", -8, 0)
        countText:SetText(count)
        local text = button:CreateFontString(nil, "OVERLAY", "GameFontNormal")
        text:SetPoint("LEFT", 8, 0)
        text:SetPoint("RIGHT", countText, "LEFT", -4, 0)
        text:SetJustifyH("LEFT")
        text:SetWordWrap(false)
        text:SetText(label)
        button:SetScript("OnClick", function() SelectCategory(id) end)
        table.insert(categoryButtons, button)
    end

    local function BuildFrame()
        SnapshotLoadedState()
        frame = CreateFrame("Frame", ADDON_NAME .. "ConfigFrame", UIParent, "BasicFrameTemplateWithInset")
        frame:SetSize(PANEL_W, PANEL_H)
        frame:SetPoint("CENTER")
        frame:SetFrameStrata("DIALOG")
        frame:SetClampedToScreen(true)
        frame:SetMovable(true)
        frame:EnableMouse(true)
        frame:RegisterForDrag("LeftButton")
        frame:SetScript("OnDragStart", frame.StartMoving)
        frame:SetScript("OnDragStop", frame.StopMovingOrSizing)
        table.insert(UISpecialFrames, frame:GetName())
        if frame.TitleText then frame.TitleText:SetText(Core.title .. ${luaString(p.windowTitleSuffix)}) end

        local divider = frame:CreateTexture(nil, "ARTWORK")
        divider:SetColorTexture(1, 1, 1, 0.08)
        divider:SetWidth(1)
        divider:SetPoint("TOPLEFT", LEFT_W + 4, -30)
        divider:SetPoint("BOTTOMLEFT", LEFT_W + 4, 44)

        local counts = { all = #Core.modules }
        for _, mod in ipairs(Core.modules) do counts[mod.category] = (counts[mod.category] or 0) + 1 end
        CreateCategoryButton(1, "all", ${luaString(p.allCategory)}, counts.all)
        for i, category in ipairs(Core.categories) do
            CreateCategoryButton(i + 1, category.id, category.label, counts[category.id] or 0)
        end

        scrollFrame = CreateFrame("ScrollFrame", nil, frame, "ScrollFrameTemplate")
        scrollFrame:SetPoint("TOPLEFT", LEFT_W + 14, -30)
        scrollFrame:SetPoint("BOTTOMRIGHT", -30, 46)
        scrollChild = CreateFrame("Frame", nil, scrollFrame)
        scrollChild:SetSize(CONTENT_W + 16, 1)
        scrollFrame:SetScrollChild(scrollChild)

        for _, mod in ipairs(Core.modules) do rows[mod.id] = CreateRow(mod) end

        local hint = frame:CreateFontString(nil, "OVERLAY", "GameFontDisableSmall")
        hint:SetPoint("BOTTOMLEFT", 16, 18)
        hint:SetText(${luaString(p.bottomHint)})

        reloadButton = CreateFrame("Button", nil, frame, "UIPanelButtonTemplate")
        reloadButton:SetHeight(24)
        reloadButton:SetPoint("BOTTOMRIGHT", -14, 12)
        reloadButton:SetText(${luaString(p.reloadButton)})
        reloadButton:SetWidth(math.max(110, reloadButton:GetFontString():GetStringWidth() + 28))
        reloadButton:SetScript("OnClick", ReloadUI)

        statusText = frame:CreateFontString(nil, "OVERLAY", "GameFontHighlightSmall")
        statusText:SetPoint("RIGHT", reloadButton, "LEFT", -12, 0)
        statusText:SetJustifyH("RIGHT")

        frame:SetScript("OnShow", function()
            for _, mod in ipairs(Core.modules) do rows[mod.id].Refresh() end
            SelectCategory(selectedCategory)
            UpdateStatus()
        end)
        frame:Hide()
    end

    function Core:OpenConfig()
        if not frame then BuildFrame() end
        frame:Show()
    end

    function Core:ToggleConfig()
        if frame and frame:IsShown() then frame:Hide() else self:OpenConfig() end
    end

    local slashKey = ADDON_NAME:upper() .. "_CONFIG"
    _G["SLASH_" .. slashKey .. "1"] = Core.slash
    SlashCmdList[slashKey] = function() Core:ToggleConfig() end

    -- ${p.settingsTabComment}
    pcall(function()
        local canvas = CreateFrame("Frame")
        local text = canvas:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
        text:SetPoint("TOPLEFT", 16, -16)
        text:SetText(Core.title .. ${luaString(p.settingsTabText)} .. Core.slash)
        local open = CreateFrame("Button", nil, canvas, "UIPanelButtonTemplate")
        open:SetHeight(24)
        open:SetPoint("TOPLEFT", text, "BOTTOMLEFT", 0, -12)
        open:SetText(${luaString(p.openPanelButton)})
        open:SetWidth(math.max(160, open:GetFontString():GetStringWidth() + 32))
        open:SetScript("OnClick", function()
            if SettingsPanel and SettingsPanel:IsShown() then HideUIPanel(SettingsPanel) end
            Core:OpenConfig()
        end)
        local category = Settings.RegisterCanvasLayoutCategory(canvas, Core.title)
        Settings.RegisterAddOnCategory(category)
    end)
end`;
}
