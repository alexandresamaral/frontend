import { InvoiceStatusEnum } from '../common/enums/invoice-status-enum'

export interface ListSubscriptionInvoiceModel {
  id: string
  status: InvoiceStatusEnum
  currency: {
    symbol: string
    isoCode: string
  }
  amount: string
  currencyIsoCode: string
  invoiceNumber: string
  lineItems: string
  dueDate: string
  createdDate: string
}
