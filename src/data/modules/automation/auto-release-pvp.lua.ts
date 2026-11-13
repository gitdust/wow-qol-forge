import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
${L.c('worldPvpNote')}
local WORLD_PVP_MAPS = { [123] = true, [244] = true, [588] = true, [622] = true, [624] = true }
${L.c('alteracNote')}
local ALTERAC_MAPS = { [91] = true, [1537] = true }

local function ReleaseIfStillDead()
    local dialog = StaticPopup_Visible("DEATH")
    if not dialog then return end
    if IsShiftKeyDown() then
        print(${L.s('cancelledMsg')})
        return
    end
    StaticPopup_OnClick(_G[dialog], 1)
end

hooksecurefunc("StaticPopup_Show", function(which)
    if which ~= "DEATH" then return end
    local selfRes = C_DeathInfo.GetSelfResurrectOptions()
    if selfRes and #selfRes > 0 then return end
    local mapID = C_Map.GetBestMapForUnit("player")
    local inInstance, instanceType = IsInInstance()
    local inBattleground = inInstance and instanceType == "pvp" and not (O.excludeAlterac and mapID and ALTERAC_MAPS[mapID])
    if inBattleground or (mapID and WORLD_PVP_MAPS[mapID]) then
        C_Timer.After(0.1, ReleaseIfStillDead)
    end
end)
`;
};
