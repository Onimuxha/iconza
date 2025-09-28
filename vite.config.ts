import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";

import Pages from 'vite-plugin-pages';
import generateSitemap from 'vite-plugin-pages-sitemap';

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: [
        ".",
        "./client",
        "./shared",
        "./packages"
      ],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
  build: {
    outDir: "dist/spa",
    sourcemap: mode === 'development',
  },
  plugins: [
    react(),
    expressPlugin(),
    Pages({
      onRoutesGenerated: (routes) =>
        generateSitemap({
          routes,
          hostname: 'https://iconza.vercel.app',
        }),
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
      "iconza": path.resolve(__dirname, "./packages/iconza/src/index.ts"),
    },
  },
  base: '/',
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode),
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve",
    configureServer(server) {
      const app = createServer();

      server.middlewares.use(app);
    },
  };
}
