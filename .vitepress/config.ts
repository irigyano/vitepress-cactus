import { defineConfig } from "vitepress";

export default defineConfig({
  title: "widetime",
  titleTemplate: ":title - widetime",
  description: "irigyano's warp",
  lang: "zh-TW",
  appearance: "force-dark",
  cleanUrls: true,
  srcExclude: ["**/README.md"],
});
