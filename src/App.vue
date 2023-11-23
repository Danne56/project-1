<script setup lang="ts">
//Testing
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

<template>
  <div class="flex flex-col container mx-auto p-4 gap-10">
    <!--Header-->
    <div class="flex justify-between">
      <!--Menu-->
      <div class="flex gap-4">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link v-if="auth.username" to="/restricted"
          >Restricted Page</router-link
        >
        <p v-else @click="showAlert">Restricted Page</p>
      </div>
      <!--Authenticated User-->
      <div class="flex gap-2 items-center">
        <p v-if="auth.username">{{ auth.username }}</p>
        <div v-if="auth.username">
          <button
            class="bg-red-500 text-white py-1 px=3"
            to="/login"
            @click="onLogout()"
          >
            Logout
          </button>
        </div>

        <div v-else>
          <router-link class="bg-blue-500 text-white py-1 px-3" to="/login"
            >Login</router-link
          >
        </div>
      </div>
    </div>
    <!--Body-->
    <router-view></router-view>
  </div>
</template>
