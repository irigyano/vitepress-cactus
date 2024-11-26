<script setup lang="ts">
import type { Post } from "../posts.data.js";
const props = defineProps<{ date: Post["date"] }>();
const postDate = new Date(props.date.time).toISOString();
</script>

<template>
  <time class="text-[#666] whitespace-nowrap w-28" :datetime="postDate">{{
    date.string
  }}</time>
</template>
