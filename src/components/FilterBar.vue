<template>
  <div class="filters__container bg-white border border-slate-200 rounded-xl shadow-sm p-6">
    <div class="flex flex-col md:flex-row md:items-end gap-6">
      <div class="flex flex-col gap-2 w-full md:w-72">
        <label for="category" class="filters__label text-sm font-semibold text-slate-700">
          Kategorie služby
          <select v-model="category" id="category" class="filters__select w-full rounded-lg border border-slate-300 px-4 py-2.5 mt-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition">
            <option value="">Vyberte kategorii</option>
            <option value="general_health">Obecné zdraví</option>
            <option value="prevention">Prevence</option>
            <option value="mental_health">Psychické zdraví</option>
          </select>
        </label>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 sm:items-center">
        <label for="free" class="filters__label flex items-center gap-3 cursor-pointer select-none">
          <input v-model="free" type="checkbox" id="free" class="filters__checkbox h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500">
          <span class="text-sm font-medium text-slate-700">
            Pouze zdarma
          </span>
        </label>

        <label for="time" class="filters__label flex items-center gap-3 cursor-pointer select-none">
          <input v-model="time" type="checkbox" id="time" class="filters__checkbox h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500">
          <span class="text-sm font-medium text-slate-700">
            Do 20 minut
          </span>
        </label>
      </div>

      <button @click="handleReset" class="px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 active:scale-[0.97] transition duration-200 shadow-sm cursor-pointer">Vyčistit filtry</button>
    </div>
  </div>
</template>

<script setup>
  import { useAppStore } from '@/stores/appStore.js'
  import { ref, watch } from 'vue'

  const store = useAppStore();

  const free = ref(false);
  const time = ref(false);
  const category = ref('');

  watch(category, (newValue) => {
    store.setStore('filters', {...store.filters, category: newValue});
  })

  watch(free, (newValue) => {
    store.setStore('filters', {...store.filters, free: newValue});
  })

  watch(time, (newValue) => {
    store.setStore('filters', {...store.filters, time: newValue});
  })

  const handleReset = () => {
    store.setStore('filters', {});
  };

</script>

