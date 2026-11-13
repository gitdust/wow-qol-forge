import { AddonMetadata, ModuleOption, QoLModule } from '../types';
import { categories, moduleMap } from '../data/modules';
import { luaString } from '../data/modules/luaUtil';
import { buildConfigPanelLua } from './configPanelLua';
import { WOW_VERSION_CONFIG } from '../config/version';
import { ADDON_ICON_NAME, renderAddonIconTga } from './addonIcon';
import {
  createLuaLocaleContext,
  DEFAULT_LOCALE,
  formatMsg,
  getUi,
  Locale,
  localizeCategory,
  localizeModule,
} from '../i18n';

export interface GenerateResult {
  tocContent: string;
  luaContent: string;
}

// 网页参数 → 子设置默认值 (校正类型与范围，避免把非法值编译进 Lua)
function resolveOptionValue(opt: ModuleOption, raw: unknown): boolean | number | string {
  if (opt.type === 'boolean') return typeof raw === 'boolean' ? raw : Boolean(opt.default);
  if (opt.type === 'number') {
    let n = Number(raw ?? opt.default);
    if (!Number.isFinite(n)) n = Number(opt.default);
    if (opt.min !== undefined) n = Math.max(opt.min, n);
    if (opt.max !== undefined) n = Math.min(opt.max, n);
    return n;
  }
  if (opt.type === 'select') {
    const valid = opt.choices?.some((c) => c.value === raw);
    return valid ? (raw as string | number) : opt.default;
  }
  return typeof raw === 'string' ? raw : String(opt.default);
}

function luaValue(value: boolean | number | string): string {
  if (typeof value === 'boolean') return value ? 'true' : 'false';
  if (typeof value === 'number') return String(value);
  return luaString(value);
}

function optionMetaLua(opt: ModuleOption, raw: unknown): string {
  const fields = [
    `id = "${opt.id}"`,
    `label = ${luaString(opt.label)}`,
    opt.description ? `desc = ${luaString(opt.description)}` : '',
    `type = "${opt.type}"`,
    `default = ${luaValue(resolveOptionValue(opt, raw))}`,
    opt.min !== undefined ? `min = ${opt.min}` : '',
    opt.max !== undefined ? `max = ${opt.max}` : '',
    opt.choices
      ? `choices = { ${opt.choices.map((c) => `{ ${luaString(c.label)}, ${luaValue(c.value)} }`).join(', ')} }`
      : '',
    opt.live ? 'live = true' : '',
  ].filter(Boolean);
  return `            { ${fields.join(', ')} },`;
}

function moduleMetaLua(mod: QoLModule, values: Record<string, unknown>): string {
  const options = (mod.options ?? []).map((opt) => optionMetaLua(opt, values[opt.id]));
  return `    { id = "${mod.id}", category = "${mod.category}", title = ${luaString(mod.title)}, desc = ${luaString(mod.description)}, options = {${
    options.length ? `\n${options.join('\n')}\n        ` : ' '
  }} },`;
}

