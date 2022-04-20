import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/pages/home.vue";
import HowToUse from "../components/board.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/howtouse",
    name: "HowToUse",
    component: HowToUse
  }
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes
});

export default router;
