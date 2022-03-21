<script setup lang="ts">
import { computed } from 'vue'
import type { ITransaction } from '@/types/transactions'
import BalanceSection from '@/components/balance-section/BalanceSection.vue'
import { getColorTypeDetails } from '@/helpers'

interface ITransactionsProps {
  transaction: ITransaction
  useFullDate?: boolean
}

const { transaction, useFullDate } = defineProps<ITransactionsProps>()

const transactionDateFormatted = computed(() => {
  const { time, day, month, year } = transaction.date
  let dateFormatted = time
  const dayValue = day.toString().padStart(2, '0')
  const monthValue = month.toString().padStart(2, '0')

  if (useFullDate) {
    dateFormatted = `${dayValue}/${monthValue}/${year} - ${time}`
  }

  return dateFormatted
})
</script>

<template>
  <section class="transaction">
    <i class="mdi transaction__icon" :class="transaction.icon.class" :style="{ backgroundColor: getColorTypeDetails(transaction.icon.color).first }"></i>
    <section class="transaction__details">
      <p class="transaction__text">{{ transaction.title }}</p>
      <span class="transaction__date">{{ transactionDateFormatted }}</span>
    </section>
    <BalanceSection :balance="transaction.balance.balance" use-row-mode :symbol="transaction.balance.symbol" />
  </section>
</template>

<style scoped>
.transaction {
  display: flex;
  align-items: center;
  padding-bottom: 5px;
}

.transaction__icon {
  color: var(--white);
  font-size: 11pt;
  border-radius: 50%;
  padding: 2.5px 5px 1.5px 5px;
}

.transaction__details {
  display: flex;
  flex-flow: column nowrap;
  margin-left: 16px;
  width: 100%;
}

.transaction__text {
  margin: 0;
  font-size: 12pt;
}

.transaction__date {
  font-size: 10pt;
  color: var(--gray);
}
</style>
