import auth from '@/services/Auth.js';

export const namespaced = true;

export const state = {
    user: null,
    loggedIn: false,
}

export const getters = {
  loggedIn(state) {
    return state.loggedIn;
  },

  user(state) {
    if (state.user) {
      return state.user;
    }
  },

  role(state) {
    if (state.user) {
      return state.user.role;
    }
  },

  fullName(state) {
    if (state.user.fname && state.user.lname) {
      return state.user.fname + ' ' + state.user.lname;
    }
  },

  userName(state) {
    if (state.user.username) {
      return state.user.username;
    }
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
        return true;
      })
      .catch( error => {
        console.log('[!] logout_user: ', error.response);
        return false;
    })
  }
}