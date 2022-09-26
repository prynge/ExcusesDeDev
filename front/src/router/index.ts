import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

// import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/lost",
    name: "lost",
    component: () => import("../views/LostView.vue"),
  },
  {
    path: "/:http_code(\\d+)",
    name: "code",
    component: () => import("../views/CodeView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
