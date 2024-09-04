import { FC } from 'react'

import { CardType } from '@/components/card/card.types'
import { clsx } from 'clsx'

import s from './card.module.scss'

export const Card: FC<CardType> = ({ children, className, ...rest }) => {
  const style = clsx(s.card, className)

  return (
    <div className={style} {...rest}>
      {children}
    </div>
  )
}
