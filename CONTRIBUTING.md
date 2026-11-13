# Contributing to WoW QoL Forge

Thank you for your interest in contributing to WoW QoL Forge! This project aims to give World of Warcraft Retail players a clean, customizable, zero-bloat quality-of-life addon builder where each feature is an independent, native building block.

---

## Core Philosophy

Every module in WoW QoL Forge must adhere to these foundational principles:

1. **Zero External Dependencies**: Use 100% native Blizzard Retail Lua APIs and FrameXML. Never introduce libraries like Ace3, LibDataBroker, LibSharedMedia, or heavy frameworks.
2. **Minimalist & Modular**: Extract and provide only the core QoL behavior. No bloated in-game sub-menus, redundant sliders, or decorative clutter.
3. **Modern Retail APIs**: Always use current Retail APIs verified against official Blizzard UI source code and Warcraft Wiki. Never copy deprecated or legacy compatibility branches.
4. **Combat Safety**: Respect Blizzard's secure execution rules. Guard protected frames and restricted actions with `InCombatLockdown()`.

---

## How to Contribute

Whether you are a human developer or collaborating with an AI coding assistant (e.g., Claude Code, Cursor, GitHub Copilot, Antigravity), there are four main ways to contribute:

### 1. Modifying an Existing Module

If you found a bug, want to adapt a module to a newer WoW patch, fix inaccurate comments, or wish to add a helpful option:

> [!TIP]
> See the complete agent SOP and checklist in [**`docs/MODIFY_MODULE.md`**](docs/MODIFY_MODULE.md).

1. Locate the module definition in `src/data/modules/<category>/index.ts` and its Lua generator in `<category>/<id>.lua.ts` (e.g., `automation/`, `ui/`, `chat/`).
2. Adjust `options` or `generateLua(L)` (in `<id>.lua.ts`) as needed.
3. If you add or modify localized strings (`L.s(...)` or `L.c(...)`), update the corresponding keys across all 9 locale files in `src/i18n/modules/<locale>/<category>.ts`.

### 2. Adding a New Module (from Your Own Lua Snippet)

If you have a handy Lua snippet or an idea for a clean QoL convenience:

