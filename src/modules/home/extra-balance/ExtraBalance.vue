<script setup lang="ts">
import BenefitsCard from '@/modules/home/benefits/components/benefits-card/BenefitsCard.vue'
import useBenefits from '@/composables/useBenefits'

const { benefit } = useBenefits('saldo-livre')
</script>

<template>
  <section class="extra-balance">
    <h1 class="extra-balance__title">Outros saldos</h1>

    <BenefitsCard :name="benefit?.name" :balance="benefit?.balance" :color-type="benefit?.colorType" :icon="benefit?.icon" :title="benefit?.title" use-row-mode />
  </section>
</template>

<style scoped>
.extra-balance {
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 30px;
}

.extra-balance__title {
  margin: 0 0 12px 0;
  text-transform: uppercase;
  font-size: 9pt;
}
</style>
