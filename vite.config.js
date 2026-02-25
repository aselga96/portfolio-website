import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  optimizeDeps: {
    exclude: ['@swc/core', 'lightningcss', '@vitejs/plugin-react-swc']
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  server: {
    historyApiFallback: false // Disable SPA fallback to match Vercel behavior
  }
})
