import { CurrencyModel } from './currency-model'
import { PaymentLinkItems } from './payment-link-model'

export interface LoadPaymentLinksModel {
  statementDescriptor: string
  id: string
  linkUrl: string
  total: number
  currency: CurrencyModel
  priceAmount?: number
  paymentLinkItems: PaymentLinkItems[]
  products: PaymentLinkItems[]
  isActive: boolean
  createdDate: Date
}
