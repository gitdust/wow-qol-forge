import { FALLBACK_LUA_CTX, FRIEND_CHECK_LUA } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
${FRIEND_CHECK_LUA}

local function LeaderIsFriend()
    if UnitIsGroupLeader("player") then return true end
    for i = 1, GetNumSubgroupMembers() do
        local unit = "party" .. i
        if UnitIsGroupLeader(unit) then
            local name = UnitName(unit)
            return name and canaccessvalue(name) and IsFriendOrGuild(name)
        end
    end
    return false
end

Core:RegisterEventCallback("LFG_ROLE_CHECK_SHOW", function()
    if IsShiftKeyDown() then return end
    if O.friendLeaderOnly and not LeaderIsFriend() then return end
    ${L.c('delayNote')}
    C_Timer.After(0, function()
        local button = LFDRoleCheckPopupAcceptButton
        if button and button:IsVisible() and button:IsEnabled() then
            button:Click()
        end
    end)
end)
`;
};
