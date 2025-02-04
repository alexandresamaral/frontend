import { CurrencyModel } from '~/domain/models/currency-model'

import { CouponTypeIdEnum } from '../common/enums/coupons-type-id-enum'
import { CouponType, CouponDuration } from './load-coupon-model'

export interface ListCouponModel {
  id: string
  name: string
  amount?: number
  couponDurations?: CouponDuration | string
  discountPercentage: string | number
  discountAmount: string
  couponTypes?: CouponType
  couponType?: CouponType
  expirationDate: Date
  redemptions: number
  maxRedemptions: number
  currency: CurrencyModel
  durationMonths?: number
  trialDays?: number
  maximumAmount?: number
  valid?: boolean
  type: {
    id: CouponTypeIdEnum
    name?: string
    hasAdditionalTrialDays: boolean
  }
}
