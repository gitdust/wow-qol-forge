import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local function CleanActionBars()
    local barPrefixes = {
        "ActionButton",
        "MultiBarBottomLeftButton",
        "MultiBarBottomRightButton",
        "MultiBarRightButton",
        "MultiBarLeftButton",
        "MultiBar5Button",
        "MultiBar6Button",
        "MultiBar7Button"
    }

    for _, prefix in ipairs(barPrefixes) do
        for i = 1, 12 do
            local btnName = prefix .. i
            local hotkey = _G[btnName .. "HotKey"]
            if hotkey and O.hideHotKey then hotkey:SetAlpha(0) end
            local name = _G[btnName .. "Name"]
            if name and O.hideMacroName then name:SetAlpha(0) end
        end
    end
end
Core:RegisterEventCallback("PLAYER_ENTERING_WORLD", CleanActionBars)
`;
};
