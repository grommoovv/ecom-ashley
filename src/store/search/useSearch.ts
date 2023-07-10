import { IProduct } from '@/entities/product'
import { create } from 'zustand'

interface IUseSearch {
  searchQuery: string
  setSearchQuery: (value: string) => void
  searchProducts: (array: IProduct[], searchQuery: string) => IProduct[]
}

export const useSearch = create<IUseSearch>()((set) => ({
  searchQuery: '',
  setSearchQuery: (value) => {
    set((state) => ({ searchQuery: (state.searchQuery = value) }))
  },
  searchProducts: (products, searchQuery) => {
    const searchedProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(searchQuery.toLowerCase())
    })
    return searchedProducts
  },
}))
