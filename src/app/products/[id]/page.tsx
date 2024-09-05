import { fetchProducts } from '@/utils/getProducts'

export const generateStaticParams = async () => {
  const data = await fetchProducts({})

  return data.products.map(({ id }) => ({ id }))
}

export const revalidate = 10

const ProductDetailPage = async ({ params }: { params: { id: string } }) => {
  console.log('params', params)

  return (
    <div>
      <h1>{params.id}</h1>
      <h1>{'params.productId'}</h1>
    </div>
  )
}

export default ProductDetailPage
