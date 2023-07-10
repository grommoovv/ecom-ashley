import { IProduct } from '@/entities/product'
import { create } from 'zustand'

export interface ICart extends IProduct {
  qty: number
}

interface IUseCart {
  cart: ICart[] | []
  toggleItemToCart: (item: IProduct) => void
  increment: (qtyToInc: ICart) => void
  decrement: (qtyToDec: ICart) => void
}

export const useCart = create<IUseCart>()((set, get) => ({
  cart: [],

  // Add / Delete item from cart Logic
  toggleItemToCart: (item: IProduct) => {
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

  // Increment
  increment: (qtyToInc: ICart) => {
    set((state) => {
      const itemIdx = state.cart.findIndex((item) => item.id === qtyToInc.id)
      if (itemIdx !== -1) {
        const newCart = [...state.cart]
        const newItem: ICart = {
          ...newCart[itemIdx],
          qty: newCart[itemIdx].qty + 1,
        }
        newCart.splice(itemIdx, 1, newItem)
        return { cart: newCart }
      }
      return state
    })
  },

  // Decrement
  decrement: (qtyToDec: ICart) => {
    set((state) => {
      const itemIdx = state.cart.findIndex((item) => item.id === qtyToDec.id)
      if (itemIdx !== -1) {
        const newCart = [...state.cart]
        const newItem: ICart = {
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
