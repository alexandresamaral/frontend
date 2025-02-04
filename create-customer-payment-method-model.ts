import { PaymentMethodEnum } from '~/presentation/common/enums/payment-method-enum'

import { CountryModel } from './country-model'

export interface CreateCustomerPaymentMethod {
  paymentMethodType: PaymentMethodEnum
  isDefault: boolean
  isVisible?: boolean
  fingerprint?: string
  holderName: string
  holderEmail: string
  phone?: string
  tokenizerToken?: string
  cardBrand?: string
  lastDigits?: string
  expiredDate: string
  address1: string
  address2: string
  addressNumber?: number
  city: string
  neighborhood?: string
  stateId: string
  zipCode: string
  countryId: string
  cpf: string
  cnpj: string
  customerId?: string
  payerPhone: string
  phoneCountry?: CountryModel
  holdCreditCard?: boolean
  payerName: string
}
