<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import BenefitHeader from '@/modules/benefit/components/benefit-header/BenefitHeader.vue'
import BenefitTransactions from '@/modules/benefit/components/benefit-transactions/BenefitTransactions.vue'
import BenefitFooter from '@/modules/benefit/components/benefit-footer/BenefitFooter.vue'
import BenefitModal from '@/modules/benefit/components/benefit-modal/BenefitModal.vue'
import type { BenefitNamesUnion } from '@/types/benefit'
import useBenefits from '@/composables/useBenefits'

const search = ref('')

const route = useRoute()
const { name } = route.params

const { benefit } = useBenefits(name as BenefitNamesUnion)
</script>

<template>
  <section class="benefit">
    <BenefitHeader :benefit="benefit" v-model:search="search" />
    <BenefitTransactions :benefit="benefit" :search="search" />
    <BenefitFooter />
  </section>

  <BenefitModal :benefit="benefit" />
</template>

<style scoped>
.benefit {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
</style>
