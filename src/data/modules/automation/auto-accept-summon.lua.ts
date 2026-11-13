import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
Core:RegisterEventCallback("CONFIRM_SUMMON", function()
    if UnitAffectingCombat("player") then return end
    local summoner = C_SummonInfo.GetSummonConfirmSummoner()
    local area = C_SummonInfo.GetSummonConfirmAreaName()
    print(string.format(${L.s('summonNoticeMsg')}, tostring(summoner), tostring(area)))
    C_Timer.After(10, function()
        ${L.c('confirmNote')}
        if C_SummonInfo.GetSummonConfirmSummoner() == summoner and C_SummonInfo.GetSummonConfirmAreaName() == area
            and not UnitAffectingCombat("player") then
            C_SummonInfo.ConfirmSummon()
            StaticPopup_Hide("CONFIRM_SUMMON")
        end
    end)
end)
`;
};
