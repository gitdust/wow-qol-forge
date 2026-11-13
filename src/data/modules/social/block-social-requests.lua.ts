import { FALLBACK_LUA_CTX, FRIEND_CHECK_LUA } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local function DeclineFriendRequests()
    if not O.friendRequests then return end
    local declined = 0
    for i = BNGetNumFriendInvites(), 1, -1 do
        local info = C_BattleNet.GetFriendInviteInfo(i)
        if info and info.inviteID then
            BNDeclineFriendInvite(info.inviteID)
            declined = declined + 1
        end
    end
    if declined > 0 then
        print(string.format(${L.s('declinedFriendsMsg')}, declined))
    end
end
Core:RegisterEventCallback("BN_FRIEND_INVITE_ADDED", DeclineFriendRequests)
Core:RegisterEventCallback("PLAYER_LOGIN", DeclineFriendRequests)

${FRIEND_CHECK_LUA}

Core:RegisterEventCallback("GUILD_INVITE_REQUEST", function(_, inviterName)
    if not O.guildInvites then return end
    if inviterName and canaccessvalue(inviterName) and IsFriendOrGuild(inviterName) then return end
    ${L.c('guildPopupNote')}
    C_Timer.After(0, function()
        if GuildInviteFrame and GuildInviteFrame:IsShown() then
            GuildInviteFrame:Hide()
        else
            DeclineGuild()
        end
        print(${L.s('declinedGuildMsg')})
    end)
end)
`;
};
