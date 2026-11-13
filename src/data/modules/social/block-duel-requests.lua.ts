import { FALLBACK_LUA_CTX, FRIEND_CHECK_LUA } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
${FRIEND_CHECK_LUA}

Core:RegisterEventCallback("DUEL_REQUESTED", function(_, challenger)
    if IsFriendOrGuild(challenger) then return end
    CancelDuel()
    StaticPopup_Hide("DUEL_REQUESTED")
end)
`;
};
