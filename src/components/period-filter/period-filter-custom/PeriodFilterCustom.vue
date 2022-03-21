<script setup lang="ts"></script>

<template>
  <section class="period-filter-custom">
    <section class="period-filter-custom__header">
      <h2 class="period-filter-custom__title">Personalizado</h2>
      <button class="period-filter-custom__clear-button">Limpar</button>
    </section>

    <section class="period-filter-custom__input-group">
      <input type="text" class="period-filter-custom__input" placeholder="De" />
      <input type="text" class="period-filter-custom__input" placeholder="Até" />
    </section>
  </section>
</template>

<style scoped>
.period-filter-custom {
  display: flex;
  flex-flow: column nowrap;
}

.period-filter-custom__header {
  display: flex;
  justify-content: space-between;
  margin: 25px 0 10px 0;
}

.period-filter-custom__title {
  margin: 0;
  font-size: 10pt;
}

.period-filter-custom__clear-button {
  color: var(--blue);
  border: none;
  background: transparent;
  user-select: none;
}

.period-filter-custom__clear-button:active {
  color: var(--light-gray);
}

.period-filter-custom__clear-button--disable {
  color: var(--light-gray);
}

.period-filter-custom__input-group {
  margin-top: 5px;
  display: flex;
}
.period-filter-custom__input {
  padding: 12px 12px 11px 12px;
  border-radius: 6px;
  border: none;
  border: 1px solid var(--light-gray);
  background-color: var(--light-gray);
  font-size: 11pt;
  width: 100%;
}

.period-filter-custom__input:focus {
  outline: none;
  border: 1px solid var(--blue);
  background-color: var(--white);
}

.period-filter-custom__input::placeholder {
  font-size: 10pt;
  font-weight: bold;
}

.period-filter-custom__input:first-child {
  margin-right: 15px;
}
</style>
