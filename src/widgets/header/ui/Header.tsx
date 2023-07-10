import Link from 'next/link'

import classes from './Header.module.scss'
import { ButtonCart, ButtonMenu, ButtonSearch } from '@/shared/ui/buttons'

export const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <div className='header__container mx-[2vw]'>
          <div className={classes.header__wrap}>
            <Link href={'/'}>
              <svg width='100' height='41' viewBox='0 0 100 41'>
                <use xlinkHref='/svgs/sprites.svg#logotype'></use>
              </svg>
            </Link>
            <nav className={classes.header__nav}>
              <ButtonCart />
              <ButtonSearch />
              <ButtonMenu />
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
