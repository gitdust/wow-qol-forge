# AGENTS.md

## Project Overview

WoW QoL Forge is a custom Quality-of-Life (QoL) addon builder for **World of Warcraft Retail**. Users select individual QoL modules, customize default options, preview the generated Lua source, and export a ready-to-install `.zip` addon powered by pure Blizzard native Retail Lua APIs with zero external addon libraries.

Target WoW client and TOC `Interface` metadata live in `src/config/version.ts` (reading `VITE_WOW_INTERFACE` from `.env` when provided). See `README.md` for local development and build commands; use **pnpm** only (`pnpm-lock.yaml`, never commit `package-lock.json`).

---

## Key Project Paths

- `CONTRIBUTING.md`: Contributor guide, AI agent prompt templates, and engineering standards.
- `src/config/version.ts`: Single source of truth for WoW client version, TOC `Interface` version (`VITE_WOW_INTERFACE`), default addon name, and brand metadata.
- `src/types/index.ts`: Core types (`QoLModule`, `ModuleOption`, `Category`, `Preset`, `AddonMetadata`).
- `src/data/modules/<category>/`: QoL feature modules grouped by category directory, containing `index.ts` (module metadata & options) and `<id>.lua.ts` (self-contained `generateLua` implementations).
- `src/data/modules/index.ts`: Aggregates `allModules`, `moduleMap`, `categories`, and `defaultPresets`.
- `src/components/DynamicIcon.tsx`: Explicit icon map—every `icon` name used by a module or category must be registered here.
- `src/i18n/`: Localization across 9 locales (`en`, `zh-CN`, `zh-TW`, `ko`, `de`, `ru`, `fr`, `es`, `pt`), including UI strings (`src/i18n/ui/`) and module/Lua strings (`src/i18n/modules/`).
- `docs/MODIFY_MODULE.md`: Guide for updating/modifying existing modules, fixing outdated APIs, and syncing 9-locale i18n.
- `docs/ADD_MODULE.md`: Guide for adding new modules (both self-authored Lua and community addon disassembly).

---

## Adding or Modifying Modules

- **Modifying an Existing Module**: Read and follow [`docs/MODIFY_MODULE.md`](docs/MODIFY_MODULE.md).
- **Adding a New Module**: Read and follow [`docs/ADD_MODULE.md`](docs/ADD_MODULE.md).

Core integration requirements:

1. Place the module definition in `src/data/modules/<category>/index.ts` and its `generateLua` function in `src/data/modules/<category>/<id>.lua.ts` (or update `Category`, `categories`, and `src/i18n/` if introducing a new category).
2. Define the `QoLModule`:
   - `id`: globally unique lowercase kebab-case identifier.
   - `category`: matches the file and `Category` union.
   - `sourceAddon`: upstream addon reference name for traceability.
   - `icon`: must exist in `src/components/DynamicIcon.tsx`.
   - `options`: sub-settings with `default`, `type`, and bounds/choices. Website values become defaults in `<AddonName>DB`, editable in-game via `/<addonname>`.
   - Mark an option `live: true` when read dynamically at event/use time (`O.<optionId>`) or re-applied via `Core:OnSettingsChanged(fn)`; otherwise the in-game settings panel prompts `/reload`.
3. Write self-contained `generateLua(L)`:
   - Export default function in `<category>/<id>.lua.ts`: `export default (_: any, L = FALLBACK_LUA_CTX) => ...` and import it in `<category>/index.ts`.
   - Each module is wrapped in `Core:LoadModule("id", function(O) ... end)`. Always read settings from `O.<optionId>` rather than baking option values into Lua template strings.
   - Keep all variables `local` (use `do ... end` blocks when appropriate), never pollute `_G`, and never share runtime state across modules.
   - Prefer `Core:RegisterEventCallback(event, callback)` over creating redundant per-module event frames.
   - Guard protected frames or secure actions with `InCombatLockdown()`.
   - Do not build per-module settings UIs; all toggles and options belong in the shared in-game panel.
   - Pass all user-facing Lua strings and generated Lua comments through `L.s(...)` / `L.c(...)`, and update all 9 locale files in `src/i18n/modules/`.
4. Export and register the module in `src/data/modules/index.ts` (`allModules`, and `defaultPresets` if applicable).
5. Test category counts, search, options, Lua preview, and `.zip` export locally, and run `pnpm test` (verifies module metadata, icon mappings, and 9-locale parity) and `pnpm build`.

---

## Reference Materials & API Verification

When writing, modernizing, or debugging WoW Lua modules, always verify Retail API signatures, events, and FrameXML behavior against authoritative sources—do not copy deprecated APIs verbatim from older addons:

- **Blizzard Official Retail UI Source**: `https://github.com/Gethe/wow-ui-source`
- **Warcraft Wiki WoW API Reference**: `https://warcraft.wiki.gg/wiki/World_of_Warcraft_API`
- **Original Community Addons**: Upstream CurseForge / GitHub repositories corresponding to each module's `sourceAddon`.

Do **not** assume or hardcode a local directory for these references:

- Developers may optionally download or clone them into any gitignored local path (or outside the repository) and point the agent there, **or** have no local copies and ask the agent to read the online repositories and documentation directly.
- Never commit downloaded reference addons, Blizzard UI dumps, or diagnostic logs.

---

## Changelog & Copy Hygiene

The site includes a Changelog view (`#changelog`, data in `src/data/changelog.ts`):

- Keep changelog entries synced under the **existing version matching `package.json` `version`** for user-facing changes.
- **Do not bump `package.json` `version` or invent new version entries** unless explicitly requested by the user.
- Record only player-facing website or generated-addon feature changes (`added` / `improved` / `fixed` / `removed`); omit build, refactor, or tooling-only changes. Merge repeated tweaks to the same feature into one clear entry.
- When adding or removing modules, check module count copy in `index.html`, `README.md`, and `src/i18n/ui/`.

---

## Code Style & Repository Hygiene

- Use strict TypeScript; do not bypass type checks with `any`.
- Never commit `dist/`, `dist-ssr/`, `data/`, `.env`, `.wrangler/`, or local reference/tool directories.
