import { Product } from '@/app/api/products/route'
import { Button } from '@/components/button/Button'
import { Card } from '@/components/card/Card'
import { Description } from '@/components/description/Description'
import { Grade, GradeType } from '@/components/grade/Grade'
import { clsx } from 'clsx'
import Image from 'next/image'

import s from './product.module.scss'

export const ProductCard = ({
  active,
  description,
  id,
  image,
  name,
  promotion,
  rating,
}: Product) => {
  return (
    <Card className={s.card}>
      <Image
        alt={name + '_image'}
        className={clsx(s.image, active && s.active)}
        height={170}
        priority
        src={image + `?id=${id}`}
        width={288}
      />
      <div className={s.content}>
        {promotion && <h6>{'promotion'}</h6>}
        <Description description={description} title={name} />
        <Grade grade={+rating as GradeType} />
        <Button disabled={active} fullWidth>
          {'Show details'}
        </Button>
      </div>
    </Card>
  )
}
