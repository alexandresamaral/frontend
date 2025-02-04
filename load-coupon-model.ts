import { CurrencyModel } from '~/domain/models/currency-model'

import { CouponTypeEnum } from '../common/enums/coupons-type-enum'
import { ListCouponCode } from './list-coupon-code-model'
import { MetadataModel } from './metadata-model'
import { RedemptionsCustomers } from './redemptions-customers-model'
import { RedemptionsSubscriptions } from './redemptions-subscriptions-model'

export type CouponType = {
  hasAdditionalTrialDays: boolean
  name: CouponTypeEnum
}

export type CouponDuration = 'Forever' | 'Once' | 'MultipleMonths'

export interface LoadCouponModel {
  id?: string
  name: string
  discountPercentage?: number
  discountAmount?: number
  durationMonths: number
  trialDays: number
  additionalTrialDays: number
  couponTypes: CouponType
  valid: boolean
  createdDate: Date
  couponDurations: CouponDuration | string
  currency: CurrencyModel
  maxRedemptions?: number
  redemptions?: number
  expirationDate?: Date
  metadata?: MetadataModel[]
  productIds?: string[]
  codes?: ListCouponCode[]
  subscriptionCouponRedeems?: [
    {
      activeRedemptionsSubscriptions?: RedemptionsSubscriptions[]
      activeRedemptionsCustomers: RedemptionsCustomers[]
    }
  ]
}
