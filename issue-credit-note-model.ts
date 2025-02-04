import { InvoiceItemModel } from '~/domain/models/invoice-item-model'

export interface IssueCreditNoteModel {
  creditNoteReasonId: string
  internalNote?: string
  refundAmount?: number
  creditAmount?: number
  outOfBandAmount?: number
  memo?: string
  creditNoteItems: InvoiceItemModel[]
}
