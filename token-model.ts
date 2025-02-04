import { ClaimsModel } from './claims-model'

export type TokenModel = {
  accessToken: string
  expiresIn: number | null
  refreshToken: string
  refreshTokenExpiresIn: number | null
  claims: ClaimsModel | null
  tenant_id: string
}
