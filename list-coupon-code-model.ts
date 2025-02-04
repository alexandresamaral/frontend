import { MetadataModel } from './metadata-model'

export interface ListCouponCode {
  code: string
  createdDate: Date
  expirationDate: Date
  id: string
  redemptions: number
  minimumAmount: number
  firstTimeTransaction: boolean
  isActive: boolean
  metadata?: MetadataModel[]
}
