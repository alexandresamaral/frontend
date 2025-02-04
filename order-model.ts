import { CurrencyModel } from '~/domain/models/currency-model'
import { CustomerPaymentMethod } from '~/domain/models/customer-payment-method-model'
import { ListCouponModel } from '~/domain/models/list-coupon-model'

import { CustomerModel } from './customer-model'
import { OrderStatusesType } from './list-order-model'
import { MetadataModel } from './metadata-model'
import { OrderItemModel } from './order-item-model'
import { PaymentMethodTypes } from './payment-method-types'
import { ScriptsModel } from './scripts-model'
import { TransactionModel } from './transaction-model'

export type OrderModel = {
  balanceAmountPaid: number
  currencyId: string
  transactions: TransactionModel[]
  amountDue: string
  amountPaid: string
  paymentMethodId: string
  status: string
  confirmationDate: Date
  createdDate: Date
  id: string
  linkUrl: string
  orderNumber: string
  memo: string
  currency: CurrencyModel
  dueDate: Date
  paymentMethodName: string
  orderBalance: number
  linkHash: string
  balanceAmount: number
  customerId: string
  orderStatuses: OrderStatusesType
  customerPaymentMethods: CustomerPaymentMethod
  currencies: CurrencyModel
  customers: CustomerModel
  amountSubtotal: string
  finalizedDate: Date
  invoiceId?: string
  subscriptionId?: string
  orderCoupons: ListCouponModel[]
  orderItems?: OrderItemModel[]
  coupons?: ListCouponModel[]
  paymentMethodTypes?: PaymentMethodTypes[]
  tenantId?: string
  customer?: CustomerModel
  expirationDate?: Date
  graceDays?: number
  termsOfService?: string
  requestCountry?: string
  dualPricingDiscountAmount?: number
  isDualPricing?: boolean
  discountAmount?: string
  billingMethod?: string
  scripts: ScriptsModel
  hasNoProduct?: boolean
  trialAmount?: number
  trialPeriod?: string
  shouldGenerateInvoice?: boolean
  amountSubtotalRecurring?: string
  amountSubtotalNonRecurring?: string
  dualPricingDiscountRecurringAmount?: number
  discountAmountRecurring?: string
  discountAmountNonRecurring?: string
  dualPricingDiscountNonRecurringAmount?: number
  isAddressVerificationServiceActive?: boolean
  metadata?: MetadataModel[]
}
