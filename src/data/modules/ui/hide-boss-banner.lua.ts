import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
${L.c('keepIntroNote')}
BossBanner:UnregisterEvent("ENCOUNTER_LOOT_RECEIVED")
BossBanner:UnregisterEvent("BOSS_KILL")
`;
};
