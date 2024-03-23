<script setup lang="ts">
import { useData } from "vitepress";
import PostList from "./PostList.vue";

const { site, frontmatter, page } = useData();
</script>

<template>
  <div v-if="frontmatter.home">
    <header class="pb-8">
      <h1 class="font-bold text-2xl">{{ site.title }}</h1>
    </header>
    <PostList />
  </div>
</template>
