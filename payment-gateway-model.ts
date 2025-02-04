import { PaymentGatewayEnum } from '../common/enums/payment-gateway-enum'

export type PaymentGatewayModel = {
  id: string
  name: PaymentGatewayEnum
  isActive: boolean
  isDefault: boolean
  paymentProcessor: string
  minInstallmentAmount: number
  allowedInstallments: boolean
  creditCardMaxInstallments: number
}
