import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  server: {
    host: '0.0.0.0', 
    port: 5173,

    proxy: {
      '/api': {
        target: 'http://192.168.43.90:5000', // your backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
