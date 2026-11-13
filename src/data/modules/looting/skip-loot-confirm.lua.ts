import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
${L.c('hidePopupNote')}
local function HidePopupLater(which)
    C_Timer.After(0, function() StaticPopup_Hide(which) end)
end

Core:RegisterEventCallback("LOOT_BIND_CONFIRM", function(_, slot)
    if not O.lootBind then return end
    ConfirmLootSlot(slot)
    HidePopupLater("LOOT_BIND")
end)

local function ConfirmRoll(_, rollID, rollType)
    if not O.lootRoll then return end
    ConfirmLootRoll(rollID, rollType)
    HidePopupLater("CONFIRM_LOOT_ROLL")
end
Core:RegisterEventCallback("CONFIRM_LOOT_ROLL", ConfirmRoll)
Core:RegisterEventCallback("CONFIRM_DISENCHANT_ROLL", ConfirmRoll)
`;
};
