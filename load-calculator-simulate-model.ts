export interface PaymentMethodType {
  id: string
  name: string
  feeAmounts?: number[]
  brands?: Brand[]
}

export interface Brand {
  id: string
  name: string
  feeAmounts: FeeAmount[]
}

export interface FeeAmount {
  installment: number
  grossAmount: number
  grossAmountInBRL: number
}

export interface LoadCalculatorSimulateModel {
  id: string
  isCalculatorActive: boolean
  minInstallmentAmount: string
  paymentMethodTypes: PaymentMethodType[]
}
