import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // 👇 CRUCIAL FIX: This tells Vite to build assets using relative paths,
  // fixing the blank screen issue on Netlify/GitHub Pages deployment.
  base: "./",
});
