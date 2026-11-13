import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
${L.c('preventReregisterNote')}
hooksecurefunc(AlertFrame, "RegisterEvent", function(self, event)
    self:UnregisterEvent(event)
end)
AlertFrame:UnregisterAllEvents()
if EventRegistry and EventRegistry.UnregisterFrameEvent then
    EventRegistry:UnregisterFrameEvent("NEW_HOUSING_ITEM_ACQUIRED")
end

${L.c('eventToastNote')}
hooksecurefunc(EventToastManagerFrame, "Show", function(self)
    if not O.hideEventToasts then return end
    if self.HideButton and self.HideButton:IsShown() then return end
    if self.currentDisplayingToast then
        self.currentDisplayingToast:OnAnimatedOut()
    end
end)
`;
};
