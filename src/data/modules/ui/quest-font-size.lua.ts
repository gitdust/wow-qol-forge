import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local function Resize(fontObject, size)
    if not fontObject then return end
    local file, _, flags = fontObject:GetFont()
    if file then fontObject:SetFont(file, size, flags) end
end
local function Apply()
    local size = math.floor(tonumber(O.fontSize) or 15)
    Resize(QuestFont, size)
    Resize(QuestTitleFont, size + 2)
    Resize(QuestFontNormalSmall, size - 1)
end
Apply()
Core:OnSettingsChanged(Apply)
`;
};
