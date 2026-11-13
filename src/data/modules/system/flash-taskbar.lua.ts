import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local lastFlash = 0
local function TriggerFlash(_, silent)
    if GetTime() - lastFlash > 4 then
        lastFlash = GetTime()
        FlashClientIcon()
        if O.playSound and silent ~= true then PlaySound(SOUNDKIT.READY_CHECK, "Master") end
    end
end

${L.c('whisperNote')}
local function OnWhisper()
    if O.flashOnWhisper then TriggerFlash(nil, true) end
end
Core:RegisterEventCallback("CHAT_MSG_WHISPER", OnWhisper)
Core:RegisterEventCallback("CHAT_MSG_BN_WHISPER", OnWhisper)

${L.c('readyCheckNote')}
Core:RegisterEventCallback("READY_CHECK", TriggerFlash)
Core:RegisterEventCallback("LFG_PROPOSAL_SHOW", TriggerFlash)
Core:RegisterEventCallback("RESURRECT_REQUEST", TriggerFlash)
Core:RegisterEventCallback("CONFIRM_SUMMON", TriggerFlash)

${L.c('battlefieldNote')}
Core:RegisterEventCallback("UPDATE_BATTLEFIELD_STATUS", function()
    for i = 1, GetMaxBattlefieldID() do
        if GetBattlefieldStatus(i) == "confirm" then
            TriggerFlash()
            return
        end
    end
end)

${L.c('lfgHookNote')}
if LFGListInviteDialog_Show then
    hooksecurefunc("LFGListInviteDialog_Show", TriggerFlash)
end
`;
};
