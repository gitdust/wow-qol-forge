import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
${L.c('accountBoundNote')}
local function IsItemAccountBound(itemID)
    local tooltipData = C_TooltipInfo.GetItemByID(itemID)
    if not tooltipData then return false end
    for _, line in ipairs(tooltipData.lines) do
        local text = line.leftText
        if text and (text == ITEM_BNETACCOUNTBOUND or text == ITEM_BIND_TO_BNETACCOUNT or text == ITEM_BIND_TO_ACCOUNT or text == ITEM_ACCOUNTBOUND) then
            return true
        end
    end
    return false
end

${L.c('currencyNote')}
local function QuestRequiresCurrency()
    if GetNumQuestCurrencies() > 0 then return true end
    for i = 1, GetNumQuestItems() do
        local itemID = select(6, GetQuestItemInfo("required", i))
        if itemID then
            local isCraftingReagent = select(17, C_Item.GetItemInfo(itemID))
            if isCraftingReagent or IsItemAccountBound(itemID) then
                return true
            end
        end
    end
    return false
end

local function QuestRequiresGold()
    local amount = GetQuestMoneyToGet()
    return amount and amount > 0
end

local function HandleQuestEvents(event)
    if IsShiftKeyDown() then return end

    if not O.autoAccept then
        ${L.c('noAcceptNote')}
    elseif event == "QUEST_DETAIL" then
        if QuestGetAutoAccept and QuestGetAutoAccept() then
            CloseQuest()
        else
            AcceptQuest()
        end
    elseif event == "QUEST_ACCEPT_CONFIRM" then
        ConfirmAcceptQuest()
        if StaticPopup_Hide then StaticPopup_Hide("QUEST_ACCEPT") end
    end

    if not O.autoComplete then
        ${L.c('noCompleteNote')}
    elseif event == "QUEST_PROGRESS" and IsQuestCompletable() then
        if not QuestRequiresGold() and not QuestRequiresCurrency() then
            CompleteQuest()
        end
    elseif event == "QUEST_COMPLETE" then
        if QuestRequiresGold() then return end
        local choices = GetNumQuestChoices()
        if choices <= 1 then
            GetQuestReward(choices)
        end
    end
end

Core:RegisterEventCallback("QUEST_DETAIL", HandleQuestEvents)
Core:RegisterEventCallback("QUEST_ACCEPT_CONFIRM", HandleQuestEvents)
Core:RegisterEventCallback("QUEST_PROGRESS", HandleQuestEvents)
Core:RegisterEventCallback("QUEST_COMPLETE", HandleQuestEvents)
`;
};
