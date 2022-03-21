import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    showBalance: false,
    showModal: false,
    showPeriodFilter: false
  }),
  actions: {
    toggleShowBalance() {
      this.showBalance = !this.showBalance
    },
    closeModal() {
      this.showModal = false
    },
    openModal() {
      this.showModal = true
    },
    closePeriodFilter() {
      this.showPeriodFilter = false
    },
    openPeriodFilter() {
      this.showPeriodFilter = true
    }
  }
})