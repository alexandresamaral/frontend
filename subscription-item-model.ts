import { CurrencyModel } from '~/domain/models/currency-model'
import { ProductPriceModel } from '~/domain/models/product-price-model'

export type SubscriptionItemModel = {
  amount: string
  description: string
  id: string
  quantity: number
  unitPrice: string
  name: string
  productsId: string
  productPricesId: string
  currency: CurrencyModel
  currencyId: string
  productPrices?: ProductPriceModel
}
