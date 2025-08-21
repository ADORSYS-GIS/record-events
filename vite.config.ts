import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "./",
  server: {
    port: 5174,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "ReportHub",
        short_name: "ReportHub",
        start_url: "/",
        scope: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#007bff",
        icons: [
          {
            src: "/download1.png",
            sizes: "225x225",
            type: "image/png",
          },
          {
            src: "/download2.png",
            sizes: "225x225",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
