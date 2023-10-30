import { create } from 'zustand'

interface Modal {
  isMenu: boolean
  isCart: boolean
  isSearch: boolean
  toggleMenu: () => void
  toggleCart: () => void
  toggleSearch: () => void
}

export const useModal = create<Modal>()((set, get) => ({
  isMenu: false,
  isCart: false,
  isSearch: false,

  toggleMenu: () => {
    set((state) => ({
      isMenu: state.isMenu === !state,
      isCart: false,
      isSearch: false,
    }))
  },
  toggleCart: () => {
    set((state) => ({
      isCart: state.isCart === !state,
      isMenu: false,
      isSearch: false,
    }))
  },
  toggleSearch: () => {
    set((state) => ({
      isSearch: state.isSearch === !state,
      isMenu: false,
      isCart: false,
    }))
  },
}))
