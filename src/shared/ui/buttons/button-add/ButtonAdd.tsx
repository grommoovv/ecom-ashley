'use client'

import { FC } from 'react'
import { useCart, useModal } from '@/store'
import classes from './ButtonAdd.module.scss'
import { IProduct } from '@/entities/product'

interface Props {
  item: IProduct
}

export const ButtonAdd: FC<Props> = ({ item }) => {
  const [toggleCart] = useModal((state) => [state.toggleCart])
  const [toggleItemToCart, cart] = useCart((state) => [
    state.toggleItemToCart,
    state.cart,
  ])

  console.log(cart)

  const addToCart = () => {
    toggleItemToCart(item)
    toggleCart()
  }

  return (
    <>
      <button className={classes.button} onClick={addToCart}>
        Add To Cart
      </button>
    </>
  )
}
