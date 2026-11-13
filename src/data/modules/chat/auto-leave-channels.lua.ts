import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local CHANNELS = {}
for part in tostring(O.channels or ""):gsub("，", ","):gmatch("[^,]+") do
    local name = strtrim(part)
    if name ~= "" then table.insert(CHANNELS, name) end
end
if #CHANNELS == 0 then return end

local function LeaveAll()
    for _, name in ipairs(CHANNELS) do
        if GetChannelName(name) > 0 then LeaveChannelByName(name) end
    end
end

${L.c('delayNote')}
local done = false
Core:RegisterEventCallback("PLAYER_ENTERING_WORLD", function()
    if done then return end
    done = true
    C_Timer.After(5, LeaveAll)
    C_Timer.After(15, LeaveAll)
end)
`;
};
