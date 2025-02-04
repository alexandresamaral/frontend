import { BillingPeriodModel } from '~/domain/models/billing-period-model'
import { BillingTypeModel } from '~/domain/models/billing-type-model'
import { CurrencyModel } from '~/domain/models/currency-model'
import { MetadataModel } from '~/domain/models/metadata-model'
import { PricingModel } from '~/domain/models/pricing-model'
import { ProductModel } from '~/domain/models/product-model'
import { RecurringMeteredUsage } from '~/domain/models/recurring-metered-usage-model'
import { RecurringUsageType } from '~/domain/models/recurring-usage-type-model'

export type ProductPriceModel = {
  id: string
  name: string
  price?: string
  unitPrice: number
  createdDate?: Date
  installments?: number
  customIntervalCount?: number
  customRecurringIntervalsId?: string
  neverUsedSubscription?: boolean
  onlyProductPrice?: boolean
  currencies?: CurrencyModel
  currencyId?: string
  interval?: string
  metadata?: MetadataModel[]
  billingTypes: BillingTypeModel
  billingPeriods: BillingPeriodModel
  pricingModels?: PricingModel
  hasPaymentLinkItems?: boolean
  products?: ProductModel
  billingPeriodId?: string
  trialPeriod?: number
  recurringTrialPeriodDays?: number
  isActive?: boolean
  recurringMeteredUsages?: RecurringMeteredUsage
  numberActiveSubscriptions?: number
  rounding?: string
  recurringUsageTypes?: RecurringUsageType
  pricingModelId?: string
  billingTypesId?: string
  usageMetered?: boolean
  editableCode?: boolean
  recurringMeteredUsageId?: string
  recurringUsageTypesId?: string
  priceTiers?: any
  currency?: CurrencyModel
  internalDescription?: string
  maxInstallments?: number
  productsId?: string
  isActionsDisabled?: boolean
  cashUnitPrice?: number
}
