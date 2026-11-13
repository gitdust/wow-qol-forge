import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local function TargetName()
    if not UnitExists("target") or not UnitIsPlayer("target") then return nil end
    local name = GetUnitName("target", true)
    if not name or issecretvalue(name) then return nil end
    return name
end

SLASH_QOLTELLTARGET1 = "/tt"
SlashCmdList.QOLTELLTARGET = function(msg)
    local name = TargetName()
    if not name then
        print(${L.s('noTargetMsg')})
        return
    end
    msg = strtrim(msg or "")
    if msg == "" then
        ChatFrameUtil.OpenChat("/w " .. name .. " ")
    else
        C_ChatInfo.SendChatMessage(msg, "WHISPER", nil, name)
    end
end
`;
};
