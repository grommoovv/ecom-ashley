/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { categories } from './Categories.data'
import classes from './Categories.module.scss'

export const Categories = () => {
  return (
    <>
      <section className={classes.categories}>
        {categories.map((c) => (
          <div className={classes.categories__item} key={c.linkText}>
            <div className={classes.categories__media}>
              <img
                className={classes.categories__mediaImage}
                src={c.imageURL}
                alt=''
              />
            </div>
            <div className={classes.categories__text}>
              <Link href={'/shop'}>{c.linkText}</Link>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
