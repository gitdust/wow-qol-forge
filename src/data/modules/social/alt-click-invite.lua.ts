import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
hooksecurefunc("SetItemRef", function(link, text, button)
    if IsAltKeyDown() and link and link:sub(1, 6) == "player" then
        local name = link:sub(8):match("([^:]+)")
        if name and name ~= "" and name ~= UnitName("player") then
            C_PartyInfo.InviteUnit(name)
        end
    end
end)
`;
};
