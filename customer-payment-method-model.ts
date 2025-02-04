import { CustomerPaymentMethodsEnum } from '../common/enums/customer-payment-methods-enum'
import { CustomerCardModel } from './customer-card-model'

type CustomerAch = {
  accountNumber: string
  accountType: string
  bankAccountType: string
  currenciesId: string
  id: string
  ownerAddress1: string
  ownerAddressPostalCode: string
  ownerEmail: string
  ownerName: string
  routingNumber: string
}

type Origin = {
  alternativeId: string
  code: string
  createdDate: Date
  deletedDate: Date
  dialCode: string
  id: string
  isActive: boolean
  isDefault: boolean
  name: string
  nativeName: string
  updatedDate: Date
}

export type CustomerPaymentMethod = {
  id: string
  fingerprint: string
  owner: string
  ownerEmail: string
  type: CustomerPaymentMethodsEnum | string
  customerBankAccount?: CustomerAch
  customerCard?: CustomerCardModel
  isDefault: boolean
  routingNumber?: string
  payerName?: string
  payerDocument?: string
  payerEmail?: string
  payerPhone?: string
  payerAddressPostalCode?: string
  payerAddressCountriesId?: string
  payerAddressState?: string
  payerAddressCity?: string
  payerAddress1?: string
  payerAddress2?: string
  payerAddressNumber?: string
  payerAddressNeighborhood?: string
  stateId?: string
  paymentGateway?: string
  accountType: string
  origin?: Origin
  isDualPricingActive?: boolean
  tokenizerToken?: string
}
