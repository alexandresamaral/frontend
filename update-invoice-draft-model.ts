import { MetadataModel } from './metadata-model'

type Product = {
  id: string
  quantity: number | string
  productPriceId: string
}

export interface UpdateInvoiceDraftModel {
  invoiceId?: string
  customerId?: string
  memo?: string
  footer?: string
  products?: Product[]
  dueDate?: Date
  metadata?: MetadataModel[]
  amountDue?: 0
  paymentMethodId?: string
  includeInspireLink?: boolean
  installments?: number
  graceDays?: number
}
