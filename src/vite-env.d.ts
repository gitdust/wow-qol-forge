/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WOW_INTERFACE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}
