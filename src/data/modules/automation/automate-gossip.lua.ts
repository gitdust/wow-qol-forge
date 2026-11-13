import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
Core:RegisterEventCallback("GOSSIP_SHOW", function()
    if not IsAltKeyDown() then return end
    local options = C_GossipInfo.GetOptions()
    ${L.c('onlyGossipNote')}
    if not options or #options ~= 1 then return end
    if C_GossipInfo.GetNumAvailableQuests() > 0 or C_GossipInfo.GetNumActiveQuests() > 0 then return end
    if options[1].gossipOptionID then
        C_GossipInfo.SelectOption(options[1].gossipOptionID)
    elseif GossipFrame and GossipFrame:IsShown() then
        ${L.c('fallbackNote')}
        GossipFrame:SelectGossipOption(1)
    end
end)
`;
};
