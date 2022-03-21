import { ref, onMounted, watchEffect } from 'vue'
import type { IBenefit, BenefitNamesUnion } from '@/types/benefit'
import benefitsData from '@/data/benefits'

export default function (benefitName?: BenefitNamesUnion) {
  let benefits = ref<IBenefit[]>([])
  let benefit = ref<IBenefit | undefined>(undefined)

  const getOneBenefit = (name: BenefitNamesUnion) => {
    const benefitSelected = benefitsData.find((benefit => benefit.name === name))
    return benefitSelected
  }

  const getAllBenefit = () => {
    return benefitsData
  }

  watchEffect(
    () => {
      if (benefitName) benefit.value = getOneBenefit(benefitName)
    }
  )

  onMounted(() => {
    benefits.value = getAllBenefit()
  })

  return { benefits, benefit, getOneBenefit, getAllBenefit }
}