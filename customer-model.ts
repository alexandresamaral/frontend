import { ListCouponModel } from '~/domain/models/list-coupon-model'

import { CountryModel } from './country-model'
import { CurrencyModel } from './currency-model'
import { MetadataModel } from './metadata-model'

export interface CustomerModel {
  id: string
  name: string
  email: string
  address?: string
  phone?: string
  currency?: CurrencyModel
  paymentMethod?: PaymentMethodModel
  totalSpent?: number
  createdDate?: Date
  coupon?: ListCouponModel
  billingEmail?: string
  billingAddress1?: string
  billingAddress2?: string
  billingPhone?: string | number
  billingPhoneCountry?: CountryModel
  metadata?: MetadataModel[]
  phoneCountryId?: string
  billingStreetNumber?: string
  shippingAddress1?: string
  shippingAddress2?: string
  shippingCity?: string
  shippingName?: string
  shippingNeighborhood?: string
  shippingPhone?: string
  shippingPostalCode?: string
  shippingState?: string
  shippingStreetNumber?: string
  billingCountries?: CountryModel
  billingState?: string
  billingCity?: string
  shippingUseBillingAddress?: boolean
  billingUseCustomerEmail?: boolean
  billingCountry?: CountryModel
  billingPostalCode?: string
  shippingCountry?: CountryModel
  shippingPhoneCountry?: CountryModel
}

export interface PaymentMethodModel {
  cardBrand: string
  lastDigits: string
  type: string
}
