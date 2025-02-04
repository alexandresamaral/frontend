import { CurrencyModel } from '~/domain/models/currency-model'

import { BillingPeriodModel } from './billing-period-model'
import { ListCouponModel } from './list-coupon-model'
import { ProductModel } from './product-model'

type Product = Omit<ProductModel, 'productPrices' | 'imageUrl'>
export type OrderItemModel = {
  price: string | number
  id: string
  quantity: number
  discountAmount: string
  productId: string
  name: string
  amount: string
  unitPrice: string
  billingTypes: string
  currency: CurrencyModel
  cashUnitPrice?: number
  billingPeriods?: BillingPeriodModel
  product?: Product
  orderCoupons: ListCouponModel[]
  productPriceId?: string
}
