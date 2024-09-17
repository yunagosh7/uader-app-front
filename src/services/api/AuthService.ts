import type { User } from '@/types/User'
import axios from '../index.ts'

async function signUp(user: User) {
  const res = await axios.post('/users/signup', user)
  return res.data;
}

export const AuthService = {
  signUp,
}