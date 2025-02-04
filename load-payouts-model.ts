type Tenant = {
  id: string
  name: string
  gTenantId: string
  agency: null | string
}

type ProcessorUser = {
  id: string
  name: string
  firstName: string
  lastName: string
}

type Status = {
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

export type LoadBalancesModel = {
  rows: [
    {
      id: string
      alternativeId: string
      batchId: string
      tenant: Tenant
      processorUser: ProcessorUser
      status: Status
      amount: number
      settlementCurrency: SettlementCurrency
      createdDate: string
      processedDate: string
      paidDate: string | null
      expectedArrivalDate: string | null
      terms: Term
    }
  ]
}
