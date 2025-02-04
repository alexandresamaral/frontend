import { InvoicePreviewModel } from '~/domain/models/invoice-preview-model'
import { ListCouponModel } from '~/domain/models/list-coupon-model'

export type InvoiceEmailPreviewModel = InvoicePreviewModel & {
  allInvoiceCoupons?: ListCouponModel[]
}
