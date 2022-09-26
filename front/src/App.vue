<script setup lang="ts">
import type { Excuse } from "./types/excuse";
import excusesService from "./services/excuses.service";
import { useRouter } from "vue-router";
import { ref } from "vue";

// import HomeView from "./views/HomeView.vue";
let submitted = ref(false);
let excuse = ref({} as Excuse);
const router = useRouter();
function saveExcuse() {
  const newExcuse = excuse.value;
  excusesService.create(newExcuse).then((response: any) => {
    if (response.data.http_code == newExcuse.http_code) {
      submitted.value = true;
      // router.push({
      //   name: "code",
      //   params: { http_code: response.data.http_code },
      // });
    }
  });
}

function newExcuse() {
  submitted.value = false;
  excuse.value = {} as Excuse;
}
</script>

<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Excuse de Dev</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/lost" class="nav-link">Je suis perdu</router-link>
        </li>
        <li class="nav-item">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Ajouter
          </button>
        </li>
      </div>
    </nav>

    <div
      class="container h-100 mt-3 d-flex align-item-center justify-content-center"
    >
      <div class="h-25 w-25 bg-info p-5">
        <router-view />
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ajouter un message</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="submit-form">
            <div v-if="!submitted">
              <div class="form-group">
                <label for="http_code">Http_code</label>
                <input
                  type="number"
                  class="form-control"
                  id="http_code"
                  required
                  v-model="excuse.http_code"
                  name="http_code"
                />
              </div>

              <div class="form-group">
                <label for="tag">Tag</label>
                <input
                  class="form-control"
                  id="tag"
                  required
                  v-model="excuse.tag"
                  name="tag"
                />
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <input
                  class="form-control"
                  id="message"
                  required
                  v-model="excuse.message"
                  name="message"
                />
              </div>
            </div>

            <div v-else>
              <h4>Succès!</h4>
              <button class="btn btn-success" @click="newExcuse">Add</button>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="saveExcuse">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
