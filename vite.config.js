import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [
      react(),
      svgr(), // <-- 2. Add it to the plugins array
    ],
    base: "/WiFiNOWTV/",
  };

  // Change base path when building for production
  if (command !== "serve") {
    config.base = "/WiFiNOWTV/"; // 👈 Replace with your GitHub repository name
  }

  return config;
});
