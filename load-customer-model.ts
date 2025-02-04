import { CountryModel } from './country-model'
import { CurrencyModel } from './currency-model'
import { LanguagesModel } from './languages-model'
import { ListCouponModel } from './list-coupon-model'
import { MetadataModel } from './metadata-model'

export interface LoadCustomerModel {
  phoneCountry: CountryModel
  id: string
  email: string
  name: string
  totalSpent: number
  totalDisputed: number
  nextInvoiceSequence: number
  currencyId: string
  countryId: string
  billingUseCustomerEmail: boolean
  shippingUseBillingAddress: boolean
  country: CountryModel
  coupon: ListCouponModel
  description: string
  invoicePrefix: string
  metadata: MetadataModel[]
  updatedDate: Date
  createdDate: Date
  top100: boolean
  billingEmail?: string
  billingEmailCc?: string
  billingPhone?: string
  billingAddress1?: string
  billingAddress2?: string
  billingPostalCode?: string
  billingState?: string
  billingCity?: string
  billingPhoneCountry?: CountryModel
  shippingPhoneCountry?: CountryModel
  billingCountry: CountryModel
  shippingCountry: CountryModel
  currency: CurrencyModel
  language?: LanguagesModel
}
