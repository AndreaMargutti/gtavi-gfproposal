import { computed, ref, watch } from 'vue'
import type { FormValues, StepConfig } from '@/types'

interface StoredState {
  step: number
  data: FormValues
}

function loadState(key: string, totalSteps: number): StoredState {
  const fresh: StoredState = { step: 0, data: {} }
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fresh
    const parsed = JSON.parse(raw)
    if (typeof parsed?.step !== 'number' || typeof parsed?.data !== 'object' || !parsed.data) {
      return fresh
    }
    // step === totalSteps significa "completato"
    return { step: Math.min(Math.max(parsed.step, 0), totalSteps), data: parsed.data }
  } catch {
    return fresh
  }
}

export function useWizard(steps: StepConfig[], storageKey: string) {
  const initial = loadState(storageKey, steps.length)
  const currentIndex = ref(initial.step)
  const data = ref<FormValues>(initial.data)

  // Ogni modifica di step o dati viene salvata: al refresh si riparte da dove eri
  watch(
    [currentIndex, data],
    () => {
      try {
        localStorage.setItem(
          storageKey,
          JSON.stringify({ step: currentIndex.value, data: data.value }),
        )
      } catch {
        // storage pieno o bloccato (es. navigazione privata): il flusso continua in memoria
      }
    },
    { deep: true },
  )

  const total = steps.length
  const isCompleted = computed(() => currentIndex.value >= total)
  const currentStep = computed(() => (isCompleted.value ? null : steps[currentIndex.value]))
  const canGoBack = computed(() => currentIndex.value > 0 && !isCompleted.value)

  function submitStep(values: FormValues) {
    data.value = { ...data.value, ...values }
    currentIndex.value++
  }

  function back() {
    if (canGoBack.value) currentIndex.value--
  }

  function reset() {
    data.value = {}
    currentIndex.value = 0
    try {
      localStorage.removeItem(storageKey)
    } catch {
      /* ignore */
    }
  }

  return { currentIndex, currentStep, data, total, isCompleted, canGoBack, submitStep, back, reset }
}
