<script setup lang="ts">
import type { FormValues, StepConfig } from '@/types'

defineProps<{
  steps: StepConfig[]
  data: FormValues
}>()

defineEmits<{ (e: 'reset'): void }>()
</script>

<template>
  <div
    class="bg-white rounded-lg shadow-md p-6 mt-8 w-11/12 max-w-xl md:w-6/12 m-auto"
    role="status"
  >
    <h2 class="text-3xl font-bold">Proposta inviata!</h2>
    <p class="mt-2">Ecco cosa hai inserito:</p>
    <dl class="mt-4 text-left">
      <template v-for="step in steps" :key="step.key">
        <div v-for="input in step.inputs" :key="input.name" class="flex justify-between py-1">
          <dt class="font-bold">{{ input.label }}</dt>
          <dd>{{ data[input.name] }}</dd>
        </div>
      </template>
    </dl>
    <button
      type="button"
      class="mt-6 px-6 py-2 rounded-md bg-purple-600 text-white cursor-pointer"
      @click="$emit('reset')"
    >
      Ricomincia
    </button>
  </div>
</template>
