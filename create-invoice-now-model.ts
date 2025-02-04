export interface CreateInvoiceNowModel {
  customerId: string
  collectionMethod: string
  pendingInvoiceItemIds: string[]
  dueDate?: Date
  graceDays?: number
}
