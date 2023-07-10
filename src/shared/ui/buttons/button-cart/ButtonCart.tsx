'use client'

import { useCart, useModal } from '@/store'

export const ButtonCart = () => {
  const [toggleCart] = useModal((state) => [state.toggleCart])
  const [length] = useCart((state) => [state.cart.length])

  return (
    <>
      <button onClick={toggleCart}>CART ({length})</button>
    </>
  )
}
