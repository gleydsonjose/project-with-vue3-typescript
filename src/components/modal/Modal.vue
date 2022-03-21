<script setup lang="ts">
import { useStore } from '@/stores'
import { storeToRefs } from 'pinia'

const store = useStore()
const { closeModal } = store
const { showModal } = storeToRefs(store)
</script>

<template>
  <div class="modal-background" v-show="showModal" @click.self="closeModal">
    <div class="modal-foreground">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modal-background {
  background-color: var(--transparent-black);
  top: 0;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
}

.modal-foreground {
  background-color: var(--white);
  border-radius: 6px;
  width: 100%;
}
</style>
