export interface CreatePendingInvoiceItemsModel {
  productPricesId: string
  customersId: string
  subscriptionsId?: string
  couponsId?: string[]
  quantity: number
}
