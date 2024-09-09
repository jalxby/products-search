'use client'
import { useEffect, useState } from 'react'

import { Button } from '@/components/button/Button'
import { Checkbox } from '@/components/checkbox/checkbox'
import { TextField } from '@/components/text-field/TextField'
import { useDebounce } from '@/hooks/useDebounce'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useMediaQuery } from 'usehooks-ts'

import s from './header.module.scss'

export const Header = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const isProductPage = /^\/products\/\w+$/i.test(pathname)
  const initialSearch = searchParams.get('search') || ''
  const initialPromo = searchParams.get('promo') === 'true'
  const initialActive = searchParams.get('active') === 'true'
  const isMobile = useMediaQuery('(max-width: 620px)')

  const [search, setSearch] = useState(initialSearch)
  const [isPromo, setIsPromo] = useState(initialPromo)
  const [isActive, setIsActive] = useState(initialActive)

  useEffect(() => {
    setSearch(initialSearch)
    setIsPromo(initialPromo)
    setIsActive(initialActive)
  }, [searchParams])

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())
    const limit = isMobile ? 3 : 8

    params.set('limit', limit.toString())
    router.push(`?${params.toString()}`)
  }, [isMobile, router, searchParams])

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
        <div className={s.logo}>Logo</div>
        {!isProductPage && (
          <div className={s.filters}>
            <div className={s.checkBoxGroup}>
              <Checkbox
                checked={isActive}
                labelTitle={'Active'}
                onChange={checked => {
                  setIsActive(checked)
                  onActiveChange(checked)
                }}
              />
              <Checkbox
                checked={isPromo}
                labelTitle={'Promo'}
                onChange={checked => {
                  setIsPromo(checked)
                  onPromoChange(checked)
                }}
              />
            </div>
            <TextField
              inputType={'search'}
              onChange={event => setSearch(event.currentTarget.value)}
              placeholder={'Search'}
              value={search}
            />
          </div>
        )}
        <div className={s.button}>
          <Button type={'button'} variant={'outlined'}>
            Log in
          </Button>
        </div>
      </div>
    </div>
  )
}
