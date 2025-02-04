import { MetadataModel } from '~/domain/models/metadata-model'
import { PaymentProductModel } from '~/domain/models/payment-product-model'

export interface PaymentInvoiceModel {
  dueDate?: Date
  footer: string
  memo: string
  metadata?: MetadataModel[]
  customerId: string
  products: PaymentProductModel[]
  customFields?: MetadataModel[]
}
