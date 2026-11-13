import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
${L.c('hookNote')}
for _, button in ipairs({ QuickJoinToastButton, ChatFrameChannelButton, ChatFrameMenuButton }) do
    button:Hide()
    hooksecurefunc(button, "Show", button.Hide)
end
`;
};
