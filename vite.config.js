import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // <- Cambia esto a './' en lugar de '/'
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})