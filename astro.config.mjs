// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { loadEnv } from "vite";
import { isNoindexRoute } from "./src/utils/seo.ts";

const { PUBLIC_SITE_URL: SITE_URL } = loadEnv(
  process.env.NODE_ENV || "development",
  process.cwd(),
  "PUBLIC_",
);

export default defineConfig({
  site: SITE_URL || undefined,
  integrations: [
    ...(SITE_URL
      ? [
          sitemap({
            filter: (page) => !isNoindexRoute(new URL(page).pathname),
          }),
        ]
      : []),
  ],
  fonts: [
    {
      name: "Manrope",
      cssVariable: "--font-manrope",
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            weight: 500,
            style: "normal",
            src: ["./src/assets/fonts/manrope-medium.ttf"],
          },
        ],
      },
    },
    {
      name: "Inter",
      cssVariable: "--font-inter",
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/inter-regular.woff2"],
          },
        ],
      },
    },
  ],
  vite: { build: { cssTarget: "safari15.4" } },
});
