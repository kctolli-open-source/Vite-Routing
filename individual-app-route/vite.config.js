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
        main: resolve(root, 'index.html'),
        app1: resolve(root, 'app1.html'),
        app2: resolve(root, 'app2.html'),
      }
    }
  },
});