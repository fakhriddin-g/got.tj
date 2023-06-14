// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        about: resolve(__dirname, "index.html"),
        main: resolve(__dirname, "pages/about/index.html"),
      },
    },
  },
});
