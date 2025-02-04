export type LoadCalculatorHashModel = {
  id: string
  isCalculatorActive: boolean
  hashLink: string
  dolarQuotation: number
  minInstallmentAmount: {
    brl: number
    usd: number
  }
  tenantId: string
}
