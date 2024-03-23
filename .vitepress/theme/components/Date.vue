<script setup lang="ts">
import type { Post } from "../posts.data.js";
const props = defineProps<{ date: Post["date"] }>();

const postDate = new Date(props.date.time).toISOString();
const pinned = postDate === "2027-10-24T12:00:00.000Z";
</script>

<template>
  <div v-if="pinned" class="text-[#666] w-28">📌 Pinned</div>
  <time
    v-else
    class="text-[#666] whitespace-nowrap w-28"
    :datetime="postDate"
    >{{ date.string }}</time
  >
</template>
