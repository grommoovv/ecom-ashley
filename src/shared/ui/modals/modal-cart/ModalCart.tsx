'use client'

import { useRouter } from 'next/navigation'

import { useCart } from '@/store'
import classes from './ModalCart.module.scss'
import CartCard from '@/views/CartView/CartCard/CartCard'
import { ButtonX } from '../../buttons'

const ModalCart = () => {
  const [cart] = useCart((state) => [state.cart])
  const router = useRouter()
  return (
    <>
      <div className={classes.cart}>
        <div className={classes.cart__top}>
          <div className={classes.cart__title}>Your Cart</div>
          <div className={classes.cart__buttonX}>
            <ButtonX />
          </div>
        </div>

        {cart.length ? (
          <>
            <ul className={classes.cart__list}>
              {cart.map((c) => (
                <li className={classes.cart__listItem} key={c.id}>
                  <CartCard data={c} />
                </li>
              ))}
            </ul>
            <button
              className={classes.cart__buttonV}
              onClick={() => router.push('/cart')}
            >
              View Cart
            </button>
          </>
        ) : (
          <p className='text-sm mt-2'>Your cart is currently empty.</p>
        )}
      </div>
    </>
  )
}

export default ModalCart
