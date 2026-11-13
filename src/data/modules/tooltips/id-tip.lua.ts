import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  // Enum.TooltipDataType 数值在各客户端一致 (取自 idTip)；option 为控制该类 ID 的设置项
  const kinds: Array<[number, string, string, string]> = [
    [0, 'item', 'ItemID', 'showItem'],
    [19, 'item', 'ItemID', 'showItem'],
    [1, 'spell', 'SpellID', 'showSpell'],
    [7, 'spell', 'SpellID', 'showSpell'],
    [11, 'spell', 'SpellID', 'showSpell'],
    [2, 'unit', 'NpcID', 'showNpc'],
    [3, 'unit', 'NpcID', 'showNpc'],
    [5, 'currency', 'CurrencyID', 'showCurrency'],
    [9, 'species', 'SpeciesID', 'showCollections'],
    [10, 'mount', 'MountID', 'showCollections'],
    [12, 'achievement', 'AchievementID', 'showCollections'],
    [23, 'quest', 'QuestID', 'showQuest'],
  ];
  const kindLines = kinds
    .map(([type, kind, label, option]) => `    [${type}] = { kind = "${kind}", label = "${label}", option = "${option}" },`)
        .join('\n');

      return `${L.c('header')}
local KINDS = {
${kindLines}
}

local function AddIdLine(tooltip, label, id)
    if not id or issecretvalue(id) then return end
    ${L.c('dedupNote')}
    local name = tooltip:GetName()
    if name then
        for i = 1, tooltip:NumLines() do
            local left = _G[name .. "TextLeft" .. i]
            local text = left and left:GetText()
            if text and not issecretvalue(text) and text == label then return end
        end
    end
    tooltip:AddDoubleLine(label, tostring(id), 1, 0.82, 0, 1, 1, 1)
    tooltip:Show()
end

TooltipDataProcessor.AddTooltipPostCall(TooltipDataProcessor.AllTypes, function(tooltip, data)
    if not data or issecretvalue(data.type) then return end
    local kind = KINDS[tonumber(data.type)]
    if not kind or not O[kind.option] then return end
    if kind.kind == "unit" then
        local guid = data.guid
        if not guid or issecretvalue(guid) then return end
        local unitType, _, _, _, _, npcID = strsplit("-", guid)
        if unitType == "Creature" or unitType == "Vehicle" then
            AddIdLine(tooltip, kind.label, tonumber(npcID))
        end
    else
        AddIdLine(tooltip, kind.label, data.id)
    end
end)

${L.c('questHookNote')}
if TaskPOI_OnEnter then
    hooksecurefunc("TaskPOI_OnEnter", function(button)
        if O.showQuest and button and button.questID then AddIdLine(GameTooltip, "QuestID", button.questID) end
    end)
end
if QuestMapLogTitleButton_OnEnter then
    hooksecurefunc("QuestMapLogTitleButton_OnEnter", function(button)
        if O.showQuest and button and button.questLogIndex then
            AddIdLine(GameTooltip, "QuestID", C_QuestLog.GetQuestIDForLogIndex(button.questLogIndex))
        end
    end)
end
`;
};
