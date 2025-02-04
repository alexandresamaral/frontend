import { PayoutStatusEnum } from '~/presentation/common/enums/payout-status-enum'

type Tenant = {
  id: string
  name: string
  gTenantId: string
  agency: null | string
}

export type PayoutDetailsStatus = {
  id: string
  name: string
  slug: string
}

type SettlementCurrency = {
  id: string
  name: string
  isoCode: string
  symbol: string
}

type RecurringInterval = {
  id: string
  name: string
  interval: string
}

type Term = {
  recurringIntervalCount: number
  recurringInterval: RecurringInterval
}

type Status = {
  id: string
  name: PayoutStatusEnum
  slug: string
}

type ProcessorUser = {
  id: string
  name: string
  firstName: string
  lastName: string
}

export type LoadBalanceModel = {
  id: string
  alternativeId: string
  status: Status
  amount: number
  settlementCurrency: SettlementCurrency
  periodStartDate: string
  periodEndDate: string
  createdDate: string
  processedDate: string
  paidDate: string | null
  expectedArrivalDate: string | null
  tenant: Tenant
  terms: Term
  merchant: string,
  referenceNumber: string,
  statuscreatedDate: string
  processorUser: ProcessorUser
}
