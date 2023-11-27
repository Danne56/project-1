import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const username = ref("");
  const login = (name: string) => {
    username.value = name;
  };

  const logout = () => {
    username.value = "";
  };

  return { username, login, logout };
});
