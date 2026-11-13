import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local function ExpectedNames()
    local names = {}
    for part in tostring(O.expectedNames or ""):gsub("，", ","):gmatch("[^,]+") do
        local name = strtrim(part)
        if name ~= "" then table.insert(names, name) end
    end
    return names
end

local function CurrentLoadoutName()
    local specID = PlayerUtil.GetCurrentSpecID()
    if not specID then return nil end
    if C_ClassTalents.GetStarterBuildActive() then return TALENT_FRAME_DROP_DOWN_STARTER_BUILD or ${L.s('starterBuild')} end
    local configID = C_ClassTalents.GetLastSelectedSavedConfigID(specID)
    local info = configID and C_Traits.GetConfigInfo(configID)
    return info and info.name
end

local function IsExpected(name, expectedNames)
    if #expectedNames == 0 then return true end
    if not name then return false end
    local lower = strlower(name)
    for _, expected in ipairs(expectedNames) do
        if strlower(expected) == lower then return true end
    end
    return false
end

Core:RegisterEventCallback("READY_CHECK", function()
    local name = CurrentLoadoutName()
    local expectedNames = ExpectedNames()
    if IsExpected(name, expectedNames) then
        print(string.format(${L.s('currentMsg')}, name or ${L.s('unsavedBuild')}))
    else
        print(string.format(${L.s('mismatchMsg')}, name or ${L.s('unsavedBuild')}, table.concat(expectedNames, " / ")))
        if O.playSound then PlaySound(SOUNDKIT.RAID_WARNING, "Master") end
    end
end)
`;
};
