import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en", "pt-br"],
  },
  content: {
    sources: ["src/content"],
  },
  integrations: [mdx()],
});
