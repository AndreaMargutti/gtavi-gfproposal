<script setup lang="ts">
import TextInput from './TextInput.vue'

const props = defineProps<{
  inputs: {
    name: string
    type: string
    placeholder: string
  }[]
}>()
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-6 mt-8 w-6/12 m-auto">
    <form method="get">
      <TextInput
        v-for="input in inputs"
        :key="input.name"
        :name="input.name"
        :type="input.type"
        :placeholder="input.placeholder"
      />
    </form>
  </div>
</template>
