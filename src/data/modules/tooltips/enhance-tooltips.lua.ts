import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local function Safe(value)
    if value ~= nil and not issecretvalue(value) then return value end
end

TooltipDataProcessor.AddTooltipPostCall(Enum.TooltipDataType.Unit, function(tooltip)
    if tooltip ~= GameTooltip then return end
    local _, unit = tooltip:GetUnit()
    ${L.c('secretSkipNote')}
    if not unit or issecretvalue(unit) then return end

    ${L.c('safeFilterNote')}
    if Safe(UnitIsPlayer(unit)) then
        ${L.c('classColorNote')}
        local class = Safe(select(2, UnitClass(unit)))
        local color = class and RAID_CLASS_COLORS[class]
        if color then GameTooltipTextLeft1:SetTextColor(color.r, color.g, color.b) end

        ${L.c('guildRankNote')}
        local guildName, guildRank, _, guildRealm = GetGuildInfo(unit)
        guildName, guildRank, guildRealm = Safe(guildName), Safe(guildRank), Safe(guildRealm)
        if guildName and GameTooltipTextLeft2 then
            if guildRealm and guildRealm ~= "" then guildName = guildName .. "-" .. guildRealm end
            GameTooltipTextLeft2:SetText(guildRank and (guildName .. " - " .. guildRank) or guildName)
            GameTooltipTextLeft2:SetTextColor(0.67, 0.67, 1)
        end
    end

    ${L.c('targetNote')}
    local target = unit .. "target"
    if Safe(UnitExists(target)) then
        local name = Safe(UnitName(target))
        if name then
            local color = { r = 1, g = 1, b = 1 }
            if Safe(UnitIsUnit(target, "player")) then
                name = ${L.s('youLabel')}
                color = { r = 1, g = 0.2, b = 0.2 }
            elseif Safe(UnitIsPlayer(target)) then
                local class = Safe(select(2, UnitClass(target)))
                color = class and RAID_CLASS_COLORS[class] or color
            end
            tooltip:AddDoubleLine(${L.s('targetLabel')}, name, 1, 0.82, 0, color.r, color.g, color.b)
        end
    end
end)
`;
};
