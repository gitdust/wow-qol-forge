import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local function SetMaxZoom()
    SetCVar("cameraDistanceMaxZoomFactor", 2.6)
end
Core:RegisterEventCallback("PLAYER_ENTERING_WORLD", SetMaxZoom)
`;
};
