<script setup lang="ts">
import User from '@/modules/home/user/User.vue'
import Benefits from '@/modules/home/benefits/Benefits.vue'
import ExtraBalance from '@/modules/home/extra-balance/ExtraBalance.vue'
import Separator from '@/components/separator/Separator.vue'
import LastTransactions from '@/modules/home/last-transactions/LastTransactions.vue'
</script>

<template>
  <section class="home">
    <User />
    <Benefits />
    <Separator />
    <ExtraBalance />
    <LastTransactions />
  </section>
</template>

<style scoped>
.home {
  padding: 0 25px;
}
</style>
