import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/gkecloud-project/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
