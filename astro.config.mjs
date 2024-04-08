import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';


import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
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