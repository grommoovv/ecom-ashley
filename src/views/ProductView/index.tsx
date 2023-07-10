/* eslint-disable @next/next/no-img-element */

import { IProduct } from '@/entities/product'
import classes from './index.module.scss'
import { ButtonAdd } from '@/shared/ui/buttons'

interface Props {
  data: IProduct
}

const desc =
  'Wash, nourish and restore with an everyday body wash and bathing staple.Formulated especially for the body (not just the hands), this extra silky wash glides effortlessly over the skin while nourishing and cleansing. pH balanced and loaded with beneficial plant-based Essential Oils and Extracts, including Harakeke, Ginger Root and Aloe, this everyday wash will cleanse and revive from tip to toe while uplifting with the indulgent scent of Tui & Kahili.Form the perfect trio with Washup and Sootherup Tui & Kahili for total hand & body cleansing and nourishment. 500ml, pH balanced'

export const ProductView: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data && (
        <div className={classes.product}>
          <div className={classes.product__head}>
            <div className=''>{data.scent}</div>
            <div className=''>{data.title}</div>
          </div>

          <div className={`${classes.product__main} flex`}>
            {/*  */}
            <div className={classes.product__info}>
              <div className={classes.product__infoScent}>
                <ul className='scent-list'>
                  <li className='scent-list__item'>Delicate Lily</li>
                  <li className='scent-list__item'>Wild Ginger</li>
                  <li className='scent-list__item'>Mimosa</li>
                  <li className='scent-list__item'>Sandalwood</li>
                  <li className='scent-list__item'>Ylang Ylang</li>
                </ul>
              </div>
              <div className={classes.product__infoDesc}>{desc}</div>
              <div className={classes.product__infoBottom}>
                <ul className={classes.detailsList}>
                  <li>Scent description</li>
                  <li>Ingredients</li>
                  <li>Reviews</li>
                </ul>
                <div className={classes.detailsOffer}>
                  <ButtonAdd item={data} />
                </div>
              </div>
            </div>
            {/*  */}
            <div className={classes.product__media}>
              <img
                className={classes.product__mediaImage}
                src={data.image}
                alt={data.title}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
