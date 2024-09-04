import { FetchProductsParams } from '@/app/api/products/route'
import { Content } from '@/components/content/Content'
import { PaginationClientWrapper } from '@/components/pagination/PaginationClientWrapper'
import { fetchProducts } from '@/utils/getProducts'

import s from './page.module.scss'

export const dynamic = 'force-dynamic'
const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Record<keyof FetchProductsParams, string>
}) => {
  const { active, page, promo, search } = searchParams
  const limit = 8
  const params: FetchProductsParams = {
    active: active === 'true',
    limit: limit,
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
        currentPage={+page}
        pageSize={limit}
        totalCount={total}
      />
    </div>
  )
}

export default ProductsPage
