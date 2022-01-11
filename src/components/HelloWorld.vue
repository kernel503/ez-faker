<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="buttons">
    <button class="button is-primary">Primary</button>
    <button class="button is-link" @click="count++">
      count is: {{ count }}
    </button>
    <h1>{{ msg }}</h1>
  </div>

  <div class="buttons">
    <button class="button is-info">Info</button>
    <button class="button is-success">Success</button>
    <button class="button is-warning">Warning</button>
    <button class="button is-danger">Danger</button>
  </div>
</template>

<style scoped>
</style>
