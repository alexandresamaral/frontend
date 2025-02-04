import { BillingAddress, ShippingAddress } from './create-payment-link-hash'
import { CustomerCardModel } from './customer-card-model'
import { MetadataModel } from './metadata-model'

export type CreateInvoiceHash = {
  name?: string
  email?: string
  phoneNumber?: string
  paymentMethodType?: string
  customerCard?: CustomerCardModel
  installments?: number
  couponId?: string
  cpf?: string
  cnpj?: string
  billingAddress?: BillingAddress
  shippingAddress?: ShippingAddress | {}
  metadata?: MetadataModel[]
  termsOfUseAcceptedDate?: Date
}
