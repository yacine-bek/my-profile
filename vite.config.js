import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-profile/', // 👈 this is critical
  plugins: [react()],
})
