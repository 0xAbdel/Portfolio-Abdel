import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio-Abdel/', // correspond au nom de ton repo GitHub
  plugins: [react()],
})
