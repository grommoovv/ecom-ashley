import { ProductService } from '@/service'
import { ProductView } from '@/views'
import { Metadata } from 'next'

interface PageProps {
  params: { id: number }
}

export const generateMetadata = async ({ params: { id } }: PageProps): Promise<Metadata> => {
  const product = await ProductService.getProduct(id)

  return { title: product.title }
}

const Page = async ({ params: { id } }: PageProps) => {
  const product = await ProductService.getProduct(id)

  return <ProductView data={product} />
}

export default Page
