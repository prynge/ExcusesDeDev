<script setup lang="ts">
import router from "@/router";
const plugin = document.createElement("script");
plugin.setAttribute("src", "https://tenor.com/embed.js");
plugin.async = true;
document.head.appendChild(plugin);

setTimeout(() => {
  router.push("/");
}, 5000);
</script>

<template>
  <div class="text-center">
    <div
      class="tenor-gif-embed"
      data-postid="16985508"
      data-share-method="host"
      data-aspect-ratio="2"
      data-width="100%"
    >
      <a
        href="https://tenor.com/view/john-travolta-where-am-i-lost-confused-huh-gif-16985508"
        >John Travolta Where Am I GIF</a
      >from
      <a href="https://tenor.com/search/john+travolta-gifs"
        >John Travolta GIFs</a
      >
    </div>
    <h1 class="green">I'm lost</h1>
    <router-link to="home">Retourner à l'accueil</router-link>
  </div>
</template>

<style scoped>
.main {
  display: block;
  background-color: aqua;
  margin: auto;
}
</style>
