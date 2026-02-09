<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useAppStore } from '@/stores/appStore.js'
const store = useAppStore();
store.initStore();
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
