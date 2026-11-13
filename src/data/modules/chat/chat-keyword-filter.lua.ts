import { FALLBACK_LUA_CTX, FRIEND_CHECK_LUA } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
${FRIEND_CHECK_LUA}

${L.c('splitNote')}
local parsedFrom, keywords = nil, {}
local function GetKeywords()
    local raw = tostring(O.keywords or "")
    if raw ~= parsedFrom then
        parsedFrom, keywords = raw, {}
        for part in raw:gsub("，", ","):gmatch("[^,]+") do
            local word = strlower(strtrim(part))
            if word ~= "" then table.insert(keywords, word) end
        end
    end
    return keywords
end

local function KeywordFilter(_, event, msg, author, ...)
    ${L.c('secretNote')}
    if not msg or issecretvalue(msg) then return false end
    if event == "CHAT_MSG_WHISPER" then
        if not O.includeWhisper then return false end
        if author and not issecretvalue(author) and IsFriendOrGuild(author) then return false end
    end
    local lower = strlower(msg)
    for _, keyword in ipairs(GetKeywords()) do
        if lower:find(keyword, 1, true) then return true end
    end
    return false
end

for _, event in ipairs({ "CHAT_MSG_CHANNEL", "CHAT_MSG_SAY", "CHAT_MSG_YELL", "CHAT_MSG_WHISPER" }) do
    ChatFrameUtil.AddMessageEventFilter(event, KeywordFilter)
end
`;
};
