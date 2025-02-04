import { ProductPriceModel } from './product-price-model'

export type PaymentProductModel = {
  id: string
  quantity: number
  productPriceId: string
  productPrice?: ProductPriceModel
}
