/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths(), react(), eslint()],
  server: {
    port: 4000,
  },
  test: {
    reporters: ['default', 'html'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    deps: {
      fallbackCJS: true,
    },
  },
});
