export interface CreatePaymentModel {
  customerGrossAmount: Number
  customerId: string
  description?: string
  statementDescriptor?: string
  customerCard?: CustomerCard
  saveCardToCustomer?: boolean
  receiptEmail?: string
  paymentMethodId?: string
  currencyId?: string
  captureFundsLater?: boolean
  installments?: number
}

interface CustomerCard {
  cardBrand?: string
  lastDigits?: string
  expiredDate: string
  paymentGatewayToken: string
  isDefault: boolean
  address1?: string
  address2?: string
  city?: string
  state?: string
  zipCode?: string
  countryId?: string
}
