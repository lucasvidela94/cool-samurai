import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  site: "https://lucasvidela.dev.ar/",
  base: "",
  content: {
    sources: ["src/content"],
  },
  integrations: [mdx()],
  adapter: cloudflare(),
});
