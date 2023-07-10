import ProductsService from '@/entities/product/model/service/ProductService'
import { ShopView } from '@/views'

export const metadata = {
  title: 'Ashley & Co. Shop',
}

export default async function Shop() {
  const products = await ProductsService.getAllProducts()

  return <ShopView data={products} />
}
