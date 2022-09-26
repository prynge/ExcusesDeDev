<script setup lang="ts">
import { ref } from "vue";
import excusesService from "@/services/excuses.service";
import { useRouter } from "vue-router";
const message = ref("");
const router = useRouter();
function getMessage(code: number) {
  console.log(code);

  excusesService.get(code).then((response: any) => {
    if (!response.data.http_code) {
      router.push({ name: "NotFound" });
    }
    message.value = response.data.message;
  });
}

getMessage(parseInt(router.currentRoute.value.params.http_code as string));
</script>

<template>
  <div class="text-center">
    <h1 class="green">Ma super application</h1>
    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
.main {
  display: block;
  background-color: aqua;
  margin: auto;
}
</style>
