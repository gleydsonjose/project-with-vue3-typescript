<script setup lang="ts">
import { computed, unref } from 'vue'
import { storeToRefs } from 'pinia'
import { useStore } from '@/stores'
import type { SymbolUnion } from '@/types/transactions'
import type { FontSizeModeUnion } from '@/types/font'

interface IBalanceSectionProps {
  balance?: number
  useRowMode?: boolean
  fontSizeMode?: FontSizeModeUnion
  useDarkMode?: boolean
  symbol?: SymbolUnion
  useShowBalance?: boolean
}

const { balance, useRowMode, fontSizeMode, useDarkMode, useShowBalance } = defineProps<IBalanceSectionProps>()

const { showBalance } = storeToRefs(useStore())

const getBalanceSectionFontSize = (sizeMode: string = 'normal') => {
  let balanceSectionFontSize = ''

  switch (sizeMode) {
    case 'small':
      balanceSectionFontSize = '11pt'
      break
    default:
      balanceSectionFontSize = '12pt'
      break
  }

  return balanceSectionFontSize
}

const showBalanceFinalValue = computed(() => {
  return useShowBalance ? unref(showBalance) : true
})

const balanceFormatted = computed(() => {
  const balanceValue = balance || 0
  const balanceValueFormatted = balanceValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })

  return unref(showBalanceFinalValue) ? balanceValueFormatted : '........'
})
const balanceSectionStyles = computed(() => {
  const styles = {
    section: {
      flexDirection: useRowMode ? 'row' : 'column',
      fontColor: useDarkMode ? '#fff' : '#222222',
    },
    currency: {
      fontSize: getBalanceSectionFontSize(fontSizeMode),
    },
    balance: {
      marginTop: useRowMode && !unref(showBalanceFinalValue) ? '-3px' : '0',
      fontSize: getBalanceSectionFontSize(fontSizeMode),
    },
  }

  return styles
})
</script>

<template>
  <section class="balance-section">
    <span class="balance-section__symbol" v-if="symbol">{{ symbol }}</span>
    <span class="balance-section__currency">R$</span>
    <p class="balance-section__balance">{{ balanceFormatted }}</p>
  </section>
</template>

<style scoped>
.balance-section {
  display: flex;
  flex-direction: v-bind('balanceSectionStyles.section.flexDirection');
  color: v-bind('balanceSectionStyles.section.fontColor');
}

.balance-section__symbol {
  align-self: center;
  margin-top: 2px;
  margin-right: 3px;
  font-size: 10pt;
}

.balance-section__currency {
  margin-right: 3px;
  font-size: v-bind('balanceSectionStyles.currency.fontSize');
}

.balance-section__balance {
  margin-top: v-bind('balanceSectionStyles.balance.marginTop');
  margin-bottom: 0;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: v-bind('balanceSectionStyles.balance.fontSize');
}
</style>
