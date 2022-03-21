<script setup lang="ts">
import type { IBenefit } from '@/types/benefit'
import { getColorTypeDetails } from '@/helpers'
import { useStore } from '@/stores'
import PeriodFilter from '@/components/period-filter/PeriodFilter.vue'

interface IBenefitHeader {
  benefit?: IBenefit
  search: string
}

const { benefit } = defineProps<IBenefitHeader>()

const { openModal, openPeriodFilter } = useStore()

defineEmits(['search'])
</script>

<template>
  <header class="benefit__header">
    <section class="benefit-header__top-section">
      <button class="benefit-back-button">
        <i class="mdi mdi-arrow-left benefit-back-button__icon"></i>
      </button>
      <section class="benefit__details">
        <p class="benefit__balance-section">
          <span class="benefit__currency">R$</span>
          <span class="benefit__balance">{{ benefit?.balance }}</span>
        </p>
        <p class="benefit__title">{{ benefit?.title }}</p>
      </section>
      <button class="benefit-help-button" @click="openModal">
        <i class="mdi mdi-help-circle-outline benefit-help-button__icon"></i>
      </button>
    </section>
    <section class="benefit-header__bottom-section">
      <section class="benefit-search-bar">
        <i class="mdi mdi-magnify benefit-search-bar__icon"></i>
        <input v-model="search" type="text" placeholder="Buscar" class="benefit-search-bar__input" />
      </section>
      <button class="benefit-period-button" @click="openPeriodFilter">
        <i class="mdi mdi-calendar-month-outline benefit-period-button__icon"></i>
        <span class="benefit-period-button__text">Período</span>
      </button>
    </section>
  </header>

  <PeriodFilter />
</template>

<style scoped>
.benefit__header {
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  position: fixed;
}

.benefit-header__top-section {
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: space-between;
  background-color: v-bind('getColorTypeDetails(benefit?.colorType).first');
  padding: 35px 13px 15px 20px;
  border-radius: 0 0 15px 15px;
}

.benefit-back-button {
  border-radius: 50%;
  padding: 6px 6px 4px 6px;
  border: none;
  background-color: var(--white);
}

.benefit-back-button:active {
  background-color: v-bind('getColorTypeDetails(benefit?.colorType).secondary');
}

.benefit-back-button__icon {
  font-size: 14pt;
  color: v-bind('getColorTypeDetails(benefit?.colorType).first');
}

.benefit__details {
  display: flex;
  flex-flow: column nowrap;
  color: var(--white);
}

.benefit__balance-section {
  display: flex;
  flex-flow: row nowrap;
  margin: 0;
  align-items: flex-end;
  justify-content: center;
}

.benefit__currency {
  margin-bottom: 6px;
}

.benefit__balance {
  margin-left: 4px;
  font-size: 23pt;
  font-weight: 700;
}

.benefit__title {
  text-transform: uppercase;
  font-size: 13pt;
  letter-spacing: 3px;
  margin: -6px 0 0 0;
}

.benefit-help-button {
  border: none;
  background: transparent;
}

.benefit-help-button__icon {
  font-size: 22pt;
  color: var(--white);
}

.benefit-help-button__icon:active {
  color: v-bind('getColorTypeDetails(benefit?.colorType).secondary');
}

.benefit-header__bottom-section {
  display: flex;
  justify-content: center;
  padding: 8px 22px;
  background-color: var(--dark-white);
}

.benefit-search-bar {
  display: flex;
  position: relative;
  width: 100%;
}

.benefit-search-bar__icon {
  top: 6px;
  left: 7px;
  font-size: 16pt;
  position: absolute;
  color: var(--gray);
}

.benefit-search-bar__input {
  padding: 12px 0 12px 33px;
  border-radius: 6px;
  border: none;
  background-color: var(--light-gray);
  font-size: 11pt;
  width: 100%;
}

.benefit-period-button {
  display: flex;
  align-items: center;
  border: 1px solid var(--blue);
  color: var(--blue);
  margin-left: 12px;
  padding: 0 11px;
  border-radius: 6px;
  user-select: none;
}

.benefit-period-button:active {
  opacity: 0.4;
}

.benefit-period-button__icon {
  font-size: 14pt;
  margin-right: 6px;
}

.benefit-period-button__text {
  font-size: 11pt;
  font-weight: 700;
}
</style>