export function generateAddonCode(
  metadata: AddonMetadata,
  selectedModuleIds: string[],
  moduleOptions: Record<string, Record<string, any>>,
  locale: Locale = DEFAULT_LOCALE
): GenerateResult {
  const ui = getUi(locale);
  const g = ui.generator;
  const safeName =
    metadata.name.replace(/[^a-zA-Z]/g, '') || WOW_VERSION_CONFIG.defaultAddonName;
  const addonTitle = metadata.title || safeName;

  // 1. Generate TOC File
  const tocLines = [
    `## Interface: ${metadata.interfaceVersion || WOW_VERSION_CONFIG.interfaceVersion}`,
    `## Title: ${addonTitle}`,
    `## Notes: ${metadata.notes || g.tocDefaultNotes}`,
    `## Author: ${metadata.author || 'WoW Player'}`,
    `## Version: 1.0.0`,
    `## IconTexture: Interface\\AddOns\\${safeName}\\${ADDON_ICON_NAME}`,
    `## SavedVariables: ${safeName}DB`,
    '',
    'core.lua',
  ];
  const tocContent = tocLines.join('\n');

  // 2. Generate Core Lua File
  const selectedModules = selectedModuleIds
    .map((id) => moduleMap.get(id))
    .filter((m): m is QoLModule => Boolean(m))
    .map((m) => localizeModule(m, locale));
  const usedCategories = categories
    .filter((c) => c.id !== 'all' && selectedModules.some((m) => m.category === c.id))
    .map((c) => localizeCategory(c, locale));
  const slashName = safeName.toLowerCase();
  const savedVariable = `${safeName}DB`;

  const luaHeader = `--[[===========================================================================
  ${addonTitle}
  ${g.luaHeaderGeneratedBy}
  ${g.luaHeaderTargetInterface}: ${metadata.interfaceVersion}
  ${g.luaHeaderSelectedModules}: ${selectedModules.length}
  ${formatMsg(g.luaHeaderNote, { slash: slashName })}
=============================================================================]]--

local ADDON_NAME, Core = ...
_G[ADDON_NAME] = Core
Core.title = ${luaString(addonTitle)}
Core.slash = "/${slashName}"

-- ${g.commentErrorReport}
local reportedErrors = {}
function Core:ReportError(source, err)
    local key = tostring(source) .. ":" .. tostring(err)
    if reportedErrors[key] then return end
    reportedErrors[key] = true
    print("|cffff5555[" .. ADDON_NAME .. "]|r " .. ${luaString(g.runtimeErrorPrint)} .. tostring(source) .. ": " .. tostring(err))
end

-- ${g.commentEventBus}
Core.events = {}
Core.frame = CreateFrame("Frame")
Core.frame:SetScript("OnEvent", function(self, event, ...)
    local callbacks = Core.events[event]
    if callbacks then
        for _, entry in ipairs(callbacks) do
            local ok, err = pcall(entry.callback, event, ...)
            if not ok then
                Core:ReportError(entry.module, err)
            end
        end
    end
end)

function Core:RegisterEventCallback(event, callback)
    if not self.events[event] then
        -- ${g.commentUnknownEvent}
        local ok = pcall(self.frame.RegisterEvent, self.frame, event)
        if not ok then
            self:ReportError(self.currentModule, ${luaString(g.runtimeEventError)} .. tostring(event))
            return
        end
        self.events[event] = {}
    end
    table.insert(self.events[event], { callback = callback, module = self.currentModule or "core" })
end

-- ${g.commentFeatureList}
Core.categories = {
${usedCategories.map((c) => `    { id = "${c.id}", label = ${luaString(c.label)} },`).join('\n')}
}
Core.modules = {
${selectedModules.map((mod) => moduleMetaLua(mod, moduleOptions[mod.id] || {})).join('\n')}
}
Core.moduleById = {}
for _, mod in ipairs(Core.modules) do
    Core.moduleById[mod.id] = mod
    mod.defaults = {}
    for _, opt in ipairs(mod.options) do mod.defaults[opt.id] = opt.default end
end

-- ${formatMsg(g.commentSavedVars, { savedVar: savedVariable })}
function Core:SavedEntry(id)
    local entry = self.db.modules[id]
    if not entry then
        entry = {}
        self.db.modules[id] = entry
    end
    return entry
end

function Core:IsModuleEnabled(id)
    local saved = self.db and self.db.modules[id]
    return not (saved and saved.enabled == false)
end

function Core:SetModuleEnabled(id, enabled)
    local entry = self:SavedEntry(id)
    -- ${g.commentDefaultEnabled}
    if enabled then entry.enabled = nil else entry.enabled = false end
end

-- ${g.commentOptionProxy}
Core.optionProxies = {}
function Core:GetOptions(id)
    local proxy = self.optionProxies[id]
    if not proxy then
        local mod = self.moduleById[id]
        proxy = setmetatable({}, {
            __index = function(_, key)
                local saved = Core.db and Core.db.modules[id]
                local value = saved and saved.opts and saved.opts[key]
                if value ~= nil then return value end
                return mod and mod.defaults[key]
            end,
            __newindex = function() end,
        })
        self.optionProxies[id] = proxy
    end
    return proxy
end

function Core:SetOption(id, key, value)
    local mod = self.moduleById[id]
    local entry = self:SavedEntry(id)
    entry.opts = entry.opts or {}
    if mod and value == mod.defaults[key] then
        entry.opts[key] = nil
    else
        entry.opts[key] = value
    end
end

-- ${g.commentSettingsCallbacks}
Core.settingsCallbacks = {}
function Core:OnSettingsChanged(callback)
    if self.currentModule then self.settingsCallbacks[self.currentModule] = callback end
end

-- ${g.commentModuleLoader}
-- ${g.commentModuleLoaderStates}
Core.loaders, Core.started, Core.loaded = {}, {}, {}
function Core:LoadModule(id, loader)
    table.insert(self.loaders, { id = id, loader = loader })
end

local loaderFrame = CreateFrame("Frame")
loaderFrame:RegisterEvent("ADDON_LOADED")
loaderFrame:SetScript("OnEvent", function(self, _, name)
    if name ~= ADDON_NAME then return end
    self:UnregisterEvent("ADDON_LOADED")
    _G["${savedVariable}"] = _G["${savedVariable}"] or {}
    Core.db = _G["${savedVariable}"]
    Core.db.modules = Core.db.modules or {}
    for _, entry in ipairs(Core.loaders) do
        if Core:IsModuleEnabled(entry.id) then
            Core.started[entry.id] = true
            Core.currentModule = entry.id
            local ok, err = pcall(entry.loader, Core:GetOptions(entry.id))
            if ok then
                Core.loaded[entry.id] = true
            else
                Core:ReportError(entry.id, err)
            end
            Core.currentModule = nil
        end
    end
end)

`;

  const moduleCodeBlocks = selectedModules.map((mod) => {
    const opts = moduleOptions[mod.id] || {};
    const code = mod.generateLua(opts, createLuaLocaleContext(mod.id, locale));
    return `--------------------------------------------------------------------------------
-- ${g.commentModuleLabel}: ${mod.title} (${mod.id})
-- ${g.commentSourceLabel}: ${mod.sourceAddon}
--------------------------------------------------------------------------------
Core:LoadModule("${mod.id}", function(O)
${code.trim()}
end)
`;
  });

  const luaFooter = `
${buildConfigPanelLua(locale)}

-- ${g.commentWelcome}
local welcomed = false
Core:RegisterEventCallback("PLAYER_ENTERING_WORLD", function()
    if welcomed then return end
    welcomed = true
    local count = 0
    for _ in pairs(Core.loaded) do count = count + 1 end
    print("|cff00ff99[" .. ADDON_NAME .. "]|r" .. ${luaString(g.runtimeWelcomeLoaded)} .. count .. ${luaString(g.runtimeWelcomeOpenCmd)} .. "|cffffd100" .. Core.slash .. "|r")
end)
`;

  const luaContent = [luaHeader, ...moduleCodeBlocks, luaFooter].join('\n');

  return {
    tocContent,
    luaContent,
  };
}

