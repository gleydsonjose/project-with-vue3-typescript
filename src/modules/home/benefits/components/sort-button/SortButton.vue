<script setup lang="ts"></script>

<template>
  <button class="sort-button">
    <span class="sort-button__icon-outer">
      <i class="sort-button__icon mdi mdi-human-queue"></i>
    </span>
    <p class="sort-button__title">Ordernar</p>
  </button>
</template>

<style scoped>
.sort-button {
  background: transparent;
  display: grid;
  grid-template-rows: 33.33% 33.33% 33.33%;
  border: 1px solid var(--blue);
  border-radius: 10px;
  width: 90px;
  color: var(--blue);
  padding: 13px 0;
  justify-items: center;
  align-items: center;
  height: 173px;
}

.sort-button__icon-outer {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--blue);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  grid-row: 2/3;
}

.sort-button__icon {
  font-size: 13.5pt;
}

.sort-button__title {
  margin: 0;
  font-size: 8.5pt;
  text-transform: uppercase;
  font-weight: 700;
  grid-row: 3/4;
  align-self: flex-end;
}
</style>
