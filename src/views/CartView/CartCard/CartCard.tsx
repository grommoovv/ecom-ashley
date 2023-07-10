'use client'
/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import { ICart, useCart } from '@/store'
import classes from './CartCard.module.scss'

interface Props {
  data: ICart
}

const CartCard: FC<Props> = ({ data }) => {
  const [toggleItemToCart] = useCart((state) => [state.toggleItemToCart])

  return (
    <>
      <div className={classes.card}>
        <div className={classes.card__wrap}>
          <div className={classes.card__media}>
            <img
              className={classes.card__mediaImage}
              src={data.image}
              alt={data.title}
            />
          </div>
          <div className={classes.card__info}>
            <div className={classes.card__infoTitle}>{data.title}</div>
            <div className={classes.card__infoScent}>{data.scent}</div>
            <button onClick={() => toggleItemToCart(data)}>remove</button>
          </div>
          <div className={classes.card__infoQuantity}>{data.qty}</div>
          <div className={classes.card__infoPrice}>
            {new Intl.NumberFormat('en-En', {
              style: 'currency',
              currency: 'USD',
            }).format(data.price)}
          </div>
        </div>
      </div>
    </>
  )
}
export default CartCard
