import { FALLBACK_LUA_CTX, FRIEND_CHECK_LUA } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
${FRIEND_CHECK_LUA}

local function IsInLFGQueue()
    for _, category in ipairs({ LE_LFG_CATEGORY_LFD, LE_LFG_CATEGORY_LFR, LE_LFG_CATEGORY_RF, LE_LFG_CATEGORY_SCENARIO, LE_LFG_CATEGORY_FLEXRAID }) do
        if category and GetLFGMode(category) then return true end
    end
    return false
end

Core:RegisterEventCallback("PARTY_INVITE_REQUEST", function(_, inviterName)
    if not IsFriendOrGuild(inviterName) or IsInLFGQueue() then return end
    AcceptGroup()
    ${L.c('popupNote')}
    StaticPopup_ForEachShownDialog(function(dialog)
        if dialog.which == "PARTY_INVITE" then
            dialog.inviteAccepted = 1
            StaticPopup_Hide(dialog.which)
        end
    end)
end)
`;
};
