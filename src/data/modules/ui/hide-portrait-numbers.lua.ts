import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local hit = PlayerFrame.PlayerFrameContent and PlayerFrame.PlayerFrameContent.PlayerFrameContentMain.HitIndicator
if hit then
    hit:Hide()
    hooksecurefunc(hit, "Show", hit.Hide)
end
if PetHitIndicator then
    hooksecurefunc(PetHitIndicator, "Show", PetHitIndicator.Hide)
end
`;
};
