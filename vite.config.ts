import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

console.log(path.resolve(__dirname, "src"));
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
  server: {
    proxy: {
      "/ytb": {
        changeOrigin: true,
        target: "http://xizige.cn:7001",
      },
    },
  },
});
