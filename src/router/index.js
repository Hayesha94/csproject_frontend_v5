import Vue from "vue";
import VueRouter from "vue-router";

import WelcomePage from '@/views/WelcomePage.vue';

// SPA auth
import RegistrationPage from '@/views/auth/Registration.vue'
import LoginPage from '@/views/auth/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "welcome-page",
    component: WelcomePage,
  },
  {
    path: "/register",
    name: "registration-page",
    component: RegistrationPage,
  },
  {
    path: "/login",
    name: "login-page",
    component: LoginPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
