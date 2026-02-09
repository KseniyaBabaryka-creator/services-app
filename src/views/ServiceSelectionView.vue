<template>
  <div class="services__container min-h-screen px-4 py-8">
    <div class="max-w-6xl mx-auto space-y-8">
      <div class="services__header flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 class="services__title text-3xl font-bold text-[#0F4C3E]">Výběr služby</h1>
        <button @click="handleLogout" class="services__logout self-start sm:self-auto text-sm font-semibold text-emerald-700 hover:text-emerald-900 transition cursor-pointer">Odhlásit se</button>
      </div>
      <FilterBar />

      <SelectedServices v-if="selectedServices && selectedServices.length > 0"/>

      <div v-if="!services || services.length <= 0" class="bg-white border border-slate-200 rounded-xl shadow-sm p-10 text-center">
        <p class="text-slate-600 text-lg">
          Momentálně nenabízíme žádné služby.
        </p>
      </div>
      <div v-else class="services__wrapper">
        <ul v-if="filteredServices.length > 0" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard :key="service.id" v-for="service in filteredServices" :service="service"/>
        </ul>
        <div v-else class="bg-white border border-slate-200 rounded-xl shadow-sm p-10 text-center">
          <p class="text-slate-600 text-lg">
            Žádná služba neodpovídá vybraným filtrům.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import ServiceCard from '@/components/ServiceCard.vue';
import { useAppStore } from '@/stores/appStore.js';
import FilterBar from '@/components/FilterBar.vue';
import SelectedServices from '@/components/SelectedServices.vue'
import { useRouter } from 'vue-router';
import { computed, onMounted } from 'vue';

const store = useAppStore();
const router = useRouter();

const services = store.services;
const filters = store.filters;

const selectedServices = computed(() =>
  store.services.filter(service => store.selectedServices.includes(service.id))
);

const filteredServices = computed(() => {
  return services.filter(service => {
    const byCategory = !store.filters.category || service.category === store.filters.category
    const byFree = !store.filters.free || service.price === 0
    const byTime = !store.filters.time || service.durationMin <= 20

    return byCategory && byFree && byTime;
  })
})

const handleLogout = () => {
  store.resetStore();
  router.push('/login');
};

onMounted(() => {
  if (!store.user) {
    router.push('/login')
  }
})
</script>

<style scoped>

</style>
