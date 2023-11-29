<template>
  <div class="flex flex-col container mx-auto p-4 gap-10">
    <!--Header-->
    <div class="flex justify-between">
      <!--Menu-->
      <div class="flex gap-4">
        <router-link class="text-blue-500 dark:text-blue-400 hover:underline" to="/">Home</router-link>
        <router-link class="text-blue-500 dark:text-blue-400 hover:underline" to="/about">About</router-link>
        <router-link v-if="auth.username" class="text-blue-500 dark:text-blue-400 hover:underline" to="/restricted">Restricted Page</router-link>
        <p v-else @click="showAlert" class="cursor-pointer text-blue-500 dark:text-blue-400 hover:underline">Restricted Page</p>
      </div>
      <!--Authenticated User-->
      <div class="flex gap-2 items-center">
        <p v-if="auth.username" class="text-gray-600 dark:text-white">{{ auth.username }}</p>
        <div v-if="auth.username">
          <button class="bg-red-500 text-white py-1 px-3 rounded" @click="onLogout">Logout</button>
        </div>
        <div v-else>
          <router-link class="bg-blue-500 text-white py-1 px-3 rounded" to="/login">Login</router-link>
        </div>
      </div>
    </div>
    <!--Body-->
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

// access the `store` variable anywhere in the component ✨
const auth = useAuthStore();
const router = useRouter();

const onLogout = () => {
  auth.logout();
  router.push("/login");
};

const showAlert = () => {
  alert("Anda harus login untuk mengakses halaman ini!"); // Menampilkan alert
};
</script>

<style scoped>
/* Style tambahan sesuai kebutuhan */
</style>
