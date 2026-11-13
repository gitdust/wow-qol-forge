import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local startedByUs = false

local function ShouldLog()
    local inInstance, instanceType = IsInInstance()
    if not inInstance then return false end
    if O.raid and instanceType == "raid" then return true end
    ${L.c('diffNote')}
    if O.mythicPlus and instanceType == "party" and (C_ChallengeMode.IsChallengeModeActive() or select(3, GetInstanceInfo()) == 8) then return true end
    return false
end

local function Update()
    if ShouldLog() then
        if not LoggingCombat() then
            LoggingCombat(true)
            startedByUs = true
            print(${L.s('startedMsg')})
        end
    elseif startedByUs and LoggingCombat() then
        LoggingCombat(false)
        startedByUs = false
        print(${L.s('stoppedMsg')})
    end
end

Core:RegisterEventCallback("PLAYER_ENTERING_WORLD", function() C_Timer.After(1, Update) end)
Core:RegisterEventCallback("CHALLENGE_MODE_START", Update)
Core:RegisterEventCallback("ZONE_CHANGED_NEW_AREA", Update)
`;
};
