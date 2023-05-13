import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const pages = [
  'index.html',
  'app1.html',
  'app2.html',
];

function paths(root) {
  return {
      main: resolve(root, pages[0]),
      app1: resolve(root, pages[1]),
      app2: resolve(root, pages[2]),
  }
}

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
      input: paths(root)
    }
  },
});