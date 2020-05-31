import auth from '@/services/Auth.js';

export const namespaced = true;

export const state = {
    user: null,
    loggedIn: false,
}

export const getters = {
  loggedIn(state) {
    return state.loggedIn;
  }
}

export const mutations = {
    SET_AUTH_USER(state, data) {
      state.user = data;
      localStorage.setItem('auth', JSON.stringify(data));
      state.loggedIn = !!localStorage.getItem('auth');
    },

    REMOVE_AUTH_USER(state) {
      state.user = null;
      localStorage.removeItem('auth');
      state.loggedIn = !!localStorage.getItem('auth');
    },
}

export const actions = {
  login_user( {commit}, data) {
    return auth.login(data)
      .then( response => {
        console.log('[*] login_user: ', response.data);
        commit('SET_AUTH_USER', response.data);
        return true;
      })
      .catch( error => {
        console.log('[!] login_user: ', error);
        return false;
    });
  },

  logout_user( {commit}) {
    return auth.logout()
      .then( () => {
        console.log('[*] logout_user');
        commit('REMOVE_AUTH_USER');
      })
      .catch( error => {
        console.log('[!] logout_user: ', error.response);
    })
  }
}