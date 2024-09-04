import { FetchProductsParams } from '@/app/api/products/route'
import { Content } from '@/components/content/Content'
import { PaginationClientWrapper } from '@/components/pagination/PaginationClientWrapper'
import { fetchProducts } from '@/utils/getProducts'

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
    <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', rowGap: '26px' }}>
      <Content products={products} />
      <PaginationClientWrapper currentPage={+page} pageSize={limit} totalCount={total} />
    </div>
  )
}

export default ProductsPage
