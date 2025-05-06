import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import partytown from '@astrojs/partytown';

export default defineConfig({
  base: import.meta.env.DEV ? "." : "/sumate", // Usa una variable para decidir
  integrations: [tailwind(),
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
