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
    meta: { }
  },
  {
    path: "/register",
    name: "registration-page",
    component: RegistrationPage,
    meta: { guestOnly: true},
  },
  {
    path: "/login",
    name: "login-page",
    component: LoginPage,
    meta: { guestOnly: true}
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

function isLoggedIn() {
  return !!localStorage.getItem('auth');
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authOnly)) {
    if (!isLoggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.guestOnly)) {
    if (isLoggedIn()) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router;
