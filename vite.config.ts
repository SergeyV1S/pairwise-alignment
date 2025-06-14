import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/pairwise-alignment/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
