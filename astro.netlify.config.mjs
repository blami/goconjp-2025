// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  base: "/2025",
  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
