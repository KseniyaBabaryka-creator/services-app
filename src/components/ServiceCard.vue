<template>
  <li class="services__card bg-white border border-slate-200 rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition duration-200">
    <div class="service__chips flex flex-wrap gap-2 mb-4">
      <span v-if="service.price === 0" class="px-2 py-0.5 text-xs font-semibold text-emerald-800 bg-emerald-100 rounded-full">Zdarma</span>
      <span v-if="service.price > 0" class="px-2 py-0.5 text-xs font-semibold text-slate-800 bg-slate-100 rounded-full">{{service.price}} Kč</span>
      <span class="px-2 py-0.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-full">{{service.durationMin}} minut</span>
      <span class="px-2 py-0.5 text-xs font-semibold rounded-full"
            :class="service.coveredByEmployer ? 'text-emerald-800 bg-emerald-100' : 'text-rose-800 bg-rose-100'">{{service.coveredByEmployer ? 'Hrazeno zaměstnavatelem' : 'Nehrazeno'}}</span>
    </div>
    <div class="service__info mb-6">
      <h2 class="service__name text-lg font-bold text-slate-800 mb-2">{{service.name}}</h2>
      <p class="service__desc text-sm text-slate-600 line-clamp-3">{{service.description}}</p>
    </div>
    <button @click="handleClick" class="service__btn w-full bg-emerald-600 hover:bg-emerald-700 active:scale-[0.97] text-white font-semibold py-3 rounded-lg shadow-sm transition duration-200 cursor-pointer">Vybrat službu</button>
  </li>
</template>

<script setup>

  import { useAppStore } from '@/stores/appStore.js'

  const { service } = defineProps({
    service: Object
  });

  const store = useAppStore();

  const handleClick = () => {
    if (!store.selectedServices.includes(service.id)) {
      store.setStore('selectedServices', [...store.selectedServices, service.id]);
    }
  }
</script>
