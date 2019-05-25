import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const About = () => {
  return import("./views/About.vue");
};

const Users = () => {
  return import("./views/Users.vue");
};

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/users/:id",
      name: "users",
      component: Users
    }
  ]
});
