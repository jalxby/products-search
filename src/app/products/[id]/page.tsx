import { Product } from '@/app/api/products/route'
import ProductCard from '@/components/product/Product'
import Link from 'next/link'

import s from './page.module.scss'

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL

type Params = { params: { id: string } }
export const generateMetadata = async ({ params }: Params) => {
  const response = await fetch(`${BASE_URL}${params.id}`)
  const product: Product = await response.json()

  if (!product) {
    return {
      description: 'The requested product does not exist',
      title: 'Product not found',
    }
  }

  return {
    description: product.description,
    title: `${product.name} - Product Detail`,
  }
}
export const generateStaticParams = async () => {
  const response = await fetch(`${BASE_URL}`)
  const products: Product[] = await response.json()

  if (!products) {
    return []
  }

  return products.map(({ id }) => ({ id }))
}

export const revalidate = 10

const ProductDetailPage = async ({ params }: Params) => {
  const response = await fetch(`${BASE_URL}${params.id}`)
  const product: Product = await response.json()

  if (!product) {
    return <div>Product not found</div>
  }
  const { active, description, id, image, name, promotion, rating } = product

  return (
    <div className={s.page}>
      <div className={s.backButton}>
        <Link href={'/products'}>{'<--Back to products'}</Link>
      </div>
      <ProductCard
        active={active}
        description={description}
        hideButton
        id={id}
        image={image}
        name={name}
        promotion={promotion}
        rating={rating}
      />
    </div>
  )
}

export default ProductDetailPage
