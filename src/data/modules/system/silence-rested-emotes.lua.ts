import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
${L.c('cvarNote')}
local changedByUs = false

local function Restore()
    if changedByUs then
        C_CVar.SetCVar("Sound_EnableEmoteSounds", "1")
        changedByUs = false
    end
end

local function UpdateEmoteSounds()
    if IsResting() then
        if C_CVar.GetCVar("Sound_EnableEmoteSounds") == "1" then
            C_CVar.SetCVar("Sound_EnableEmoteSounds", "0")
            changedByUs = true
        end
    else
        Restore()
    end
end

Core:RegisterEventCallback("PLAYER_ENTERING_WORLD", UpdateEmoteSounds)
Core:RegisterEventCallback("PLAYER_UPDATE_RESTING", UpdateEmoteSounds)
${L.c('restoreNote')}
Core:RegisterEventCallback("PLAYER_LEAVING_WORLD", Restore)
`;
};
