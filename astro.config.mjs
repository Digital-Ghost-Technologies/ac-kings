import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://theackings.com",
  integrations: [tailwind({
    config: {
      applyBaseStyles: false,
    }
  }), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })]
});