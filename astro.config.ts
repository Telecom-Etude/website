import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";
import astroI18next from "astro-i18next";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
    site: "https://telecom-etude.fr",
    integrations: [
        astroI18next(),
        svelte(),
        sitemap({
            changefreq: "weekly",
            lastmod: new Date(),
        }),
    ],
});
