import { SubscriptionCustomerModel } from '~/domain/models/subscription-customer-model'

import { PaymentMethodEnum } from '~/presentation/common/enums/payment-method-enum'

import { SubscriptionStatusEnum } from '../common/enums/subscription-status-enum'
import { SubscriptionItemModel } from './subscription-item-model'

import { SubscriptionChargeOptionEnum } from '~/presentation/common/enums/subscription-charge-option-enum'

import { OrderModel } from './order-model'


export type ListSubscriptionModel = {
  id: string
  customer: SubscriptionCustomerModel
  status: SubscriptionStatusEnum
  pricingPlan: string
  createdDate: Date
  subscriptionStatus: SubscriptionStatusEnum
  nextInvoice: string
  cancelledDate?: Date
  subscriptionItems: SubscriptionItemModel[]
  endTrialDate: Date
  paymentMethod: PaymentMethodEnum
  billingMethod: string
  chargeMethod: SubscriptionChargeOptionEnum
  billing: string
  orders: OrderModel[]

}
