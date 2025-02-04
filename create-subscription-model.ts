import { CustomerCardModel } from '~/domain/models/customer-card-model'
import { MetadataModel } from '~/domain/models/metadata-model'

import { PaymentInvoiceModel } from './payment-invoice-model'
import { PaymentProductModel } from './payment-product-model'
import { SubscriptionChargeOptionEnum } from '~/presentation/common/enums/subscription-charge-option-enum'

export type CreateSubscriptionModel = {
  couponId?: string
  startDate: Date
  cancelledDate: Date
  customerCard?: CustomerCardModel
  paymentMethodId: string
  products: PaymentProductModel[]
  invoice: PaymentInvoiceModel
  id?: string
  scheduledUpdateDate?: Date
  metadata?: MetadataModel[]
  trialLength?: number
  dueDate?: number
  graceDays?: number
  customFields?: MetadataModel[]
  cancelSubscriptionIfPastDue?: boolean
  installments: number
  chargeMethod: SubscriptionChargeOptionEnum
}
