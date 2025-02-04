import { MetadataModel } from './metadata-model'

export type UpdateCreditNoteModel = {
  id: string
  otherId: string
  memo?: string
  metadata?: MetadataModel[]
}
