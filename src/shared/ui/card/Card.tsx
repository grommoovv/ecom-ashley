/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import cn from './Card.module.scss'
import { formatToUSD } from '@/shared/libs'
import { IProduct } from '@/entities/product'
import { ButtonAdd } from '../buttons'

interface CardProps {
  data: IProduct
}

export const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <>
      <div className={cn.card}>
        <div className={cn.card__media}>
          <div className={cn.card__overlay}>
            <Link className={``} href={`/shop/${data.id}`}>
              View Product
            </Link>
            <ButtonAdd item={data} />
          </div>
          <img
            className={cn.card__mediaImage}
            src={data.image}
            alt={data.title}
          />
        </div>

        <div className={cn.card__details}>
          <Link className={``} href={`/shop/${data.id}`}>
            <div className={cn.card__detailsPrimary}>
              <div className={cn.card__title}>{data.title}</div>
              <div className={cn.card__description}>{data.description}</div>
            </div>

            <div className={cn.card__detailsSecondary}>
              <div className={cn.card__scent}>{data.scent}</div>
              <div className={cn.card__price}>
                {formatToUSD.format(data.price)}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
