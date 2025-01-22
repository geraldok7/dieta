import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Escuta em todas as interfaces de rede
    port: 5173,        // Porta que o Vite usará (garanta que esteja configurada também no Docker)
    strictPort: true,  // Força o uso da porta especificada
  },
})
