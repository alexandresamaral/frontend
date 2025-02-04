import { BillingCustomIntervalsIdsEnum } from '~/presentation/common/enums/billing-custom-intervals-id-enum'

export interface BillingPeriodModel {
  id: string
  name: string
  recurringIntervalsId?: BillingCustomIntervalsIdsEnum
  intervalCount?: number
}
