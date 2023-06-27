import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutViewVue from "../views/AboutView.vue";
import StudentView from "../views/Students/View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/home",
      name: "home-alt",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutViewVue,
    },
    {
      path: "/students",
      name:"student",
      component: StudentView
    }
  ],
});

export default router;
