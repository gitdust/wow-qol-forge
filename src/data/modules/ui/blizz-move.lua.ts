import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
do
    ${L.c('framesNote')}
    local framesToMove = {
        "AddonList", "BankFrame", "CharacterFrame", "ChatConfigFrame", "DressUpFrame", "FriendsFrame",
        "GossipFrame", "GuildRegistrarFrame", "HelpFrame", "ItemTextFrame", "MailFrame", "MerchantFrame",
        "ModelPreviewFrame", "PVEFrame", "PetitionFrame", "QuestFrame", "QuestLogPopupDetailFrame",
        "QuickKeybindFrame", "SettingsPanel", "TabardFrame", "TaxiFrame", "TradeFrame", "WorldMapFrame",
    }
    ${L.c('addonFramesNote')}
    local addonFrames = {
        Blizzard_AchievementUI = { "AchievementFrame" },
        Blizzard_AuctionHouseUI = { "AuctionHouseFrame" },
        Blizzard_BlackMarketUI = { "BlackMarketFrame" },
        Blizzard_Calendar = { "CalendarFrame" },
        Blizzard_ChallengesUI = { "ChallengesKeystoneFrame" },
        Blizzard_Channels = { "ChannelFrame" },
        Blizzard_ClickBindingUI = { "ClickBindingFrame" },
        Blizzard_Collections = { "CollectionsJournal" },
        Blizzard_Communities = { "CommunitiesFrame" },
        Blizzard_CooldownViewer = { "CooldownViewerSettings" },
        Blizzard_DeathRecap = { "DeathRecapFrame" },
        Blizzard_DelvesCompanionConfiguration = { "DelvesCompanionConfigurationFrame" },
        Blizzard_DelvesDifficultyPicker = { "DelvesDifficultyPickerFrame" },
        Blizzard_EncounterJournal = { "EncounterJournal" },
        Blizzard_ExpansionLandingPage = { "ExpansionLandingPage" },
        Blizzard_FlightMap = { "FlightMapFrame" },
        Blizzard_GenericTraitUI = { "GenericTraitFrame" },
        Blizzard_GuildBankUI = { "GuildBankFrame" },
        Blizzard_HousingDashboard = { "HousingDashboardFrame" },
        Blizzard_InspectUI = { "InspectFrame" },
        Blizzard_ItemInteractionUI = { "ItemInteractionFrame" },
        Blizzard_ItemSocketingUI = { "ItemSocketingFrame" },
        Blizzard_ItemUpgradeUI = { "ItemUpgradeFrame" },
        Blizzard_MacroUI = { "MacroFrame" },
        Blizzard_PlayerChoice = { "PlayerChoiceFrame" },
        Blizzard_PlayerSpells = { "PlayerSpellsFrame" },
        Blizzard_Professions = { "ProfessionsFrame" },
        Blizzard_ProfessionsBook = { "ProfessionsBookFrame" },
        Blizzard_ProfessionsCustomerOrders = { "ProfessionsCustomerOrdersFrame" },
        Blizzard_PVPMatch = { "PVPMatchResults" },
        Blizzard_ScrappingMachineUI = { "ScrappingMachineFrame" },
        Blizzard_StableUI = { "StableFrame" },
        Blizzard_TimeManager = { "TimeManagerFrame" },
        Blizzard_TrainerUI = { "ClassTrainerFrame" },
        Blizzard_Transmog = { "TransmogFrame" },
        Blizzard_WeeklyRewards = { "WeeklyRewardsFrame" },
    }
    ${L.c('subFramesNote')}
    local dragChildren = {
        CharacterFrame = { "PaperDollFrame", "ReputationFrame", "TokenFrame" },
        MailFrame = { "MailFrameInset", "OpenMailFrame", "SendMailFrame" },
        WorldMapFrame = { "QuestMapFrame" },
        AchievementFrame = { "AchievementFrame.Header" },
        CollectionsJournal = { "CollectionsJournal.TitleContainer" },
    }

    local MIN_SCALE, MAX_SCALE = 0.5, 1.5

    ${L.c('stateNote')}
    local roots = {}           ${L.c('rootsComment')}
    local handleToRoot = {}    ${L.c('handleComment')}
    local savedPos = {}        ${L.c('posComment')}
    local savedScale = {}      ${L.c('scaleComment')}
    local originalPoints = {}  ${L.c('pointsComment')}
    local movingFrame
    local applying = false
    local pendingApply = {}    ${L.c('pendingApplyComment')}
    local pendingHook = {}     ${L.c('pendingHookComment')}

    local function Blocked(frame)
        return InCombatLockdown() and frame:IsProtected()
    end

    local function Resolve(path)
        local obj = _G
        for key in path:gmatch("[^%.]+") do
            if type(obj) ~= "table" then return nil end
            obj = obj[key]
        end
        return type(obj) == "table" and obj.GetObjectType and obj or nil
    end

    local function CapturePoints(frame)
        local points = {}
        for i = 1, frame:GetNumPoints() do
            points[i] = { frame:GetPoint(i) }
        end
        return points
    end

    local function ApplyPosition(frame)
        local pos = savedPos[frame]
        if not pos or frame.isMaximized then return end
        if Blocked(frame) then pendingApply[frame] = true return end
        local scale = frame:GetScale() or 1
        applying = true
        frame:ClearAllPoints()
        frame:SetPoint("TOPLEFT", UIParent, "BOTTOMLEFT", pos.x / scale, pos.y / scale)
        applying = false
    end

    local function ApplyScale(frame)
        local scale = savedScale[frame]
        if not scale or frame:GetScale() == scale then return end
        if Blocked(frame) then pendingApply[frame] = true return end
        frame:SetScale(scale)
        ApplyPosition(frame)
    end

    local function SavePosition(frame)
        local left, top, scale = frame:GetLeft(), frame:GetTop(), frame:GetScale()
        if not left or not top or not scale then return end
        savedPos[frame] = { x = left * scale, y = top * scale }
    end

    local function ResetPosition(frame)
        if Blocked(frame) then return end
        savedPos[frame] = nil
        local points = originalPoints[frame]
        if points and points[1] then
            applying = true
            frame:ClearAllPoints()
            ${L.c('unpackNote')}
            for _, p in ipairs(points) do frame:SetPoint(p[1], p[2], p[3], p[4], p[5]) end
            applying = false
        end
        ${L.c('panelManagerNote')}
        if UIPanelWindows and UIPanelWindows[roots[frame]] and UpdateUIPanelPositions then
            UpdateUIPanelPositions(frame)
        end
    end

    local function ResetScale(frame)
        if Blocked(frame) then return end
        savedScale[frame] = nil
        frame:SetScale(1)
        ApplyPosition(frame)
    end

    local function StopMove()
        local frame = movingFrame
        if not frame then return end
        movingFrame = nil
        frame:StopMovingOrSizing()
        SavePosition(frame)
        ApplyPosition(frame)
    end

    local function OnMouseDown(handle, button)
        local frame = handleToRoot[handle]
        if not frame or Blocked(frame) then return end
        if button == "LeftButton" then
            if frame.isMaximized then return end
            if not originalPoints[frame] then originalPoints[frame] = CapturePoints(frame) end
            ${L.c('userPlacedNote')}
            local userPlaced = frame:IsUserPlaced()
            frame:StartMoving()
            frame:SetUserPlaced(userPlaced)
            movingFrame = frame
        elseif button == "RightButton" then
            if IsShiftKeyDown() then ResetPosition(frame) end
            if IsControlKeyDown() then ResetScale(frame) end
        end
    end

    local function OnMouseUp(_, button)
        if button == "LeftButton" then StopMove() end
    end

    local function HookHandle(handle, frame)
        if handleToRoot[handle] then return end
        handleToRoot[handle] = frame
        handle:HookScript("OnMouseDown", OnMouseDown)
        handle:HookScript("OnMouseUp", OnMouseUp)
    end

    local function HookFrame(frameName)
        local frame = _G[frameName]
        if not frame or roots[frame] then return end
        if Blocked(frame) then pendingHook[frameName] = true return end
        roots[frame] = frameName

        frame:SetMovable(true)
        frame:SetClampedToScreen(true)
        frame:EnableMouse(true)
        HookHandle(frame, frame)
        for _, path in ipairs(dragChildren[frameName] or {}) do
            local child = Resolve(path)
            if child and child.HookScript then HookHandle(child, frame) end
        end

        ${L.c('repositionNote')}
        hooksecurefunc(frame, "SetPoint", function(self)
            if not applying and savedPos[self] then ApplyPosition(self) end
        end)
        frame:HookScript("OnShow", function(self)
            ApplyScale(self)
            ApplyPosition(self)
        end)
        frame:HookScript("OnHide", function(self)
            if movingFrame == self then StopMove() end
        end)
    end

    for _, name in ipairs(framesToMove) do HookFrame(name) end
    local function HookAddon(addonName)
        local list = addonFrames[addonName]
        if not list then return end
        for _, name in ipairs(list) do HookFrame(name) end
        addonFrames[addonName] = nil
    end
    for addonName in pairs(addonFrames) do
        if C_AddOns.IsAddOnLoaded(addonName) then HookAddon(addonName) end
    end
    Core:RegisterEventCallback("ADDON_LOADED", function(_, addonName) HookAddon(addonName) end)

    Core:RegisterEventCallback("PLAYER_REGEN_ENABLED", function()
        for name in pairs(pendingHook) do
            pendingHook[name] = nil
            HookFrame(name)
        end
        for frame in pairs(pendingApply) do
            pendingApply[frame] = nil
            if frame:IsShown() then
                ApplyScale(frame)
                ApplyPosition(frame)
            end
        end
    end)

    ${L.c('wheelNote1')}
    ${L.c('wheelNote2')}
    local wheelTarget
    local catcher = CreateFrame("Frame", nil, UIParent)
    catcher:SetAllPoints(UIParent)
    catcher:SetFrameStrata("TOOLTIP")
    catcher:EnableMouse(false)
    catcher:EnableMouseWheel(false)

    local function UpdateWheelTarget()
        local target
        if O.enableScale and IsControlKeyDown() then
            local bestLevel = -1
            for frame in pairs(roots) do
                if frame:IsVisible() and frame:IsMouseOver() and not Blocked(frame) then
                    local level = frame:GetFrameLevel()
                    if level > bestLevel then target, bestLevel = frame, level end
                end
            end
        end
        wheelTarget = target
        catcher:EnableMouseWheel(target ~= nil)
    end

    catcher:SetScript("OnMouseWheel", function(_, delta)
        local frame = wheelTarget
        if not frame or Blocked(frame) then return end
        local oldScale = frame:GetScale() or 1
        local newScale = math.max(MIN_SCALE, math.min(MAX_SCALE, oldScale + delta * 0.05))
        if newScale == oldScale then return end
        ${L.c('anchorScaleNote')}
        if not savedPos[frame] then
            if not originalPoints[frame] then originalPoints[frame] = CapturePoints(frame) end
            SavePosition(frame)
        end
        savedScale[frame] = newScale
        frame:SetScale(newScale)
        ApplyPosition(frame)
    end)

    Core:RegisterEventCallback("MODIFIER_STATE_CHANGED", function()
        if IsControlKeyDown() and O.enableScale then
            catcher:SetScript("OnUpdate", UpdateWheelTarget)
        else
            catcher:SetScript("OnUpdate", nil)
        end
        UpdateWheelTarget()
    end)
end
`;
};
