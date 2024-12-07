// astro.config.mjs
import { defineConfig } from "astro/config";
import awsAmplify from "astro-aws-amplify";
// import react from "@astrojs/react";
// import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // integrations: [react(), tailwind()],
  output: "static", // output: 'hybrid'
  adapter: awsAmplify(),
});
