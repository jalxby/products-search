import { Product } from '@/app/api/products/route'
import { GridWrapper } from '@/components/grid-wrapper/GridWrapper'
import ProductCard from '@/components/product/Product'

type Props = { products: Product[] }
export const Content = ({ products }: Props) => {
  const productsToGrid = products.map(value => {
    return <ProductCard key={value.id} {...value} />
  })

  return <GridWrapper columns={4} items={productsToGrid}></GridWrapper>
}
