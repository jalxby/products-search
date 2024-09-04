'use client'
import { FC, ReactNode, useState } from 'react'

import StarIcon from '@/assets/svg/star-icon'
import StarOutlineIcon from '@/assets/svg/star-outline-icon'
import { clsx } from 'clsx'

import s from './grade.module.scss'

export type GradeType = 0 | 1 | 2 | 3 | 4 | 5
type GradeProps = {
  grade: GradeType
  onClick?: (grade: GradeType) => void
}
export const Grade: FC<GradeProps> = ({ grade = 0, onClick }) => {
  const [mouseOverId, setMouseOverId] = useState<number>(0)
  const realGrade = grade > 5 ? 5 : grade
  const starCount = 5
  const outlineStars = starCount - realGrade
  const stars = [
    ...Array(realGrade).fill(<StarIcon color={'var(--color-warning)'} />),
    ...Array(outlineStars).fill(<StarOutlineIcon color={'var(--color-warning)'} />),
  ]

  return (
    <div className={s.stars}>
      {stars.map((star, id) => {
        const style = clsx(id + 1 <= mouseOverId && s.overStar)
        const starClickHandle = () => {
          if (grade === 1 && mouseOverId === 1) {
            onClick && onClick(0)
          } else {
            onClick && onClick((id + 1) as GradeType)
          }
        }

        return (
          <StarItem
            className={style}
            id={id + 1}
            key={id}
            onClick={starClickHandle}
            onMouseEnter={setMouseOverId}
            onMouseLeave={setMouseOverId}
            starType={star}
          />
        )
      })}
    </div>
  )
}

type StarItemProps = {
  className?: string
  id: number
  onClick: (id: number) => void
  onMouseEnter: (id: number) => void
  onMouseLeave: (id: number) => void
  starType: ReactNode
}
export const StarItem: FC<StarItemProps> = ({
  className,
  id,
  onClick,
  onMouseEnter,
  onMouseLeave,
  starType,
}) => {
  const style = clsx(s.starItem, className)

  return (
    <div
      className={style}
      onClick={() => onClick(id)}
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={() => onMouseLeave(0)}
    >
      {starType}
    </div>
  )
}
