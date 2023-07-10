import { sections } from './data'
import { Promo } from './promo/Promo'
import { Categories } from './categories/Categories'
import { Feature } from './feature/Feature'

export interface ISection {
  imageURL: string
  imageTitle: string
  articleTitle?: string
  articleText: string
  linkURL?: string
  linkText?: string
}

export const HomeView = () => {
  return (
    <>
      <div className='homepage'>
        {sections.slice(0, 2).map((s, idx) => (
          <Feature data={s} key={idx} />
        ))}
        <Promo />
        {sections.slice(2, 4).map((s, idx) => (
          <Feature data={s} key={idx} />
        ))}
        <Categories />
        {sections.slice(4, 5).map((s, idx) => (
          <Feature data={s} key={idx} />
        ))}
      </div>
    </>
  )
}
