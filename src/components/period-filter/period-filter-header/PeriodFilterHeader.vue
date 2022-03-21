<script setup lang="ts">
import { useStore } from '@/stores'
const { closePeriodFilter } = useStore()
</script>

<template>
  <section class="period-filter-header">
    <button class="period-filter-header__back-button" @click="closePeriodFilter">
      <i class="mdi mdi-arrow-left period-filter-header__back-button-icon"></i>
    </button>
    <h1 class="period-filter-header__title">Período</h1>
  </section>
</template>

<style scoped>
.period-filter-header {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  align-items: center;
  justify-items: center;
}

.period-filter-header__back-button {
  border-radius: 50%;
  padding: 6px 6px 4px 6px;
  border: 1px solid var(--blue);
  background: transparent;
  color: var(--blue);
  align-self: flex-start;
  justify-self: flex-start;
}

.period-filter-header__back-button:active {
  opacity: 0.4;
}

.period-filter-header__back-button-icon {
  font-size: 14pt;
}

.period-filter-header__title {
  margin: 0;
  font-size: 12pt;
}
</style>
