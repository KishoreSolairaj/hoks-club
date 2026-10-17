import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative paths so the same build works at kishoresolairaj.github.io/hoks-club/
  // and at the root of a custom domain.
  base: "./",
})
