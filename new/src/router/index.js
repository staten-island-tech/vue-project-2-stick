import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Create from "../views/Create.vue";
import Blog from "../views/blog.vue";
import BlogView from "../views/blogView.vue";
import MyRecipe from "../views/MyRecipe.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    /* component: function () {
      return import(/* webpackChunkName: "about" "../views/About.vue");
    }, */
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/blogView",
    name: "BlogView",
    component: BlogView,
  },
  {
    path: "/MyRecipe",
    name: "MyRecipe",
    component: MyRecipe,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
