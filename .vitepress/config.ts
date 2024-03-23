import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  title: "iriwrap",
  description: "A VitePress Site",
  // // to override theme use: bun run dev:bun
  // vite: {
  //   resolve: {
  //     alias: [
  //       {
  //         find: /^.*\/VPNavBar\.vue$/,
  //         replacement: Bun.fileURLToPath(
  //           new URL('./components/CustomNavBar.vue', import.meta.url)
  //         )
  //       }
  //     ]
  //   }
  // }
});
