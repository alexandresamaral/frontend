import { ProductPriceModel } from './'
import { MetadataModel } from './metadata-model'

export interface ProductModel {
  id: string
  name: string
  description: string
  statementDescriptor: string
  unitLabel: string
  setupFee?: string
  metadata?: MetadataModel[]
  productPrices: ProductPriceModel[]
  isActive: boolean
  createdDate: Date
  updatedDate: Date
  imageUrl: string
  logs?: any[]
  events?: any[]
  quantity?: number
  isActionsDisabled?: boolean
}
