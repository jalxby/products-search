import { Button } from '@/components/button/Button'
import { Checkbox } from '@/components/checkbox/checkbox'
import { TextField } from '@/components/text-field/TextField'

import s from './header.module.scss'

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div>Logo</div>
        <div className={s.filters}>
          <Checkbox labelTitle={'Active'} />
          <Checkbox labelTitle={'Promo'} />
          <TextField inputType={'search'} placeholder={'Search'} />
        </div>
        <div>
          <Button type={'button'} variant={'outlined'}>
            Log in
          </Button>
        </div>
      </div>
    </div>
  )
}
