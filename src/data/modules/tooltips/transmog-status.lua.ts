import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
${L.c('statusRuleNote')}
local function GetTransmogStatus(itemLink)
    local sourceID = select(2, C_TransmogCollection.GetItemInfo(itemLink))
    if not sourceID then return nil end
    if C_TransmogCollection.PlayerHasTransmogItemModifiedAppearance(sourceID) then
        return ${L.s('collected')}
    end
    local sourceInfo = C_TransmogCollection.GetAppearanceSourceInfo(sourceID)
    local appearanceID = sourceInfo and sourceInfo.itemAppearanceID
    if appearanceID then
        for _, otherSource in pairs(C_TransmogCollection.GetAllAppearanceSources(appearanceID) or {}) do
            if C_TransmogCollection.PlayerHasTransmogItemModifiedAppearance(otherSource) then
                return ${L.s('appearanceCollected')}
            end
        end
    end
    return ${L.s('notCollected')}
end

TooltipDataProcessor.AddTooltipPostCall(Enum.TooltipDataType.Item, function(tooltip)
    if not tooltip.GetItem then return end
    local _, itemLink = tooltip:GetItem()
    if not itemLink or issecretvalue(itemLink) then return end
    local status = GetTransmogStatus(itemLink)
    if status then
        tooltip:AddDoubleLine(${L.s('label')}, status)
    end
end)
`;
};
