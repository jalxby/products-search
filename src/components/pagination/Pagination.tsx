import { FC, KeyboardEvent } from 'react'

import { clsx } from 'clsx'

import s from './pagination.module.scss'

import { usePagination } from './usePagination'

export type PaginationPropsType = {
  className?: string
  currentPage: number
  onPageChange: (page: number) => void
  pageSize: number
  siblingCount: number
  totalCount: number
}
export const Pagination: FC<PaginationPropsType> = props => {
  const { currentPage, onPageChange, pageSize, siblingCount = 1, totalCount } = props
  const DOTS = '\u2026'
  const paginationRange = usePagination({
    DOTS,
    currentPage,
    pageSize,
    siblingCount,
    totalCount,
  })

  const lastPage = paginationRange[paginationRange.length - 1]
  const disabledLeft = currentPage === 1
  const disableRight = currentPage === lastPage

  const leftTabIndex = disabledLeft ? -1 : 0
  const rightTabIndex = disableRight ? -1 : 0

  const cNames = {
    container: clsx(s.container),
    dots: clsx(s.page, s.dots),
    leftArrow: clsx(s.page, disabledLeft && s.disabled),
    page: clsx(s.page),
    pages: clsx(s.pages),
    rightArrow: clsx(s.page, disableRight && s.disabled),
    rowsPerPage: clsx(s.rowsPerPage),
    select: clsx(s.select),
  }

  if (currentPage === 0 || paginationRange.length < 1) {
    return null
  }

  const onNext = () => {
    !disableRight && onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    !disabledLeft && onPageChange(currentPage - 1)
  }
  const onKeyDownSpaceLeft = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Space') {
      onPrevious()
    }
  }
  const onKeyDownSpaceRight = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Space') {
      onNext()
    }
  }
  const pages = paginationRange.map((pageNumber, index) => {
    const activePage = clsx(s.page, currentPage === pageNumber && s.active)
    const setActivePage = () => {
      onPageChange(+pageNumber)
    }
    const onKeyDownSpace = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.code === 'Space') {
        onPageChange(+pageNumber)
      }
    }

    return pageNumber === DOTS ? (
      <div className={cNames.dots} key={index}>
        {DOTS}
      </div>
    ) : (
      <div
        className={activePage}
        key={index}
        onClick={setActivePage}
        onKeyDown={onKeyDownSpace}
        tabIndex={0}
      >
        {pageNumber}
      </div>
    )
  })

  return (
    <div className={cNames.container}>
      <div className={cNames.pages}>
        <div
          className={cNames.leftArrow}
          onClick={onPrevious}
          onKeyDown={onKeyDownSpaceLeft}
          tabIndex={leftTabIndex}
        >
          {'Previous'}
        </div>
        {pages}
        <div
          className={cNames.rightArrow}
          onClick={onNext}
          onKeyDown={onKeyDownSpaceRight}
          tabIndex={rightTabIndex}
        >
          {'Next'}
        </div>
      </div>
    </div>
  )
}
