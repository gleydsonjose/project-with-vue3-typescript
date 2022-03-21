<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useStore } from '@/stores'

const store = useStore()
const { showBalance } = storeToRefs(store)
const { toggleShowBalance } = store
const showBalanceIcon = computed(() => (showBalance ? 'mdi-eye-outline' : 'mdi-eye-off-outline'))
</script>

<template>
  <header class="user">
    <p class="user__details">
      Oi,
      <span class="user__name">Usuário</span>
    </p>

    <button class="user__show-balance-button" @click="toggleShowBalance">
      <i class="user__show-balance-icon mdi" :class="showBalanceIcon"></i>
    </button>
  </header>
</template>

<style scoped>
.user {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
}

.user__details {
  font-size: 15pt;
}

.user__name {
  font-weight: 700;
}

.user__show-balance-button {
  padding: 0;
  background: transparent;
  border: none;
}

.user__show-balance-icon {
  font-size: 14pt;
}
</style>
