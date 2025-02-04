import { CurrencyModel } from './currency-model'
import { CustomerModel } from './customer-model'
import { MetadataModel } from './metadata-model'
import { PaymentMethodTypes } from './payment-method-types'
import { PaymentMethodsTypeModel } from './payment-methods-type'
import { ScriptsModel } from './scripts-model'

type billingTypes = {
  name: string
  id: string
}

export type GroupedPrices = {
  billingPeriods: billingTypes
  productPriceId: string
  unitPrice: number
  currency: CurrencyModel
  internalDescription: string
  name: string
  quantity: number
  productId: string
  installments: number
  cashUnitPrice: string
}

export type PaymentLinkItems = {
  currency?: CurrencyModel
  name?: string
  quantity?: number
  description?: string
  paymentLinkId?: string
  canAdjustQuantity?: boolean
  minimumQuantity?: number
  maximumQuantity?: number
  productPriceId?: string[]
  unitPrice?: number[] | number
  groupedPrices?: GroupedPrices[]
  id?: string
  productId?: string
  price?: string[]
  imageUrl?: string
  billingTypes?: billingTypes
  billingPeriods?: billingTypes
  installments?: number
  tenantId?: string
  internalDescription?: string
  recurringTrialPeriodDays?: number
  billingTypesPricesSelected?: billingTypes[]
  priceName?: string
  cashUnitPrice?: string
  pricingModelsId?: string
}

export interface PaymentLinkModel {
  id?: string
  enablePromotionCode?: boolean
  enableBillingAddress?: boolean
  currency?: CurrencyModel
  tenantId?: string
  enableShippingAddress?: boolean
  dolarQuotation?: number
  description?: string
  enablePhoneNumber?: boolean
  enableConfirmationPage?: boolean
  enableRedirectUrl?: boolean
  enableOnlyPrice?: boolean
  enableInvoiceGeneration?: boolean
  priceAmount?: number
  currencyId?: string
  priceDescription?: string
  statementDescriptor?: string
  customConfirmationMessage?: string
  paymentLinkItems?: PaymentLinkItems[]
  redirectUrl?: string | boolean
  linkUrl?: string
  isActive?: boolean
  createdDate?: Date
  metadata?: MetadataModel[]
  requestCountry?: string
  paymentMethodTypes?: PaymentMethodTypes[]
  imageOnlyPrice?: File
  imageUrl?: string
  total?: number
  hasOrders?: boolean
  termsOfService?: string
  paymentLinkAllowedPaymentMethodTypes?: PaymentMethodsTypeModel[] | string[]
  dualPricingDiscountAmount?: number
  isDualPricing?: boolean
  hasNftModule?: boolean
  customer?: CustomerModel
  isFromCalculator?: boolean
  customerId?: string
  scripts?: ScriptsModel
  isCustomerPaymentAmountChangeable?: boolean
  requireLimitToSpecificCustomer?: boolean
  isAddressVerificationServiceActive?: boolean
}
