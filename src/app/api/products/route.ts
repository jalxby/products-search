import { NextResponse } from 'next/server'

export type Product = {
  active: boolean
  description: string
  id: string
  image: string
  name: string
  promotion: boolean
  rating: string
}
export type FetchProductsResponse = {
  products: Product[]
  total: number
}

export type FetchProductsParams = {
  active?: boolean
  limit?: number
  page?: number
  promo?: boolean
  search?: string
}
type Data = Product[]

export async function GET(request: Request) {
  try {
    const paramsHeader = request.headers.get('X-Request-Params')
    const params = paramsHeader ? JSON.parse(paramsHeader) : {}

    const { active, limit, page, promo, search = '' } = params
    const response = await fetch('https://642ec14a8ca0fe3352d7fe14.mockapi.io/api/v1/products', {
      cache: 'no-store',
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data: Data = await response.json()
    const filtered = data
      .filter(item => {
        return active ? !item.active : item
      })
      .filter(item => {
        return promo ? item.promotion : item
      })
      .filter(item => {
        return item.name.toLowerCase().includes(search.toLowerCase().trim())
      })
    const paginated = filtered.slice((page - 1) * limit, (page - 1) * limit + limit)

    return NextResponse.json<FetchProductsResponse>({
      products: params ? paginated : data,
      total: params ? filtered.length : data.length,
    })
  } catch (error) {
    console.error('Error fetching products:', error)

    return NextResponse.error()
  }
}

export const dynamic = 'force-dynamic'
