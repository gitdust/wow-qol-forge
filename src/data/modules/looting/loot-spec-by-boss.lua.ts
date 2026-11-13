import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local original ${L.c('originalNote')}

${L.c('parseRulesNote')}
local function ParseRules()
    local text = (O.rules or ""):gsub("；", ","):gsub("，", ","):gsub("、", ","):gsub("＝", "="):gsub(";", ",")
    local rules = {}
    for entry in text:gmatch("[^,]+") do
        local key, spec = entry:match("^%s*(.-)%s*=%s*(.-)%s*$")
        if key and key ~= "" and spec ~= "" then rules[key] = spec end
    end
    return rules
end

${L.c('findSpecNote')}
local function FindSpecID(name)
    if name == ${L.s('currentKeyword')} or name == ${L.s('currentSpecLabel')} or name:lower() == "current" then return 0 end
    for i = 1, GetNumSpecializations() do
        local specID, specName = GetSpecializationInfo(i)
        if specName == name then return specID end
    end
end

local function SpecLabel(specID)
    if specID == 0 then
        local current = GetSpecialization()
        local name = current and select(2, GetSpecializationInfo(current))
        return ${L.s('currentSpecLabel')} .. (name and (" (" .. name .. ")") or "")
    end
    return select(2, GetSpecializationInfoByID(specID)) or tostring(specID)
end

local function Switch(specID, reason)
    if GetLootSpecialization() == specID then return end
    SetLootSpecialization(specID)
    if O.announce then
        print(string.format(${L.s('switchedMsg')}, SpecLabel(specID), reason or ""))
    end
end

local function Restore(reason)
    if original == nil then return end
    local specID = original
    original = nil
    Switch(specID, reason)
end

Core:RegisterEventCallback("ENCOUNTER_START", function(_, encounterID, encounterName)
    local rules = ParseRules()
    local spec, source = rules[encounterName] or rules[tostring(encounterID)], encounterName
    if not spec then
        source = GetInstanceInfo()
        spec = rules[source]
    end
    if not spec then
        ${L.c('noRuleNote')}
        Restore(string.format(${L.s('restoredNoRule')}, encounterName))
        return
    end
    local specID = FindSpecID(spec)
    if not specID then
        print(string.format(${L.s('invalidSpecMsg')}, source, spec))
        return
    end
    if original == nil then original = GetLootSpecialization() end
    Switch(specID, " (" .. source .. ")")
end)

${L.c('leaveInstanceNote')}
Core:RegisterEventCallback("PLAYER_ENTERING_WORLD", function()
    if not IsInInstance() then Restore(${L.s('restoredLeftInstance')}) end
end)
`;
};
