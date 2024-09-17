<script setup>
import { ref, isRef, toRef } from 'vue';
defineProps({
  // field
  fieldRef: {
    type: [Object, String], // Puede ser un ref o un string
    required: true
  },
  fieldName: {
    type: String,
    required: true
  },
  inputType: {
    type: String,
    default: "text"
  },
  label: String
})



const hanldeChange = (event) => {

  console.log("hola")
}

</script>

<template>

  <div class="input-container">
    <label for="first-name">{{ label }}</label>
    <input  v-on:change="handleChange" v-bind="fieldRef" :type="inputType" id="first-name">  </div>

</template>

<style>
input {
  background: #E3E3E3;
  padding: 1rem;
  width: 100%;
  outline: none;
  border: none;
  border-radius: .25rem;
  font-size: 1rem;
  font-weight: 500;
}

label {
  font-weight: bold;
  font-size: 1rem;
}
</style>