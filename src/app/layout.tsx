import { ModalRoot } from '@/shared/ui/modals'
import '@/shared/scss/globals.scss'
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'
import { FC, PropsWithChildren } from 'react'

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className='__next'>
          <Header />
          <main className='main'>{children}</main>
          <Footer />
          <ModalRoot />
        </div>
      </body>
    </html>
  )
}

export default RootLayout
