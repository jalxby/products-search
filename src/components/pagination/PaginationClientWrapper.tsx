'use client'

import { Pagination } from '@/components/pagination/Pagination'
import { useRouter, useSearchParams } from 'next/navigation'

interface PaginationClientWrapperProps {
  currentPage: number
  pageSize: number
  totalCount: number
}

export const PaginationClientWrapper = ({
  currentPage,
  pageSize,
  totalCount,
}: PaginationClientWrapperProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const onPageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString())

    params.set('page', newPage.toString())
    router.push(`?${params.toString()}`)
  }

  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={onPageChange}
      pageSize={pageSize}
      siblingCount={3}
      totalCount={totalCount}
    />
  )
}
