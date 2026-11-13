import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * 构建期预渲染用的 SSR 打包配置。
 * 把 src/entry-server.tsx 编译成可在 Node 中 import 的 ESM 产物，
 * 由 scripts/prerender.mjs 调用并在构建末尾把 HTML 注入 dist/index.html。
 *
 * 与客户端构建的分工：
 * - vite.config.ts        → 浏览器端的 JS / CSS
 * - vite.ssr.config.ts    → 仅 renderToString 所需的服务端代码
 * 因此这里不需要 tailwind 插件（entry-server 不引入任何 CSS）。
 */
export default defineConfig({
  plugins: [react()],
  build: {
    ssr: 'src/entry-server.tsx',
    outDir: 'dist-ssr',
    emptyOutDir: true,
    minify: false,
    rollupOptions: {
      output: { format: 'esm' },
    },
  },
});