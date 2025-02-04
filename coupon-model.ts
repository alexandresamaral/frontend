import { CurrencyModel } from '~/domain/models/currency-model'
import { CouponType } from '~/domain/models/load-coupon-model'

import { CouponCodeModel } from './coupon-code-model'
import { MetadataModel } from './metadata-model'

export interface CouponModel {
  id?: string
  name: string
  discountPercentage?: number
  currency?: CurrencyModel
  discountAmount?: number
  durationCycles?: number
  maximumAmount?: number
  trialDays: number
  additionalTrialDays: number
  couponTypes: CouponType
  couponDurations: string
  currencyId: string
  maxRedemptions?: number
  expirationDate?: Date
  createdDate?: Date
  metadata?: MetadataModel[]
  productIds?: string[]
  codes?: CouponCodeModel[]
  redemptions?: number
}
