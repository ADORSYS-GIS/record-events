import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "./",
  server: {
    port: 5174,
  },
  optimizeDeps: {
    include: [
      "@adorsys-gis/web-auth-prf",
      "@adorsys-gis/web-auth-storage",
      "@adorsys-gis/storage",
    ],
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  build: {
    rollupOptions: {
      external: [],
      output: {
        globals: {
          "@adorsys-gis/web-auth-prf": "AdorsysWebAuthPrf",
          "@adorsys-gis/web-auth-storage": "AdorsysWebAuthStorage",
          "@adorsys-gis/storage": "AdorsysStorage",
        },
      },
    },
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
