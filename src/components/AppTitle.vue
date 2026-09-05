<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <h1 class="text-5xl font-bold text-[#fdf6f0]">{{ props.title }}</h1>
</template>

<style scoped>
h1 {
  text-shadow:
    0 0 10px rgba(255, 46, 146, 0.6),
    0 0 20px rgba(162, 57, 234, 0.4),
    0 0 30px rgba(46, 230, 214, 0.3);
  letter-spacing: 1px;
}
</style>
