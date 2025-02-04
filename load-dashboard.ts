export type LoadDashboardModel = [
  {
    title: string
    value: string
    tooltipText: string
    type: 'currency' | 'number'
    variation: number
    cardPosition: 'top' | 'bottom'
  }
]
