import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
${L.c('keepEventsNote')}
ZoneTextFrame:SetScript("OnShow", ZoneTextFrame.Hide)
SubZoneTextFrame:SetScript("OnShow", SubZoneTextFrame.Hide)
`;
};
