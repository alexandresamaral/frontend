import { FetcherParamsType } from '~/presentation/common/types'

export type LoadCouponsParams = FetcherParamsType & {
  filter?: any
  currencyId?: string
}
