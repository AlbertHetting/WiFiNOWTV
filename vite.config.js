import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/WiFiNOWTV/",
  };

  // Change base path when building for production
  if (command !== "serve") {
    config.base = "/WiFiNOWTV/"; // 👈 Replace with your GitHub repository name
  }

  return config;
});
