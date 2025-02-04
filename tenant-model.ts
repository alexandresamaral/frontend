type SupportAddress = {
  addressLine1: string
  addressLine2: string
  city: string
  countryId: string
  state: string
  zipCode: string
}

export type TenantModel = {
  id: string
  name: string
  slug: string
  googleTenantId: string
  logo: string
  accountName: string
  publicBusinessName: string
  supportEmail: string
  supportPhoneNumber: string
  showPhoneOnInvoiceAndReceipt: boolean
  statementDescriptor: string
  shortenedDescriptor: string
  businessWebsite: string
  supportWebsite: string
  privacyPolicy: string
  termsOfService: string
  supportAddress: SupportAddress
}
