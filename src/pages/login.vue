<template>
  <div class="flex items-center justify-center h-96">
    <div class="bg-white dark:bg-slate-800 p-8 rounded shadow-inner w-96">
      <h1 class="text-slate-900 dark:text-white text-2xl font-semibold mb-1">Welcome Back!</h1>
      <h3 class="text-slate-500 dark:text-slate-400 text mb-6">Please login with your account.</h3>
      <div class="flex flex-col gap-4">
        <input
          type="text"
          required
          v-model="username"
          class="bg-white dark:bg-slate-900 border dark:border-none dark:focus:outline-none p-2"
          placeholder="Username"
        />
        <input
          type="password"
          required
          v-model="password"
          class="bg-white dark:bg-slate-900 border dark:border-none dark:focus:outline-none p-2 rounded"
          placeholder="Password"
        />
        <button
          @click="onLogin"
          class="bg-blue-500 dark:bg-blue-400 text-white py-2 px-4 rounded font-semibold hover:bg-blue-700 dark:hover:bg-blue-500"
        >
          LOGIN
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import axios from "axios";

const auth = useAuthStore();
const username = ref("");
const password = ref("");
const router = useRouter();

const onLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        username: username.value,
        password: password.value,
      });

      console.log(response)

      if (response.data.status === 'success') {
        auth.login(username.value);
        router.push('/');
      } else {
        window.alert('Username atau password salah');
      }
    } catch (error) {
      console.error('Error during login:', error);
      window.alert('Terjadi kesalahan saat melakukan login');
    }
  };
</script>
