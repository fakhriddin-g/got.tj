import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        about: resolve(__dirname, "index.html"),
        activity: resolve(__dirname, "pages/activity/index.html"),
        study: resolve(__dirname, "pages/study/index.html"),
        contact: resolve(__dirname, "pages/contact/index.html"),
      },
    },
  },
});