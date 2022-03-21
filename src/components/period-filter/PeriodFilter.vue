<script setup lang="ts">
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useStore } from '@/stores'
import PeriodFilterHeader from '@/components/period-filter/period-filter-header/PeriodFilterHeader.vue'
import PeriodFilterButtonGroup from '@/components/period-filter/period-filter-button-group/PeriodFilterButtonGroup.vue'
import PeriodFilterCustom from '@/components/period-filter/period-filter-custom/PeriodFilterCustom.vue'
import { IPeriodFilters } from '@/types/filters'

const store = useStore()
const { showPeriodFilter } = storeToRefs(store)
const periodFilters = reactive<IPeriodFilters>({
  selectedDay: 0,
  customDate: {
    start: '',
    final: '',
  },
})
</script>

<template>
  <Teleport to="#filters" v-if="showPeriodFilter">
    <section class="period-filter-background">
      <section class="period-filter">
        <PeriodFilterHeader />
        <PeriodFilterButtonGroup v-model:selectedDay="periodFilters.selectedDay" v-model:customDate="periodFilters.customDate" />
        <PeriodFilterCustom />
      </section>

      <button class="period-filter-button">Filtrar</button>
    </section>
  </Teleport>
</template>

<style scoped>
.period-filter-background {
  background-color: var(--white);
  top: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}

.period-filter {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  padding: 40px 25px;
}

.period-filter-button {
  background-color: var(--blue);
  padding: 10px 0;
  margin: 20px 25px;
  border: none;
  border-radius: 6px;
  color: var(--white);
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.period-filter-button:active {
  opacity: 0.4;
}

.period-filter-button--disable {
  opacity: 0.4;
}
</style>
