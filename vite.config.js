import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@swc/core', 'lightningcss', '@vitejs/plugin-react-swc']
  },
  build: {
    target: 'esnext'
  }
})
