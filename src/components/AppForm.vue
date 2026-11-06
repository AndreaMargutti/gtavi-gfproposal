<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import TextInput from './TextInput.vue'
import type { FormValues, InputConfig } from '@/types'

const props = defineProps<{
  inputs: InputConfig[]
  /** Valori già salvati (es. quando si torna indietro a uno step) */
  initialValues?: FormValues
  submitLabel?: string
  canGoBack?: boolean
}>()

const emit = defineEmits<{
  (e: 'submit', values: FormValues): void
  (e: 'back'): void
}>()

const values = reactive<FormValues>(
  Object.fromEntries(props.inputs.map((i) => [i.name, props.initialValues?.[i.name] ?? ''])),
)
const errors = reactive<Record<string, string>>({})
const formEl = ref<HTMLFormElement | null>(null)

function validate(): boolean {
  let valid = true
  for (const input of props.inputs) {
    const value = values[input.name]?.trim() ?? ''
    let message = ''
    if (input.required !== false && !value) {
      message = 'Campo obbligatorio'
    } else if (input.type === 'email' && value && !/^\S+@\S+\.\S+$/.test(value)) {
      message = 'Inserisci un indirizzo email valido'
    }
    if (message) valid = false
    errors[input.name] = message
  }
  return valid
}

function handleSubmit() {
  if (!validate()) return
  const trimmed = Object.fromEntries(Object.entries(values).map(([k, v]) => [k, v.trim()]))
  emit('submit', trimmed)
}

onMounted(() => formEl.value?.querySelector('input')?.focus())
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-6 mt-8 w-11/12 max-w-xl md:w-6/12 m-auto">
    <form ref="formEl" novalidate @submit.prevent="handleSubmit">
      <TextInput
        v-for="input in inputs"
        :key="input.name"
        v-model="values[input.name]!"
        :name="input.name"
        :label="input.label"
        :type="input.type"
        :placeholder="input.placeholder"
        :error="errors[input.name]"
      />
      <div class="mt-4 flex justify-center gap-3">
        <button
          v-if="canGoBack"
          type="button"
          class="px-6 py-2 rounded-md border border-purple-600 text-purple-600 cursor-pointer"
          @click="emit('back')"
        >
          Indietro
        </button>
        <button type="submit" class="px-6 py-2 rounded-md bg-purple-600 text-white cursor-pointer">
          {{ submitLabel ?? 'Avanti' }}
        </button>
      </div>
    </form>
  </div>
</template>
