import { ComponentPropsWithoutRef, ElementType } from 'react'

import { ButtonProps } from '@/components/button/button.types'
import { clsx } from 'clsx'

import s from './button.module.scss'

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const {
    as: Component = 'button',
    className,
    fullWidth,
    type = 'button',
    variant = 'primary',
    ...rest
  } = props
  const classNames = clsx(s[variant], fullWidth && s.fullWidth, className)

  return <Component className={classNames} type={type} {...rest} />
}
