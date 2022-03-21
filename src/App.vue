<script setup lang="ts"></script>

<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap');

body {
  --white: #fff;
  --dark-white: #f5f5f5;
  --light-gray: #dbdbdb;
  --gray: #868686;
  --blue: #1f86e7;
  --transparent-black: #22222286;
  --black: #222222;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--dark-white);
  font-family: Poppins, sans-serif;
}
</style>
