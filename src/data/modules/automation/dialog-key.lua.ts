import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local keyFrame = CreateFrame("Frame", nil, UIParent)
keyFrame:SetFrameStrata("TOOLTIP")
keyFrame:EnableKeyboard(true)
keyFrame:SetPropagateKeyboardInput(true)

${L.c('blacklistNote')}
local builtinBlacklist = {
    "Resurrection in",
    "Are you sure you wish to spend",
    "Are you sure you want to return to your current timeline?",
    TOO_MANY_LUA_ERRORS,
    END_BOUND_TRADEABLE,
    ADDON_ACTION_FORBIDDEN,
}
local function ToPattern(text)
    return (text:gsub("%%s", ".+"):gsub("%%d", ".+"))
end
local summonMatch = ToPattern(CONFIRM_SUMMON)
local duelMatch = ToPattern(DUEL_REQUESTED)
local resurrectMatch = ToPattern(RESURRECT_REQUEST_NO_SICKNESS)
local inviteMatch = ToPattern(INVITATION)

local function GetPopupButton()
    local text = StaticPopup1Text:GetText() or ""
    local canRelease = StaticPopup1Button1Text:GetText() == DEATH_RELEASE
    if O.safePopups then
        if text:find(inviteMatch) or text:find(summonMatch) or text:find(duelMatch) then return nil end
        if canRelease then
            ${L.c('selfResNote')}
            if StaticPopup1Button2:IsVisible() then return StaticPopup1Button2 end
            return nil
        end
        if text == RECOVER_CORPSE or text:find(resurrectMatch) then return nil end
    end
    local lower = text:lower()
    for _, blocked in ipairs(builtinBlacklist) do
        if type(blocked) == "string" and lower:find(blocked:lower(), 1, true) then return nil end
    end
    return StaticPopup1Button1
end

${L.c('gossipButtonsNote')}
local function GetGossipButtons()
    local buttons = {}
    if GossipFrame.GreetingPanel:IsVisible() then
        for _, child in ipairs({ GossipFrame.GreetingPanel.ScrollBox.ScrollTarget:GetChildren() }) do
            if child:GetObjectType() == "Button" and child:IsVisible() and child.GetElementData then
                table.insert(buttons, child)
            end
        end
    elseif QuestFrameGreetingPanel:IsVisible() and QuestFrameGreetingPanel.titleButtonPool then
        for button in QuestFrameGreetingPanel.titleButtonPool:EnumerateActive() do
            if button:GetObjectType() == "Button" and button:IsVisible() then
                table.insert(buttons, button)
            end
        end
    end
    table.sort(buttons, function(a, b)
        if a.GetOrderIndex and b.GetOrderIndex then return a:GetOrderIndex() < b:GetOrderIndex() end
        return (a:GetTop() or 0) > (b:GetTop() or 0)
    end)
    return buttons
end

${L.c('choiceNote')}
local itemChoice = 1
Core:RegisterEventCallback("QUEST_COMPLETE", function()
    itemChoice = GetNumQuestChoices() > 1 and -1 or 1
end)
hooksecurefunc("QuestInfoItem_OnClick", function()
    for i = 1, GetNumQuestChoices() do
        local item = _G["QuestInfoRewardsFrameQuestInfoItem" .. i]
        if item and item:IsMouseOver() then itemChoice = i break end
    end
end)

local function Consume()
    keyFrame:SetPropagateKeyboardInput(false)
end

keyFrame:SetScript("OnKeyDown", function(self, key)
    ${L.c('combatNote')}
    if InCombatLockdown() then return end
    self:SetPropagateKeyboardInput(true)
    if IsShiftKeyDown() or IsControlKeyDown() or IsAltKeyDown() then return end
    if GetCurrentKeyBoardFocus() then return end

    local isAction = key == "SPACE"
    local num = (key == "0") and 10 or tonumber(key)
    if not O.enableNumKeys then num = nil end
    if not isAction and not num then return end

    if isAction then
        if StaticPopup1:IsVisible() then
            local button = GetPopupButton()
            if button and button:IsEnabled() then
                Consume()
                button:Click()
            end
            return
        end

        if QuestFrameProgressPanel:IsVisible() then
            Consume()
            if QuestFrameCompleteButton:IsEnabled() then CompleteQuest() else CloseQuest() end
            return
        elseif QuestFrameDetailPanel:IsVisible() then
            Consume()
            AcceptQuest()
            return
        elseif QuestFrameRewardPanel:IsVisible() then
            Consume()
            if itemChoice == -1 and GetNumQuestChoices() > 1 then
                QuestChooseRewardError()
            else
                GetQuestReward(itemChoice)
            end
            return
        end
    end

    if num and QuestFrameRewardPanel:IsVisible() and num <= GetNumQuestChoices() then
        local item = _G["QuestInfoRewardsFrameQuestInfoItem" .. num]
        if item then
            Consume()
            itemChoice = num
            item:Click()
        end
        return
    end

    local index = isAction and 1 or num
    if index and (GossipFrame:IsVisible() or QuestFrame:IsVisible()) then
        local buttons = GetGossipButtons()
        if buttons[index] then
            Consume()
            buttons[index]:Click()
        end
    end
end)

${L.c('restorePropagateNote')}
Core:RegisterEventCallback("PLAYER_REGEN_DISABLED", function()
    keyFrame:SetPropagateKeyboardInput(true)
end)
`;
};
