'use client'
import { FC, FormEvent } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useSearch } from '@/store'
import { useModal } from '@/store'

import classes from './ModalSearch.module.scss'

const ModalSearch: FC = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [toggleSearch] = useModal((state) => [state.toggleSearch])
  const [searchQuery, setSearchQuery] = useSearch((state) => [
    state.searchQuery,
    state.setSearchQuery,
  ])

  console.log(router)
  console.log(pathname)

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toggleSearch()
    router.push(`/shop/searched?search=${encodeURIComponent(searchQuery)}`)
  }

  return (
    <>
      <div className={classes.search}>
        <form
          className={classes.form}
          onSubmit={handleSearch}
          action=''
          method='GET'
          autoComplete='off'
        >
          <input
            className={classes.form__field}
            type='text'
            name='search-filed'
            placeholder='Search by keyword'
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          <button className={classes.form__button} type='submit'>
            Search
          </button>
        </form>
      </div>
    </>
  )
}
export default ModalSearch
