import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local wireBtn

local function SetupWireButton()
    if wireBtn or not (SendMailMoney and SendMailMoneyGold) then return end
    wireBtn = CreateFrame("Button", nil, SendMailFrame, "UIPanelButtonTemplate")
    wireBtn:SetHeight(18)
    wireBtn:SetPoint("LEFT", SendMailMoneyGold, "RIGHT", 4, 0)
    wireBtn:SetText(${L.s('btnAll')})
    wireBtn:SetWidth(math.max(40, wireBtn:GetFontString():GetStringWidth() + 14))
    wireBtn:SetScript("OnClick", function()
        local postage = GetSendMailPrice and GetSendMailPrice() or 30
        MoneyInputFrame_SetCopper(SendMailMoney, math.max(0, GetMoney() - postage))
    end)
end

local subjectPatterns = {}
for _, fmt in ipairs({
    "[" .. GOLD_AMOUNT .. " " .. SILVER_AMOUNT .. " " .. COPPER_AMOUNT .. "]",
    "[" .. SILVER_AMOUNT .. " " .. COPPER_AMOUNT .. "]",
    "[" .. COPPER_AMOUNT .. "]",
}) do
    local pattern = fmt:gsub("[%[%]]", "%%%0"):gsub("%%d", "%%d+")
    table.insert(subjectPatterns, "^" .. pattern .. "$")
end

local function IsAutoSubject(subject)
    if subject == "" then return true end
    for _, pattern in ipairs(subjectPatterns) do
        if subject:find(pattern) then return true end
    end
    return false
end

local function UpdateSubject()
    if not O.fillSubject then return end
    local subject = SendMailSubjectEditBox:GetText()
    if not IsAutoSubject(subject) then return end
    local money = MoneyInputFrame_GetCopper(SendMailMoney)
    if money and money > 0 then
        local gold = math.floor(money / 10000)
        local silver = math.floor((money % 10000) / 100)
        local copper = money % 100
        if gold > 0 then
            SendMailSubjectEditBox:SetText(string.format("[" .. GOLD_AMOUNT .. " " .. SILVER_AMOUNT .. " " .. COPPER_AMOUNT .. "]", gold, silver, copper))
        elseif silver > 0 then
            SendMailSubjectEditBox:SetText(string.format("[" .. SILVER_AMOUNT .. " " .. COPPER_AMOUNT .. "]", silver, copper))
        else
            SendMailSubjectEditBox:SetText(string.format("[" .. COPPER_AMOUNT .. "]", copper))
        end
    else
        SendMailSubjectEditBox:SetText("")
    end
end

if SendMailMoney and SendMailMoney.onValueChangedFunc then
    hooksecurefunc(SendMailMoney, "onValueChangedFunc", UpdateSubject)
end

Core:RegisterEventCallback("PLAYER_INTERACTION_MANAGER_FRAME_SHOW", function(_, paneType)
    if paneType == Enum.PlayerInteractionType.MailInfo then SetupWireButton() end
end)
`;
};
