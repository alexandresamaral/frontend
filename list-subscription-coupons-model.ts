import { CouponModel } from '~/domain/models/coupon-model'

import { CouponCodeModel } from './coupon-code-model'

export type ListSubscriptionCouponsModel = {
  coupon: CouponModel
  createdDate: Date
  couponCodes: CouponCodeModel
  deletedDate: Date
  id: string
}
