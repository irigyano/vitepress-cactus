<script setup lang="ts">
import { useData, useRoute } from "vitepress";
import Date from "./Date.vue";
import { computed } from "vue";
import { data as posts } from "../posts.data.js";

const { frontmatter: data } = useData();
const route = useRoute();

function findCurrentIndex() {
  return posts.findIndex((p) => p.url === route.path);
}

// use the customData date which contains pre-resolved date info
const date = computed(() => posts[findCurrentIndex()].date);
</script>

<template>
  <header class="pt-6">
    <h1 class="text-[#2bbc8a] text-2xl font-bold">
      {{ data.title }}
    </h1>
    <Date :date="date" />
  </header>
  <Content class="prose prose-green prose-invert max-w-none" />
</template>
