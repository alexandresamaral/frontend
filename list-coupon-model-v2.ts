import { CouponTypeIdEnum } from '../common/enums/coupons-type-id-enum'
import { CurrencyModel } from './currency-model'
import { CouponType } from './load-coupon-model'

export interface ListCouponModelV2 {
  id: string
  name?: string
  code?: string
  codeId?: string
  amount: number
  trialDays?: number
  type: {
    id: CouponTypeIdEnum
    name?: string
    hasAdditionalTrialDays: boolean
  }
  currency?: CurrencyModel
  nftId?: string
  couponType: CouponType
  couponTypes?: CouponType
  discountPercentage?: string | number
  discountAmount?: string

  maximumAmount?: number
  durationMonths?: number
  couponDuration?: string

  additionalTrialDays?: number
  isUnique?: boolean
  valid?: boolean
  redemptions?: number
  maxRedemptions?: number
  expirationDate?: Date
}
