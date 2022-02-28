import { ConfigEnv, defineConfig, loadEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import { resolve } from "path";

const CWD = process.cwd();

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const { VITE_DROP_CONSOLE, VITE_LEGACY, VITE_BASE_URL } = loadEnv(mode, CWD);

  return {
    base: VITE_BASE_URL,
    mode: mode,
    plugins: [vue(), legacy()],
    resolve: {
      alias: [
        {
          find: "@",
          replacement: resolve(__dirname, "./src"),
        },
        {
          find: "components",
          replacement: resolve(__dirname, "./src/components"),
        },
        {
          find: "views",
          replacement: resolve(__dirname, "./src/views"),
        },
      ],
    },
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
    server: {
      port: 8000,
      open: true,
    },
  };
});
