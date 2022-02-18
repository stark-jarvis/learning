<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    |
    <router-link to="/room">Go to RoomPage</router-link>
  </p>
  
  <button class="btn" type="button" @click="state.count++">
    count is: {{ state.count }}
  </button>
</template>

<script setup>
// import { defineProps, reactive } from 'vue'
import { reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style lang="scss" scoped>
.btn {
    padding: 5px 10px;
    cursor: pointer;
}
</style>
