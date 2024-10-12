import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://smarketing.llc/DeepSleepMaskEG/",
  plugins: [react()],
})
