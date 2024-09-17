import { defineStore } from "pinia";
import axios from '../services/index'
import type { User } from "../types/User";
import { AuthService } from "../services/api/AuthService";



export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null
  }),
  actions: {
    async registerUser(user: User) {
      try {
        AuthService.signUp(user)
      } catch (er) {
        console.error("error signing up", er)
      }
    }
  }

})