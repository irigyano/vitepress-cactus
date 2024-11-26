<script setup lang="ts">
import { useData } from "vitepress";
const { frontmatter } = useData();
</script>

<template>
  <footer class="flex gap-4">
    <a v-if="!frontmatter.home" class="hover:text-primary" href="/">..</a>
    <a
      class="underline hover:decoration-primary"
      href="https://github.com/irigyano"
      target="_blank"
      >GitHub</a
    >
  </footer>
</template>
