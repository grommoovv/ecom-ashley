export interface Product {
  _id: string
  id: number
  title: string
  description: string
  scent: string
  price: number
  image: string
}

export interface Cart extends Product {
  qty: number
}
