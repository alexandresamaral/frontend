import { TokenModel } from '~/domain/models/token-model'

export interface DecodeUserToken {
  decode: (token: string) => TokenModel
}
