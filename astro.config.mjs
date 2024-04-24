import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
// los icons son bootstrap icons https://icon-sets.iconify.design/bi/
export default defineConfig({
  integrations: [tailwind(),
    icon({
      include:{
        bi: [
          'facebook',
          'twitter-x',
          'youtube',
          'instagram',
          'box-arrow-in-right',
          'usb-c'
        ]
      }
    }
  )]
});