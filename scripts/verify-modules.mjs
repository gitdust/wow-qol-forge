#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const modulesDir = path.join(rootDir, 'src', 'data', 'modules');
const dynamicIconPath = path.join(rootDir, 'src', 'components', 'DynamicIcon.tsx');
const indexModulesPath = path.join(modulesDir, 'index.ts');

const VALID_CATEGORIES = new Set([
  'automation',
  'chat',
  'inspect',
  'inventory',
  'looting',
  'mail',
  'social',
  'system',
  'tooltips',
  'ui',
]);

const KEBAB_REGEX = /^[a-z0-9]+(-[a-z0-9]+)*$/;

function getDeclaredIcons() {
  const iconContent = fs.readFileSync(dynamicIconPath, 'utf8');
  const iconMapBlock = iconContent.match(/const iconMap:[^=]*=\s*\{([\s\S]*?)\};/);
  if (!iconMapBlock) {
    throw new Error('Unable to find iconMap in DynamicIcon.tsx');
  }
  const lines = iconMapBlock[1].split('\n');
  const icons = new Set();
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('//') || trimmed.startsWith('/*')) continue;
    // matches "IconName," or "IconName: Component,"
    const match = trimmed.match(/^([A-Za-z0-9_]+)(?::|,)/);
    if (match) {
      icons.add(match[1]);
    }
  }
  return icons;
}

function parseModulesFromCategoryFile(filePath, category) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Match each module object block starting with id: '...'
  const blocks = content.split(/\n\s*\{\s*\n\s*id:\s*['"]/g).slice(1);
  const modules = [];

  for (const block of blocks) {
    if (!block.includes('category:')) continue; // Skip options objects

    const idMatch = block.match(/^([^'"]+)['"]/);
    const catMatch = block.match(/category:\s*['"]([^'"]+)['"]/);
    const titleMatch = block.match(/title:\s*['"]([^'"]+)['"]/);
    const iconMatch = block.match(/icon:\s*['"]([^'"]+)['"]/);
    const sourceMatch = block.match(/sourceAddon:\s*['"]([^'"]+)['"]/);

    if (idMatch) {
      modules.push({
        id: idMatch[1],
        category: catMatch ? catMatch[1] : undefined,
        title: titleMatch ? titleMatch[1] : idMatch[1],
        icon: iconMatch ? iconMatch[1] : '',
        sourceAddon: sourceMatch ? sourceMatch[1] : '',
        file: path.basename(filePath),
      });
    }
  }
  return modules;
}

function verify() {
  console.log('[verify-modules] Validating QoL modules and icon mappings...');

  let errors = 0;
  const declaredIcons = getDeclaredIcons();
  const allModules = [];
  const idMap = new Map();

  const entries = fs.readdirSync(modulesDir, { withFileTypes: true });
  const categoryDirs = entries
    .filter((e) => e.isDirectory() && VALID_CATEGORIES.has(e.name))
    .map((e) => e.name);
  const categoryFiles = entries
    .filter((e) => e.isFile() && e.name.endsWith('.ts') && e.name !== 'index.ts' && e.name !== 'luaUtil.ts')
    .map((e) => e.name.replace(/\.ts$/, ''));

  const categoriesToVerify = Array.from(new Set([...categoryDirs, ...categoryFiles]));

  for (const category of categoriesToVerify) {
    if (!VALID_CATEGORIES.has(category)) {
      console.error(`[FAIL] Category ${category} does not match any valid Category`);
      errors++;
      continue;
    }

    const catDir = path.join(modulesDir, category);
    const catFile = path.join(modulesDir, `${category}.ts`);
    const isDir = fs.existsSync(catDir) && fs.statSync(catDir).isDirectory();
    const filePath = isDir ? path.join(catDir, 'index.ts') : catFile;
    const file = path.relative(modulesDir, filePath);

    const fileModules = parseModulesFromCategoryFile(filePath, category);
    for (const mod of fileModules) {
      // 1. Unique ID
      if (idMap.has(mod.id)) {
        console.error(`[FAIL] Duplicate module ID '${mod.id}' in ${file} (previously in ${idMap.get(mod.id)})`);
        errors++;
      } else {
        idMap.set(mod.id, file);
      }

      // 2. Kebab-case ID
      if (!KEBAB_REGEX.test(mod.id)) {
        console.error(`[FAIL] Module ID '${mod.id}' in ${file} is not valid lowercase kebab-case`);
        errors++;
      }

      // 3. Category match
      if (mod.category !== category) {
        console.error(`[FAIL] Module '${mod.id}' has category '${mod.category}' which does not match file ${file}`);
        errors++;
      }

      // 4. Icon declared in DynamicIcon.tsx
      if (!mod.icon) {
        console.error(`[FAIL] Module '${mod.id}' in ${file} is missing icon attribute`);
        errors++;
      } else if (!declaredIcons.has(mod.icon)) {
        console.error(`[FAIL] Module '${mod.id}' uses icon '${mod.icon}' which is not in DynamicIcon.tsx`);
        errors++;
      }

      // 5. Source addon present
      if (!mod.sourceAddon) {
        console.error(`[FAIL] Module '${mod.id}' in ${file} is missing sourceAddon`);
        errors++;
      }

      allModules.push(mod);
    }
  }

  // 6. Check that modules/index.ts exports all module categories
  const indexContent = fs.readFileSync(indexModulesPath, 'utf8');
  for (const cat of VALID_CATEGORIES) {
    const importRegex = new RegExp(`from\\s*['"]\\./${cat}['"]`);
    if (!importRegex.test(indexContent)) {
      console.error(`[FAIL] src/data/modules/index.ts is missing import from ./${cat}`);
      errors++;
    }
  }

  if (errors > 0) {
    console.error(`\n[verify-modules] Completed with ${errors} error(s).`);
    process.exit(1);
  } else {
    console.log(`[verify-modules] PASSED: ${allModules.length} modules across ${categoriesToVerify.length} categories verified successfully.\n`);
  }
}

verify();
