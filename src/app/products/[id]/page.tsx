import { Product } from '@/app/api/products/route'

export const generateStaticParams = async () => {
  const response = await fetch('https://642ec14a8ca0fe3352d7fe14.mockapi.io/api/v1/products')
  const products: Product[] = await response.json()

  if (!products) {
    return []
  }

  return products.map(({ id }) => ({ id }))
}

export const revalidate = 10

const ProductDetailPage = async ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  )
}

export default ProductDetailPage
