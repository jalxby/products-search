import s from './description.module.scss'

export const Description = ({ description, title }: { description: string; title: string }) => {
  return (
    <div className={s.description}>
      <div className={s.title}>{title}</div>
      <div className={s.text}>{description}</div>
    </div>
  )
}
