import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    // Hardcoding the base to "/" forces the app to load at the root domain
    base: "/" 
  },
  nitro: {
    preset: "vercel",
  },
});