import { SubscriptionStatusEnum } from '../common/enums/subscription-status-enum'

export interface InvoiceSubscriptionModel {
  id: string
  customerEmail: string
  customerDescription: string
  status: SubscriptionStatusEnum
  billing: string
  pricingPlan: string
  createdDate: Date
}
