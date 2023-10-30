import { Cart, Product } from '@/types'
import { create } from 'zustand'

interface CartState {
  cart: Cart[] | []
  toggleItem: (item: Product) => void
  inc: (qtyToInc: Cart) => void
  dec: (qtyToDec: Cart) => void
}

export const useCart = create<CartState>()((set, get) => ({
  cart: [],

  toggleItem: (item: Product) => {
    set((state) => {
      const newItem = {
        ...item,
        qty: 1,
      }

      if (state.cart.some((i) => i.id === newItem.id)) {
        const newCart = state.cart.filter((i) => i.id !== newItem.id)
        return { cart: newCart }
      } else {
        const newCart = [...state.cart, newItem]
        return { cart: newCart }
      }
    })
  },

  inc: (item: Cart) => {
    set((state) => {
      const itemIdx = state.cart.findIndex((item) => item.id === item.id)
      if (itemIdx !== -1) {
        const newCart = [...state.cart]
        const newItem: Cart = {
          ...newCart[itemIdx],
          qty: newCart[itemIdx].qty + 1,
        }
        newCart.splice(itemIdx, 1, newItem)
        return { cart: newCart }
      }
      return state
    })
  },

  dec: (item: Cart) => {
    set((state) => {
      const itemIdx = state.cart.findIndex((item) => item.id === item.id)
      if (itemIdx !== -1) {
        const newCart = [...state.cart]
        const newItem: Cart = {
          ...newCart[itemIdx],
          qty: newCart[itemIdx].qty - 1,
        }
        newCart.splice(itemIdx, 1, newItem)
        return { cart: newCart }
      }
      return state
    })
  },
}))
