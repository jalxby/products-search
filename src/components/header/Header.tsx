'use client'
import { useState } from 'react'

import { Button } from '@/components/button/Button'
import { Checkbox } from '@/components/checkbox/checkbox'
import { TextField } from '@/components/text-field/TextField'
import { useDebounce } from '@/hooks/useDebounce'
import { useRouter, useSearchParams } from 'next/navigation'

import s from './header.module.scss'

export const Header = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [search, setSearch] = useState('')
  const onPromoChange = (isPromoted: boolean) => {
    const params = new URLSearchParams(searchParams.toString())

    isPromoted ? params.set('promo', isPromoted.toString()) : params.delete('promo')
    router.push(`?${params.toString()}`)
  }
  const onActiveChange = (isActive: boolean) => {
    const params = new URLSearchParams(searchParams.toString())

    isActive ? params.set('active', isActive.toString()) : params.delete('active')
    router.push(`?${params.toString()}`)
  }
  const onSearchChange = () => {
    const params = new URLSearchParams(searchParams.toString())

    search ? params.set('search', search) : params.delete('search')
    router.push(`?${params.toString()}`)
  }

  useDebounce(onSearchChange, [search], 1000)

  return (
    <div className={s.header}>
      <div className={s.container}>
        <div>Logo</div>
        <div className={s.filters}>
          <Checkbox labelTitle={'Active'} onChange={onActiveChange} />
          <Checkbox labelTitle={'Promo'} onChange={onPromoChange} />
          <TextField
            inputType={'search'}
            onChange={event => setSearch(event.currentTarget.value)}
            placeholder={'Search'}
          />
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
