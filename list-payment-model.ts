import { CurrencyModel } from '~/domain/models/currency-model'

import { PaymentMethodEnum } from '~/presentation/common/enums/payment-method-enum'

import { PaymentStatusEnum } from '../common/enums/payment-status-enum'

export interface ListPaymentModel {
  id: string
  grossAmount: string
  description: string
  customerEmail: string
  customerName: string
  customerId: string
  customerPaymentMethodId: string
  status: PaymentStatusEnum
  currency: CurrencyModel
  paidDate: Date
  paymentDate: Date
  paymentGatewayGrossAmount?: string
  createdDate: Date
  refundAmount: string
  paymentMethodType: PaymentMethodEnum
}
