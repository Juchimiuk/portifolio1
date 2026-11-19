import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// Site com mais de uma página: cada HTML vira uma página estática no build,
// então /projetos/ritza/ funciona em qualquer hospedagem, sem configurar rotas.
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        ritza: 'projetos/ritza/index.html',
      },
    },
  },
})
