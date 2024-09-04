import { clsx } from 'clsx'

import s from './badge.module.scss'

export const Badge = ({ className, title }: { className?: string; title: string }) => {
  return <div className={clsx(s.badge, className)}>{title}</div>
}
