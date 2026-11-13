import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local function HandleResurrect(event, inviterName)
    if O.combatCheck and (UnitAffectingCombat("player") or (inviterName and UnitAffectingCombat(inviterName))) then
        return
    end
    AcceptResurrect()
    if StaticPopup_Hide then
        StaticPopup_Hide("RESURRECT_NO_TIMER")
    end
end
Core:RegisterEventCallback("RESURRECT_REQUEST", HandleResurrect)
`;
};
