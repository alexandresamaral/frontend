import { CouponTypeEnum } from '../common/enums/coupons-type-enum'
import { CurrencyModel } from './currency-model'

type CouponType = {
  name: CouponTypeEnum
  hasAdditionalTrialDays: boolean
  id: string
}

export type LoadCouponByCodeModel = {
  id: string
  name: string
  type: CouponType
  amount?: number
  discountPercentage: string
  discountAmount: string
  maximumAmount: number
  durationMonths: number
  couponDuration: string
  trialDays: number
  additionalTrialDays?: number
  isUnique?: boolean
  valid?: boolean
  currency?: CurrencyModel
  redemptions?: number
  maxRedemptions?: number
  expirationDate?: Date
  nftId?: string
}
