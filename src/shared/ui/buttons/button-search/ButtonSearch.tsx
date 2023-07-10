'use client'

import { useModal } from '@/store'
import classes from './ButtonSearch.module.scss'

export const ButtonSearch = () => {
  const [toggleSearch] = useModal((state) => [state.toggleSearch])

  return (
    <>
      <button className={classes.button} onClick={toggleSearch}>
        <svg width='15' height='14' viewBox='0 0 15 14'>
          <use xlinkHref='/svgs/sprites.svg#search'></use>
        </svg>
      </button>
    </>
  )
}
