import { Product } from '@/types'
import { __API__ } from '@/shared/env'

type fetchConfigType = RequestInit | undefined

const fetchConfig: fetchConfigType = {
  next: {
    revalidate: 60,
  },
}

class ProductService {
  static async getProducts(): Promise<Product[]> {
    return (await fetch(__API__, fetchConfig)).json()
  }

  static async getProduct(id: number): Promise<Product> {
    return (await fetch(`${__API__}/${id}`, fetchConfig)).json()
  }

  static async getProductsBySearch(searchQuery: string): Promise<Product[]> {
    return (await fetch(`${__API__}?q=${searchQuery}`, fetchConfig)).json()
  }
}

export { ProductService }
