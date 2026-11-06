<script setup lang="ts">
defineProps<{
  name: string
  label: string
  type: string
  placeholder: string
  modelValue: string
  error?: string
}>()

defineEmits<{ (e: 'update:modelValue', value: string): void }>()
</script>

<template>
  <div class="my-3 *:mb-2">
    <label :for="name" class="block">{{ label }}</label>
    <input
      :id="name"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :aria-invalid="!!error"
      :aria-describedby="error ? `${name}-error` : undefined"
      class="border rounded-md py-2 px-4 text-center w-full"
      :class="error ? 'border-red-500' : 'border-gray-300'"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <p v-if="error" :id="`${name}-error`" class="text-sm text-red-600" role="alert">
      {{ error }}
    </p>
  </div>
</template>
