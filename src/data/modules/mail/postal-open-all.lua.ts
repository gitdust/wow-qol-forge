import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local isOpening = false
local startMoney = 0
local lastIndex, lastSignature, retries = nil, nil, 0
local openAllBtn

${L.c('ahPatternNote')}
local ahPatterns = {}
for _, key in ipairs({ "AUCTION_REMOVED_MAIL_SUBJECT", "AUCTION_EXPIRED_MAIL_SUBJECT", "AUCTION_OUTBID_MAIL_SUBJECT", "AUCTION_SOLD_MAIL_SUBJECT", "AUCTION_WON_MAIL_SUBJECT" }) do
    local text = _G[key]
    if type(text) == "string" then
        table.insert(ahPatterns, "^" .. text:gsub("%%s", ".*"))
    end
end

local function IsAuctionMail(subject)
    if not subject then return false end
    for _, pattern in ipairs(ahPatterns) do
        if subject:find(pattern) then return true end
    end
    return false
end

local function StopOpening(msg)
    if not isOpening then return end
    isOpening = false
    if openAllBtn then openAllBtn:SetText(${L.s('btnOpenAll')}) end
    local earned = GetMoney() - startMoney
    local summary = earned > 0 and (${L.s('earnedPrefix')} .. GetMoneyString(earned)) or ""
    print(${L.s('logPrefix')} .. msg .. summary)
end

local function ProcessNextMail()
    if not isOpening then return end
    local numItems, totalItems = GetInboxNumItems()

    for i = numItems, 1, -1 do
        local _, _, _, subject, money, codAmount, _, itemCount = GetInboxHeaderInfo(i)
        local hasLoot = (money and money > 0) or (itemCount and itemCount > 0)
        local skip = (codAmount and codAmount > 0) or (O.skipAH and IsAuctionMail(subject))
        if hasLoot and not skip then
            ${L.c('retryNote')}
            local signature = tostring(money) .. ":" .. tostring(itemCount)
            if i == lastIndex and signature == lastSignature then
                retries = retries + 1
                if retries >= 5 then
                    StopOpening(${L.s('stopFailed')})
                    return
                end
            else
                lastIndex, lastSignature, retries = i, signature, 0
            end
            AutoLootMailItem(i)
            C_Timer.After(0.3, ProcessNextMail)
            return
        end
    end

    if totalItems and totalItems > numItems then
        StopOpening(string.format(${L.s('stopMorePages')}, totalItems - numItems))
    else
        StopOpening(${L.s('stopDone')})
    end
end

local function CreateOpenAllButton()
    if openAllBtn or not InboxFrame then return end
    openAllBtn = CreateFrame("Button", nil, InboxFrame, "UIPanelButtonTemplate")
    openAllBtn:SetHeight(22)
    openAllBtn:SetPoint("TOPRIGHT", InboxFrame, "TOPRIGHT", -55, -28)
    openAllBtn:SetText(${L.s('btnOpenAll')})
    openAllBtn:SetWidth(math.max(80, openAllBtn:GetFontString():GetStringWidth() + 20))
    openAllBtn:SetScript("OnClick", function(self)
        if isOpening then
            StopOpening(${L.s('stopAborted')})
        else
            isOpening = true
            startMoney = GetMoney()
            lastIndex, lastSignature, retries = nil, nil, 0
            self:SetText(${L.s('btnStop')})
            ProcessNextMail()
        end
    end)
end

Core:RegisterEventCallback("PLAYER_INTERACTION_MANAGER_FRAME_SHOW", function(_, paneType)
    if paneType == Enum.PlayerInteractionType.MailInfo then CreateOpenAllButton() end
end)
Core:RegisterEventCallback("PLAYER_INTERACTION_MANAGER_FRAME_HIDE", function(_, paneType)
    if paneType == Enum.PlayerInteractionType.MailInfo then StopOpening(${L.s('stopClosed')}) end
end)
Core:RegisterEventCallback("UI_ERROR_MESSAGE", function(_, _, message)
    if isOpening and (message == ERR_INV_FULL or message == ERR_ITEM_MAX_COUNT) then
        StopOpening(${L.s('stopBagFull')})
    end
end)
`;
};
