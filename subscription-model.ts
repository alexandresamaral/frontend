import { CouponModel } from '~/domain/models/coupon-model'
import { CurrencyModel } from '~/domain/models/currency-model'

import { PaymentMethodEnum } from '~/presentation/common/enums/payment-method-enum'

import { SubscriptionStatusEnum } from '../common/enums/subscription-status-enum'
import { MetadataModel } from './metadata-model'
import { SubscriptionItemModel } from './subscription-item-model'

import { SubscriptionChargeOptionEnum } from '~/presentation/common/enums/subscription-charge-option-enum'

import { OrderModel } from './order-model'
import { InvoiceModel } from './invoice-model'

export type SubscriptionModel = {
  id: string
  coupons: CouponModel[]
  metadata: MetadataModel[]
  customFields?: MetadataModel[]
  cancelledDate: Date
  createdDate: Date
  currentPeriod: Date
  startCurrentPeriod?: Date
  startDate: Date
  endDate: Date
  pauseStartDate?: Date
  pauseEndDate?: Date
  customerName: string
  discount: string
  nextInvoice: string
  paymentDue: string
  paymentMethodId: string
  memo?: string
  footer: string
  customerId: string
  currency?: CurrencyModel
  status?: SubscriptionStatusEnum
  subscriptionStatus: SubscriptionStatusEnum
  subscriptionItems: SubscriptionItemModel[]
  trialLength?: number
  intervalCountForPayment?: number
  amountDue?: number
  cancelSubscriptionIfPastDue?: boolean
  paymentMethod: PaymentMethodEnum
  installments: number
  graceDays?: number
  billingMethod?: string
  paymentMethodType?: PaymentMethodEnum
  chargeMethod?: SubscriptionChargeOptionEnum
  orders?: OrderModel[]
  invoices: InvoiceModel[]
  
}
