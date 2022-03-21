<script setup lang="ts"></script>

<template>
  <footer class="benefit__footer">
    <button class="benefit-transfer-balance-button">
      <i class="mdi mdi-swap-horizontal benefit-transfer-balance-button__icon"></i>
      <span class="benefit-transfer-balance-button__text">Transferir saldo</span>
    </button>
  </footer>
</template>

<style scoped>
.benefit__footer {
  bottom: 0;
  padding: 8px 22px;
  position: fixed;
  background-color: var(--dark-white);
  border: 1px solid var(--dark-white);
}

.benefit-transfer-balance-button {
  width: 100%;
  background-color: var(--blue);
  padding: 10px 0 8px 0;
  border: none;
  border-radius: 6px;
  color: var(--white);
  font-weight: 700;
  width: 368px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.benefit-transfer-balance-button:active {
  opacity: 0.4;
}

.benefit-transfer-balance-button--disable {
  opacity: 0.4;
}

.benefit-transfer-balance-button__icon {
  font-size: 15pt;
  margin-right: 6px;
}

.benefit-transfer-balance-button__text {
  font-size: 11pt;
}
</style>
