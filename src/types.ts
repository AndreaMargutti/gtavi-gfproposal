export interface InputConfig {
  /** Chiave con cui il valore viene salvato (anche in localStorage) */
  name: string
  label: string
  type: string
  placeholder: string
  required?: boolean
}

export interface StepConfig {
  key: string
  inputs: InputConfig[]
  submitLabel?: string
}

export type FormValues = Record<string, string>
