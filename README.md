<div align="center">
  <img src="public/logo-256.png" alt="WoW QoL Forge Logo" width="112" />
  <h1>WoW QoL Forge</h1>
  <p>A client-side, zero-bloat custom Quality-of-Life (QoL) addon builder for <strong>World of Warcraft Retail</strong>
</div>

Instead of installing a dozen separate addons or heavy UI frameworks just to get a handful of everyday conveniences, **WoW QoL Forge** lets you cherry-pick individual QoL features like building blocks, configure default options in the browser, preview the generated Lua source, and download a clean, ready-to-install `.zip` addon in one click.

- **Target WoW Client**: Retail
- **Included Modules**: **78** standalone modules across **10** categories + **4** curated presets
- **Zero Dependencies**: Pure Blizzard native Lua APIs — no Ace3, LibDataBroker, or embedded libraries

---

## Referenced Addons & Credits

- [AdvancedInterfaceOptions](https://www.curseforge.com/wow/addons/advancedinterfaceoptions)
- [Already Known?](https://www.curseforge.com/wow/addons/alreadyknown)
- [Angry Keystones](https://www.curseforge.com/wow/addons/angry-keystones)
- [BasicChatMods](https://www.curseforge.com/wow/addons/basic-chat-mods)
- [BlizzMove](https://www.curseforge.com/wow/addons/blizzmove)
- [BuyEmAll](https://www.curseforge.com/wow/addons/buyemall)
- [Can I Mog It?](https://www.curseforge.com/wow/addons/can-i-mog-it)
- [DialogKey](https://www.curseforge.com/wow/addons/dialogkey)
- [Enhance QoL](https://www.curseforge.com/wow/addons/eqol)
- [Enhanced Menu](https://www.curseforge.com/wow/addons/enhanced-menu)
- [Flash Taskbar](https://www.curseforge.com/wow/addons/flash-taskbar)
- [idTip](https://www.curseforge.com/wow/addons/idtip)
- [Leatrix Plus](https://www.curseforge.com/wow/addons/leatrix-plus)
- [Loot Spec Swapper](https://www.curseforge.com/wow/addons/lootspecswapper)
- [Paste](https://www.curseforge.com/wow/addons/paste)
- [Plumber](https://www.curseforge.com/wow/addons/plumber)
- [Postal](https://www.curseforge.com/wow/addons/postal)
- Restocker *(CurseForge link pending)*
- [SafeQueue](https://www.curseforge.com/wow/addons/safequeue)
- [Speedy AutoLoot](https://www.curseforge.com/wow/addons/speedyautoloot)
- [TrueStatValues](https://www.curseforge.com/wow/addons/true-stat-values)

---

## Local Development

```bash
# Install dependencies (pnpm only)
pnpm install

# Start Vite dev server (http://localhost:3101)
pnpm dev

# Run unit tests, module verification, and i18n parity check
pnpm test

# Type-check, build client + SSR bundles, and run pre-rendering
pnpm build

# Preview production dist/ locally
pnpm preview
```

### Key Paths

```text
CONTRIBUTING.md                # Full contributor guide & AI prompt templates
.env                           # Optional local override for VITE_WOW_INTERFACE (gitignored)
src/
├── config/version.ts          # WoW version & TOC Interface config (reads VITE_WOW_INTERFACE)
├── data/modules/              # QoL module definitions & generateLua() implementations
│   └── index.ts               # Aggregates allModules, categories, and defaultPresets
├── i18n/                      # 9-locale UI, module, and Lua string translations
├── utils/
│   ├── addonGenerator.ts      # .toc, core.lua, README.txt, and ZIP packager
│   └── configPanelLua.ts      # In-game /<addonname> settings panel Lua generator
└── components/DynamicIcon.tsx # Explicit lucide-react icon map (register new icons here)
scripts/
├── verify-modules.mjs         # Validates unique IDs, naming, and icon registrations
└── check-i18n.mjs             # Validates 9-locale translation completeness & Lua syntax
docs/
├── MODIFY_MODULE.md          # Guide for modifying modules & syncing 9-locale i18n
└── ADD_MODULE.md             # Guide for adding modules (self-authored vs addon disassembly)
AGENTS.md / CLAUDE.md          # Engineering conventions & hydration rules for AI agents
```

---

## Contributing

Contributions are very welcome! Please see [**CONTRIBUTING.md**](CONTRIBUTING.md) for the complete contribution guide, module standards, and ready-to-use AI agent prompt templates.

### Quick Workflow

1. **Clone & Branch**:
   ```bash
   git clone https://github.com/gitdust/wow-qol-forge.git
   cd wow-qol-forge
   git checkout -b feat/your-feature-name
   ```
2. **Implement or Instruct an AI Agent**:
   - To modify an existing module, edit `src/data/modules/<category>/index.ts` (options) or `<category>/<id>.lua.ts` (Lua logic), and update `src/i18n/modules/`.
   - To add a new module, provide your Lua snippet or reference addon to your coding agent (Claude Code, Cursor, Copilot, Antigravity) with the instructions in [CONTRIBUTING.md](CONTRIBUTING.md).
   - Mandatory reference sources: [Blizzard UI Source](https://github.com/Gethe/wow-ui-source) and [Warcraft Wiki](https://warcraft.wiki.gg/wiki/World_of_Warcraft_API).
3. **Verify Locally**:
   ```bash
   pnpm test
   pnpm build
   ```
4. **Open a Pull Request** with a concise description of your changes.
