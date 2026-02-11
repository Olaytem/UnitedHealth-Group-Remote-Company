import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/UnitedHealth-Group-Remote-Company/', // <- important!
  plugins: [react()]
})
