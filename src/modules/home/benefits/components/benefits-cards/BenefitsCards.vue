<script setup lang="ts">
import BenefitsCard from '@/modules/home/benefits/components/benefits-card/BenefitsCard.vue'
import SortButton from '@/modules/home/benefits/components/sort-button/SortButton.vue'
import useBenefits from '@/composables/useBenefits'

const { benefits } = useBenefits()
</script>

<template>
  <section class="benefits__cards">
    <section class="benefits__cards-inner">
      <BenefitsCard v-for="benefit in benefits" :key="benefit.name" :name="benefit.name" :balance="benefit.balance" :color-type="benefit.colorType" :icon="benefit.icon" :title="benefit.title" style="margin-right: 10px" />
      <SortButton />
    </section>
  </section>
</template>

<style scoped>
.benefits__cards {
  position: relative;
  height: 185px;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
}

.benefits__cards::-webkit-scrollbar {
  display: none;
}

.benefits__cards-inner {
  position: absolute;
  display: flex;
}
</style>
