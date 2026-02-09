<template>
  <div class="login__container w-full min-h-screen flex items-center justify-center">
    <form
      @submit.prevent="handleSubmit"
      class="login__form w-full flex flex-col max-w-sm bg-white shadow-md rounded-lg p-6"
    >
      <h1 class="login__title text-2xl font-semibold text-[#0F4C3E]">Přihlášení do účtu</h1>

      <div class="space-y-2">
        <label for="name" class="block text-sm font-semibold text-slate-700">
          Jméno a příjmení
        </label>
        <input
          v-model="username"
          @input="handleInput('username')"
          type="text"
          id="name"
          placeholder="Např. Jan Novák"
          class="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-800 placeholder-slate-400
               focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
               transition duration-200"
        />
        <p
          v-if="errors.username"
          class="text-sm text-red-500 font-medium"
        >
          Prosím, vyplňte své jméno a příjmení.
        </p>
      </div>

      <div class="space-y-2">
        <label for="email" class="block text-sm font-semibold text-slate-700">
          E-mailová adresa
        </label>
        <input
          v-model="email"
          @input="handleInput('email')"
          type="email"
          id="email"
          placeholder="jan.novak@email.cz"
          class="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-800 placeholder-slate-400
               focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
               transition duration-200"
        />
        <p
          v-if="errors.email"
          class="text-sm text-red-500 font-medium"
        >
          Prosím, zadejte platnou e-mailovou adresu.
        </p>
      </div>

      <div class="space-y-2">
        <label for="pass" class="block text-sm font-semibold text-slate-700">
          Heslo
        </label>
        <input
          v-model="pass"
          @input="handleInput('pass')"
          type="password"
          id="pass"
          placeholder="••••••••"
          class="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-800 placeholder-slate-400
               focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
               transition duration-200"
        />
        <p
          v-if="errors.pass"
          class="text-sm text-red-500 font-medium"
        >
          Heslo je povinné pole.
        </p>
      </div>


      <button
        type="submit"
        class="login__btn w-full bg-[#127C6E] hover:bg-[#0F4C3E] text-white font-semibold rounded-md px-4 py-2 transition mt-4"
        :class="{ 'opacity-50 cursor-not-allowed': pending }"
        :disabled="pending"
      >
        Přihlásit se
      </button>
    </form>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores/appStore.js'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const store = useAppStore();
const router = useRouter();

const username = ref('');
const email = ref('');
const pass = ref('');
const errors = ref({
  username: false,
  email: false,
  pass: false,
})
const pending = ref(false);

const handleSubmit = () => {
  pending.value = true;
  if (!username.value.trim()) {
    errors.value.username = true;
  }
  if (!email.value.trim()) {
    errors.value.email = true;
  }
  if (!pass.value.trim()) {
    errors.value.pass = true;
  }

  if (errors.value.username || errors.value.email || errors.value.pass) {
    pending.value = false
    return;
  }

  store.setStore('user', {
    name: username.value,
    email: email.value,
    password: pass.value,
  });

  setTimeout(() => {
    pending.value = false
  }, 300);
  router.push('/services');

}

const handleInput = (field) => {
  errors.value[field] = false;
  pending.value = false;
};

onMounted(() => {
  if (store.user) {
    router.push('/services')
  }
})
</script>

