type MethodsType = {
  id: string
  name: 'Pix' | 'Boleto' | 'Credit card' | 'ACH'
  wrapperIntegrationCode: 'Pix' | 'Boleto' | 'Credit card' | 'ACH'
  isDualPricingActive: boolean
  minInstallmentAmount: number
  installments: number
}

export type PaymentMethodsGeofencing = {
  paymentGatewayRequiredState: boolean
  methodsType: MethodsType[]  
}