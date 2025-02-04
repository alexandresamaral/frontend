import { CouponTypeIdEnum } from '../common/enums/coupons-type-id-enum'
import { CurrencyModel } from './currency-model'

export interface NFTCouponModel {
  id: string
  name?: string
  code?: string
  codeId: string
  amount: number
  trialDays?: number
  type: {
    id: CouponTypeIdEnum
    name?: string
    hasAdditionalTrialDays: boolean
  }
  currency?: CurrencyModel
}
