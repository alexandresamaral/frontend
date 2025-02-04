import { CurrencyModel } from '~/domain/models/currency-model'

import { PaymentStatusEnum } from '../common/enums/payment-status-enum'
import { MetadataModel } from './metadata-model'

export type PaymentModel = {
  id: string
  customerName: string
  customerEmail: string
  customerIsDeleted: boolean
  description: string
  paidDate: Date
  paymentDate: Date
  createdDate: string | Date
  statementDescriptor: string
  status: PaymentStatusEnum
  currency: CurrencyModel
  grossAmount: string
  refundAmount: number
  netAmount: string
  feeAmount: string
  inspireFeeAmount: string
  paymentGatewayCurrency: CurrencyModel
  paymentGatewayGrossAmount: string
  paymentGatewayExchangeRate: string
  customerPaymentMethodId: string
  customerId: string
  metadata: MetadataModel[]
  paymentMethodType: string
  paymentGatewayErrorMessage: string
  receiptNumber?: string
  invoiceId?: string
  installments: number
  orderId?: string
  failedReason: {
    errorCode: string
    gatewayErrors: string[]
    message: string
  }
  integrationIrisId: string
}
