import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
${L.c('whitelistNote')}
local KEEP = {}
for _, key in ipairs({
    "ERR_INV_FULL", "ERR_QUEST_LOG_FULL", "ERR_RAID_GROUP_ONLY",
    "ERR_PARTY_LFG_BOOT_LIMIT", "ERR_PARTY_LFG_BOOT_DUNGEON_COMPLETE", "ERR_PARTY_LFG_BOOT_IN_COMBAT",
    "ERR_PARTY_LFG_BOOT_IN_PROGRESS", "ERR_PARTY_LFG_BOOT_LOOT_ROLLS", "ERR_PARTY_LFG_TELEPORT_IN_COMBAT",
    "ERR_PET_SPELL_DEAD", "ERR_PLAYER_DEAD", "SPELL_FAILED_TARGET_NO_POCKETS", "ERR_ALREADY_PICKPOCKETED",
}) do
    if _G[key] then KEEP[_G[key]] = true end
end
local notEligible = ERR_PARTY_LFG_BOOT_NOT_ELIGIBLE_S and ERR_PARTY_LFG_BOOT_NOT_ELIGIBLE_S:gsub("%%s", ".+")

local origHandler = UIErrorsFrame:GetScript("OnEvent")
UIErrorsFrame:SetScript("OnEvent", function(self, event, id, err, ...)
    if event == "UI_ERROR_MESSAGE" and type(err) == "string" and not issecretvalue(err) then
        if not KEEP[err] and not (notEligible and err:find(notEligible)) then return end
    end
    return origHandler(self, event, id, err, ...)
end)

${L.c('pingNote')}
if GameEvent and GameEvent.UnregisterInternalEvent then
    GameEvent.UnregisterInternalEvent("PING_SYSTEM_ERROR")
end
`;
};
