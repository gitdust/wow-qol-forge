import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
if CinematicFrame then
    CinematicFrame:HookScript("OnKeyDown", function(self, key)
        if key == "ESCAPE" and self:IsShown() and self.closeDialog and CinematicFrameCloseDialogConfirmButton then
            CinematicFrameCloseDialog:Hide()
        end
    end)
    CinematicFrame:HookScript("OnKeyUp", function(self, key)
        if (key == "SPACE" or key == "ESCAPE" or key == "ENTER") and self:IsShown() and self.closeDialog and CinematicFrameCloseDialogConfirmButton then
            CinematicFrameCloseDialogConfirmButton:Click()
        end
    end)
end

if MovieFrame then
    MovieFrame:HookScript("OnKeyUp", function(self, key)
        if (key == "SPACE" or key == "ESCAPE" or key == "ENTER") and self:IsShown() and self.CloseDialog and self.CloseDialog.Buttons and self.CloseDialog.Buttons.ConfirmButton then
            self.CloseDialog.Buttons.ConfirmButton:Click()
        end
    end)
end
`;
};
