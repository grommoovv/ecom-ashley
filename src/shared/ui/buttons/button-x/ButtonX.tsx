'use client'
import { useModal } from '@/store'

export const ButtonX = () => {
  const [isMenu, isCart, toggleMenu, toggleCart] = useModal((state) => [
    state.isMenu,
    state.isCart,
    state.toggleMenu,
    state.toggleCart,
  ])

  const handleClick = () => {
    if (isMenu) toggleMenu()
    if (isCart) toggleCart()
  }

  return (
    <>
      <button className='button-x z-50' onClick={handleClick}>
        <svg
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M1 1L17 17' stroke='white' stroke-width='2' />
          <path d='M17 1L1 17' stroke='white' stroke-width='2' />
        </svg>
      </button>
    </>
  )
}
