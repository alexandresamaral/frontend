import { Response } from '~/domain/common/types'
import { TokenModel } from '~/domain/models/token-model'

export interface EmailSignIn {
  signIn: (params: EmailSignIn.Params) => Promise<Response<TokenModel>>
}

export namespace EmailSignIn {
  export type Params = {
    email: string
    password: string
    tenantId: string
  }
}
