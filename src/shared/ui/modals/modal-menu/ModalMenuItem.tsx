'use client'

import Link from 'next/link'
import { useModal } from '@/store'
import { IMenu } from './ModalMenu'

import classes from './ModalMenu.module.scss'

interface Props {
  data: IMenu
}

export const ModalMenuItem: React.FC<Props> = ({ data }) => {
  const [toggleMenu] = useModal((state) => [state.toggleMenu])

  return (
    <li className={classes.menu__listItem} onClick={toggleMenu}>
      <Link className={classes.menu__listLink} href={data.url}>
        {data.label}
      </Link>
    </li>
  )
}
