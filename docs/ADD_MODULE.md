# Module Creation Guide for AI Agents & Contributors

This guide provides the complete standard operating procedure (SOP) for adding a new Quality-of-Life (QoL) module to **WoW QoL Forge**.

---

## 1. Overview of Creation Paths

When introducing a new module, you will follow one of two scenarios:

| Scenario | Description | Key Agent Tasks |
| :--- | :--- | :--- |
| **Scenario A: Self-Authored Core Lua** | The developer is familiar with the WoW Retail API and writes clean, native Lua logic directly. | Package the Lua into `<id>.lua.ts`, declare `QoLModule` in `index.ts`, register icon in `DynamicIcon.tsx`, and provide full 9-language i18n dictionaries. |
| **Scenario B: Feature Extraction from Community Addon** | The developer wants to isolate a specific handy feature from an existing addon (e.g., a massive addon suite or an abandoned project). | Disassemble and modernize the target feature from downloaded source, strip external libraries, modernize APIs to modern Retail, implement the module, and generate all 9 locale entries. |

---

## 2. Product Boundaries & Keep/Drop Criteria

Before writing any code or disassembling an addon, determine whether the proposed feature belongs in WoW QoL Forge:

### Product Principles:
1. **Out-of-the-Box & Minimalist**: Extract only the core QoL behavior. Never port bloated configuration panels, excessive sliders, or decorative visual customization.
2. **Avoid Heavy or Conflicting Categories**:
   - **No full bag replacements** (e.g., Bagnon, ArkInventory).
   - **No damage/combat meters** (e.g., Details!, Recount).
   - **No large map-pin databases** (e.g., HandyNotes, RareScanner).
   - **No full nameplate/unit frame overhauls** (e.g., Plater, ElvUI).
   - **No heavy aura/cooldown suites** (better served by WeakAuras).
3. **Zero External Dependencies**: Strip out embedded libraries such as Ace3 (`AceAddon`, `AceEvent`, `AceTimer`, `AceDB`, `AceGUI`), LibDataBroker, LibSharedMedia, and LibStub. Implement everything with 100% native Blizzard Lua APIs and frames.
4. **Modern Retail APIs Only**: Always cross-check against official Blizzard UI source code and Warcraft Wiki. Never copy deprecated APIs or legacy compatibility branches. If an addon's core mechanism is broken or obsolete in modern Retail and cannot be cleanly rewritten, drop it.

### Keep or Drop Filter:

| Decision | Criteria & Examples |
| :--- | :--- |
| **KEEP & Modernize** | • Delivers clear everyday QoL value (e.g., movable Blizzard frames, secondary stat diminishing-return tooltips, keyboard-driven NPC/quest interaction, auto-repair, auto-sell junk).<br>• Fits cleanly in **~50–300 lines** of self-contained Lua without external libraries.<br>• Any outdated APIs in the original addon have clean modern Retail replacements. |
| **DROP / SKIP** | • **Replaced by native Retail features**: e.g., Full `TomTom` is unnecessary because Blizzard natively provides User Waypoints and Super Tracking; only a lightweight `/way` wrapper around `C_Map.SetUserWaypoint` belongs here.<br>• **Obsolete / broken architecture**: Unmaintained addons whose core hooks or FrameXML hierarchies no longer exist in Retail (e.g., `AngryWorldQuests`).<br>• **Heavy data/asset footprint**: Addons relying on thousands of lines of spell/map databases (e.g., `GTFO`), which are better installed standalone.<br>• **Restricted / high-risk automation**: Features attempting protected actions or combat automation disallowed by Blizzard. |

---

## 3. Mandatory Retail API Verification

Every new module **must be verified against modern WoW Retail sources** before being merged:

