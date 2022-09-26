<script lang="ts">
import type { Excuse } from "../types/excuse";
import excuseService from "../services/excuses.service";
export default {
  emits: ["generate"],
  data() {
    return {
      excuse: {} as Excuse,
      showLoader: false,
    };
  },
  created() {
    this.getExcuse();
  },
  watch: {
    excuse: function (excuse: Excuse) {
      if (!excuse.http_code) {
        return;
      }
      this.$emit("generate", excuse.message);
    },
  },
  methods: {
    getExcuse(http_code?: number) {
      this.showLoader = false;
      if (http_code !== undefined) {
        excuseService.getRandom(http_code).then((response: any) => {
          this.excuse = response.data;
        });
      } else {
        excuseService.getRandom().then((response: any) => {
          this.excuse = response.data;
        });
      }
    },
    onGenerate() {
      this.showLoader = true;
      setTimeout(() => {
        this.getExcuse(this.excuse.http_code);
      }, 5000);
    },
  },
};
</script>

<template>
  <button v-if="showLoader" class="btn btn-primary" type="button" disabled>
    <span
      class="spinner-border spinner-border-sm"
      role="status"
      aria-hidden="true"
    ></span>
  </button>

  <button v-else type="button" class="btn btn-primary" v-on:click="onGenerate">
    Bouton
  </button>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
