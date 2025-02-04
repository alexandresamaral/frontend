import { ReconciliationMethodEnum } from '~/presentation/common/enums/payout-reconciliation-method-enum'
import { PayoutStatusEnum } from '~/presentation/common/enums/payout-status-enum'

export type BalanceTransactionModel = {
  id: string
  date: string
  status: PayoutStatusEnum
  amount: number
  receivedAmount: number
  feeAmount: number
  payableAmount: number
  profitAmount: number
  paymentProcessorName: string
  paymentMethodName: string
  creditCardBrandName: string
  installments: number
  paymentProcessorId: string
  reconciliationMethod: ReconciliationMethodEnum
  paymentProcessorConfirmation: null | string
  isReconciled: boolean
  processorName: string
  checked?: boolean
  invoiceNumber: string
  customerName: string
  customerEmail: string
  dualPricingDiscountAmount: number
  metadata: { key: string; value: string }[] | null;
}

export type LoadBalanceTransactionsModel = {
  rows: BalanceTransactionModel[]
}
