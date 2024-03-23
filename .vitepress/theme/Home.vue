<script setup lang="ts">
import Date from "./Date.vue";
import { data as posts } from "./posts.data.js";
</script>

<template>
  <ul class="">
    <li class="flex gap-6 py-1" v-for="{ title, url, date, excerpt } of posts">
      <Date :date="date" />
      <a class="underline hover:decoration-[#d480aa] break-all" :href="url">{{
        title
      }}</a>
    </li>
  </ul>
</template>
