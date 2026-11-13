import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
${L.c('multiRoundNote')}
local MAX_ROUNDS = 6
local ticker, totalPrice, round = nil, 0, 0

local function StopSelling(showResult)
    if ticker then ticker:Cancel() ticker = nil end
    if O.showSummary and showResult and totalPrice > 0 then
        print(${L.s('soldMsg')} .. C_CurrencyInfo.GetCoinText(totalPrice))
    end
    totalPrice = 0
end

local function SellRound()
    round = round + 1
    local soldThisRound = 0
    for bag = BACKPACK_CONTAINER, NUM_TOTAL_EQUIPPED_BAG_SLOTS or NUM_BAG_SLOTS do
        for slot = 1, C_Container.GetContainerNumSlots(bag) do
            local info = C_Container.GetContainerItemInfo(bag, slot)
            if info and info.hyperlink and not info.isLocked and info.quality == Enum.ItemQuality.Poor and not info.hasNoValue then
                local sellPrice = select(11, C_Item.GetItemInfo(info.hyperlink))
                if sellPrice and sellPrice > 0 then
                    if not MerchantFrame:IsShown() then StopSelling(true) return end
                    C_Container.UseContainerItem(bag, slot)
                    totalPrice = totalPrice + sellPrice * (info.stackCount or 1)
                    soldThisRound = soldThisRound + 1
                end
            end
        end
    end
    if soldThisRound == 0 or round >= MAX_ROUNDS then StopSelling(true) end
end

Core:RegisterEventCallback("MERCHANT_SHOW", function()
    StopSelling(false)
    if IsShiftKeyDown() then return end
    round = 0
    ticker = C_Timer.NewTicker(0.2, SellRound, MAX_ROUNDS)
end)
Core:RegisterEventCallback("MERCHANT_CLOSED", function() StopSelling(true) end)
${L.c('stopErrorNote')}
Core:RegisterEventCallback("UI_ERROR_MESSAGE", function(_, _, message)
    if ticker and (message == ERR_VENDOR_DOESNT_BUY or message == ERR_TOO_MUCH_GOLD) then StopSelling(true) end
end)
`;
};
