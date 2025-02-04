import { CurrencyModel } from '~/domain/models/currency-model'
import { ListCouponModel } from '~/domain/models/list-coupon-model'

import { InvoiceStatusEnum } from '../common/enums/invoice-status-enum'
import { InvoicePeriodsEnum } from '../common/enums/periods-enum'
import { InvoiceItemModel } from './invoice-item-model'

type RecurringInterval = {
  interval: InvoicePeriodsEnum
  count: number
}

export interface ListInvoiceModel {
  id: string
  status: InvoiceStatusEnum
  currencySymbol: string
  amountDue: string
  currencyIsoCode: string
  isSubscription: boolean
  recurringInterval: RecurringInterval
  invoiceNumber: string
  customerEmail: string
  customerName?: string
  lineItems: string
  customerDescription: string
  dueDate: string
  createdDate: string
  subscriptionId?: string
  invoiceItems?: InvoiceItemModel[]
  currency?: CurrencyModel
  productPriceId?: string
  coupons?: ListCouponModel[]
  linkUrl?: string
  paidDate?: Date
  emailSendStatus?: string
}
