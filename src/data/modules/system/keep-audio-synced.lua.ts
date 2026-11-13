import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
${L.c('syncNote')}
local pending = false

local function SyncAudio()
    ${L.c('cinematicNote')}
    if (CinematicFrame and CinematicFrame:IsShown()) or (MovieFrame and MovieFrame:IsShown()) then
        pending = true
        return
    end
    pending = false
    C_CVar.SetCVar("Sound_OutputDriverIndex", "0")
    if Sound_GameSystem_RestartSoundSystem then
        Sound_GameSystem_RestartSoundSystem()
    end
end

Core:RegisterEventCallback("VOICE_CHAT_OUTPUT_DEVICES_UPDATED", SyncAudio)
Core:RegisterEventCallback("CINEMATIC_STOP", function() if pending then SyncAudio() end end)
Core:RegisterEventCallback("STOP_MOVIE", function() if pending then SyncAudio() end end)
`;
};
