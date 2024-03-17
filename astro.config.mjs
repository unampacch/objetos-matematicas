import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(),
    icon({
      include:{
        bi: [
          'facebook',
          'twitter-x',
          'youtube',
          'instagram',
        ]
      }
    }
  )]
});