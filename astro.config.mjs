import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import partytown from '@astrojs/partytown';

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
    tailwind(),
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
  ]
});
