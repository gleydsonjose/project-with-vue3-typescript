<script setup lang="ts">
import Modal from '@/components/modal/Modal.vue'
import type { IBenefit } from '@/types/benefit'
import { computed } from 'vue'
import { getColorTypeDetails } from '@/helpers'
import { useStore } from '@/stores'

interface IBenefitModalProps {
  benefit?: IBenefit
}

const { benefit } = defineProps<IBenefitModalProps>()

const { closeModal } = useStore()

const benefitModalIconAdditionalStyle = computed(() => {
  return {
    backgroundColor: getColorTypeDetails(benefit?.colorType).first,
  }
})
const benefitModalTitleAdditionalStyle = computed(() => {
  return {
    color: getColorTypeDetails(benefit?.colorType).first,
  }
})
</script>

<template>
  <Teleport to="#modals">
    <Modal>
      <section class="benefit-modal">
        <section class="benefit-modal__inner">
          <i class="benefit-modal__icon mdi" :class="benefit?.icon" :style="benefitModalIconAdditionalStyle"></i>
          <h1 class="benefit-modal__title" :style="benefitModalTitleAdditionalStyle">{{ benefit?.title }}</h1>
          <h2 class="benefit-modal__subtitle">Onde posso usar?</h2>
          <p class="benefit-modal__description">{{ benefit?.description }}</p>
        </section>
        <button class="benefit-modal__confirm-button" @click="closeModal">Entendi</button>
      </section>
    </Modal>
  </Teleport>
</template>

<style scoped>
.benefit-modal {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px 20px 20px;
}

.benefit-modal__inner {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.benefit-modal__icon {
  font-size: 30pt;
  padding: 2px 12px;
  border-radius: 50%;
  color: var(--white);
}

.benefit-modal__title {
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 12pt;
  margin: 7px 0 0 0;
}

.benefit-modal__subtitle {
  font-size: 13pt;
  font-weight: bold;
  margin: 9px 0 0 0;
}

.benefit-modal__description {
  font-size: 11.5pt;
  margin: 9px 0;
  padding: 0 8px;
}

.benefit-modal__confirm-button {
  width: 100%;
  background-color: var(--blue);
  padding: 10px 0;
  border: none;
  border-radius: 6px;
  color: var(--white);
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.benefit-modal__confirm-button:active {
  opacity: 0.4;
}
</style>
