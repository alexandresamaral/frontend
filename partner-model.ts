import { CurrencyModel } from './currency-model'

export type PartnerModel = {
  id?: string
  firstName: string
  lastName: string
  email: string
  billingCountriesId: string
  billingAddress1: string
  billingAddress2?: string
  billingPostalCode: string
  billingCity: string
  billingState: string
  billingStreetNumber: string
  billingPhoneCountriesId: string
  billingPhone: string
  accountType: string
  routingNumber: string
  accountTaxId: string
  accountBank: string
  accountAgency: string
  accountNumber: string
  pixKey: string
  billingPhoneCountries?: {
    dialCode: string
  }
  commissions?: number
  currency?: CurrencyModel
  documentType: string
}
