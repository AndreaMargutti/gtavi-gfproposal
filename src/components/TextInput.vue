<script setup lang="ts">
const props = defineProps<{
  name: string
  type: string
  placeholder: string
}>()
</script>

<template>
  <div class="my-3 *:mb-2">
    <label :for="props.name" class="block">{{ props.name }}</label>
    <input
      :name="props.name"
      :type="props.type"
      :placeholder="props.placeholder"
      class="borderrounded-md py-2 px-4 text-center"
    />
  </div>
</template>
