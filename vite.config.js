import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  const isGitHubPages = process.env.GITHUB_PAGES === 'true';

  return {
    plugins: [react()],
    // Configurar base URL para GitHub Pages
    // Substitua 'psico-connect' pelo nome do seu repositório
    base: isGitHubPages ? '/openMind/' : '/',
    server: {
      port: 3000
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      // Otimizações para produção
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
            utils: ['axios']
          }
        }
      }
    }
  }
})