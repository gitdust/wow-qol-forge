import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local changedByUs = false

local function Restore()
    if changedByUs then
        C_CVar.SetCVar("BlockTrades", "0")
        changedByUs = false
    end
end

Core:RegisterEventCallback("PLAYER_INTERACTION_MANAGER_FRAME_SHOW", function(_, paneType)
    if paneType == Enum.PlayerInteractionType.MailInfo and C_CVar.GetCVar("BlockTrades") == "0" then
        C_CVar.SetCVar("BlockTrades", "1")
        changedByUs = true
    end
end)
Core:RegisterEventCallback("PLAYER_INTERACTION_MANAGER_FRAME_HIDE", function(_, paneType)
    if paneType == Enum.PlayerInteractionType.MailInfo then Restore() end
end)
Core:RegisterEventCallback("PLAYER_LEAVING_WORLD", Restore)
`;
};
