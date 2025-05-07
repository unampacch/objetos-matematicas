import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import partytown from '@astrojs/partytown';

export default defineConfig({
  // Define el prefijo dinámico para las rutas
  base: import.meta.env.VERCEL ? "/" : (import.meta.env.DEV ? "/" : "/sumate"),
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
          'usb-c'
        ]
      }
    }),
    partytown()
  ]
});
