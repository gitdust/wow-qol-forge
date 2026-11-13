import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
if TalkingHeadFrame then
    hooksecurefunc(TalkingHeadFrame, "PlayCurrent", function(self)
        self:Hide()
    end)
end
`;
};
