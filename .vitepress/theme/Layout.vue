<script setup lang="ts">
import { useData } from "vitepress";
import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";
import Post from "./pages/Post.vue";
import Footer from "./components/Footer.vue";
const { frontmatter, page } = useData();
</script>

<template>
  <div class="py-16 min-h-[100dvh] relative">
    <Home v-if="frontmatter.home" />
    <NotFound v-else-if="page.isNotFound" />
    <Post v-else />
    <Footer />
  </div>
</template>
