import { Response } from '~/domain/common/types'

export interface UserLogout {
  logout: () => Promise<Response<void>>
}
