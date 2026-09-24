
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio-Rockenbach/', // 👈 Adicione esta linha exata!
})
