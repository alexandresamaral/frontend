import { SubscriptionStatusEnum } from '../common/enums/subscription-status-enum'

type ProductRedemptionsSubscriptions = {
  name: string
}

export interface RedemptionsSubscriptions {
  id: string
  customerName: string
  status: SubscriptionStatusEnum
  dateStatus: Date
  billing: string
  currentPeriod?: Date
  cancelledDate?: Date
  product: ProductRedemptionsSubscriptions[]
  createdDate: Date
}
