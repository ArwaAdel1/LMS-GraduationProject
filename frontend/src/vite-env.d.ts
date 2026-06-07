/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base URL of the Nest.js backend API. Falls back to "/api" when unset. */
  readonly VITE_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
