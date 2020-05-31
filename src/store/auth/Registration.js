import auth from '@/services/Auth.js';

export const namespaced = true;

export const state = {
  reg_success: false,
}

export const getters = {
  //
}

export const mutations = {
  SET_SUCCESS(state) {
    state.reg_success = true;
  }
}

export const actions = {
  register_user({commit}, data) {
    return auth.register(data)
      .then( response => {
        console.log('[*] register_user then', response.data)
        commit('SET_SUCCESS')
        return true
      })
      .catch( error => {
        console.log('[!] register_user error', error.response)
        return false
    });
  }
}