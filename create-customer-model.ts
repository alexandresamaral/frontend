import { CountryModel } from './country-model'
import { CurrencyModel } from './currency-model'
import { LanguagesModel } from './languages-model'
import { TimezonesModel } from './timezones-model'

export interface CreateCustomerModel {
  name: string
  email: string
  description?: string
  phone?: string
  phoneCountry?: CountryModel
  countryId: string
  id?: string
  billingCountry?: CountryModel
  shippingCountry?: CountryModel
  billingPhoneCountry?: CountryModel
  shippingPhoneCountry?: CountryModel
  timezone?: TimezonesModel
  language?: LanguagesModel
  invoicePrefix?: string
  billingEmail?: string
  billingEmailCc?: string
  billingPhone?: string
  billingAddress1?: string
  billingAddress2?: string
  billingPostalCode?: string
  billingState?: string
  billingCity?: string
  billingDialCode?: string
  shippingName?: string
  shippingAddress1?: string
  shippingAddress2?: string
  shippingPostalCode?: string
  shippingState?: string
  shippingCity?: string
  shippingPhone?: string
  shippingDialCode?: string
  billingStreetNumber?: string
  shippingStreetNumber?: string
  nextInvoiceSequence?: number
  billingUseCustomerEmail?: boolean
  shippingUseBillingAddress?: boolean
  taxStatus?: any
  metadata?: any
  currency?: CurrencyModel
}
