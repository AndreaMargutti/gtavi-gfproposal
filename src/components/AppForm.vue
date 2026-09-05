<script setup lang="ts">
import TextInput from './TextInput.vue'

const inputs = [
  { name: 'Nome', type: 'text', placeholder: 'Inserisci il tuo nome' },
  { name: 'Ruolo', type: 'text', placeholder: 'Inserisci il tuo ruolo' },
]
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
