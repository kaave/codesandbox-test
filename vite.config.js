import reactPlugin from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [reactPlugin()],
  base: './',
  server: {
    // open: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    // setupFiles: './src/test/setup.ts',
    css: true,
    exclude: ['node_modules/**/*'],
  },
});
