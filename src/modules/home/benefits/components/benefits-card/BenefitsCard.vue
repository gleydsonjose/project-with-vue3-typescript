<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import type { IColors } from '@/types/colors'
import { getColorTypeDetails } from '@/helpers'
import BalanceSection from '@/components/balance-section/BalanceSection.vue'

interface IBenefitsCardProps {
  name?: string
  balance?: number
  colorType?: keyof IColors
  icon?: string
  title?: string
  useRowMode?: boolean
}

const { name, balance, colorType, icon, title, useRowMode } = defineProps<IBenefitsCardProps>()

const router = useRouter()

const benefitsCardAdditionalClass = computed(() => {
  const classes = []

  if (useRowMode) classes.push('benefits-card--row-mode')

  return classes
})
const balanceSectionAdditionalStyle = computed(() => ({
  gridArea: 'balance',
  padding: '10px 0',
  justifySelf: useRowMode ? 'flex-end' : 'flex-start',
}))

const goToTheBenefitPage = () => {
  router.push({ name: 'Benefit', params: { name } })
}
</script>

<template>
  <section class="benefits-card" :class="benefitsCardAdditionalClass" @click="goToTheBenefitPage">
    <i class="benefits-card__icon mdi" :class="icon"></i>
    <BalanceSection :balance="balance" :style="balanceSectionAdditionalStyle" :use-row-mode="useRowMode" use-dark-mode use-show-balance />
    <p class="benefits-card__title">{{ title }}</p>
  </section>
</template>

<style>
.benefits-card {
  display: grid;
  grid-template-areas: 'icon' 'balance' 'title';
  border-radius: 10px;
  width: 110px;
  color: #fff;
  padding: 11px 15px 13px 15px;
  background-color: v-bind('getColorTypeDetails(colorType).first');
  box-shadow: 0 0 10px -3px v-bind('getColorTypeDetails(colorType).secondary');
}

.benefits-card:active {
  opacity: 0.4;
}

.benefits-card__icon {
  grid-area: icon;
  font-size: 19pt;
}

.benefits-card__title {
  grid-area: title;
  display: flex;
  align-items: flex-end;
  margin: 0;
  font-size: 8.5pt;
  text-transform: uppercase;
  font-weight: 700;
  height: 39px;
}

.benefits-card--row-mode {
  align-items: center;
  grid-template-columns: 10% 25% 65%;
  grid-template-areas: 'icon title balance';
  padding: 11px 15px;
  width: auto;
}

.benefits-card--row-mode .benefits-card__title {
  align-items: center;
}
</style>
