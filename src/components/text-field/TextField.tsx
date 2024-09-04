'use client'
import { forwardRef, useState } from 'react'

import HideIcon from '@/assets/svg/hide-icon'
import SearchIcon from '@/assets/svg/search-icon'
import ShowIcon from '@/assets/svg/show-icon'
import { INPUT_TYPES, InputProps } from '@/components/text-field/text-field.types'
import { clsx } from 'clsx'

import s from './text-field.module.scss'

export const TextField = forwardRef<HTMLInputElement, InputProps>(
  ({ className, disabled, error, inputType = 'text', label, required = false, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    const textFieldNames = ['userName', 'email', 'password', 'confirmPassword']

    const classNames = {
      container: clsx(s.inputContainer),
      error: clsx(error && s.error),
      input: clsx(s.input, s[`${inputType}`], error && s.inputError),
      label: clsx(s.label),
      leftIcon: clsx(s.leftIcon),
      rightIcon: clsx(s.rightIcon),
      root: clsx(s.root, className, disabled && s.disabled),
    }
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (rest.name ? textFieldNames.includes(rest.name) : false) {
        if (event.key === ' ' || event.code === 'Space') {
          event.preventDefault()
        }
      }
    }
    const showHidePassword = () => {
      if (!disabled) {
        setShowPassword(!showPassword)
      }
    }

    const leftIcon = inputType === INPUT_TYPES.PASSWORD && (
      <button
        className={s.rightIcon}
        disabled={disabled}
        onClick={showHidePassword}
        type={'button'}
      >
        {showPassword ? <HideIcon /> : <ShowIcon />}
      </button>
    )

    const rightIcon = inputType === INPUT_TYPES.SEARCH && (
      <div className={s.rightIcon} id={'left-icon'}>
        {<SearchIcon />}
      </div>
    )
    const type = showPassword && inputType === INPUT_TYPES.PASSWORD ? INPUT_TYPES.TEXT : inputType

    return (
      <div className={classNames.root}>
        {label && (
          <div className={classNames.label}>
            {label}
            {required && <span className={s.required}>*</span>}
          </div>
        )}
        <div className={classNames.container}>
          <input
            aria-label={label}
            className={classNames.input}
            disabled={disabled}
            onKeyDown={handleKeyDown}
            ref={ref}
            type={type}
            {...rest}
          />
          {leftIcon}
          {rightIcon}
        </div>
        {error && <div className={classNames.error}>{error}</div>}
      </div>
    )
  }
)
