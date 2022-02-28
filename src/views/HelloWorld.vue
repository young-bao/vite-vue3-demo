<template>
  <div @click="addition">计数器的功能：{{ counter }}</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const counter = ref<number>(0);
const addition = () => {
  counter.value++;
};
</script>

<style scoped></style>
