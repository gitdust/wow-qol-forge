import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
${L.c('tableNote')}
local CVARS = {
    { "autoDismountFlying", "autoDismountFlying", "1" },
    { "noMapFade", "mapFade", "0" },
    { "lootUnderMouse", "lootUnderMouse", "1" },
    { "noTutorials", "showTutorials", "0" },
    { "noErrorSpeech", "Sound_EnableErrorSpeech", "0" },
    { "alwaysCompare", "alwaysCompareItems", "1" },
}

local function Apply()
    if InCombatLockdown() then return end
    for _, entry in ipairs(CVARS) do
        if O[entry[1]] and C_CVar.GetCVar(entry[2]) ~= entry[3] then
            C_CVar.SetCVar(entry[2], entry[3])
        end
    end
end

Core:RegisterEventCallback("PLAYER_ENTERING_WORLD", Apply)
Core:OnSettingsChanged(Apply)
`;
};
