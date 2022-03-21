<script setup lang="ts">
import { computed } from 'vue'
import BenefitsBalanceExtraInfoRow from '@/modules/home/benefits/components/benefits-balance-extra-info/components/benefits-balance-extra-info-row/BenefitsBalanceExtraInfoRow.vue'

const totalBalance = computed(() => {
  return 150
})

const flexibleBalance = computed(() => {
  return 75
})
</script>

<template>
  <section class="benefits-balance-extra-info">
    <BenefitsBalanceExtraInfoRow title="Total em benefícios" :balance="totalBalance" style="margin-bottom: 7px" />
    <BenefitsBalanceExtraInfoRow title="Valor flexível" use-modal-button :balance="flexibleBalance" />
  </section>
</template>

<style scoped>
.benefits-balance-extra-info {
  display: flex;
  flex-flow: column nowrap;
  margin-top: 15px;
}
</style>
