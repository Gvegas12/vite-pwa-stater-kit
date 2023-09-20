import { defineConfig, loadEnv } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

const PORT = 5173;
const APP_DEV_URL = `http://localhost:${PORT}`;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const isDev = process.env.NODE_ENV === "development";

  return {
    build: {
      outDir: "build",
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    define: {
      __AUTH_API_URL_: isDev
        ? JSON.stringify(`${APP_DEV_URL}/api/wbauth`)
        : JSON.stringify(process.env.VITE_API_URL_AUTH),
      __API_URL__: isDev
        ? JSON.stringify(`${APP_DEV_URL}/api/v1`)
        : JSON.stringify(process.env.VITE_API_URL_DEV),
      __IS_DEV__: isDev,
    },
    test: {
      globals: true,
      environment: "jsdom",
    },
    plugins: [
      react(),
      svgr(),
      VitePWA({
        registerType: "autoUpdate",
        outDir: "build",
        manifest: {
          name: "VitejsPWA",
          short_name: "VitePWA",
          description: "Example Vite PWA",
          theme_color: "#fff",
          icons: [
            {
              src: "assets/images/android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "assets/images/android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      }),
    ],
  };
});
