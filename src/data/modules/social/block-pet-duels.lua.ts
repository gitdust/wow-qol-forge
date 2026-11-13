import { FALLBACK_LUA_CTX, FRIEND_CHECK_LUA } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
${FRIEND_CHECK_LUA}

Core:RegisterEventCallback("PET_BATTLE_PVP_DUEL_REQUESTED", function(_, challenger)
    if IsFriendOrGuild(challenger) then return end
    C_PetBattles.CancelPVPDuel()
end)
`;
};