1. **Blizzard Official Retail UI Source**: [https://github.com/Gethe/wow-ui-source](https://github.com/Gethe/wow-ui-source)
   - Verify that events, FrameXML hierarchies, and default UI interactions match current Retail implementation.
2. **Warcraft Wiki WoW API Reference**: [https://warcraft.wiki.gg/wiki/World_of_Warcraft_API](https://warcraft.wiki.gg/wiki/World_of_Warcraft_API)
   - Verify API signatures, return values, deprecations, and namespace conventions (`C_*`).

---

## 4. Scenario A: Adding from a Self-Authored Lua Snippet

Follow this workflow when a user provides their own custom Lua code:

### Step 1: Create the Dedicated Lua File
Create `src/data/modules/<category>/<id>.lua.ts`:
```typescript
import { FALLBACK_LUA_CTX } from '../luaUtil';

export default (_: any, L = FALLBACK_LUA_CTX) => {
  return `${L.c('header')}
Core:RegisterEventCallback("PLAYER_ENTERING_WORLD", function()
    -- Native Retail Lua logic
end)
`;
};
```
- **File Name**: Strictly lowercase kebab-case matching the module ID: `<id>.lua.ts`.
- **Export**: Must use `export default (_: any, L = FALLBACK_LUA_CTX) => ...`.
- **Scope**: Keep all declarations `local`, never pollute `_G`.
- **Settings**: Read settings from `O.<optionId>`.
- **Strings & Comments**: Wrap in `L.s('key')` and `L.c('key')`.

### Step 2: Register the Module in `<category>/index.ts`
Import your generator and append the `QoLModule` definition in `src/data/modules/<category>/index.ts`:

```typescript
import myFeatureLua from './my-feature.lua';

export const categoryModules: QoLModule[] = [
  // ... existing modules
  {
    id: 'my-feature',                          // Lowercase kebab-case, globally unique
    title: '功能名称 (简短明确)',
    category: '<category>',                   // One of the 10 valid Category types
    description: '功能核心效果的一句话说明。',
    details: '进阶用法说明、触发条件或快捷键。',
    tag: '推荐',                              // Short visual badge, e.g. "高频必备", "制造必备"
    icon: 'Sparkles',                         // Lucide React icon name
    defaultEnabled: true,                     // Whether enabled by default in presets
    sourceAddon: 'Custom',                    // Upstream source or "Custom"
    options: [                                // Sub-settings (optional)
      {
        id: 'enableExtraFeature',
        label: '选项名称',
        description: '选项作用说明',
        type: 'boolean',                      // 'boolean' | 'number' | 'string' | 'select'
        default: true,
        live: true,                           // true if dynamic without /reload
      },
    ],
    generateLua: myFeatureLua,
  },
];
```

### Step 3: Register the Icon in `src/components/DynamicIcon.tsx`
Verify that the `icon` used in the module metadata exists in `src/components/DynamicIcon.tsx`. If it is a new Lucide icon, import it and register it in `iconMap`:
```typescript
import { Sparkles, NewIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  // ...
  NewIcon,
};
```

### Step 4: Add Translations Across All 9 Locales
Add the module translation block in `src/i18n/modules/<locale>/<category>.ts` across all 9 languages (`zh-CN`, `en`, `zh-TW`, `ko`, `de`, `ru`, `fr`, `es`, `pt`):

```typescript
'my-feature': {
  title: '...',
  description: '...',
  details: '...',
  tag: '...',
  options: {
    enableExtraFeature: {
      label: '...',
      description: '...',
    },
  },
  comments: {
    header: '[ My Feature ]',
  },
  strings: {
    notifyMsg: '|cff00ff99[QoL]|r Action completed: %s',
  },
},
```
> [!IMPORTANT]
> All 9 files must contain the identical keys in `comments` and `strings`, and all `%s`, `%d`, and `{var}` placeholders must match the baseline language (`zh-CN`) 100%.

---

## 5. Scenario B: Disassembling & Extracting from Community Addons

Follow this workflow when extracting a feature from an existing community addon:

### Step 1: Obtain Reference Addon Source
- Download the community addon zip or clone its repository.
- Place it in a **gitignored local directory** (such as `.references/<addon-name>/`) or outside the workspace.
- **NEVER commit third-party addon source code or dumps into the repository.**

### Step 2: Read & Disassemble Core Logic
1. **Isolate target logic**: Trace events, FrameXML hooks, and functions responsible solely for the target behavior.
2. **Strip external libraries**:
   - Remove Ace3 (`AceAddon`, `AceEvent`, `AceTimer`, `AceDB`, `AceGUI`), LibDataBroker, LibSharedMedia, and LibStub.
   - Replace event handling with `Core:RegisterEventCallback("EVENT_NAME", callback)`.
   - Replace timers with native `C_Timer.After` / `C_Timer.NewTicker`.
   - Replace custom hooks with native Blizzard hooks (`hooksecurefunc` or `Frame:HookScript`).
3. **Strip heavy config UIs**: Remove options panels, tabs, and complex widgets. Map configurable toggles to clean `options: ModuleOption[]` rendered in the shared in-game panel (`/<addonname>`).
4. **Modernize APIs**: Check every function call against `wow-ui-source` and `warcraft.wiki.gg`. Replace legacy APIs with modern Retail equivalents (e.g., `C_Container.*`, `C_Item.*`, `C_Spell.*`).
5. **Guard protected actions**: Use `InCombatLockdown()` guards on protected UI frames or secure actions.

### Step 3: Implement & Localize
Follow Steps 1 through 4 from **Scenario A** to:
1. Save the distilled Lua in `src/data/modules/<category>/<id>.lua.ts`.
2. Register the module in `src/data/modules/<category>/index.ts` (set `sourceAddon` to the upstream addon name for proper attribution).
3. Register the icon in `src/components/DynamicIcon.tsx`.
4. Add complete 9-locale entries in `src/i18n/modules/<locale>/<category>.ts`.

---

## 6. Verification & Quality Gate

Run all verification tools before submitting:

```bash
# 1. Validate module IDs, kebab-case, category matching, and DynamicIcon registration
node scripts/verify-modules.mjs

# 2. Validate translation completeness and placeholder parity across all 9 languages
node scripts/check-i18n.mjs --strict

# 3. Run full test suite
pnpm test

# 4. Strict TypeScript compile, client build, SSR bundle, and static prerender
pnpm build
```

---

## 7. Prompt Templates for AI Agents

### Template A: Adding from Self-Authored Lua Snippet

```text
I want to add a new QoL module to WoW QoL Forge based on my own Lua code.

Category: <automation | chat | inspect | inventory | looting | mail | social | system | tooltips | ui>
Module ID: <unique-kebab-case-id>
Icon: <LucideIconName>
Source Addon: Custom

Lua Snippet:
```lua
<paste your Lua code here>
```

Please follow docs/ADD_MODULE.md (Scenario A):
1. Verify all Retail APIs against https://github.com/Gethe/wow-ui-source and https://warcraft.wiki.gg/wiki/World_of_Warcraft_API.
2. Create "src/data/modules/<category>/<id>.lua.ts" with export default (_: any, L = FALLBACK_LUA_CTX) => ...
3. Register the module in "src/data/modules/<category>/index.ts" with QoLModule fields.
4. Ensure all variables are local, use Core:RegisterEventCallback, and guard protected frames with InCombatLockdown().
5. Ensure the icon is registered in "src/components/DynamicIcon.tsx".
6. Add localized translations across all 9 languages in "src/i18n/modules/<locale>/<category>.ts".
7. Run `pnpm test` and `pnpm build` to verify everything passes cleanly.
```

### Template B: Extracting from a Community Addon

```text
I want to extract the "<feature name>" feature from the addon located at "<path to local addon source or upstream repo URL>".

Target Category: <automation | chat | inspect | inventory | looting | mail | social | system | tooltips | ui>

Please follow docs/ADD_MODULE.md (Scenario B):
1. Check the Keep or Drop criteria in docs/ADD_MODULE.md to ensure the feature fits the product boundaries.
2. Read the reference addon and extract ONLY the minimal, self-contained QoL logic (~50–300 lines).
3. Strip Ace3, LibDataBroker, LibSharedMedia, and custom settings UIs.
4. Modernize any legacy APIs against https://github.com/Gethe/wow-ui-source and https://warcraft.wiki.gg/wiki/World_of_Warcraft_API.
5. Create "src/data/modules/<category>/<id>.lua.ts" and register in "src/data/modules/<category>/index.ts".
6. Register the icon in "src/components/DynamicIcon.tsx".
7. Provide complete 9-locale translation dictionaries in "src/i18n/modules/<locale>/<category>.ts".
8. Do not commit any downloaded third-party addon files.
9. Run `pnpm test` and `pnpm build` to ensure 100% test pass and build success.
```
