import Link from 'next/link'
import classes from './Footer.module.scss'
import { navItems } from '../data/Footer.data'

export const Footer = () => {
  return (
    <>
      <footer className={classes.footer}>
        <div className='footer__container mx-[2vw]'>
          <div className={classes.footer__wrap}>
            <Link href={'/'}>
              <svg width='100' height='41' viewBox='0 0 100 41'>
                <use xlinkHref='/svgs/sprites.svg#logotype'></use>
              </svg>
            </Link>
            <nav className={classes.footer__nav}>
              {navItems.map((item, idx) => (
                <div className='' key={idx}>
                  <div className={classes.footer__navTitle}>{item.title}</div>
                  <ul className={`footer__nav-list`}>
                    {item.list.map((l, idx) => (
                      <Link
                        className={classes.footer__navLink}
                        href={l.linkURL}
                        key={idx}
                      >
                        <li className={classes.footer__navItem}>
                          {l.linkText}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </>
  )
}
