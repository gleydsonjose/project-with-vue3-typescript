<script setup lang="ts">
import BenefitsBalanceExtraInfo from '@/modules/home/benefits/components/benefits-balance-extra-info/BenefitsBalanceExtraInfo.vue'
import BenefitsCards from '@/modules/home/benefits/components/benefits-cards/BenefitsCards.vue'
</script>

<template>
  <section class="benefits">
    <h1 class="benefits__title">Benefícios</h1>
    <BenefitsCards />
    <BenefitsBalanceExtraInfo />
  </section>
</template>

<style scoped>
.benefits__title {
  text-transform: uppercase;
  font-size: 9pt;
}
</style>
