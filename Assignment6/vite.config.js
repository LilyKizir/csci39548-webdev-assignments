import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        root: resolve(__dirname, 'root.jsx'),
        random: resolve(__dirname, 'Random.jsx'),
        query: resolve(__dirname, "Query.jsx")
      },
    },
  },
  base: "/",
  plugins: [react()],
})
