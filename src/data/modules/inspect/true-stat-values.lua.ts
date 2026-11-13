import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
${L.c('conversionNote')}
local CONVERSION = {
    [CR_CRIT_SPELL] = { 13.58403151, 15.17699796, 16.95676773, 18.94524679, 21.16690997, 23.6491022, 26.42237511, 29.520863, 32.98270306, 46 },
    [CR_HASTE_SPELL] = { 12.99342144, 14.51712849, 16.21951696, 18.12154041, 20.24660954, 22.62088037, 25.27357619, 28.23734722, 31.5486725, 44 },
    [CR_MASTERY] = { 13.58403151, 15.17699796, 16.95676773, 18.94524679, 21.16690997, 23.6491022, 26.42237511, 29.520863, 32.98270306, 46 },
    [CR_VERSATILITY_DAMAGE_DONE] = { 15.94647177, 17.81647587, 19.90577082, 22.24007232, 24.8481117, 27.76198954, 31.01757078, 34.65492613, 38.71882534, 54 },
    [CR_LIFESTEAL] = { 20.37633812, 22.76582191, 25.43551468, 28.41827584, 31.75081818, 35.47415968, 39.63412842, 44.2819266, 49.47476082, 69.00098495 },
    [CR_AVOIDANCE] = { 10.86738033, 12.14177169, 13.56560783, 15.15641378, 16.9337697, 18.91955183, 21.13820182, 23.61702752, 26.3865391, 36.80052531 },
    [CR_SPEED] = { 3.396056354, 3.794303652, 4.239252446, 4.736379307, 5.29180303, 5.912359947, 6.605688069, 7.3803211, 8.24579347, 11.50016416 },
}
local MIN_LEVEL = 81

${L.c('bracketsNote')}
local SECONDARY_BRACKETS = {
    { size = 30, penalty = 0 }, { size = 10, penalty = 0.1 }, { size = 10, penalty = 0.2 },
    { size = 10, penalty = 0.3 }, { size = 20, penalty = 0.4 }, { size = 120, penalty = 0.5 },
    { size = 100000, penalty = 1.0 },
}
local TERTIARY_BRACKETS = {
    { size = 10, penalty = 0 }, { size = 5, penalty = 0.2 }, { size = 5, penalty = 0.4 },
    { size = 80, penalty = 0.6 }, { size = 100000, penalty = 1.0 },
}
local TERTIARY = { [CR_LIFESTEAL] = true, [CR_AVOIDANCE] = true, [CR_SPEED] = true }

local STAT_LABELS = {
    [CR_CRIT_SPELL] = STAT_CRITICAL_STRIKE,
    [CR_HASTE_SPELL] = STAT_HASTE,
    [CR_MASTERY] = STAT_MASTERY,
    [CR_VERSATILITY_DAMAGE_DONE] = STAT_VERSATILITY,
    [CR_LIFESTEAL] = STAT_LIFESTEAL,
    [CR_AVOIDANCE] = STAT_AVOIDANCE,
    [CR_SPEED] = STAT_SPEED,
}

local function Round2(x) return math.floor(0.005 + 100 * x) / 100 end

local function Analyze(statId)
    local level = UnitLevel("player")
    if level < MIN_LEVEL then return end
    local factor = CONVERSION[statId][math.min(level, 90) - MIN_LEVEL + 1]
    local rating = GetCombatRating(statId)
    if not factor or issecretvalue(rating) then return end

    local brackets = TERTIARY[statId] and TERTIARY_BRACKETS or SECONDARY_BRACKETS
    local percent = rating / factor
    local trueRating, penalty, nextPenalty, used, cap = 0, 0, 0, 0, 0
    for i, bracket in ipairs(brackets) do
        if percent < bracket.size then
            used = math.floor(0.5 + percent * factor)
            cap = math.floor(0.5 + bracket.size * factor)
            penalty = bracket.penalty
            nextPenalty = brackets[i + 1] and brackets[i + 1].penalty or 1
            trueRating = trueRating + percent * factor * (1 - bracket.penalty)
            break
        end
        trueRating = trueRating + bracket.size * factor * (1 - bracket.penalty)
        percent = percent - bracket.size
    end
    return Round2(trueRating), Round2(rating - trueRating), penalty, nextPenalty, used, cap
end

${L.c('tooltipNote')}
GameTooltip:HookScript("OnShow", function(tooltip)
    if C_Secrets and C_Secrets.ShouldUnitStatsBeSecret and C_Secrets.ShouldUnitStatsBeSecret("player") then return end
    local text = GameTooltipTextLeft1 and GameTooltipTextLeft1:GetText()
    if not text or issecretvalue(text) then return end

    for statId, statName in pairs(STAT_LABELS) do
        local label = string.format(PAPERDOLLFRAME_TOOLTIP_FORMAT, statName)
        local start = text:find(label, 1, true)
        if start and start <= 11 then
            local trueRating, lost, penalty, nextPenalty, used, cap = Analyze(statId)
            if not trueRating then return end
            tooltip:AddLine(" ")
            tooltip:AddDoubleLine(${L.s('trueRating')}, tostring(trueRating), 0.4, 1, 0.4, 1, 1, 1)
            tooltip:AddDoubleLine(${L.s('lostRating')}, tostring(lost), 1, 0.4, 0.4, 1, 1, 1)
            tooltip:AddDoubleLine(${L.s('currentPenalty')}, string.format("-%d%%", penalty * 100), 1, 0.82, 0, 1, 1, 1)
            if O.showNextBracket then
                tooltip:AddDoubleLine(${L.s('bracketProgress')}, string.format(${L.s('bracketFormat')}, used, cap, nextPenalty * 100), 1, 0.82, 0, 1, 1, 1)
            end
            tooltip:Show()
            return
        end
    end
end)
`;
};
