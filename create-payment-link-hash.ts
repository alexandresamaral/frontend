import { CustomerCardModel } from './customer-card-model'
import { MetadataModel } from './metadata-model'

export type BillingAddress = {
  billingCountryId: string
  billingAddress1?: string
  billingAddress2?: string
  billingCity?: string
  billingState?: string
  billingPostalCode?: string
  billingStateId?: string
  billingStreetNumber?: string
  billingNeighborhood?: string
}

export type ShippingAddress = {
  shippingCountryId: string
  shippingAddress1: string
  shippingAddress2?: string
  shippingCity: string
  shippingState: string
  shippingPostalCode: string
  shippingStreetNumber: string
  shippingStateId: string
}

export type CustomerBankAccount = {
  isDefault: boolean
  bankAccountType: string
  personType: string
  routingNumber: string
  accountNumber: string
}

export interface CreatePaymentLinkHash {
  customerName?: string
  payerName?: string
  email?: string
  productPriceId?: string
  billingAddress?: BillingAddress
  shippingAddress?: ShippingAddress | Object
  phoneNumber?: string
  customerCard?: CustomerCardModel
  cpf?: string
  paymentMethodType?: string
  installments?: number
  couponId?: string
  metadata?: MetadataModel[]
  couponCode?: string
  termsOfUseAcceptedDate?: Date
  accountName?: string
  accountNumber?: string
  routingNumber?: string
  accountType?: string
  customerBankAccount?: CustomerBankAccount
  phoneCountryId?: string
}
