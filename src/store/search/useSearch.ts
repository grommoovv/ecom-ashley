import { Product } from '@/types'
import { create } from 'zustand'

interface Search {
  q: string
  setSearchQuery: (value: string) => void
}

const useSearch = create<Search>()((set) => ({
  q: '',
  setSearchQuery: (query) => {
    set((s) => ({ q: (s.q = query) }))
  },
}))

export { useSearch }
