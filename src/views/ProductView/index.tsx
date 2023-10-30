/* eslint-disable @next/next/no-img-element */

import { Product } from '@/types'
import cls from './index.module.scss'
import { ButtonAdd } from '@/shared/ui/buttons'

interface Props {
  data: Product
}

const desc =
  'Wash, nourish and restore with an everyday body wash and bathing staple.Formulated especially for the body (not just the hands), this extra silky wash glides effortlessly over the skin while nourishing and cleansing. pH balanced and loaded with beneficial plant-based Essential Oils and Extracts, including Harakeke, Ginger Root and Aloe, this everyday wash will cleanse and revive from tip to toe while uplifting with the indulgent scent of Tui & Kahili.Form the perfect trio with Washup and Sootherup Tui & Kahili for total hand & body cleansing and nourishment. 500ml, pH balanced'

export const ProductView: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data && (
        <div className={cls.product}>
          <div className={cls.product__head}>
            <div className=''>{data.scent}</div>
            <div className=''>{data.title}</div>
          </div>

          <div className={`${cls.product__main} flex`}>
            <div className={cls.product__info}>
              <div className={cls.product__infoScent}>
                <ul className='scent-list'>
                  <li className='scent-list__item'>Delicate Lily</li>
                  <li className='scent-list__item'>Wild Ginger</li>
                  <li className='scent-list__item'>Mimosa</li>
                  <li className='scent-list__item'>Sandalwood</li>
                  <li className='scent-list__item'>Ylang Ylang</li>
                </ul>
              </div>
              <div className={cls.product__infoDesc}>{desc}</div>
              <div className={cls.product__infoBottom}>
                <ul className={cls.detailsList}>
                  <li>Scent description</li>
                  <li>Ingredients</li>
                  <li>Reviews</li>
                </ul>
                <div className={cls.detailsOffer}>
                  <ButtonAdd item={data} />
                </div>
              </div>
            </div>

            <div className={cls.product__media}>
              <img className={cls.product__mediaImage} src={data.image} alt={data.title} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
