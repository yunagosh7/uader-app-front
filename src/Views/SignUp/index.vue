<script setup lang="ts">
import { useAuthStore } from '../../stores/AuthStore';
import UaderLogo from '../../components/Icons/UaderLogo.vue';
import { ref } from 'vue'
import type { User } from '../../types/User';


type FormErrors = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}


// stores
const authStore = useAuthStore()

// states
const firstName = ref("")
const lastName = ref("")
const email = ref("")
const password = ref("")
const errors = ref<FormErrors>({
  email: "",
  firstName: "",
  lastName: "",
  password: ""
})

const handleSubmit = (event: Event) => {
  event.preventDefault();
  resetErrorsState()
  console.log({ firstName: firstName.value })
  validateFields()
  const user: User = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value
  }
  authStore.registerUser(user)
  
};

const resetErrorsState = () => {

  errors.value = {
    email: "",
    firstName: "",
    lastName: "",
    password: ""
  }
}

const validateFields = () => {

  if (!firstName.value.trim()) {
    errors.value.firstName = "Este campo es requerido"
  }

  if (!lastName.value.trim()) {
    errors.value.lastName = "Este campo es requerido"
  }
  if (!email.value.trim()) {
    errors.value.email = "Este campo es requerido"
  }
  if (!password.value.trim()) {
    errors.value.password = "Este campo es requerido"
  }
  if (!firstName.value.trim()) {
    errors.value.firstName = "Este campo es requerido"
  }
  if (!firstName.value.trim()) {
    errors.value.firstName = "Este campo es requerido"
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email.value)) {
    errors.value.email = "El email no es válido"
  }
}
</script>


<template>

  <div class="container">
    <div class="sign-up-container">
      <UaderLogo />
      <h1 class="title">Crea tu cuenta</h1>
      <form @submit="handleSubmit" class="form">
        <div class="name-input-container">
          <div class="input-container">
            <label for="first-name">Nombre/s</label>
            <span class="error-message">{{ errors.firstName }}</span>
            <input v-model="firstName" class="input" type="text" id="first-name">
          </div>
          <div class="input-container">
            <label for="last-name">Apellido/s</label>
            <span class="error-message">{{errors.lastName}}</span>
            <input v-model="lastName" class="input" type="text" id="last-name">
          </div>
        </div>

        <div class="input-container">
          <label for="email">Email</label>
          <span class="error-message">{{errors.email}}</span>
          <input v-model="email" class="input" type="email" id="email">
        </div>

        <div class="input-container">
          <label for="password">Contraseña</label>
          <span class="error-message">{{errors.password}}</span>
          <input v-model="password" class="input" type="password" id="password">
        </div>
        <button class="contained">Registrarse</button>
      </form>
        <RouterLink to="/login" :class="'outlined login-btn'">Inicar sesión</RouterLink>
      </div>
  </div>
</template>

<style scoped>
  .container {
    padding-top: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100dvh;
    width: 100dvw;
    max-width: unset;
  }

  .sign-up-container {
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .name-input-container {
    display: flex;
    gap: 3rem;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .input-container {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .title {
    margin-top: 64px;
    margin-bottom: 32px;
    font-size: 2rem;
    font-weight: 600;
  }

  button {
    width: 320px;
    padding: 1.25rem;
  }

  .input {
    background: #E3E3E3;
    padding: 1rem;
    width: 100%;
    outline: none;
    border: none;
    border-radius: .25rem;
    font-size: 1rem;
    font-weight: 500;
  }

  .input.error {
    border: 3px solid rgb(204, 82, 82);
  }

  label {
    font-weight: bold;
    font-size: 1rem;
  }
  .login-btn {
    margin-top: 20px;
    text-decoration: none;
    width: 320px;
  }

  .error-message {
    position: absolute;
    right: 0;
    color: var(--red);
  }
</style>
