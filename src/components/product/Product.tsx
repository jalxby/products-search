import { Product } from '@/app/api/products/route'
import { Badge } from '@/components/badge/Badge'
import { Button } from '@/components/button/Button'
import { Card } from '@/components/card/Card'
import { Description } from '@/components/description/Description'
import { Grade, GradeType } from '@/components/grade/Grade'
import { clsx } from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import s from './product.module.scss'

const ProductCard = ({
  active,
  description,
  hideButton,
  id,
  image,
  name,
  promotion,
  rating,
}: { hideButton?: boolean } & Product) => {
  return (
    <Card className={s.card}>
      {promotion && <Badge className={s.badge} title={'Promo'} />}
      <Image
        alt={name + '_image'}
        className={clsx(s.image, active && s.active)}
        height={170}
        loading={'lazy'}
        src={image + `?id=${id}`}
        width={288}
      />
      <div className={s.content}>
        <Description description={description} title={name} />
        <div className={s.buttonGroup}>
          <Grade grade={+rating as GradeType} />
          {!hideButton && (
            <Link href={`/products/${id}`} style={{ pointerEvents: `${active ? 'none' : 'auto'}` }}>
              <Button disabled={active} fullWidth>
                {'Show details'}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </Card>
  )
}

export default ProductCard
