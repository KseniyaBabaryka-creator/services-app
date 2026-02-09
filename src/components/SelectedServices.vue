<template>
  <div class="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 space-y-4 mx-auto">
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Vybrané služby</h2>
    <ul class="selected__list space-y-4">
      <li
        class="flex items-center justify-between bg-emerald-50 border border-emerald-200 rounded-xl p-4 hover:bg-emerald-100 transition duration-200"
        :key="service.id"
        v-for="service in selectedServices">

        <div class="flex flex-col gap-1">
          <h3 class="text-lg font-semibold text-slate-800">{{ service.name }}</h3>
          <div class="text-sm text-slate-700 flex gap-3">
            <span>{{ service.price === 0 ? 'Zdarma' : service.price + ' Kč' }}</span>
            <span>{{ service.durationMin }} min</span>
            <span>{{ service.coveredByEmployer ? 'Hrazeno zaměstnavatelem' : 'Nehrazeno' }}</span>
          </div>
        </div>

        <button
          @click="() => handleRemove(service.id)"
          class="text-rose-600 hover:text-rose-800 transition p-2 rounded-full cursor-pointer"
          title="Odstranit službu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

      </li>
    </ul>
  </div>
</template>

<script setup>
  import { useAppStore } from '@/stores/appStore.js'
  import { computed } from 'vue'

  const store = useAppStore();
  const services = store.services;

  const selectedServices = computed(() => {
    return services.filter(service =>
      store.selectedServices.includes(service.id)
    )
  });

  const handleRemove = (id) => {
    store.setStore('selectedServices', store.selectedServices.filter(serviceId => serviceId !== id));
  }

</script>

