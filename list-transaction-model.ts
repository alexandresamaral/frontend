import { CurrencyModel } from './currency-model'

export interface ListTransactionModel {
  id: string
  grossAmount: string
  feeAmount: string
  netAmount: string
  availableDate: Date
  paidDate: Date
  description: string
  currency: string
  transactionType: string
  invoiceId?: string
  currencies: CurrencyModel
}