export async function packageAndDownloadZip(
  metadata: AddonMetadata,
  selectedModuleIds: string[],
  moduleOptions: Record<string, Record<string, any>>,
  locale: Locale = DEFAULT_LOCALE
): Promise<void> {
  // 仅在点击下载时才加载：JSZip + file-saver 不进入首屏包
  const [{ default: JSZip }, { saveAs }, iconTga] = await Promise.all([
    import('jszip'),
    import('file-saver'),
    renderAddonIconTga(),
  ]);

  const ui = getUi(locale);
  const g = ui.generator;
  const safeName =
    metadata.name.replace(/[^a-zA-Z]/g, '') || WOW_VERSION_CONFIG.defaultAddonName;
  const slash = safeName.toLowerCase();
  const { tocContent, luaContent } = generateAddonCode(
    metadata,
    selectedModuleIds,
    moduleOptions,
    locale
  );

  const zip = new JSZip();
  // WoW addons must be extracted into Interface/AddOns/<FolderName>/
  const folder = zip.folder(safeName);
  if (!folder) throw new Error('Failed to create zip folder');

  folder.file(`${safeName}.toc`, tocContent);
  folder.file('core.lua', luaContent);
  folder.file(`${ADDON_ICON_NAME}.tga`, iconTga);

  const localizedSelectedNames = selectedModuleIds.map((id) => {
    const mod = moduleMap.get(id);
    return mod ? localizeModule(mod, locale).title : id;
  });

  // Add a friendly README in the folder for the user
  const readmeContent = `${formatMsg(g.readmeTitle, { name: safeName })}

${g.readmeGeneratedBy}

${g.readmeImportantTitle}
${formatMsg(g.readmeImportantBody, { slash })}

${g.readmeInstallTitle}
${formatMsg(g.readmeInstallStep1, { name: safeName })}
${formatMsg(g.readmeInstallStep2, { name: safeName })}
${g.readmeInstallStep3}

${formatMsg(g.readmeSelectedTitle, { count: selectedModuleIds.length })}
${localizedSelectedNames.map((name) => `- ${name}`).join('\n')}
`;
  folder.file('README.txt', readmeContent);

  const blob = await zip.generateAsync({ type: 'blob' });
  saveAs(blob, `${safeName}.zip`);
}
