import { defineStore } from 'pinia';
import mockData from '../data/mockData.js';

export const useAppStore = defineStore('app', {
  state: () => ({
    user: null,
    services: mockData,
    selectedServices: [],
    filters: {}
  }),

  actions: {
    setStore(key, value) {
      if (key in this) {
        this[key] = value;
      }

      localStorage.setItem('serviceAppStore', JSON.stringify(this));
    },
    resetStore() {
      this.user = null;
      this.services = mockData;
      this.selectedServices = [];
      this.filters = {};
      localStorage.removeItem('serviceAppStore');
    },
    initStore() {
      const saved = localStorage.getItem('serviceAppStore');
      if (saved) {
        const parsed = JSON.parse(saved);
        this.$patch(parsed);
      }
    }
  }
});
