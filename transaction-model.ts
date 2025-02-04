import { RefundType } from '~/presentation/common/types'

import { TransactionStatusEnum } from '../common/enums/transaction-status-enum'

export interface TransactionModel {
  id: string
  createdDate: Date
  amount: string
  status: TransactionStatusEnum
  refunds: RefundType[]
}
