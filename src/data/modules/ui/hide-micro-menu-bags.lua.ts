import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
local frames = {}
if O.hideMicroMenu and MicroMenuContainer then table.insert(frames, MicroMenuContainer) end
if O.hideBagsBar and BagsBar then table.insert(frames, BagsBar) end
if #frames == 0 then return end

if O.mouseover then
${L.c('mouseoverNote')}
for _, frame in ipairs(frames) do frame:SetAlpha(0) end
C_Timer.NewTicker(0.1, function()
    local editing = EditModeManagerFrame and EditModeManagerFrame:IsEditModeActive()
    for _, frame in ipairs(frames) do
        local alpha = (editing or (frame:IsVisible() and frame:IsMouseOver())) and 1 or 0
        if frame:GetAlpha() ~= alpha then frame:SetAlpha(alpha) end
    end
end)
else
    for _, frame in ipairs(frames) do
        frame:Hide()
        hooksecurefunc(frame, "Show", frame.Hide)
    end
end
`;
};
