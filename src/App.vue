<script setup lang="ts">
import BackGround from './components/BackGround.vue'
import AppTitle from './components/AppTitle.vue'
import AppForm from './components/AppForm.vue'
import SuccessMessage from './components/SuccessMessage.vue'
import { useWizard } from './composables/useWizard'
import type { StepConfig } from './types'

// Per aggiungere uno step basta aggiungere un oggetto qui
const steps: StepConfig[] = [
  {
    key: 'nome',
    inputs: [{ name: 'nome', label: 'Nome', type: 'text', placeholder: 'Enter your name' }],
  },
  {
    key: 'contatti',
    inputs: [{ name: 'email', label: 'Email', type: 'email', placeholder: 'name@example.com' }],
  },
  {
    key: 'dettagli',
    submitLabel: 'Invia',
    inputs: [
      { name: 'citta', label: 'Città', type: 'text', placeholder: 'Dove giochiamo?' },
      { name: 'data', label: 'Data', type: 'date', placeholder: '' },
    ],
  },
]

const { currentIndex, currentStep, data, total, isCompleted, canGoBack, submitStep, back, reset } =
  useWizard(steps, 'gtavi-gfproposal')
</script>

<template>
  <BackGround />
  <div class="wrapper">
    <AppTitle title="GTA VI Proposal" />
    <p v-if="!isCompleted" class="mt-2 text-white">Passo {{ currentIndex + 1 }} di {{ total }}</p>

    <Transition name="fade" mode="out-in">
      <AppForm
        v-if="currentStep"
        :key="currentStep.key"
        :inputs="currentStep.inputs"
        :initial-values="data"
        :submit-label="currentStep.submitLabel"
        :can-go-back="canGoBack"
        @submit="submitStep"
        @back="back"
      />
      <SuccessMessage v-else :steps="steps" :data="data" @reset="reset" />
    </Transition>
  </div>
</template>

<style scoped>
.wrapper {
  width: 90%;
  margin: 0 auto;
  text-align: center;
  margin-block: 3rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .fade-enter-active,
  .fade-leave-active {
    transition: none;
  }
}
</style>
