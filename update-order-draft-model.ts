export interface UpdateOrderDraftModel {
  orderId?: string
  amountDue?: number
  currencyId?: string
  customerPaymentMethodId?: string
  customerId?: string
  hasNoProduct?: boolean
  shouldGenerateInvoice?: boolean
  graceDays?: number
  dueDate?: Date
  memo?: string
  trialAmount?: number
  trialPeriod?: string
  paymentMethodId?: string
}
