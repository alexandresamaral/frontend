import { CouponModel } from '~/domain/models/coupon-model'
import { CurrencyModel } from '~/domain/models/currency-model'
import { InvoiceItemModel } from '~/domain/models/invoice-item-model'

export interface UpcomingInvoiceModel {
  totalToPay: string
  amountPaid: string
  invoiceItems: InvoiceItemModel[]
  currency: CurrencyModel
  amountDue: number
  nextDueDate: Date
  discountAmount: string
  coupons: CouponModel[]
  nextPeriodStart: Date
  nextPeriodEnd: Date
}
