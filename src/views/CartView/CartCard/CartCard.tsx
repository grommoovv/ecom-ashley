'use client'
/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import { useCart } from '@/store'
import { Cart } from '@/types'
import cls from './CartCard.module.scss'
import { formatToUSD } from '@/shared/libs'

interface Props {
  data: Cart
}

const CartCard: FC<Props> = ({ data }) => {
  const [toggleItem] = useCart((state) => [state.toggleItem])

  const formattedPrice = formatToUSD.format(data.price)

  return (
    <>
      <div className={cls.card}>
        <div className={cls.card__wrap}>
          <div className={cls.card__media}>
            <img className={cls.card__mediaImage} src={data.image} alt={data.title} />
          </div>
          <div className={cls.card__info}>
            <div className={cls.card__infoTitle}>{data.title}</div>
            <div className={cls.card__infoScent}>{data.scent}</div>
            <button onClick={() => toggleItem(data)}>remove</button>
          </div>
          <div className={cls.card__infoQuantity}>{data.qty}</div>
          <div className={cls.card__infoPrice}>{formattedPrice}</div>
        </div>
      </div>
    </>
  )
}
export default CartCard
