import { MetadataModel } from './metadata-model'

export type CreateProductPriceTier = {
  flatPrice: number
  unitPrice: number
  upTo: number
}

export type CreateProductPriceModel = {
  name: string
  pricingModelId: string
  unitPrice: number
  currencyId: string
  billingTypesId: string
  recurringUsageTypesId: string
  hiddenList?: boolean
  billingPeriodId?: string
  recurringMeteredUsageId?: string
  recurringTrialPeriodDays?: number
  usageMetered?: boolean
  enableFreeTrial?: boolean
  priceTiers?: CreateProductPriceTier[]
  customRecurringIntervalsId?: string
  customIntervalCount?: number
  currencyMonthlyId?: string
  everyTime?: number
  internalDescription?: string
}

export type CreateProductModel = {
  name: string
  description: string
  enableAffiliateProgram: boolean
  hiddenList?: boolean
  statementDescriptor?: string
  unitLabel?: string
  setupFee?: number
  productImage?: File
  isActive: boolean
  metadata?: MetadataModel[]
  productPrices?: CreateProductPriceModel[]
}
