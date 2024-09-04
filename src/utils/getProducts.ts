import { FetchProductsParams, FetchProductsResponse } from '@/app/api/products/route'

export async function fetchProducts(params: FetchProductsParams): Promise<FetchProductsResponse> {
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  const response = await fetch(`${API_URL}/api/products`, {
    cache: 'no-store',
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
