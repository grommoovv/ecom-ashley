import { create } from 'zustand'
import { IProduct } from '@/entities/product'
import ProductService from '../service/ProductService'

interface IProductState {
  products: IProduct[] | null
  product: IProduct | null
  loading: boolean
  getAllProducts: () => Promise<void>
  getOneProduct: (id: number) => Promise<void>
  getProductsBySearch: (search: string) => Promise<void>
}

export const ProductState = create<IProductState>()((set) => ({
  products: [],
  product: null,
  loading: false,
  getAllProducts: async () => {
    set({ loading: true })
    const data = await ProductService.getAllProducts()
    set({ products: data, loading: false })
  },
  getOneProduct: async (id) => {
    set({ loading: true })
    const data = await ProductService.getOneProduct(id)
    set({ product: data, loading: false })
  },
  getProductsBySearch: async (search) => {
    set({ loading: true })
    const data = await ProductService.getProductsBySearch(search)
    set({ products: data, loading: false })
  },
}))
