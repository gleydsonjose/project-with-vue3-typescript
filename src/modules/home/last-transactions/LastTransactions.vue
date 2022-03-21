<script setup lang="ts">
import Transaction from '@/components/transaction/Transaction.vue'
import { ITransaction } from '@/types/transactions'
import transactions from '@/data/transactions'

const getLastTransactions = (quantity: number = 1) => {
  const lastTransactions: ITransaction[] = []

  if (transactions.length) {
    for (let currentIndex = 0; currentIndex < quantity; currentIndex++) {
      lastTransactions.push(transactions[currentIndex])
    }
  }

  return lastTransactions
}
</script>

<template>
  <section class="last-transactions">
    <h1 class="last-transactions__title">Últimas transações</h1>

    <Transaction v-for="(transaction, transactionIndex) in getLastTransactions(2)" :key="transactionIndex" :transaction="transaction" use-full-date />
  </section>
</template>

<style scoped>
.last-transactions {
  display: flex;
  flex-flow: column nowrap;
}

.last-transactions__title {
  margin: 0 0 12px 0;
  text-transform: uppercase;
  font-size: 9pt;
}
</style>
