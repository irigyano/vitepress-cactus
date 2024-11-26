import Layout from "./Layout.vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme-without-fonts";
import "./style.css";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {},
} satisfies Theme;
