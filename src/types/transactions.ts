import type { IColors } from '@/types/colors'
import type { BenefitNamesUnion } from '@/types/benefit'

export type SymbolUnion = '+' | '-'

export interface ITransactionIcon {
  class: string
  color: keyof IColors
}

export interface ITransactionDate {
  day: number
  month: number
  year: number
  time: string
}

export interface ITransactionBalance {
  symbol: SymbolUnion
  balance: number
}

export interface ITransaction {
  icon: ITransactionIcon
  title: string
  date: ITransactionDate
  balance: ITransactionBalance
  benefitName: BenefitNamesUnion
}

export interface ITransactionsGroup {
  date: Omit<ITransactionDate, 'time' | 'year'>
  transactions: ITransaction[]
}