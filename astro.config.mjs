import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://sukesan000.github.io",
  base: "/sukesan-blog",
  integrations: [mdx()]
});