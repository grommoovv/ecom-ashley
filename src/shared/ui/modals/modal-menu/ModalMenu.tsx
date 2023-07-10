import { ModalMenuItem } from './ModalMenuItem'

import classes from './ModalMenu.module.scss'
import { ButtonX } from '../../buttons'

export interface IMenu {
  label: string
  url: string
}

const menu: IMenu[] = [
  { label: 'Home', url: '/' },
  { label: 'Shop', url: '/shop' },
]

const ModalMenu = () => {
  return (
    <>
      <div className={classes.menu}>
        <div className={classes.menu__top}>
          <h3 className={classes.menu__title}>Menu</h3>
          <div className={classes.menu__button}>
            <ButtonX />
          </div>
        </div>

        <ul className={classes.menu__list}>
          {menu.map((m, idx) => (
            <ModalMenuItem data={m} key={idx} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default ModalMenu
