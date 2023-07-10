import { IProduct } from '@/entities/product'
import classes from './index.module.scss'
import { Card } from '@/shared/ui/card/Card'

interface Props {
  data: IProduct[]
}

interface IShopItems {
  id: number
  title: string
  text: string
  parts: IProduct[]
}

export const ShopView: React.FC<Props> = ({ data }) => {
  const sortedProducts = data.sort((a, b) => a.id - b.id)

  const shopItems: IShopItems[] = [
    {
      id: 1,
      title: 'Home Perfume',
      text: 'Every home welcomes good design and will only be enhanced with the elegant scent that Home Perfume delivers. Hand blown in Borosilicate glass, these individually unique pieces have been especially crafted to be timeless design objects, yet can subtly fit into and elevate any space.',
      parts: sortedProducts.slice(0, 12),
    },
    {
      id: 2,
      title: 'Washup',
      text: 'Aromatic botanical Hand Wash for use anytime/everyday. Bolstered with aloe, horopito and grapefruit seed, this is your habitual helper to nourish and cleanse hands, with the pick-me-up of an invigorating and balancing scent.',
      parts: sortedProducts.slice(12, 22),
    },
    {
      id: 3,
      title: 'Topup',
      text: 'Be ready for any occasion and be sure your Ashley & Co. products never run dry. Simply select Topup, and you can easily refill our durable 500ml bottles from our 1000ml Topup pouches.',
      parts: sortedProducts.slice(22, 27),
    },
    {
      id: 4,
      title: 'Soothe Tube',
      text: 'Deeply penetrating (yet non-greasy), this formulation based with Shea Butter and boosted with Camomile Extract and Vitamin E prevents the discomfort of parched hands and cuticles. What’s more, it’s loaded with the lingering lift of each of our signature scents.',
      parts: sortedProducts.slice(27, 32),
    },
  ]

  return (
    <>
      <div className={classes.shop}>
        <section className={classes.shop__categories}>
          {shopItems.map((si) => (
            <div className={classes.shop__category} key={si.id}>
              <h2 className={classes.shop__title}>{si.title}</h2>
              <ul className={classes.shop__list}>
                <div className={classes.text}>{si.text}</div>
                {si.parts.map((sip) => (
                  <li className={classes.shop__listItem} key={sip.id}>
                    <Card data={sip} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </>
  )
}
