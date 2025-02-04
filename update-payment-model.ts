import { MetadataModel } from './metadata-model'

export type UpdatePaymentModel = {
  id?: string
  description?: string
  metadata?: MetadataModel[]
}
