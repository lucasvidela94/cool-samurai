import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://lucasvidela94.github.io",
  base: "",
  content: {
    sources: ["src/content"],
  },
  integrations: [mdx()],
});
