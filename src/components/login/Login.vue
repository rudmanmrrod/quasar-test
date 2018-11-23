<template>
  <q-layout>
    <q-input 
      v-model="username" 
      name="username"
      float-label="Username" 
      placeholder="username"
      v-validate="'required'"
    />
    <q-errors :errors="errors.collect('username')"/>
    <q-input 
      v-model="password"
      name="password" 
      type="password" 
      float-label="Password" 
      placeholder="password"
      v-validate="'required|min:8'"
      :error-messages="errors.collect('password')"
    />
    <q-errors :errors="errors.collect('password')"/>
    <q-btn 
      class="full-width q-mt-xl" 
      label="Login" 
      color="primary"
      @click="login"
    />
  </q-layout>
</template>
<script src="./Login.js"></script>
