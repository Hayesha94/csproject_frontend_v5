import follows from '@/services/Follows.js';

export const namespaced = true;

export const state = {
  follows: [],
}

export const getters = {
  follows(state) {
    if (state.follows) {
      return state.follows;
    }
  }
}

export const mutations = {
  SET_FOLLOW(state, payload) {
    state.follows.unshift(payload[0]);
  },

  SET_FOLLOWS(state, payload) {
    state.follows = payload;
  },
}

export const actions = {
  add_follow({commit}, payload) {
    return follows.follows(payload)
      .then( response => {
        commit('SET_FOLLOW', response.data);
        console.log(response.data);
        this.dispatch('Snackbar/set_snackbar', {
          text: `You are now following ${response.data[0].fname} ${response.data[0].lname}`,
          color: 'success',
        });
      })
      .catch( error => {
        this.dispatch('Snackbar/set_snackbar', {
          text: error,
          color: 'error',
        });
    });
  },

  get_follows_by_id({commit}, payload) {
    return follows.getFollowsById(payload)
      .then( response => {
        commit('SET_FOLLOWS', response.data);
    });
  }
}