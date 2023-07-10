'use client'

import { useCart } from '@/store'
import CartCard from './CartCard/CartCard'
import classes from './index.module.scss'

export const CartView = () => {
  const [cart] = useCart((state) => [state.cart])

  return (
    <>
      <div className={classes.cart}>
        <div className={classes.cart__wrap}>
          <h1 className={classes.cart__title}>Your Cart</h1>
          <ul className={classes.cart__list}>
            {cart.length ? (
              cart.map((c) => (
                <li className={classes.cart__listItem} key={c.id}>
                  <CartCard data={c} />
                </li>
              ))
            ) : (
              <div className=''>Your Cart is Empty</div>
            )}
          </ul>
        </div>
      </div>
    </>
  )
}
// export default CartView
