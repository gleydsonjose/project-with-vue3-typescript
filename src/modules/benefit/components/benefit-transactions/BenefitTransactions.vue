<script setup lang="ts">
import { computed, unref } from 'vue'
import TransactionGroup from '@/components/transaction-group/TransactionGroup.vue'
import type { IBenefit, BenefitNamesUnion } from '@/types/benefit'
import transactions from '@/data/transactions'
import { ITransaction } from '@/types/transactions'

interface IBenefitTransactionsProps {
  benefit?: IBenefit
  search: string
}

const { benefit, search } = defineProps<IBenefitTransactionsProps>()

const benefitTransactions = computed(() => {
  return getBenefitTransactions(benefit?.name)
})

const transactionsFiltered = computed(() => {
  const transactions = unref(benefitTransactions).filter((transaction) => transaction.title.includes(search))

  return transactions
})

const getBenefitTransactions = (benefitName?: BenefitNamesUnion) => {
  let allBenefitTransactions: ITransaction[] = []

  if (benefitName) {
    allBenefitTransactions = transactions.filter((transaction) => transaction.benefitName === benefitName)
  }

  return allBenefitTransactions
}
</script>

<template>
  <section class="benefit-transactions__outer">
    <section class="benefit-transactions">
      <TransactionGroup :transactions="transactionsFiltered" />
    </section>
  </section>
</template>

<style scoped>
.benefit-transactions__outer {
  width: 100%;
  padding: 170px 0 80px 0;
}

.benefit-transactions {
  display: flex;
  flex-flow: column nowrap;
  padding: 0 22px;
}
</style>
