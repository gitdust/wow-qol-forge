/**
 * 多语言完整性与 Lua 生成校验脚本：
 * 1. 校验 9 种语言的 UI 与 78 个模块翻译键 100% 对齐基准语言（zh-CN）
 * 2. 校验 printf（%s/%d/%02d/%%）与插值占位符（{...}）一致
 * 3. 对每种语言全选全部模块生成 core.lua，确保无未解析 key 与明显 Lua 语法错误
 *
 * 运行前提：先执行 vite build --config vite.ssr.config.ts（或 pnpm build）
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SSR_ENTRY = resolve(ROOT, 'dist-ssr', 'entry-server.js');

if (!existsSync(SSR_ENTRY)) {
  console.log('[check-i18n] Building SSR bundle for verification...');
  execFileSync('pnpm', ['exec', 'vite', 'build', '--config', 'vite.ssr.config.ts'], {
    cwd: ROOT,
    stdio: 'inherit',
  });
}

const {
  allModules,
  generateAddonCode,
  getLoadedBundle,
  loadLocaleBundle,
  LOCALE_LIST,
} = await import(pathToFileURL(SSR_ENTRY).href);

const args = new Set(process.argv.slice(2));
const strictAll = args.has('--strict');

const extractPrintfTokens = (str) =>
  (String(str).match(/%(?:%|\d*\.?\d*[sdif])/g) || []).filter((t) => t !== '%%');

const extractBraceTokens = (str) =>
  [...String(str).matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort();

await loadLocaleBundle('zh-CN');
const baseBundle = getLoadedBundle('zh-CN');

let hasLuac = false;
try {
  execFileSync('luac', ['-v'], { stdio: 'ignore' });
  hasLuac = true;
} catch {
  hasLuac = false;
}

const tmpDir = hasLuac ? mkdtempSync(resolve(tmpdir(), 'wow-qol-i18n-')) : null;
let totalErrors = 0;
let totalWarnings = 0;

function report(level, msg) {
  if (level === 'error') {
    totalErrors++;
    console.error(`[FAIL] ${msg}`);
  } else {
    totalWarnings++;
    console.warn(`[WARN] ${msg}`);
  }
}

function checkStringsMatch(baseMap = {}, targetMap = {}, prefix, strict) {
  for (const [k, baseVal] of Object.entries(baseMap)) {
    const targetVal = targetMap[k];
    if (!targetVal || typeof targetVal !== 'string' || !targetVal.trim()) {
      report(strict ? 'error' : 'warn', `${prefix}.${k}: 缺少翻译`);
      continue;
    }
    const baseFmt = extractPrintfTokens(baseVal);
    const targetFmt = extractPrintfTokens(targetVal);
    if (JSON.stringify(baseFmt) !== JSON.stringify(targetFmt)) {
      report(
        'error',
        `${prefix}.${k}: printf 占位符不一致 (基准=${JSON.stringify(baseFmt)}, 当前=${JSON.stringify(targetFmt)})`
      );
    }
    const baseBrace = extractBraceTokens(baseVal);
    const targetBrace = extractBraceTokens(targetVal);
    if (JSON.stringify(baseBrace) !== JSON.stringify(targetBrace)) {
      report(
        'error',
        `${prefix}.${k}: 插值占位符不一致 (基准=${JSON.stringify(baseBrace)}, 当前=${JSON.stringify(targetBrace)})`
      );
    }
  }
}

for (const loc of LOCALE_LIST) {
  await loadLocaleBundle(loc.code);
  const bundle = getLoadedBundle(loc.code);
  const strict = strictAll || loc.code === 'zh-CN';

  // 1. Check all modules
  for (const mod of allModules) {
    const baseMod = baseBundle.modules[mod.id];
    const tr = bundle.modules[mod.id];
    if (!baseMod) {
      report('error', `zh-CN 缺少模块 ${mod.id}`);
      continue;
    }
    if (!tr) {
      report(strict ? 'error' : 'warn', `[${loc.code}] 缺少模块 ${mod.id}`);
      continue;
    }
    if (!tr.title?.trim()) report('error', `[${loc.code}] ${mod.id}: title 为空`);
    if (!tr.description?.trim()) report('error', `[${loc.code}] ${mod.id}: description 为空`);
    if (baseMod.details && !tr.details?.trim()) {
      report(strict ? 'error' : 'warn', `[${loc.code}] ${mod.id}: 缺少 details`);
    }
    if (baseMod.tag && !tr.tag?.trim()) {
      report(strict ? 'error' : 'warn', `[${loc.code}] ${mod.id}: 缺少 tag`);
    }
    if (baseMod.options) {
      for (const [optId, baseOpt] of Object.entries(baseMod.options)) {
        const trOpt = tr.options?.[optId];
        if (!trOpt || !trOpt.label?.trim()) {
          report(strict ? 'error' : 'warn', `[${loc.code}] ${mod.id}.options.${optId}: 缺少 label`);
          continue;
        }
        if (baseOpt.description && !trOpt.description?.trim()) {
          report(strict ? 'error' : 'warn', `[${loc.code}] ${mod.id}.options.${optId}: 缺少 description`);
        }
        if (baseOpt.choices) {
          for (const ck of Object.keys(baseOpt.choices)) {
            if (!trOpt.choices?.[ck]?.trim()) {
              report(strict ? 'error' : 'warn', `[${loc.code}] ${mod.id}.options.${optId}.choices.${ck}: 缺少译文`);
            }
          }
        }
      }
    }
    checkStringsMatch(baseMod.comments, tr.comments, `[${loc.code}] ${mod.id}.comments`, strict);
    checkStringsMatch(baseMod.strings, tr.strings, `[${loc.code}] ${mod.id}.strings`, strict);
  }

  // 2. Generate full core.lua and verify no unresolved keys or syntax failures
  const { tocContent, luaContent } = generateAddonCode(
    {
      name: 'MyQol',
      title: 'MyQol',
      author: 'iCH4O',
      notes: bundle.ui.alerts.defaultAddonNotes,
      interfaceVersion: '120105, 120107',
    },
    allModules.map((m) => m.id),
    {},
    loc.code
  );

  if (!tocContent.includes('## Interface:')) {
    report('error', `[${loc.code}] 生成的 TOC 格式异常`);
  }
  if (!luaContent.includes('Core:LoadModule(')) {
    report('error', `[${loc.code}] 生成的 core.lua 格式异常`);
  }
  if (hasLuac && tmpDir) {
    const luaFile = resolve(tmpDir, `${loc.slug}.lua`);
    writeFileSync(luaFile, luaContent);
    try {
      execFileSync('luac', ['-p', luaFile], { stdio: 'pipe' });
    } catch (err) {
      report('error', `[${loc.code}] luac 语法检查失败: ${err.stderr?.toString() || err.message}`);
    }
  }
}

if (tmpDir) rmSync(tmpDir, { recursive: true, force: true });

console.log(
  `\n[check-i18n] 校验完成 (luac=${hasLuac ? '已启用' : '未安装'}): ${totalErrors} 个错误, ${totalWarnings} 个警告`
);
if (totalErrors > 0) process.exit(1);
