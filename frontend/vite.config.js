import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  define: {
    global: 'window', // 🛠️ Esto arregla el error de SockJS
    'process.env': {}, // 🛠️ Opcional, por si alguna lib busca process.env
  },
});
