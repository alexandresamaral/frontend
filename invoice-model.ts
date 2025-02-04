import { CurrencyModel } from '~/domain/models/currency-model'
import { InvoiceCoupon } from '~/domain/models/invoice-coupon'
import { ListCouponModel } from '~/domain/models/list-coupon-model'

import { InvoiceEmailStatusEnum } from '../common/enums/invoice-email-status-enum'
import { InvoiceStatusEnum } from '../common/enums/invoice-status-enum'
import { CustomerModel } from './customer-model'
import { InvoiceItemModel } from './invoice-item-model'
import { InvoiceSubscriptionModel } from './invoice-subscription-model'
import { MetadataModel } from './metadata-model'
import { OrderModel } from './order-model'
import { PaymentMethodTypes } from './payment-method-types'
import { ScriptsModel } from './scripts-model'
import { TransactionModel } from './transaction-model'

export type InvoiceModel = {
  id: string
  amountDue: number
  invoiceNumber: string
  currency: CurrencyModel
  paidDate: Date
  deletedDate: Date
  customer: CustomerModel
  subscriptionId: string
  status: InvoiceStatusEnum
  metadata: MetadataModel[]
  includeInspireLink: boolean
  memo: string
  createdDate: Date
  confirmationDate: Date
  dueDate: Date
  footer: string
  customerId: string
  invoiceItems: InvoiceItemModel[]
  paymentId: string
  paymentMethodId?: string
  amountPaid: number
  requestCountry?: string
  amountRemaining: string
  amountSubtotal: string
  invoiceCoupons: InvoiceCoupon[]
  coupons: ListCouponModel[]
  subscriptions?: InvoiceSubscriptionModel
  paymentMethodName: string
  allInvoiceCoupons?: any
  discountAmount: string
  transactions: TransactionModel[]
  tenantId?: string
  linkUrl?: string
  paymentMethodTypes?: PaymentMethodTypes[]
  referenceDatePeriod: {
    referenceDateFrom: Date
    referenceDateTo: Date
  }
  graceDays?: number
  expirationDate?: Date
  termsOfService?: string
  dualPricingDiscountAmount?: number
  isDualPricing?: boolean
  billingMethod?: string
  isFromCalculator?: boolean
  scripts: ScriptsModel
  orders: OrderModel[]
  isAddressVerificationServiceActive?: boolean
  invoiceStatusId?: string
  emailSendStatus?: InvoiceEmailStatusEnum
}
