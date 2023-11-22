import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://lk20918n.github.io/csci39548-webdev-assignments/Assignment6/build",
  plugins: [react()],
})
