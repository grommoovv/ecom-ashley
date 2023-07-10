'use client'

import { useModal } from '@/store'
import classes from './ModalRoot.module.scss'
import ModalCart from '../modal-cart/ModalCart'
import ModalMenu from '../modal-menu/ModalMenu'
import ModalSearch from '../modal-search/ModalSearch'

const ModalRoot = () => {
  const [isCart, isMenu, isSearch, toggleCart, toggleMenu, toggleSearch] =
    useModal((state) => [
      state.isCart,
      state.isMenu,
      state.isSearch,
      state.toggleCart,
      state.toggleMenu,
      state.toggleSearch,
    ])

  const handleClose = (e: any) => {
    e.stopPropagation()
    if (isCart) toggleCart()
    if (isMenu) toggleMenu()
    if (isSearch) toggleSearch()
  }

  const rootClasses = [classes.modal]

  if (isCart || isMenu) {
    rootClasses.push(classes._asiding)
  } else if (isSearch) {
    rootClasses.push(classes._searching)
  }

  return (
    <>
      <div className={rootClasses.join(' ')} onClick={handleClose}>
        <div
          className={classes.moda__wrap}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={classes.modal__dropdown}>
            {isSearch && <ModalSearch />}
          </div>

          <div className={classes.modal__aside}>
            {isMenu && <ModalMenu />}
            {isCart && <ModalCart />}
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalRoot
