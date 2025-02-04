import { MetadataModel } from './metadata-model'
import { PaymentInvoiceModel } from './payment-invoice-model'
import { PaymentProductModel } from './payment-product-model'

export type UpdateSubscriptionModel = {
  id: string
  metadata?: MetadataModel[]
  startDate?: Date
  cancelledDate?: Date
  paymentMethodId?: string
  products?: PaymentProductModel[]
  invoice?: PaymentInvoiceModel
  trialLength?: number

  dueDate?: number
  graceDays?: number

  customFields?: MetadataModel[]
  scheduledUpdateDate?: Date
  footer?: string
  memo?: string
  cancelSubscriptionIfPastDue?: boolean
  installments?: number
  chargeMethod?: string
}
