export type LoadProductPricesParams = {
  page?: number
  pagesize?: number
  productsId?: string
  listOnlyRecurringPrices?: boolean
  currencyId?: string
  pricingModel?: 'standard' | 'package' | 'volume' | 'graduated'
  keywords?: string
  billingPeriods?: string
}
