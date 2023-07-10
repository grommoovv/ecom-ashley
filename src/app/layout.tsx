import { ModalRoot } from '@/shared/ui/modals'
import '@/scss/globals.scss'
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
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
