import { Fragment, ReactNode } from 'react'

import s from './grid-wrapper.module.scss'

type GridWrapperProps = {
  columns: number
  items: ReactNode[]
}

export const GridWrapper = ({ columns, items }: GridWrapperProps) => {
  return (
    <div className={s.container} style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {items.map((item, index) => (
        <Fragment key={index}>{item}</Fragment>
      ))}
    </div>
  )
}
