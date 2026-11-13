import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
do
    SLASH_NATIVEWAY1 = "/way"
    SLASH_NATIVEWAY2 = "/waypoint"
    SlashCmdList["NATIVEWAY"] = function(msg)
        local mapID = C_Map.GetBestMapForUnit("player")
        if not mapID then
            DEFAULT_CHAT_FRAME:AddMessage(${L.s('noMapMsg')})
            return
        end

        msg = msg and msg:match("^%s*(.-)%s*$") or ""
        local xStr, yStr = msg:match("([%d%.]+)%s+([%d%.]+)")

        if not xStr or not yStr then
            local pos = C_Map.GetPlayerMapPosition(mapID, "player")
            if pos then
                local mapInfo = C_Map.GetMapInfo(mapID)
                local mapName = mapInfo and mapInfo.name or ${L.s('currentMapFallback')}
                DEFAULT_CHAT_FRAME:AddMessage(string.format(${L.s('coordMsg')}, mapName, pos.x * 100, pos.y * 100))
            else
                DEFAULT_CHAT_FRAME:AddMessage(${L.s('usageMsg')})
            end
            return
        end

        local x = tonumber(xStr)
        local y = tonumber(yStr)
        if not x or not y or x < 0 or x > 100 or y < 0 or y > 100 then
            DEFAULT_CHAT_FRAME:AddMessage(${L.s('invalidCoordMsg')})
            return
        end

        local point = UiMapPoint.CreateFromCoordinates(mapID, x / 100, y / 100)
        C_Map.SetUserWaypoint(point)
        C_SuperTrack.SetSuperTrackedUserWaypoint(true)

        local mapInfo = C_Map.GetMapInfo(mapID)
        local mapName = mapInfo and mapInfo.name or ${L.s('currentMapFallback')}
        DEFAULT_CHAT_FRAME:AddMessage(string.format(${L.s('pinSetMsg')}, mapName, x, y))
    end
end
`;
};
