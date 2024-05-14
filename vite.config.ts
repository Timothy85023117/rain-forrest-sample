import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import { defineConfig, splitVendorChunkPlugin } from "vite";
// import { execSync } from "child_process";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
export default ({ mode }: { mode: string }) => {
  console.log("vite.config.ts - mode:", mode);
  // process.env.VITE_GIT_COMMIT_HASH = execSync("git rev-parse HEAD")
  //   .toString()
  //   .trimEnd();
  process.env.VITE_GIT_COMMIT_DATE = new Date().toString().trimEnd();
  return defineConfig({
    plugins: [
      vue({
        reactivityTransform: true,
      }),
      splitVendorChunkPlugin(),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/scss/variables";
          `,
        },
      },
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },
    build: {},
    server: {
      proxy: {
        "/auth": {
          // 處理跨域
          target: "",
          changeOrigin: true,
          rewrite: (path) => {
            return path.replace(/^\/auth/, "");
          },
        },
      },
    },
  });
};
