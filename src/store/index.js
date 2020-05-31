import Vue from "vue";
import Vuex from "vuex";

// auth
import * as Register from '@/store/auth/Registration.js';
import * as Login from '@/store/auth/Login.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Register,
    Login,
  }
});


/* boilerplate code for store */
/* export const namespaced = true;

export const state = {
    //
}

export const getters = {
    //
}

export const mutations = {
    //
}

export const actions = {
    //
} */