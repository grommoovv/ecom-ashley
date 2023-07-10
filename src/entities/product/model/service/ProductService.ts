import { IProduct } from '@/entities/product'

const BASE_URL = `http://localhost:8080/api/v1/products/ashley`

export default class ProductService {
  // Get All Products
  static async getAllProducts(): Promise<IProduct[]> {
    const res = await fetch(BASE_URL, {
      next: {
        revalidate: 60,
      },
    })
    if (!res.ok) {
      throw new Error('Failed to load products. Try again...')
    }
    return await res.json()
  }

  // Get One Product
  static async getOneProduct(id: number): Promise<IProduct> {
    const res = await fetch(
      `http://localhost:8080/api/v1/products/ashley/${id}`,
      {
        next: {
          revalidate: 60,
        },
      }
    )
    if (!res.ok) {
      throw new Error('Failed to load product. Try again...')
    }
    return await res.json()
  }

  // Get Products by Search
  static async getProductsBySearch(searchQuery: string): Promise<IProduct[]> {
    const res = await fetch(
      `http://localhost:8080/api/v1/products/ashley?q=${searchQuery}`,
      {
        next: { revalidate: 60 },
      }
    )

    if (!res.ok) {
      throw new Error('Failed to Load Products')
    }

    return await res.json()
  }
}
