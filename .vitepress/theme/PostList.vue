<script setup lang="ts">
import { data as posts } from "./posts.data.js";
import Date from "./Date.vue";
</script>

<template>
  <ul class="">
    <li class="flex gap-4 py-1" v-for="{ title, url, date, excerpt } of posts">
      <Date :date="date" />
      <a class="underline hover:decoration-[#d480aa] break-all" :href="url">{{
        title
      }}</a>
    </li>
  </ul>
</template>
