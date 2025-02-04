import { OrderStatusEnum } from '../common/enums/order-status-enum'
import { CurrencyModel } from './currency-model'
import { CustomerModel } from './customer-model'
import { MetadataModel } from './metadata-model'
import { OrderItemModel } from './order-item-model'

export type OrderStatusesType = {
  id: string
  name: OrderStatusEnum
}

export interface ListOrderModel {
  id: string
  customers: CustomerModel
  currencies: CurrencyModel
  orderStatuses: OrderStatusesType
  amountDue: string
  amountPaid: string
  amountSubtotal?: string
  discountAmount?: string
  balanceAmount: string
  metadata: MetadataModel[]
  receiptNumber: string
  installments: number
  dueDate: string
  createdDate: string
  confirmationDate: string
  orderItems: OrderItemModel[]
}
