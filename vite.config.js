import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // <- esto asegura que las rutas sean relativas a la raíz
  build: {
    outDir: 'dist',
  },
})
