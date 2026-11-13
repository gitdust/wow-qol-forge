import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const require = createRequire(resolve(process.cwd(), 'package.json'));
const LOCALE_SLUGS = new Set(['en', 'zh-cn', 'zh-tw', 'ko', 'de', 'ru', 'fr', 'es', 'pt']);

// 开发环境直接提供与生产环境相同的计数接口，无需另启服务或依赖旧构建产物。
function downloadCountsDev() {
  return {
    name: 'download-counts-dev',
    apply: 'serve' as const,
    configureServer(server: import('vite').ViteDevServer) {
      const { createDownloadCounts } = require('./download-counts.cjs');
      const { handleDownloadCounts } = require('./download-counts-api.cjs');
      let ids: string[] = [];
      const counts = createDownloadCounts(process.env.DOWNLOAD_DATA_DIR || resolve(server.config.root, 'data'), () => ids);
      server.httpServer?.once('close', () => counts.close());
      server.middlewares.use(async (req, res, next) => {
        const path = (req.url || '').split('?')[0];
        const base = server.config.base.replace(/\/$/, '');
        if (path !== '/api/downloads' && path !== `${base}/api/downloads`) return next();
        try {
          const modules = await server.ssrLoadModule('/src/data/modules/index.ts') as { allModules: { id: string }[] };
          ids = modules.allModules.map((module) => module.id);
          handleDownloadCounts(req, res, counts);
        } catch (error) {
          server.config.logger.error(`下载次数接口出错: ${String(error)}`);
          res.writeHead(500, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
          res.end(JSON.stringify({ error: 'Unable to access download counts' }));
        }
      });
    },
  };
}

// 开发服务器支持 /<locale>/ 子路径直接回退到 index.html
function i18nDevSpaFallback() {
  return {
    name: 'i18n-dev-spa-fallback',
    apply: 'serve' as const,
    configureServer(server: import('vite').ViteDevServer) {
      server.middlewares.use((req, _res, next) => {
        const url = req.url || '/';
        const [pathname, search] = url.split('?');
        const seg = pathname.replace(/^\/+|\/+$/g, '');
        if (LOCALE_SLUGS.has(seg.toLowerCase())) {
          req.url = `/index.html${search ? `?${search}` : ''}`;
        }
        next();
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  // 独立域名部署于根路径 /，可通过环境变量 VITE_BASE 覆盖
  base: process.env.VITE_BASE ?? '/',
  plugins: [
    react(),
    tailwindcss(),
    downloadCountsDev(),
    i18nDevSpaFallback(),
  ],
  server: {
    port: 3101,
    open: true,
  },
  preview: {
    port: Number(process.env.PORT) || 3101,
    host: '0.0.0.0',
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
});
