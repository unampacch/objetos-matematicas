import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import fs from 'fs';
import path from 'path';

// Determinar el 'base' path
let base = '/sumate'; // Valor por defecto para tu build de producción (ej. /sumate)
if (process.env.VERCEL === "1") { // Vercel establece VERCEL="1"
  base = '/'; // Para despliegues en Vercel
} else if (process.env.NODE_ENV === 'development') { // Astro establece NODE_ENV a 'development' para `astro dev`
  base = '/'; // Para desarrollo local
}

// Determinar el 'site' URL
// Reemplaza 'https://tu-dominio.com' con el dominio donde alojarás la versión de /sumate
// Por ejemplo, si tu sitio es https://ejemplo.com/sumate, site es https://ejemplo.com
let site = 'https://portalacademico.cch.unam.mx'; // <--- CAMBIO AQUÍ
if (process.env.VERCEL_URL) { // Vercel provee VERCEL_URL para el dominio de despliegue
  site = `https://${process.env.VERCEL_URL}`;
} else if (process.env.NODE_ENV === 'development') {
  site = `http://localhost:${process.env.PORT || 4321}`; // URL de desarrollo local
}
export default defineConfig({
  site: site,
  base: base,
  integrations: [
    sitemap(),
    tailwind(),
    react(),
    icon({
      include: {
        bi: [
          'facebook',
          'twitter-x',
          'youtube',
          'instagram',
          'box-arrow-in-right',
          'usb-c',
          'linkedin',
          'link-45deg',
          'github'
        ]
      }
    }),
    partytown()
  ],
  vite: {
    buildStart() {
      const src = path.resolve('src/pages/asignaturas/asignaturas.json');
      const dest = path.resolve('public/data/asignaturas.json');

      try {
        // Asegura que la carpeta de destino exista
        fs.mkdirSync(path.dirname(dest), { recursive: true });

        // Copia el archivo
        fs.copyFileSync(src, dest);
        console.log('✅ Copiado: asignaturas.json -> public/data');
      } catch (err) {
        console.error('❌ Error copiando asignaturas.json:', err);
      }
    },

    server: {
      watch: {
        ignored: [
          '**/node_modules/**',
          '**/.git/**',
          '**/.env/**',
          '**/dist/**',
          '**/.astro/**'
        ],
        usePolling: true,
        interval: 1000
      },
      fs: {
        strict: true,
        allow: [process.cwd()]
      }
    },

    optimizeDeps: {
      include: ['@astrojs/tailwind', 'astro-icon']
    }
  }
});
