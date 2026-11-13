// 把网页输入的文本编译成安全的 Lua 字符串字面量
export const luaString = (text: string) =>
  `"${text.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\r/g, '').replace(/\n/g, '\\n')}"`;

export const FALLBACK_LUA_CTX = {
  c: (key: string) => `-- ${key}`,
  s: (key: string) => luaString(key),
  t: (key: string) => key,
};

// 好友判定 (角色好友 + 战网好友 + 在线公会成员)，参考 Leatrix Plus FriendCheck。
// 以代码片段形式注入各模块，保证生成的 Lua 仍然各自独立、判定结果一致。
export const FRIEND_CHECK_LUA = `local function IsFriendOrGuild(name)
    if not name then return false end
    name = strsplit("-", name, 2)
    for i = 1, C_FriendList.GetNumFriends() do
        local info = C_FriendList.GetFriendInfoByIndex(i)
        if info and info.name and strsplit("-", info.name, 2) == name then return true end
    end
    for i = 1, BNGetNumFriends() do
        for j = 1, C_BattleNet.GetFriendNumGameAccounts(i) do
            local game = C_BattleNet.GetFriendGameAccountInfo(i, j)
            if game and game.clientProgram == BNET_CLIENT_WOW and game.characterName == name then return true end
        end
    end
    if IsInGuild() then
        for i = 1, GetNumGuildMembers() do
            local gName, _, _, _, _, _, _, _, online, _, _, _, _, isMobile = GetGuildRosterInfo(i)
            if gName and online and not isMobile and strsplit("-", gName, 2) == name then return true end
        end
    end
    return false
end`;
