import { BillingPeriodModel } from '~/domain/models/billing-period-model'
import { InvoiceCoupon } from '~/domain/models/invoice-coupon'
import { ListCouponModel } from '~/domain/models/list-coupon-model'

import { ProductModel } from './product-model'

type Product = Omit<ProductModel, 'productPrices' | 'imageUrl'>

export type InvoiceItemModel = {
  id: string
  description?: string
  quantity: number
  name: string
  amount: string
  unitPrice: string
  discountAmount?: string
  productPriceId?: string
  invoiceItemCoupons?: InvoiceCoupon[]
  billingPeriods?: BillingPeriodModel
  productId?: string
  editable?: boolean
  product?: Product
  productPricesId?: string
  coupons?: ListCouponModel[]
  maxInstallments?: number
  cashUnitPrice?: number
  priceTiers?: any[]
}
