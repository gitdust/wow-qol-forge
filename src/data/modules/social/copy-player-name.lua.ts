import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
do
    if Menu and Menu.ModifyMenu then
        local ChooseBoxForSend = ChatFrameUtil.ChooseBoxForSend
        local ActivateChat = ChatFrameUtil.ActivateChat

        local function AddCopyOption(owner, rootDescription, contextData)
            local name = contextData and contextData.name
            if not name or name == "" then return end

            rootDescription:CreateDivider()
            rootDescription:CreateButton(${L.s('copyPrefix')} .. name, function()
                local editBox = ChooseBoxForSend()
                ActivateChat(editBox)
                editBox:SetText(name)
                editBox:HighlightText()
            end)
        end

        Menu.ModifyMenu("MENU_UNIT_PLAYER", AddCopyOption)
        Menu.ModifyMenu("MENU_UNIT_PARTY", AddCopyOption)
        Menu.ModifyMenu("MENU_UNIT_RAID_PLAYER", AddCopyOption)
        Menu.ModifyMenu("MENU_UNIT_FRIEND", AddCopyOption)
    end
end
`;
};
