'use client'

import { useModal } from '@/store'
import classes from './ButtonMenu.module.scss'

export const ButtonMenu = () => {
  const [toggleMenu] = useModal((state) => [state.toggleMenu])

  return (
    <>
      <button className={classes.button} onClick={toggleMenu}>
        <svg width='20' height='10' viewBox='0 0 20 10'>
          <use xlinkHref='/svgs/sprites.svg#burger'></use>
        </svg>
      </button>
    </>
  )
}
