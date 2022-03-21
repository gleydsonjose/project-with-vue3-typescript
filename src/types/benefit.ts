import type { IColors } from '@/types/colors'

export type BenefitNamesUnion = 'refeicao' | 'alimentacao' | 'mobilidade' | 'cultura' | 'saude' | 'educacao' | 'saldo-livre'

export interface IBenefit {
  name: BenefitNamesUnion
  balance: number
  icon: string
  title: string
  description: string
  colorType: keyof IColors
}