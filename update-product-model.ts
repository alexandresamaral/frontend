import { CurrencyModel } from '~/domain/models/currency-model'

import { MetadataModel } from './metadata-model'

export type UpdateProductPriceTierModel = {
  id?: string
  productPricesId?: string
  flatPrice: number
  unitPrice: number
  upTo: number
  formattedFlatPrice: string
  formattedUnitPrice: string
}

export type UpdateProductPriceModel = {
  id?: string
  name?: string
  pricingModelId?: string
  unitPrice?: number
  currencyId?: string
  billingTypesId?: string
  isActive?: boolean
  recurringUsageTypesId?: string
  billingPeriodId?: string
  recurringMeteredUsageId?: string
  recurringTrialPeriodDays?: number
  usageMetered?: boolean
  enableFreeTrial?: boolean
  priceTiers?: UpdateProductPriceTierModel[]
  internalDescription?: string
  installments?: number
  customRecurringIntervalsId?: string
  customIntervalCount?: number
  currencyMonthlyId?: string
  everyTime?: number
  currencies?: CurrencyModel
  optionsAdditionalTrial?: string
  productPriceToEditId?: string
}

export type UpdateProductModel = {
  id?: string
  name?: string
  description?: string
  statementDescriptor?: string
  unitLabel?: string
  setupFee?: number
  isActive?: boolean
  productImage?: File
  metadata?: MetadataModel[]
  productPrices?: UpdateProductPriceModel[]
}
