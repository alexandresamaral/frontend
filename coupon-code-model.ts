import { MetadataModel } from './metadata-model'

type Customer = {
  id: string
  name: string
  email: string
}

export interface CouponCodeModel {
  id?: string
  code: string
  firstTimeTransaction?: boolean
  currencyId?: string
  customerId?: string
  maxRedemptions: number
  minimumAmount?: number
  expirationDate?: Date
  codeQuantity?: number
  codeTypes?: string
  metadata: MetadataModel[]
  createdDate: Date
  redemptions: number
  customer: Customer
}
