import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local function HandleWhisperInvite(event, msg, sender)
    if not sender or not msg or issecretvalue(msg) or issecretvalue(sender) then return end
    local keyword = strtrim(tostring(O.keyword or ""))
    if keyword ~= "" and strtrim(msg) == keyword then
        if not IsInGroup() or UnitIsGroupLeader("player") or UnitIsGroupAssistant("player") then
            local cleanSender = sender:match("^(.-)%-") or sender
            C_PartyInfo.InviteUnit(cleanSender)
        end
    end
end
Core:RegisterEventCallback("CHAT_MSG_WHISPER", HandleWhisperInvite)
Core:RegisterEventCallback("CHAT_MSG_BN_WHISPER", HandleWhisperInvite)
`;
};
