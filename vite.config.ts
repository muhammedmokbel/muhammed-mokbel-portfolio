import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // VITE_BASE_URL=/ for Docker, /muhammed-mokbel-portfolio/ for GitHub Pages
  base: process.env.VITE_BASE_URL ?? '/muhammed-mokbel-portfolio/',
  plugins: [react(), tailwindcss()],
})
