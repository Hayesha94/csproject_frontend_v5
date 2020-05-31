import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  created() {
    const userString = localStorage.getItem('auth')
    if (userString) {
      const userData = JSON.parse(userString)
      this.$store.commit('Login/SET_AUTH_USER', userData)
    }
  },
  render: h => h(App)
}).$mount("#app");
