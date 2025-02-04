import { CurrencyModel } from './currency-model'
import { MetadataModel } from './metadata-model'
import { NoteItemsModel } from './note-items-model'

export type CreditNoteModel = {
  id: string
  amount: number
  currencyIsoCode: string
  memo: string
  reason: string
  creditNoteCode: string
  createdDate: Date
  customerEmail?: string
  invoiceCode?: string
  metadata?: MetadataModel[]
  creditNoteItems?: NoteItemsModel[]
  currency: CurrencyModel
  customerId: string
}
