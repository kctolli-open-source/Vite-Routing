import routes, { outDir, root } from './routes.js';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root,
  build: {
    outDir, 
    emptyOutDir: true,
    rollupOptions: {
      input: routes()
    }
  },
});