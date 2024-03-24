import { defineConfig } from "vitepress";

export default defineConfig({
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
  // },
  title: "iriwarp",
  titleTemplate: ":title - iriwarp",
  description: "irigyano's warp",
  lang: "zh-TW",
  appearance: "force-dark",
  cleanUrls: true,
  srcExclude: ["**/README.md"],
});
