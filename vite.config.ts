import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Works on both a GitHub Pages project URL and a custom domain.
  base: './',
  plugins: [react()],
})
