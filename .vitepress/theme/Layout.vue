<script setup lang="ts">
import { useData } from "vitepress";
import Home from "./Home.vue";
import Post from "./Post.vue";
import Footer from "./Footer.vue";

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData();
</script>

<template>
  <div class="py-16 min-h-[100dvh] relative">
    <div v-if="frontmatter.home">
      <header class="pb-8">
        <h1 class="font-bold text-2xl">{{ site.title }}</h1>
      </header>
      <Home />
    </div>

    <Post v-else />
    <Footer />
  </div>
</template>
