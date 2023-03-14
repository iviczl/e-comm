<script setup >
import Trending from './views/Trending.vue'
import { useConfigStore } from '@/stores/config.js';

const config = useConfigStore()
config.initMobileDetection()
</script>

<template>
  <main>
    <Trending />
  </main>
</template>

<style scoped>
main {
  position: relative;
  width: 1600px;
  height: 1266px;

  /* white */

  background: #FFFFFF;
}
</style>
