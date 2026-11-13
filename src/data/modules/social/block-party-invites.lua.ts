import { FALLBACK_LUA_CTX, FRIEND_CHECK_LUA } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
${FRIEND_CHECK_LUA}

Core:RegisterEventCallback("PARTY_INVITE_REQUEST", function(_, inviterName)
    if IsFriendOrGuild(inviterName) then return end
    DeclineGroup()
    StaticPopup_Hide("PARTY_INVITE")
end)
`;
};
