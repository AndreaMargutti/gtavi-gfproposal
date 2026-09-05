<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <h1 class="text-5xl font-bold text-white">{{ props.title }}</h1>
</template>
