export interface ChargeCustomerModel {
  customerGrossAmount: Number
  customerId: string
  paymentMethodId: string
  invoiceId?: string
  currencyId?: string
}
