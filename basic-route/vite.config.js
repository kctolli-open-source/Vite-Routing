import { resolve } from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, '');
const outDir = resolve(__dirname, 'dist');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root,
  build: {
    outDir, 
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main:  resolve(root, 'index.html'),
        page1: resolve(root, 'page1.html'),
        page2: resolve(root, 'page2.html'),
      }
    }
  },
});