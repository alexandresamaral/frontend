import { PaymentMethodEnum } from '~/presentation/common/enums/payment-method-enum'

export type UpdateCustomerPaymentMethod = {
  paymentMethodType: PaymentMethodEnum
  isDefault?: boolean
  isVisible?: boolean
  fingerprint?: string
  holderName: string
  holderEmail: string
  phone?: string
  tokenizerToken?: string
  cardBrand?: string
  lastDigits?: string
  expiredDate?: string
  address1: string
  address2: string
  addressNumber?: number
  city: string
  neighborhood?: string
  zipCode: string
  cpf: string
  cnpj: string
  customerId?: string
  paymentMethodId?: string
  customerCardId?: string
  dialCode?: string
  payerPhone: string
}
