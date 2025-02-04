import { ProductPriceModel } from '~/domain/models/product-price-model'

type BillingTypes = {
  name: string
  id: string
}

export type FormattedTrialPeriod = {
  amount: string
  trialDays: number
}

export interface ListProductModel {
  id: string
  name: string
  amount?: number
  disabled?: boolean
  startingPrice?: string
  productPrices?: ProductPriceModel[]
  imageUrl?: string
  createdDate?: Date
  isActive?: boolean
  updatedDate?: Date
  applyPrice?: string[]
  unitPriceSelected?: number[]
  productPriceSelectedId?: string[]
  billingTypes?: BillingTypes
  canAdjustQuantity?: boolean
  minimumQuantity?: number
  maximumQuantity?: number
  quantity?: number
  formattedTrialPeriod?: FormattedTrialPeriod[]
  isActionsDisabled?: boolean
  startingPriceClean?: string
}
