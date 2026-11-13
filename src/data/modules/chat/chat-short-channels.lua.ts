import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
${L.c('historyNote')}
local function FromGlobal(fmt)
    return (fmt:gsub(".*%[(.*)%].*", "%%[%1%%]"))
end

local NAMES = {
    zhCN = { "综合", "交易", "世界防务", "本地防务", "寻求组队", "公会招募" },
    zhTW = { "綜合", "交易", "世界防務", "本地防務", "尋求組隊", "公會招募" },
    koKR = { "공개", "거래", "전쟁", "수비", "파티찾기", "길드모집" },
    deDE = { "Allgemein", "Handel", "Weltverteidigung", "LokaleVerteidigung", "SucheNachGruppe", "Gildenrekrutierung" },
    ruRU = { "Общий", "Торговля", "Оборона: глобальный", "Оборона: локальный", "Поиск спутников", "Поиск гильдии" },
    frFR = { "Général", "Commerce", "DéfenseUniverselle", "DéfenseLocale", "RechercheDeGroupe", "RecrutementDeGuilde" },
    esES = { "General", "Comercio", "DefensaGeneral", "DefensaLocal", "BuscarGrupo", "ReclutamientoHermandad" },
    esMX = { "General", "Comercio", "DefensaGeneral", "DefensaLocal", "BuscarGrupo", "ReclutamientoHermandad" },
    ptBR = { "Geral", "Comércio", "DefesaGlobal", "DefesaLocal", "ProcurandoGrupo", "RecrutamentoDeGuilda" },
}
local names = NAMES[GetLocale()] or { "General", "Trade", "WorldDefense", "LocalDefense", "LookingForGroup", "GuildRecruitment" }

local rules = {
    { "%[%d%d?%. " .. names[1] .. "[^%]]*%]", ${L.s('general')} },
    { "%[%d%d?%. " .. names[2] .. "[^%]]*%]", ${L.s('trade')} },
    { "%[%d%d?%. " .. names[3] .. "[^%]]*%]", ${L.s('worldDefense')} },
    { "%[%d%d?%. " .. names[4] .. "[^%]]*%]", ${L.s('localDefense')} },
    { "%[%d%d?%. " .. names[5] .. "[^%]]*%]", ${L.s('lfg')} },
    { "%[%d%d?%. " .. names[6] .. "[^%]]*%]", ${L.s('recruitment')} },
    { FromGlobal(CHAT_INSTANCE_CHAT_LEADER_GET), ${L.s('instanceLeader')} },
    { FromGlobal(CHAT_INSTANCE_CHAT_GET), ${L.s('instance')} },
    { FromGlobal(CHAT_GUILD_GET), ${L.s('guild')} },
    { FromGlobal(CHAT_PARTY_LEADER_GET), ${L.s('partyLeader')} },
    { FromGlobal(CHAT_PARTY_GUIDE_GET), ${L.s('partyLeader')} },
    { FromGlobal(CHAT_PARTY_GET), ${L.s('party')} },
    { FromGlobal(CHAT_OFFICER_GET), ${L.s('officer')} },
    { FromGlobal(CHAT_RAID_LEADER_GET), ${L.s('raidLeader')} },
    { FromGlobal(CHAT_RAID_WARNING_GET), ${L.s('raidWarning')} },
    { FromGlobal(CHAT_RAID_GET), ${L.s('raid')} },
    { "%[(%d%d?)%. [^%]]+%]", "[%1]" }, ${L.c('customRuleNote')}
}

local function Shorten(text)
    for _, rule in ipairs(rules) do
        text = text:gsub(rule[1], rule[2])
    end
    return text
end

local function EditNewestLine(buffer)
    local index = type(buffer.headIndex) == "table" and buffer.headIndex.value or buffer.headIndex
    if index == 0 then
        index = type(buffer.maxElements) == "table" and buffer.maxElements.value or buffer.maxElements
    end
    local entry = buffer.elements[index]
    local text = entry and entry.message
    if text and not issecretvalue(text) then
        entry.message = Shorten(tostring(text))
    end
end

local hooked = {}
local function HookFrame(chatFrame)
    if chatFrame and chatFrame.historyBuffer and not hooked[chatFrame] and chatFrame ~= ChatFrame2 then
        hooked[chatFrame] = true
        hooksecurefunc(chatFrame.historyBuffer, "PushFront", EditNewestLine)
    end
end

for i = 1, Constants.ChatFrameConstants.MaxChatWindows do HookFrame(_G["ChatFrame" .. i]) end
hooksecurefunc("FCF_OpenTemporaryWindow", function()
    for i = Constants.ChatFrameConstants.MaxChatWindows + 1, 50 do
        local chatFrame = _G["ChatFrame" .. i]
        if not chatFrame then break end
        HookFrame(chatFrame)
    end
end)
`;
};
