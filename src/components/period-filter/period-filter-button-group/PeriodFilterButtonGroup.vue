<script setup lang="ts">
import { reactive, toRefs, unref } from 'vue'
import { DaysFilterUnion, ICustomDateFilter, DaysFilterTuple } from '@/types/filters'

interface IPeriodFilterButtonGroupProps {
  selectedDay: DaysFilterUnion
  customDate: ICustomDateFilter
}

const props = defineProps<IPeriodFilterButtonGroupProps>()

const emit = defineEmits(['update:selectedDay', 'update:customDate'])

const { selectedDay, customDate } = toRefs(props)
const daysFilter = reactive<DaysFilterTuple>([7, 15, 30, 60, 90])

const checkIfCurrentDayFilterIsActive = (day: number) => {
  if (unref(selectedDay) === day) return 'period-filter-button-group__button--active'
  return ''
}
const selectDayFilter = (day: number) => {
  emit('update:selectedDay', day)
}
</script>

<template>
  <section class="period-filter-button-group">
    <section class="period-filter-button-group__inner">
      <button v-for="day in daysFilter" :key="day" class="period-filter-button-group__button" :class="checkIfCurrentDayFilterIsActive(day)" @click="selectDayFilter(day)">
        {{ `${day} dias` }}
      </button>
    </section>
  </section>
</template>

<style scoped>
.period-filter-button-group {
  margin-top: 25px;
  position: relative;
  width: 100%;
  height: 45px;
  overflow-x: auto;
  overflow-y: hidden;
}

.period-filter-button-group::-webkit-scrollbar {
  display: none;
}

.period-filter-button-group__inner {
  position: absolute;
  display: flex;
}

.period-filter-button-group__button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid var(--blue);
  color: var(--blue);
  margin-right: 8px;
  padding: 8px 0;
  width: 70px;
  border-radius: 6px;
  font-weight: bold;
}

.period-filter-button-group__button:last-child {
  margin-right: 0;
}

.period-filter-button-group__button:active {
  opacity: 0.4;
}

.period-filter-button-group__button--active {
  background-color: var(--blue);
  color: var(--white);
}
</style>
