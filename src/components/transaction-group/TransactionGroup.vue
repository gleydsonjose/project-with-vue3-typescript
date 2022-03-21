<script setup lang="ts">
import { computed, unref } from 'vue'
import { getMonthLabel } from '@/helpers'
import Transaction from '@/components/transaction/Transaction.vue'
import type { ITransaction, ITransactionsGroup } from '@/types/transactions'

interface TransactionGroupProps {
  transactions: ITransaction[]
}

const { transactions } = defineProps<TransactionGroupProps>()

const transactionsGroups = computed(() => {
  let transactionsGroups: ITransactionsGroup[] = []

  unref(transactions).forEach((transaction) => {
    const transactionsGroupIndex = transactionsGroups.findIndex((transactionsGroup) => transactionsGroup.date.day === transaction.date.day && transactionsGroup.date.month === transaction.date.month)

    if (transactionsGroupIndex !== -1) {
      transactionsGroups[transactionsGroupIndex].transactions.push(transaction)
    } else {
      transactionsGroups.push({
        date: {
          day: transaction.date.day,
          month: transaction.date.month,
        },
        transactions: [transaction],
      })
    }
  })

  return transactionsGroups
})
</script>

<template>
  <section class="transaction-group" v-for="(transactionsGroup, transactionsGroupIndex) in transactionsGroups" :key="transactionsGroupIndex">
    <p class="transaction-group__date">{{ `${transactionsGroup.date.day} de ${getMonthLabel(transactionsGroup.date.month)}` }}</p>
    <section class="transaction-group__list">
      <Transaction v-for="(transaction, transactionIndex) in transactionsGroup.transactions" :key="transactionIndex" :transaction="transaction" use-full-date />
    </section>
  </section>
</template>

<style scoped>
.transaction-group {
  display: flex;
  flex-flow: column nowrap;
}

.transaction-group__date {
  color: var(--gray);
  font-size: 10.5pt;
}

.transaction-group__list {
  display: flex;
  flex-flow: column nowrap;
}
</style>
