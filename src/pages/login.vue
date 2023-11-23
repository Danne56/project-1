<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

// access the `store` variable anywhere in the component ✨
const auth = useAuthStore();
const username = ref("");
const router = useRouter();

const onLogin = () => {
  auth.login(username.value);
  router.push("/");
};
</script>

<template>
  <div>
    <h1>Login Page</h1>
    <div class="flex flex-col gap-2">
      <input type="text" v-model="username" class="border" />
      <button @click="onLogin()" class="bg-blue-500 text-white py-1 px-3">
        Login
      </button>
    </div>
  </div>
</template>
