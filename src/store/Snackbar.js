export const namespaced = true;

export const state = {
  snackbar: [],
}

export const getters = {
  snackbar(state) {
    if (state.snackbar) {
      return state.snackbar;
    }
  }
}

export const mutations = {
  SET_SNACKBAR(state, payload) {
    state.snackbar = state.snackbar.concat(payload);
  }
}

export const actions = {
  set_snackbar({commit}, snackbar) {
    snackbar.showing = true;
    commit('SET_SNACKBAR', snackbar);
  }
}