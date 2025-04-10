// filepath: /Users/gaelivan740/JJugos/astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react'; // Importa la integración de React

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(), // Agrega React aquí
  ],
  vite: {
    ssr: {
      external: ['@material-tailwind/react'], // Marca este paquete como externo
    },
  },
});