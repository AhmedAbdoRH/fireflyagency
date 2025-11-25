import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    open: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.')
    }
  },
  build: {
    assetsDir: 'assets',
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.webp', '**/*.mp4', '**/*.svg']
  },
  publicDir: 'public',
  define: {
    'process.env': {}
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020'
    }
  }
});
