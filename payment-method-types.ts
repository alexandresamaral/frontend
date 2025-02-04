export type PaymentMethodTypes = {
  id: string
  name: 'Pix' | 'Boleto' | 'Credit card' | 'ACH'
  wrapperIntegrationCode: 'Pix' | 'Boleto' | 'Credit card' | 'ACH'
  isDualPricingActive: boolean
  minInstallmentAmount: number
}
