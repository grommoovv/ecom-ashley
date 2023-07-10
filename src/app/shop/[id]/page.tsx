import ProductService from '@/entities/product/model/service/ProductService'
import { ProductView } from '@/views'
import { Metadata } from 'next'

interface Props {
  params: {
    id: number
  }
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await ProductService.getOneProduct(id)

  return {
    title: post.title,
  }
}

export default async function Product({ params: { id } }: Props) {
  const product = await ProductService.getOneProduct(id)

  return <ProductView data={product} />
}
