import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local done = false
Core:RegisterEventCallback("PLAYER_ENTERING_WORLD", function()
    if done then return end
    done = true
    C_Timer.After(8, function()
        if not IsInGuild() then return end
        local motd = C_GuildInfo.GetMOTD()
        if motd and not issecretvalue(motd) and motd ~= "" then
            print(${L.s('motdPrefix')} .. motd)
        end
    end)
end)
`;
};
