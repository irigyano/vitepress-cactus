<script setup lang="ts">
import { useData } from "vitepress";
import Home from "./Home.vue";
import Post from "./Post.vue";
import Footer from "./Footer.vue";
import NotFound from "./NotFound.vue";

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter, page } = useData();
</script>

<template>
  <div class="py-16 min-h-[100dvh] relative">
    <Home v-if="frontmatter.home" />
    <NotFound v-else-if="page.isNotFound" />
    <Post v-else />
    <Footer />
  </div>
</template>
