import ProductsService from '@/entities/product/model/service/ProductService'
import { SearchedView } from '@/views'

export default async function Searched() {
  const products = await ProductsService.getAllProducts()

  return <SearchedView data={products} />
}
