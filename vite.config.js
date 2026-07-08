import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served at domain root on Cloudflare Pages — no `base` override needed.
export default defineConfig({
  plugins: [react()],
})
