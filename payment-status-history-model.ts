import { PaymentStatusEnum } from '../common/enums/payment-status-enum'

export type PaymentStatusHistoryModel = {
  id: string
  createdDate: Date
  status: PaymentStatusEnum
  pinnedDate?: string
}
