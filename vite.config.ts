import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(path.join(__dirname, "./src")),
      },
      {
        find: "@pages",
        replacement: path.resolve(path.join(__dirname, "./src/pages")),
      },
      {
        find: "@css",
        replacement: path.resolve(path.join(__dirname, "./src/css")),
      },
      {
        find: "@components",
        replacement: path.resolve(path.join(__dirname, "./src/components")),
      },
    ],
  },
});
