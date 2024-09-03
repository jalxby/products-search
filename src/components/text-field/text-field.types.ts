import { ComponentPropsWithoutRef } from 'react'

export const INPUT_TYPES = {
  PASSWORD: 'password',
  SEARCH: 'search',
  TEXT: 'text',
} as const

export type InputProps = {
  error?: string
  inputType?: (typeof INPUT_TYPES)[keyof typeof INPUT_TYPES]
  label?: string
  required?: boolean
} & Omit<ComponentPropsWithoutRef<'input'>, 'type'>
