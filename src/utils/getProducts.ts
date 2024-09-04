import { FetchProductsParams, FetchProductsResponse } from '@/app/api/products/route'

export async function fetchProducts(params: FetchProductsParams): Promise<FetchProductsResponse> {
  const response = await fetch('http://localhost:3000/api/products', {
    headers: {
      'Content-Type': 'application/json',
      'X-Request-Params': JSON.stringify(params),
    },
    method: 'GET',
  })

  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }
  const data = await response.json()

  return { products: data?.products, total: data?.total }
}
