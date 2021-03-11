import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/survey1",
    name: "Survey1",
    component: () => import("../views/Survey1"),
  },
  {
    path: "/survey2",
    name: "Survey2",
    component: () => import("../views/Survey2"),
  },
  {
    path: "/results",
    name: "Results",
    component: () => import("../views/Result"),
    props: (route) => ({
      ...route.params
    })
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


export default router;
