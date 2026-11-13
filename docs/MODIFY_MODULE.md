# Module Modification & Maintenance Guide for AI Agents & Contributors

This guide provides the standard operating procedure (SOP) for updating, fixing, and modernizing existing QoL modules in **WoW QoL Forge**. Follow these instructions whenever modifying a module.

---

## 1. Trigger Scenarios

Use this guide when:
- **Outdated or Deprecated APIs**: A WoW Retail patch (e.g., The War Within / Midnight) changed API signatures, replaced global functions with `C_*` namespaces, altered FrameXML behavior, or changed event payloads.
- **Inaccurate or Outdated Comments**: Lua comments generated via `L.c(...)` no longer accurately reflect what the code does or reference obsolete behavior.
- **Combat Taints or Restricted Action Errors**: A module touches protected frames during combat without an `InCombatLockdown()` guard, causing `ADDON_ACTION_BLOCKED`.
- **Bug Fixes or Edge Cases**: Merchant interaction bugs, quest filter edge cases, bag scanning oversights, or unexpected nil returns.
- **Option Adjustments**: Adding, removing, or refining sub-settings (`ModuleOption`) for an existing module.

---

## 2. Mandatory Retail API Verification

**Never guess or trust legacy code patterns.** Before changing Lua APIs, cross-check against authoritative sources:

1. **Blizzard Official Retail UI Source**: [https://github.com/Gethe/wow-ui-source](https://github.com/Gethe/wow-ui-source)
   - Search FrameXML to see how modern Retail default UI implements the behavior (e.g., `MerchantFrame.lua`, `QuestFrame.lua`, `ChatFrame.lua`, `ContainerFrame.lua`).
2. **Warcraft Wiki WoW API Reference**: [https://warcraft.wiki.gg/wiki/World_of_Warcraft_API](https://warcraft.wiki.gg/wiki/World_of_Warcraft_API)
   - Check the exact signature, return types, deprecation notices, and introduced patch version.

### Key Retail Rules:
- Replace old globals with `C_*` namespaces (e.g. `C_Container.*`, `C_Item.*`, `C_Spell.*`, `C_QuestLog.*`, `C_CurrencyInfo.*`, `C_FriendList.*`).
- Never use deprecated Blizzard UI frameworks (such as legacy `UIDropDownMenu_*`).
- Check if Blizzard natively introduced an equivalent CVar or game setting that makes complex Lua hooks unnecessary.

---

## 3. Step-by-Step Modification Workflow

### Step 1: Locate the Target Module Files
Every module is split into two files under its category directory:
- **Lua Generator**: `src/data/modules/<category>/<id>.lua.ts`
- **Metadata & Options**: `src/data/modules/<category>/index.ts`

### Step 2: Edit Lua Code (`<id>.lua.ts`)
- The file must export a default function:
  ```typescript
  import { FALLBACK_LUA_CTX } from '../luaUtil';

  export default (_: any, L = FALLBACK_LUA_CTX) => {
    return `${L.c('header')}
  -- Your modern Retail Lua logic here
  `;
  };
  ```
- **Scope Isolation**: Keep all variables and helper functions `local`. Wrap distinct blocks in `do ... end` if needed. Never pollute `_G`.
- **Combat Safety**: Any interaction with protected frames (ActionBars, UnitFrames, EditMode frames) or secure clicks must be guarded:
  ```lua
  if InCombatLockdown() then return end
  ```
- **Central Event Dispatcher**: Prefer `Core:RegisterEventCallback("EVENT_NAME", function(...) ... end)` over creating separate `CreateFrame("Frame")` objects unless `OnUpdate` or complex frame lifecycles are required.
- **Dynamic Settings (`O.<optionId>`)**: Options are passed to the module wrapper as `O`. Always read `O.<optionId>` dynamically at event time rather than baking options into Lua template strings.
- **External Strings & Comments**:
  - `L.s('key')`: User-facing in-game print messages or tooltip strings.
  - `L.c('key')`: Informational comments in the generated Lua source.

### Step 3: Update Metadata & Options (if modified)
If options, title, description, or tag changed, update `src/data/modules/<category>/index.ts`:
- Ensure option IDs are unique within the module.
- Mark an option `live: true` if it can be re-read dynamically via `O.<optionId>` without reloading the UI.
- If options change requires a reload, leave `live` unset or `false`.

### Step 4: Synchronize All 9 Locale Dictionaries
Whenever you change `L.s(...)`, `L.c(...)`, option labels, option descriptions, module title, or module description, **you must update all 9 locale files**:

Path: `src/i18n/modules/<locale>/<category>.ts`
- `en` (English)
- `zh-CN` (Simplified Chinese - baseline)
- `zh-TW` (Traditional Chinese)
- `ko` (Korean)
- `de` (German)
- `ru` (Russian)
- `fr` (French)
- `es` (Spanish)
- `pt` (Portuguese)

#### Parity Rules:
- **Every key** in `comments` and `strings` must exist in all 9 files.
- **Printf tokens** (`%s`, `%d`, `%02d`, `%%`) and **interpolation braces** (`{var}`) must match the baseline (`zh-CN`) exactly in every language.
- Run `node scripts/check-i18n.mjs --strict` to verify alignment.

### Step 5: Run Automated Verification & Build
Before submitting your changes:
```bash
# 1. Run unit tests, verify module IDs and 9-locale parity
pnpm test

# 2. Run TypeScript compiler, client build, SSR bundle, and static prerender
pnpm build
```
Both commands must pass with zero errors and zero warnings.

---

## 4. Prompt Template for AI Agents

Copy and adapt this prompt when asking an AI assistant to update an existing module:

```text
Please update the QoL module "<module-id>" in "src/data/modules/<category>/":

Reason for modification:
<Describe the bug, outdated API, or comment error here>

Requirements:
1. Verify all WoW Retail APIs against https://github.com/Gethe/wow-ui-source and https://warcraft.wiki.gg/wiki/World_of_Warcraft_API.
2. Edit "src/data/modules/<category>/<module-id>.lua.ts" and/or "src/data/modules/<category>/index.ts".
3. Keep all variables local, use Core:RegisterEventCallback, and guard protected frames with InCombatLockdown().
4. Update localized strings and comments (L.s and L.c) across all 9 locale files in "src/i18n/modules/<locale>/<category>.ts".
5. Run `pnpm test` and `pnpm build` to verify 100% test pass and zero build warnings.
```
