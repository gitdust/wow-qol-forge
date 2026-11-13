import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local reminded = false
local function Check()
    if reminded or not C_WeeklyRewards or not C_WeeklyRewards.HasAvailableRewards() then return end
    ${L.c('skipShownNote')}
    if WeeklyRewardsFrame and WeeklyRewardsFrame:IsShown() then return end
    reminded = true
    local msg = ${L.s('reminderMsg')}
    print("|cff00ff99[" .. ADDON_NAME .. "]|r |cffffd100" .. msg .. "|r")
    if O.showCenter and RaidWarningUtil and RaidWarningUtil.AddMessage then
        RaidWarningUtil.AddMessage(msg, ChatTypeInfo and ChatTypeInfo["RAID_WARNING"])
    end
    if O.playSound then PlaySound(SOUNDKIT.UI_WEEKLY_REWARD_OPEN_WINDOW or SOUNDKIT.RAID_WARNING, "Master") end
end

${L.c('delayNote')}
Core:RegisterEventCallback("PLAYER_ENTERING_WORLD", function(_, isLogin, isReload)
    if isLogin or isReload then C_Timer.After(5, Check) end
end)
Core:RegisterEventCallback("WEEKLY_REWARDS_UPDATE", function()
    C_Timer.After(1, Check)
end)
`;
};
