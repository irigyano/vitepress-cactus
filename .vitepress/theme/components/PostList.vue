<script setup lang="ts">
import { data as posts } from "../posts.data.js";
import Date from "./Date.vue";
</script>

<template>
  <ul>
    <li
      class="flex flex-col xl:flex-row py-1 xl:gap-4"
      v-for="{ title, url, date } of posts"
      :key="url"
    >
      <Date :date="date" />
      <a class="underline hover:decoration-primary" :href="url">
        {{ title }}
      </a>
    </li>
  </ul>
</template>
