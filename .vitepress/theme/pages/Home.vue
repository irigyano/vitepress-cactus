<script setup lang="ts">
import { useData } from "vitepress";
import PostList from "../components/PostList.vue";

const { site, frontmatter, page } = useData();
</script>

<template>
  <div v-if="frontmatter.home">
    <header class="pb-8">
      <h1 class="font-bold text-[32px] leading-10">{{ site.title }}</h1>
    </header>
    <PostList />
  </div>
</template>
