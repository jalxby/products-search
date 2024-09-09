import type { Metadata } from 'next'

import { FetchProductsParams } from '@/app/api/products/route'
import { Content } from '@/components/content/Content'
import { PaginationClientWrapper } from '@/components/pagination/PaginationClientWrapper'
import { fetchProducts } from '@/utils/getProducts'

import s from './page.module.scss'

export const metadata: Metadata = {
  description:
    'Browse a wide selection of products on Royal Gambit Search. Find what you need with ease.',
  openGraph: {
    description:
      'Browse a wide selection of products on Royal Gambit Search. Find what you need with ease.',
    images: [
      {
        alt: 'Product listing on Royal Gambit Search',
        height: 630,
        url: '/path-to-image.jpg',
        width: 1200,
      },
    ],
    title: 'Products - Royal Gambit Search',
    url: `${process.env.NEXT_PUBLIC_API_URL}/products`,
  },
  title: 'Products - Royal Gambit Search',
}
export const dynamic = 'force-dynamic'
const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Record<keyof FetchProductsParams, string>
}) => {
  const { active, limit, page, promo, search } = searchParams

  const params: FetchProductsParams = {
    active: active === 'true',
    limit: +limit,
    page: +page || 1,
    promo: promo === 'true',
    search,
  }

  const { products, total } = await fetchProducts(params)

  return (
    <div className={s.page}>
      <Content products={products} />
      <PaginationClientWrapper
        className={s.pagination}
        currentPage={+page || 1}
        pageSize={+limit}
        totalCount={total}
      />
    </div>
  )
}

export default ProductsPage
