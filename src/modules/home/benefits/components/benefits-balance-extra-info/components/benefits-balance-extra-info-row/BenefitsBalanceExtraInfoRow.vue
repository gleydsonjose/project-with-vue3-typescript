<script setup lang="ts">
import { computed } from 'vue'
import BalanceSection from '@/components/balance-section/BalanceSection.vue'

const { balance, useModalButton } = defineProps({
  title: {
    type: String,
    default: '',
  },
  useModalButton: {
    type: Boolean,
    default: false,
  },
  balance: {
    type: Number,
    default: 0,
  },
})

const rowTitleDetails = computed(() => {
  const rowTitle = {
    class: 'benefits-balance-extra-info__title',
    htmlTag: 'p',
  }

  if (useModalButton) {
    rowTitle.class = 'benefits-balance-extra-info__modal-button'
    rowTitle.htmlTag = 'button'
  }

  return rowTitle
})
</script>

<template>
  <section class="benefits-balance-extra-info__row">
    <component :is="rowTitleDetails.htmlTag" :class="rowTitleDetails.class">
      {{ title }}

      <template v-if="useModalButton">
        <i class="benefits-balance-extra-info__modal-button-icon mdi mdi-information-outline"></i>
      </template>
    </component>

    <BalanceSection :balance="balance" use-row-mode font-size-mode="small" use-show-balance />
  </section>
</template>

<style scoped>
.benefits-balance-extra-info__row {
  display: flex;
  justify-content: space-between;
}

.benefits-balance-extra-info__title {
  font-size: 11pt;
  font-weight: bold;
  margin: 0;
}

.benefits-balance-extra-info__modal-button {
  padding: 0;
  border: none;
}

.benefits-balance-extra-info__modal-button:active {
  opacity: 0.4;
}

.benefits-balance-extra-info__modal-button-icon {
  margin-left: 1px;
  font-size: 11pt;
}
</style>
