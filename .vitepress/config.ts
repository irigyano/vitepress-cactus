import { defineConfig } from "vitepress";

export default defineConfig({
  title: "iriwarp",
  titleTemplate: ":title - iriwarp",
  description: "irigyano's warp",
  lang: "zh-TW",
  appearance: "force-dark",
  cleanUrls: true,
  srcExclude: ["**/README.md"],
});
