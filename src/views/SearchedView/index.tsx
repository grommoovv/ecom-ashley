'use client'
import { useSearch } from '@/store'
import classes from './index.module.scss'
import { FC } from 'react'
import { IProduct } from '@/entities/product'
import { Card } from '@/shared/ui/card/Card'

interface Props {
  data: IProduct[]
}

export const SearchedView: FC<Props> = ({ data }) => {
  const [searchProducts, searchQuery] = useSearch((state) => [
    state.searchProducts,
    state.searchQuery,
  ])

  const searchedProducts = searchProducts(data, searchQuery)

  return (
    <>
      <div className={classes.searched}>
        <div className={classes.searched__wrap}>
          <h1 className={classes.searched__title}>
            Search Results: &quot;{searchQuery}&quot;
          </h1>

          {searchedProducts.length ? (
            <ul className={classes.searched__list}>
              {searchedProducts.map((p) => (
                <li key={p.id}>
                  <Card data={p} />
                </li>
              ))}
            </ul>
          ) : (
            <h2>Nothing was found for your keyword</h2>
          )}
        </div>
      </div>
    </>
  )
}
// export default SearchedView
