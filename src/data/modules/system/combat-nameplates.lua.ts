import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
Core:RegisterEventCallback("PLAYER_REGEN_DISABLED", function()
    SetCVar("nameplateShowEnemies", "1")
end)
Core:RegisterEventCallback("PLAYER_REGEN_ENABLED", function()
    SetCVar("nameplateShowEnemies", "0")
end)
`;
};
