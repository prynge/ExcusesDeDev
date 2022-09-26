<script setup lang="ts">
import { ref } from "vue";
import Generator from "../components/GeneratorComponent.vue";
const message = ref("");
function onGenerate(event: string) {
  message.value = event;
}
</script>

<template>
  <div class="text-center">
    <h1 class="green">Ma super application</h1>
    <p>{{ message }}</p>
    <Generator @generate="onGenerate" />
  </div>
</template>

<style scoped>
.main {
  display: block;
  background-color: aqua;
  margin: auto;
}
</style>
