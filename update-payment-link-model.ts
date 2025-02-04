import { MetadataModel } from './metadata-model'
import { PaymentLinkItems } from './payment-link-model'
import { PaymentMethodsTypeModel } from './payment-methods-type'

export type UpdatePaymentLinkModel = {
  enablePromotionCode?: boolean
  enableBillingAddress?: boolean
  enableShippingAddress?: boolean
  enablePhoneNumber?: boolean
  enableInvoiceGeneration?: boolean
  enableConfirmationPage?: boolean
  isActive?: boolean
  customConfirmationMessage?: string
  redirectUrl?: string | boolean
  metadata?: MetadataModel[]
  id: string
  paymentLinkItems?: Array<Pick<PaymentLinkItems, 'id' | 'quantity'>>
  description?: string
  statementDescriptor?: string
  priceAmount?: number
  paymentLinkAllowedPaymentMethodTypes?: PaymentMethodsTypeModel[] | string[]
  customerId?: string
  isCustomerPaymentAmountChangeable?: boolean
  currencyId?: string
}