> [!TIP]
> See the detailed step-by-step instructions in [**`docs/ADD_MODULE.md` (Scenario A)**](docs/ADD_MODULE.md#3-scenario-a-adding-from-a-self-authored-lua-snippet).

- **With an AI Agent (Recommended)**: Provide your Lua code and a short description to your AI agent. The agent will wrap it into a `QoLModule`, assign a category and icon, register it, and generate translations. (See [AI Agent Workflow](#ai-assisted-contribution-workflow) below for ready-to-use prompt templates).
- **Manually**:
  1. Add the module object to `src/data/modules/<category>/index.ts` and its `generateLua` function in `src/data/modules/<category>/<id>.lua.ts`.
  2. Ensure its `id` is a unique lowercase kebab-case string (e.g. `fast-loot`).
  3. Ensure its `icon` is registered in `src/components/DynamicIcon.tsx`.
  4. Implement `generateLua(L)` in `<id>.lua.ts` using `Core:RegisterEventCallback` and runtime settings `O.<optionId>`.
  5. Add localized title, description, and string dictionary entries in `src/i18n/modules/<locale>/<category>.ts`.

### 3. Extracting a Feature from a Mature Community Addon

If you want to isolate a specific handy feature from a mature addon (e.g., movable frames, merchant conveniences, chat tweaks):

> [!TIP]
> See the extraction workflow in [**`docs/ADD_MODULE.md` (Scenario B)**](docs/ADD_MODULE.md#5-scenario-b-disassembling--extracting-from-community-addons).

1. Download the community addon.
2. Provide the addon source code to your AI agent (place it outside the repository or in a gitignored path such as `.references/` — **never commit third-party addon dumps to git**).
3. Instruct the agent to distill only the target feature into a self-contained, zero-dependency Retail module.

### 4. Improving Translations & Localization

WoW QoL Forge supports 9 languages:
- English (`en`)
- Simplified Chinese (`zh-CN`)
- Traditional Chinese (`zh-TW`)
- Korean (`ko`)
- German (`de`)
- Russian (`ru`)
- French (`fr`)
- Spanish (`es`)
- Portuguese (`pt`)

UI strings reside in `src/i18n/ui/` and module metadata/Lua strings reside in `src/i18n/modules/`. Pull requests improving translation accuracy or tone are warmly welcomed!

---

## Mandatory References for WoW Retail APIs

Whenever you or your AI agent write, modernize, or debug WoW Lua code, always cross-check against official, authoritative sources:

- **Blizzard Official Retail UI Source**: [https://github.com/Gethe/wow-ui-source](https://github.com/Gethe/wow-ui-source)
- **Warcraft Wiki API Reference**: [https://warcraft.wiki.gg/wiki/World_of_Warcraft_API](https://warcraft.wiki.gg/wiki/World_of_Warcraft_API)

Do not copy deprecated APIs (such as legacy `UIDropDownMenu_*`, old container APIs, or outdated spell queries) from legacy addons.

---

## Module Engineering Standards

Every module's `generateLua(L)` must satisfy these standards:

### 1. Scope Isolation
- Always use `local` variables and functions. Wrap standalone blocks in `do ... end` if needed.
- Never pollute the global environment `_G`.
- Never share mutable runtime state across modules.

### 2. Event Handling
- Prefer the generator's centralized event dispatcher:
  ```lua
  Core:RegisterEventCallback("PLAYER_ENTERING_WORLD", function(event, isLogin, isReload)
      -- your logic here
  end)
  ```
- Only instantiate a dedicated frame (`CreateFrame("Frame")`) when complex frame lifecycle management or an `OnUpdate` handler is strictly required.

### 3. Combat Safety
- Any code interacting with protected UI frames (e.g., ActionBars, UnitFrames, EditMode frames) or executing secure actions must check `InCombatLockdown()`:
  ```lua
  if InCombatLockdown() then return end
  ```
- Never cause action blocked errors (`ADDON_ACTION_BLOCKED`) during combat.

### 4. Dynamic Options & Settings
- The addon generator automatically wraps each module in:
  ```lua
  Core:LoadModule("<moduleId>", function(O)
      -- O contains user options, e.g. O.myOption
  end)
  ```
- **Always read options dynamically via `O.<optionId>`** rather than hardcoding option values into template strings.
- If an option can take effect immediately without reloading the UI, mark it with `live: true` in the module definition and optionally register a listener:
  ```lua
  Core:OnSettingsChanged(function(newSettings)
      -- re-apply live settings
  end)
  ```
- If an option is not marked `live: true`, the in-game settings panel (`/<addonname>`) will prompt the user to `/reload`.
- Modules must not create custom configuration panels; all options are rendered automatically in the shared settings window.

### 5. Localization
- Pass all user-facing Lua strings and generated comments through the `L` helper:
  ```lua
  L.s("chatMessage", "Default message")
  L.c("sectionComment", "Helpful comment in generated code")
  ```
- Ensure corresponding keys exist across all 9 locale files in `src/i18n/modules/`.

---

## AI-Assisted Contribution Workflow

WoW QoL Forge is designed to make contributing with AI coding assistants effortless. Detailed SOPs are available in [**`docs/MODIFY_MODULE.md`**](docs/MODIFY_MODULE.md) and [**`docs/ADD_MODULE.md`**](docs/ADD_MODULE.md). Below are ready-to-use prompt templates you can copy and adapt when prompting your agent:

### Prompt Template 1: Modifying an Existing Module (Bug Fix / API Update / Comment Fix)

```text
Please update the QoL module "<module-id>" in "src/data/modules/<category>/":

Reason for modification:
<Describe the bug, outdated API, or comment error here>

Please follow docs/MODIFY_MODULE.md:
1. Verify all APIs against https://github.com/Gethe/wow-ui-source and https://warcraft.wiki.gg/wiki/World_of_Warcraft_API.
2. Update "src/data/modules/<category>/<module-id>.lua.ts" and/or "src/data/modules/<category>/index.ts".
3. Keep all variables local, use Core:RegisterEventCallback, and guard protected frames with InCombatLockdown().
4. Update localized strings and comments (L.s and L.c) across all 9 locale files in "src/i18n/modules/<locale>/<category>.ts".
5. Run `pnpm test` and `pnpm build` to verify 100% test pass and zero build warnings.
```

### Prompt Template 2: Adding a New Feature from a Snippet (Scenario A)

```text
I want to add a new QoL module to WoW QoL Forge based on this Lua snippet:
```lua
<paste your Lua snippet here>
```

Please follow docs/ADD_MODULE.md (Scenario A):
1. Verify all APIs against https://github.com/Gethe/wow-ui-source and https://warcraft.wiki.gg/wiki/World_of_Warcraft_API.
2. Create "src/data/modules/<category>/<id>.lua.ts" with export default (_: any, L = FALLBACK_LUA_CTX) => ...
3. Register the module in "src/data/modules/<category>/index.ts" with proper QoLModule fields.
4. Ensure all variables are local, use Core:RegisterEventCallback, and guard protected frames with InCombatLockdown().
5. Register the icon in src/components/DynamicIcon.tsx.
6. Provide localized titles, descriptions, and string dictionary entries across all 9 languages in "src/i18n/modules/<locale>/<category>.ts".
7. Run `pnpm test` and `pnpm build` to verify.
```

### Prompt Template 3: Extracting a Feature from a Community Addon (Scenario B)

```text
I want to extract the "<feature name>" functionality from the addon located at "<path to local addon source or repo URL>".

Target Category: <automation | chat | inspect | inventory | looting | mail | social | system | tooltips | ui>

Please follow docs/ADD_MODULE.md (Scenario B):
1. Read the reference addon and extract ONLY the minimal, self-contained QoL behavior.
2. Strip Ace3, LibDataBroker, LibSharedMedia, and custom settings UIs.
3. Modernize any legacy APIs against https://github.com/Gethe/wow-ui-source and https://warcraft.wiki.gg/wiki/World_of_Warcraft_API.
4. Create "src/data/modules/<category>/<id>.lua.ts" and register in "src/data/modules/<category>/index.ts".
5. Register the icon in "src/components/DynamicIcon.tsx".
6. Provide complete 9-locale translation dictionaries in "src/i18n/modules/<locale>/<category>.ts".
7. Do not commit any downloaded third-party addon files.
8. Run `pnpm test` and `pnpm build` to ensure 100% test pass and build success.
```

---

## Development & Verification Workflow

### 1. Prerequisites
- Node.js (v20+ recommended)
- **pnpm** (this project strictly uses pnpm; never commit `package-lock.json` or `yarn.lock`)

### 2. Setup
```bash
# 1. Clone the repository
git clone https://github.com/gitdust/wow-qol-forge.git
cd wow-qol-forge

# 2. Create a new branch
git checkout -b feat/your-feature-name

# 3. Install dependencies
pnpm install

# 4. Start local development server
pnpm dev
```

### 3. Verification Before Submitting
Before submitting your Pull Request, run both automated checks:

```bash
# 1. Run all unit tests, module metadata checks, and i18n parity validation
pnpm test

# 2. Run TypeScript check, client bundle, SSR bundle, and static pre-rendering
pnpm build
```

Both commands must exit with code 0 without errors.

---

## Pull Request Guidelines

1. **Keep PRs Focused**: One PR should ideally address one feature, improvement, or bug fix.
2. **Clear Description**: Describe what the module or change does, why it is useful, and mention the upstream addon credit if applicable.
3. **Clean Commits**: Do not commit build artifacts (`dist/`, `dist-ssr/`), runtime data (`data/`), `.env` files, or downloaded third-party addon dumps.
