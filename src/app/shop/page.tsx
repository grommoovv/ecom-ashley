import { ProductService } from '@/service'
import { ShopView } from '@/views'

interface PageProps {
  searchParams: { search: string | undefined }
}

export const metadata = {
  title: 'Ashley & Co. Shop',
}

const Page = async ({ searchParams: { search } }: PageProps) => {
  return <div>Shop page {search}</div>

  const products = await ProductService.getProducts()

  return <ShopView data={products} />
}

export default Page
