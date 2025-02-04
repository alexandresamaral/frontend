import { CurrencyModel } from './currency-model'
import { ListCouponModel } from './list-coupon-model'

export interface PendingInvoiceItemsModel {
  id?: string
  name?: string
  quantity?: number
  productPriceId?: string
  amount?: number
  unitPrice?: number
  createdDate?: Date
  subscriptionId?: string
  productId?: string
  discountAmount?: number
  coupons?: ListCouponModel[]
  currencies: CurrencyModel
  cashUnitPrice?: number
  currencyId?: string
}

export interface CouponsModel {
  id: string
  couponsId?: string
  name?: string
  discountPercentage?: string
  discountAmount?: string
  maximumAmount?: string
  durationMonths?: string
  trialDays?: string
  currency?: CurrencyModel
  couponDuration?: string
  couponTypes?: CouponType
  maxRedemptions?: string
  redemptions?: string
  expirationDate?: string
  type: string
}

interface CouponType {
  name: string
  hasAdditionalTrialDays: boolean
}
