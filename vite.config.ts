import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import viteCompression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  base: "./",
  server: {
    port: 5174,
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  build: {
    sourcemap: true,
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
  },
  define: {
    global: "globalThis",
  },
  plugins: [
    react(),
    viteCompression(),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
    VitePWA({
      registerType: "prompt",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "Cameroon Vote Reporting",
        short_name: "VoteReport",
        description:
          "An application for reporting election results in Cameroon.",
        start_url: "/",
        scope: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#007A5E",
        icons: [
          {
            src: "icon-192x192.jpeg",
            sizes: "192x192",
            type: "image/jpeg",
          },
          {
            src: "icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        screenshots: [
          {
            src: "Screenshot1.png",
            sizes: "1013x527",
            type: "image/png",
            form_factor: "wide",
            label: "Dashboard",
          },
          {
            src: "Screenshot2.png",
            sizes: "1013x527",
            type: "image/png",
            form_factor: "wide",
            label: "Event Form",
          },
        ],
      },
    }),
  ],
});
