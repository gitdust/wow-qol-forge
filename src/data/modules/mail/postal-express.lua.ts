import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
${L.c('inboxNote')}
local function OnInboxClick(_, index)
    if not index then return end
    if IsShiftKeyDown() then
        local _, _, _, _, money, codAmount, _, itemCount = GetInboxHeaderInfo(index)
        if (not codAmount or codAmount == 0) and ((money and money > 0) or (itemCount and itemCount > 0)) then
            AutoLootMailItem(index)
        end
    elseif IsControlKeyDown() then
        local wasReturned, _, canReply = select(10, GetInboxHeaderInfo(index))
        if not wasReturned and canReply then
            ReturnInboxItem(index)
        end
    end
end
if InboxFrame_OnModifiedClick then hooksecurefunc("InboxFrame_OnModifiedClick", OnInboxClick) end
if InboxFrame_OnClick then hooksecurefunc("InboxFrame_OnClick", OnInboxClick) end

${L.c('sendNote')}
if HandleModifiedItemClick then
    hooksecurefunc("HandleModifiedItemClick", function(_, itemLocation)
        if not itemLocation or not itemLocation.IsBagAndSlot or not itemLocation:IsBagAndSlot() then return end
        if not IsAltKeyDown() or GetMouseButtonClicked() ~= "LeftButton" then return end
        if not (SendMailFrame and SendMailFrame:IsVisible()) or CursorHasItem() then return end
        local bag, slot = itemLocation:GetBagAndSlot()
        C_Container.PickupContainerItem(bag, slot)
        ClickSendMailItemButton()
    end)
end
`;
};
