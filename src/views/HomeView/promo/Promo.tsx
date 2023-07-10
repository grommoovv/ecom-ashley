/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import classes from './Promo.module.scss'

const imageULR = '/images/homes/join-moment.avif'

export const Promo = () => {
  return (
    <>
      <section className={classes.promo}>
        <div className={classes.promo__wrap}>
          <div className={classes.promo__media}>
            <img
              className={classes.promo__mediaImage}
              src={imageULR}
              alt='join-moment'
            />
          </div>
          <div className={classes.promo__article}>
            <div className={classes.promo__articleWrap}>
              <h3>Join the Movement</h3>
              <h2>Sign-up for our Subscription Service</h2>
              <p>
                Economical, reliable and flexible, this service delivers! And
                each delivery comes at a 10% discount!
              </p>
              <Link className={classes.promo__articleLink} href={'/shop'}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
